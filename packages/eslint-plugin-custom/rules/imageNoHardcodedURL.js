// @ts-check

const { elementType, hasProp, getPropValue, getProp } = require("jsx-ast-utils");

const imageNoHardcodedURL = (context) => {
    const MEDIA_ELEMENTS = ["img", "LazyImage"];
    return {
        JSXOpeningElement: (node) => {
            const tagName = elementType(node);
            if (!MEDIA_ELEMENTS.includes(tagName)) return;

            const src = hasProp(node.attributes, "src");
            if (src === true) {
                const prop = getProp(node.attributes, "src", true);
                const val = getPropValue(prop);

                if ((/^http(.+?)cloudfront\.net/gi).test(val)) {
                    const isStaticImage = /staticimages/gi.test(val);
                    const exp = isStaticImage ? /^http(.+?)StaticImages/gi : /^http(.+?)cloudfront\.net/gi;
                    const matches = val.match(exp);
                    if (matches === null) return;

                    const { start, end } = prop;
                    const varName = isStaticImage ? "STATIC_IMG_DIR" : "CDN_URL";
                    const newValue = val.replace(matches[0], `\${${varName}}`);

                    context.report({
                        node,
                        message: `Hardcoded Cloudfront URL found. Replace "" with ${varName} variable.`,
                        fix(fixer) {
                            return fixer.replaceTextRange([start, end], `src={\`${newValue}\`}`);
                        }
                    });
                }
            }
        },
    };
};
module.exports = { imageNoHardcodedURL };

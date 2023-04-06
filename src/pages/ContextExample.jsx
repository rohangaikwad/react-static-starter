import { useContext } from "react";
import { CommonContext, CommonContextProvider } from "~/contexts/CommonCtx";

const ContextExample = () => {
    const { name, setName } = useContext(CommonContext);
    console.log(name);

    return (
        <>
            <h1>Context Demo</h1>
            <h2>Hello {name}</h2>
            <label htmlFor="name">
                Set Name
                <input
                    aria-label="Set Name"
                    id="name"
                    type="text"
                    defaultValue={name}
                    onChange={(evt) => {
                        setName(evt.target.value);
                    }}
                />
            </label>
        </>
    );
};

const ContextContainer = () => (
    <CommonContextProvider>
        <ContextExample />
    </CommonContextProvider>
);

export default ContextContainer;

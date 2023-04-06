import Store from "~/store";

const StoreExample = () => {
    const [name, setName] = Store.useStore((store) => store.name);

    return (
        <>
            <h1>Store Demo</h1>
            <h2>Hello {name}</h2>
            <label htmlFor="name">
                Set Name
                <input
                    aria-label="Set Name"
                    id="name"
                    type="text"
                    defaultValue={name}
                    onChange={(evt) => {
                        setName({ name: evt.target.value });
                    }}
                />
            </label>
        </>
    );
};

export default StoreExample;

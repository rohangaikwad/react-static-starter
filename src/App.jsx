import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";
import Store from "./store";
import "./scss/styles.scss";

const App = () => (
    <Store.Provider>
        <BrowserRouter>
            <RoutesComponent />
        </BrowserRouter>
    </Store.Provider>
);

export default App;

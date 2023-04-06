import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <b>Header</b>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test">Lazy</Link></li>
                <li><Link to="/context">Context</Link></li>
                <li><Link to="/store">Store</Link></li>
            </ul>
        </header>
    );
}

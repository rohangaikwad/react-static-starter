import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function StandardLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <div id="sticky-footer-helper" />
            <Footer />
        </>
    );
}

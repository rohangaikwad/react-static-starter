import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import StandardLayout from "~/layouts/standard";
import Home from "~/pages/Home";
import ContextExample from "~/pages/ContextExample";
import StoreExample from "~/pages/StoreExample";
import Error from "./pages/Error";

const Test = React.lazy(() => import("~/pages/Test"));
// const ShippingAddress = React.lazy(() => import("~/pages/myAddresses"));

const LazyComponent = ({ Element, fallback = <>...</>, isProtected = false }) => {
    const location = useLocation();
    return (
        <React.Suspense fallback={fallback}>
            {isProtected
                ? <ProtectedComponent Element={Element} redirectPath={`/login?returnurl=${location.pathname}`} />
                : <Element />}
        </React.Suspense>
    );
};

const ProtectedComponent = ({ Element, redirectPath = "/" }) => (
    1 === 2
        ? <Navigate to={redirectPath} />
        : <Element />
);

const RoutesComponent = () => {
    const location = useLocation();
    // const navigate = useNavigate();

    useEffect(() => {
        console.log("Navigated to", location);
        // navigate("location.pathname", { state: { test: false } });
    }, [location]);

    return (
        <Routes>
            <Route element={<StandardLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<LazyComponent Element={Test} />} />
                <Route path="/context" element={<ContextExample />} />
                <Route path="/store" element={<StoreExample />} />
                <Route path="/*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default RoutesComponent;

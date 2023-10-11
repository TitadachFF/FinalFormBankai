import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const Layout = () => {
    return (
        <AuthProvider>
            <Navbar />
            <div className="App">
                <Outlet />
            </div>
        </AuthProvider>
    )
}

export default Layout;
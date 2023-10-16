import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


const AdminRoute = ({ children }) => {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/signin" />
    }
    if(!user.roles.includes("ROLES_ADMIN")) return <Navigate to="/notallow"/>;
    return children;
}
export default AdminRoute;
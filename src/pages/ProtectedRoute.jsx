import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute =({chidren}) =>{
    const {user} = useAuthContext();
    if(!user){
        return <Navigate to ="/signin"/>
    }
    return chidren
}
export default ProtectedRoute;
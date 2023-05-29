import { Route } from "react-router-dom"
import { useSelector } from "react-redux"
import { Navigate} from "react-router-dom"
export default function PrivateContacts({ children }) {
    const isLoggedIn = useSelector(state => state.Person.isLoggedIn)
    return isLoggedIn ? children : <Navigate to="/login" />;
}
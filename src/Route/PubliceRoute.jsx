import { useSelector } from "react-redux"
import { Navigate, Route} from "react-router-dom"
export const PublicRoute = ({ children, restricted=false, ...routeProps }) => {
    const isLoggedIn = useSelector(state => state.Person.isLoggedIn)
    const shouldRedirect = isLoggedIn && restricted;


    return shouldRedirect?<Navigate to="/"/>:children 
}
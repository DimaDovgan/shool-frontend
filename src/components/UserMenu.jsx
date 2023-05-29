import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {logOut} from "../redux/Acions/ActionForLogin"
export const UserMenu = () => {
    const dispatch = useDispatch();
    
    const email = useSelector(state => state.Person.user.email)
    return <div className="nav justify-content-end">
        <h4 className="px-2">Вітання {email}</h4>
        <button type="button" onClick={()=>dispatch(logOut())} className="btn btn-outline-danger  ">Logout</button>
        {/* <button  type="button" onClick={()=>dispatch(logOut())} >Logout</button> */}
    </div>
}
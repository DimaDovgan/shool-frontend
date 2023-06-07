import {ContactList}   from "./person-list/Person-list"
import {Filter}  from "./Filter"
import {FormLeson}  from "./Forma"
import { useEffect } from "react"
import { readingHost } from "../redux/Acions/Actions"
import { useDispatch } from "react-redux/es/exports"
import "./style.css"
export const PhoneBook = () => {
     const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readingHost());

    },[dispatch])

    return <div className=" container-fluid  d-flex justify-content-around  bg-warning bg-opacity-25 pt-5 pb-5 hero_container" >
        <div className="d-block">
        <h1>Створи свій урок</h1>
            <FormLeson />
            </div>
        <div className="d-block ">
        <h2 className="">Уроки</h2>
        <Filter />
            <ContactList />
            </div>
    </div>

}

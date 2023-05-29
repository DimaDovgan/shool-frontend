import { PersonlistItem } from "./Person-list-item"
import {delateContact } from '../../redux/Acions/Actions'
import { useSelector} from "react-redux";
export const ContactList = () => {
    const item = useSelector(state => {
        let filterArr = state.shool.lesons;
        console.log("filterArr contact list",filterArr);
        return filterArr.filter(leson => leson.title.toLocaleLowerCase().includes(state.shool.filter.toLocaleLowerCase()))
    })

     return <ul className = "list-inline ">{item.map(({ title, lesonLink, _id,teacher }) => <PersonlistItem key={_id} title={title} teacher={teacher}  id={_id} deleteContact={delateContact} lesonLink={lesonLink}/>)}</ul> 
}


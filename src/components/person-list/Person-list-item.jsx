import PropTypes from "prop-types";
import styles from "./lesonsList.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import{Button } from "react-bootstrap"
export const PersonlistItem = ({ title,teacher, id, deleteContact,lesonLink }) => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const deleteContactValue = () => {
        console.log("delate id:",id)
        dispatch(deleteContact(id))
    }
    
    const goToDetails=()=>{
        navigation(`/lesonDetails/${id}`);
    }
    console.log("ticher",teacher)
  
    return <li className="mt-3 lesonsLi" key={id}> {title} : {teacher} 
    <Button variant="outline-danger" onClick={deleteContactValue} className="infoLesonBtn">Delete</Button>
    <a href={lesonLink} target="_blank" rel="noopener noreferrer" className="joinButton" >join</a> 
    <Button variant="info" onClick={goToDetails} className="infoLesonBtn">Info</Button>
    
    </li>
}

PersonlistItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    
}
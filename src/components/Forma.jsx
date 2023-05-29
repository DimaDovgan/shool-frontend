import { useState} from "react"
import styles from "./style-phonebook.module.css";
import "./formaStyle.css";
import { addItems } from "../redux/Acions/Actions";
import { useDispatch } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';

export const FormLeson = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [teacher, setTeacher] = useState("");
    const [lesonLink, setLesonLink] = useState("");

    const hendelChange = (event) => {
        const keyObject = event.currentTarget.name
        switch (keyObject) {
        case 'title':
          setTitle(event.currentTarget.value)
    break;
        case 'teacher':
          setTeacher(event.currentTarget.value)
    break;
    case 'lesonLink':
          setLesonLink(event.currentTarget.value)
    break;
    default:
    console.log("error");
        }  
    }

    const addPerson = (event) => {
        event.preventDefault();
        dispatch(addItems({ title,teacher,lesonLink }));
        formReset();
        
    }
    const formReset = () => {
      setTitle("");
      setTeacher("");
      setLesonLink("");
    }
    
    return <Form className=" form-floating mb-3 " onSubmit={addPerson} >
  <div className=" pl-10 col-auto mt-3">
    <label  className="form-label">Leson Title :  </label>
            <input name="title"
      
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
     required
       value={title}
              onChange={hendelChange}/>
        </div>
    <div className="col-auto mt-3">
    <label  className="form-label">Teacher name :  </label>
            <input name="teacher"
       value={teacher}
      onChange={hendelChange}/>
    </div>
    <div className="col-auto mt-3">
    <label  className="form-label">Leson link :  </label>
            <input name="lesonLink"
       value={lesonLink}
      onChange={hendelChange}/>
    </div>
  
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3 mt-3">add leson</button>
  </div>
</Form>
    }

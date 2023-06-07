import { useState } from "react"
import { useDispatch } from "react-redux";
import { registration } from "../redux/Acions/ActionForLogin"
import {Form,Button} from "react-bootstrap"
import cogoToast from 'cogo-toast';
var validator = require("email-validator");
export const RegistarationForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHeandelChange = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
  case "name":
                setName(value);
    break;
  case "email":
                setEmail(value);
                break;
  case "password":
                setPassword(value);
    break;
  default:
    console.log(`Sorry, we are out of ${name}.`);
        }
        
    }
    const submiteForm = (event) => {
        event.preventDefault();
        if (!validator.validate(`${email}`)) {
            
 
        cogoToast.warn('email validation error!');
            return 
            
        }
        console.log("Submite");
        
            dispatch(registration({name:name,email:email,password:password}));
        setName("");
        setEmail("");
        setPassword("");


        
        
    }

    return <div className="hero_container" ><Form  onSubmit={submiteForm}>
        <div className="mb-3 ">
  <label className="form-label">Name</label>
  <input  className="form-control" value={name} name="name" onChange={onHeandelChange} />
        </div>
        <div className="mb-3">
  <label  className="form-label">Email</label>
  <input className="form-control" value={email} name="email" onChange={onHeandelChange} placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
  <label  className="form-label">Password</label>
  <input className="form-control" value={password} name="password" onChange={onHeandelChange}/>
        </div>
        <Button type="submit" variant="success">Submite</Button>
        
        
    </Form></div>
}
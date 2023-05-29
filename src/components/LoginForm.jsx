import { useState } from "react"
import { useDispatch } from "react-redux/es/exports";
import { login,googleLogin } from "../redux/Acions/ActionForLogin";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
// Client ID   224211115580-o699c46sflftm8473r6e4bv4kpulkpvk.apps.googleusercontent.com
//  Client secret   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

import { gapi } from "gapi-script";
import { useEffect } from "react";
 const clientId="224211115580-o699c46sflftm8473r6e4bv4kpulkpvk";

export const LoginForm = () => {
    const dispatch = useDispatch();

    let location = useLocation();
    useEffect(() => {
      if (location.search.length > 0) {
        const url = location.search;
        const [tokenText, emailText] = url.split('&');
        const token = tokenText.slice(7);
        const email = emailText.slice(6);
        dispatch(googleLogin({ tokenbody: token, email: email }));
        console.log("token",token)
      }
    }, [dispatch, location.search]);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHeandelChange = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
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
        console.log("email",email);
        console.log("submit logins");
        dispatch(login({email:email,password:password}))

        
        
    }
    const onSuccess=(res)=>{
         console.log("LOGIN SUCCESS RES:",res);
    }
    const onFailure=(res)=>{
        console.log("LOGIN Failure RES:",res);
   }
    
   useEffect(()=>{
    function start(){
        gapi.client.init({
            clientId:"224211115580-o699c46sflftm8473r6e4bv4kpulkpvk.apps.googleusercontent.com",
            scope:""
          })
        }
        gapi.load("client:auth2",start)

   })
//   var accessToken=gapi.auth.getToken().access_token;
// console.log(accessToken);
    return <div className="pt-5 pb-5 bg-warning bg-opacity-25 "><Form  onSubmit={submiteForm}>
        <div className="mb-3 ">
  <label className="form-label">Email address</label>
  <input  className="form-control" value={email} name="email" onChange={onHeandelChange} placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
  <label  className="form-label">Password</label>
  <input className="form-control" value={password} name="password" onChange={onHeandelChange}/>
        </div>
        <Button type="submit" variant="success">Submite</Button>
        
    </Form>
    <div>
    <a
              // href="https://team-project-kapusta.herokuapp.com/api/auth/google"
              href="http://localhost:3002/api/users/google"
              
            > Google autorisation</a>
    {/* <GoogleLogin
    clientId="224211115580-o699c46sflftm8473r6e4bv4kpulkpvk.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
  ></GoogleLogin> */}
    </div>
    </div>
}

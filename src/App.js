import './App.css';
import { PhoneBook } from "./components/Phone-book.jsx"
import { Navigate } from "./components/Navigate";
import { LoginForm } from './components/LoginForm'
import { RegistarationForm } from './components/RegistrationForm'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrivateContacts from './Route/PrivateContacts';
import { HomePage } from './components/HomePage';
import { PublicRoute } from "./Route/PubliceRoute.jsx";
import { CurrentAvtorization } from "./redux/Acions/ActionForLogin";
import { LesonDetails } from './components/LesonDetails';
import { Timetable } from './components/Timetable';

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { reduserff } from './redux/redusers/reduser'
import axios from "axios";
import "./components/style.css"


function App() {
  const token = useSelector(state => state.Person.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(CurrentAvtorization(token));
    }
    
  },[dispatch])
  
  return (<>
    <Navigate />
    <Routes>
      <Route exact path='/' element={<HomePage  />} />
        <Route exact path='leson' element={<PrivateContacts ><PhoneBook /></PrivateContacts>} />
        <Route exact path='login' restricted element={ <PublicRoute ><LoginForm/></PublicRoute>}/>
        <Route exact path='register' restricted element={ <PublicRoute ><RegistarationForm/></PublicRoute>}/>
        <Route exact path='lesonDetails/:id' restricted element={<PrivateContacts ><LesonDetails/></PrivateContacts>}/>
        <Route exact path='Timetable' restricted element={<PrivateContacts ><Timetable/></PrivateContacts>}/>
   
    </Routes>
    <div className='footer'>
    <p className='contact_title'>Контакти</p>
    <ul className="contact_list">
            <li className='contact_li'><a href = "mailto: dovgand887@gmail.com"><img src="gmail.png" className="contact_img"/></a></li>
            <li className='contact_li'><a href='https://www.linkedin.com/in/dima-dovhan-71b219246/'><img src="linkidn.png" className="contact_img"/></a></li>
    </ul>
    </div>
  </>
   
  )
}

export default App;

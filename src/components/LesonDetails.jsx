import { useParams } from 'react-router-dom';
import { useSelector} from "react-redux";
import { Form,Button } from 'react-bootstrap'
import { useState} from "react"
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {getLesonById,updateLesonById } from '../redux/Acions/Actions.js';
import FileUpload from "./fileUpload.jsx"
export const LesonDetails = () => {

    const { id } = useParams();
    const [title, setTitle] = useState(null);
        const [teacher, setTeacher] = useState(null);
        const [filesList, setFilesList] = useState([]);
        // const [date, setDate] = useState(null);
        // const [time, setTime] = useState(null);
        const [lesonLink, setLesonLink] = useState(null);
    const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
        dispatch(getLesonById(id)) 
      
    }
    
  },[])

  const user = useSelector(state => state.shool.lesonForCorrection);
  const boolCorr = useSelector(state => state.shool.boolforCorrection);

  useEffect(() => {
    setTitle(user.title);
    setTeacher(user.teacher);
    setFilesList(user.lesonFilesList)
    // setDate(user.date);
    // setTime(user.time);
    setLesonLink(user.lesonLink);
    
  },[user])
    

    const hendelChange = (event) => {
        const keyObject = event.currentTarget.name
        switch (keyObject) {
        case 'title':
          setTitle(event.currentTarget.value)
    break;
        case 'teacher':
          setTeacher(event.currentTarget.value)
    break;
    // case 'date':
    //   setDate(event.currentTarget.value)
    // break;
    // case 'time':
    //       setTime(event.currentTarget.value)
    // break;
    case 'lesonLink':
          setLesonLink(event.currentTarget.value)
    break;
    default:
    console.log("error");
        }  
    }

    const changeLeson=(event)=>{
        event.preventDefault()
        dispatch(updateLesonById({id,title,teacher,lesonLink}))
        console.log("leson Change")
    }
    const downloadFile=async (file)=>{
      // event.preventDefault();
      const data=await fetch(`${file.url}`,{
        method:'GET'
      })
      if(data.status===200){
        const blob=await data.blob()
        const downloadUrl=window.URL.createObjectURL(blob);
        const link=document.createElement('a');
        link.href=downloadUrl;
        link.download=file.title;
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
      console.log(data);
    }
    return <div>{
        boolCorr ? <Form className=" form-floating mb-3 " onSubmit={changeLeson} >
  <div className=" pl-10 col-auto mt-3">
    <label  className="form-label">Leson Title :  </label>
            <input name="title"
      
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
     required
       value={title}
              onChange={hendelChange}

              />
        </div>
    <div className="col-auto mt-3">
    <label  className="form-label">Teacher name :  </label>
            <input name="teacher"
       value={teacher}
       onChange={hendelChange}

      />
    </div>
    <div className="col-auto mt-3">
    <label  className="form-label">Leson link :  </label>
            <input name="lesonLink"
       value={lesonLink}
       onChange={hendelChange}

      />
      </div>
{filesList && 
    <div>
      <p>Files</p>
      <ul>
        {filesList.map(file=><li onClick={()=>downloadFile(file)}>{file.title}  </li>)}

        {/* "https://res.cloudinary.com/dd-com/raw/upload/v1686118161/7906134fd0d3e99fc311828d817fe2a2_zqk83d.pdf" */}

      </ul>

    </div> 
    
    }
   
  
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3 mt-3">update leson</button>
  </div>
</Form>

    : <p>Loading ....</p> }
    <FileUpload/>
     </div>
}
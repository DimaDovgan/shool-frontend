import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { uploadFile } from '../redux/Acions/Actions';
import { useParams } from 'react-router-dom';

const FileUpload =()=>{
  const dispatch = useDispatch();
  const { id } = useParams();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const saveFile = (e) => {
    console.log(e.target.files,"e.target.files")
      setFile(e.target.files[0]);
     setFileName(e.target.files[0].name);
  };

  const uploadFileEvent = async (e) => {

    if (file) {
            const formData = new FormData();
          formData.append('file', file);
        
        console.log(formData);
        dispatch(uploadFile({id,formData,fileName}))

      //   const res=await fetch(`http://localhost:3002/api/leson/${id}/uploadFile`,{
      //   method:'POST',
      //   body:formData,
      // })
      // const data=await res.json();
      // console.log(data)
      //   }
  }}

  //   const uploadFileEvent = async (e) => {
  //     // const file = e.target.files;
  //     // console.log("file",file)
  //     // if (file) {
  //     //   const formData = new FormData();
  //     // formData.append('file', file);
  //     // formData.append('upload_preset', 'ShoolFile');
  //     // formData.append('cloud_name', 'dd-com');
  //     // fetch("https://api.cloudinary.com/v1_1/dd-com/image/upload",{
  //     //   method:"POST",
  //     //   body:formData
  //     // }).then((res)=>res.json())
  //     // .then((data)=>{console.log(data);
  //     // }).catch((err)=>console.log(err))
  //     // try {
  //       // const cloudinariAnsver = await axios.post(
  //       //   'https://api.cloudinary.com/v1_1/dd-com/image/upload',
  //       //   formData,
  //       // );
        
  //       // const ava = await changeAvatar({
  //       //   avatarURL: cloudinariAnsver.data.url,
  //       // });
  //       // dispatch(updateAvatarUser({ AvatarUrl: cloudinariAnsver.data.url }));
  //       // onClick();
  //     } catch (error) {
  //       console.log(error);
  //     }

  // }}

      return (
        <div className="App">
          <input type="file" onChange={saveFile} />
          <button onClick={uploadFileEvent}>Upload</button>
        </div>
      );
}
 
export default FileUpload;





    //     e.preventDefault();

    //     const upload = await cloudinary.v2.uploader.upload(file.path,{ resource_type: "raw" });





    //    const formData= new FormData()
    //    formData.append('file', file);
    //    //formData.append('upload_preset', 'lesonFile');
    //    console.log("Uplouding for data base !!!",file)
    //    //const res=await axios.post(`/api/leson/${id}/uploadFile`,{formData})
    //   // const res=await fetch(`http://localhost:3002/api/leson/${id}/uploadFile`,{
    //   //   method:'POST',
    //   //   body:formData,
    //   // })
    //   // const data=await res.json();
    //   // console.log(data)
    
    //    //     const file =fileF;
    // // if (file) {
    // //   const formData = new FormData();
    // //   formData.append('file', file);
    // //   formData.append('upload_preset', 'lesonFile');
    // //   try {
    // //     const cloudinariAnsver = await axios.post(
    // //       'https://api.cloudinary.com/v1_1/dd-com/image/upload',
    // //       formData,
    // //     );
    // //     // const ava = await changeAvatar({
    // //     //   avatarURL: cloudinariAnsver.data.url,
    // //     // });
    // //     dispatch(uploadFile({id, fileURl: cloudinariAnsver.data.url }));
    // //   } catch (error) {
    // //     console.log(error);
    // //   }
    // //   }
    //       // dispatch(uploadFile({id,formData}))
    
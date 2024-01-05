'use client'
import React, { useState } from 'react'
import axios from 'axios'

const Upload = () => {
  const[file,setFile]=useState(null)
  const[progress,setProgress]=useState({started:false,pc:0})
  const[msg,setMsg]=useState(null)

  const handleUpload=()=>{
    if(!file){
      setMsg('NO file selected')
      return
    }
    const fd=new FormData();
    fd.append('file',file)
    setMsg('...Uploading')
    setProgress(prevState=>{
      return {...prevState,started:true}
    })

    axios.post('http://httpbin.org/post',fd,{
      onUploadProgress:(progressEvent)=>{setProgress(prevState=>{
        return{...prevState,pc:progressEvent.progress*100}
      })},
      headers:{
        "Custom-Header":"value"
      }
    })
    .then(res =>{ 
      setMsg('Uploaded Sucessfully')
      console.log(res.data)})
    .catch(err=>console.log(err))

  }
  return (

    <div>
      <div>
        Uploading files
      </div>
      <div>
        <input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
        <button onClick={handleUpload}>Upload</button>
        {progress.started && <progress max="100" value={progress.pc}></progress>}
        {msg && <span>{msg}</span>}
      </div>
    </div>
  )
}

export default Upload
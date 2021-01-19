import React from 'react'
//use react-dropzpne
import Dropzone from "react-dropzone";
import "../css/Dropzone.css";
import { Icon } from 'antd';
import axios from 'axios';
import { response } from 'express';

//rfce""

function FileUpload() {

    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0]);
        //post to server
        axios.post('/api/product/image',formData, config).then(response => {
            if(response.data.success){
                console.log(response.data);
            }else{
                alert('ƒailed');
            }
        })

        
    }
    return (
        <div className="FileUpload">
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps}) => (      
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Icon type="plus" className="icon"/>
                    </div>
                )}
            </Dropzone>
        </div>
    )
}

export default FileUpload

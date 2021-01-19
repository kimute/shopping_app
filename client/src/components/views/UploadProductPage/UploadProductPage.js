//rfce
import React,{useState} from "react";
//css frame work
import {Typography, Button, Form, Input, Descriptions} from 'antd';
//drop
import FileUpload from "../../utils/FileUpload";

const {Title}= Typography;
const {TextArea} = Input;

function UploadProductPage() {

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Continent, setContinent] = useState(1);
  const [Images, setImages] = useState([]);

  const Continents = [
    {key:1 ,value:"Africa"},
    {key:2 ,value:"Europe"},
    {key:3 ,value:"Asia"},
    {key:1 ,value:"North America"},
    {key:1 ,value:"South America"},
    {key:1 ,value:"Australia"},
    {key:1 ,value:"Antarctia"}
  ];

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value);

  }
  const DescriptionChangeHandler = (event) => {
    setDescription(event.currentTarget.value);

  }
  const PriceChangeHandler = (event) => {
    setPrice(event.currentTarget.value);

  }
  const ContinentsChangeHandler = (event) => {
    setContinent(event.currentTarget.value);

  }
  return <div style={{maxWidth:'700px',margin:'2rem auto'}}>
    <div style={{textAlign:'center', marginBottom:'2rem'}}>
      <h2>Travle package upload</h2>
  </div>

  <Form>
    {/* Drop zone */}
    <FileUpload/>
    <br/>
    <br/>
    <label>Name</label>
    <Input onChange={titleChangeHandler} value={Title}/>
    <br/>
    <br/>
    <label>Details</label>
    <TextArea onChange={DescriptionChangeHandler} value={Description}/>
    <br/>
    <br/>
    <label>Price($)</label>
    <Input onChange={PriceChangeHandler} value={Price}/>
    <br/>
    <br/>
    <select onChange={ContinentsChangeHandler} value={Continents}>
      {Continents.map(item => (
        <option key={item.key} value={item.key}>{item.value}</option>
      ))}
      <option></option>
    </select>
    <br/>
    <br/>
    <Button>confirm</Button>

  </Form>
  </div>;
}

export default UploadProductPage;

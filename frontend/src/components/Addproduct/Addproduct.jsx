import React, { useState } from 'react'
import upload from '../../Images/upload_area.svg'
import './Addproduct.css'
import { firestore } from '../config';
import { collection, addDoc } from "firebase/firestore";
const Addproduct = () => {
  const [image,setImage] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    fav: false,
    date: new Date(),
    category: 'Formal',
    image: ''
  })
  let name, value;
  const change = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === 'fav') {
      setData({ ...data, fav: !data.fav });
    }
    else {
      setData({ ...data, [name]: value });
    }
  }

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const addProduct = async () => {
    let resData;
    let formdata = new FormData();
    formdata.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formdata,
    }).then((res) => res.json()).then((data) => { resData = data })
    if (resData.success) {
      const productData = { ...data, image: resData.image_url  ,date: new Date() };
      try {
        const docRef = await addDoc(collection(firestore, 'Data'), productData)
        console.log('Document written with ID: ', docRef.id);
        alert("Product added successfully");
        window.location.reload();
      }
      catch {
        alert("Error occurred");
      }
    }
    else {
      alert("Storing error");
    }
  }

  return (
    <div className='addprod'>
      <div className="addprod-item-field">
        <p>Product title</p>
        <input type="text" name="title" value={data.title} placeholder='Type Here' onChange={change} />
      </div>
      <div className="addprod-desc">
        <div className="addprod-item-field">
          <p>Descrition</p>
          <input type="textbox" value={data.description} style={{ width: '590px', height: '40px' }} onChange={change} name="description" placeholder='Type Here' />
        </div>
        <div className="addprod-item-field">
          <p>Favourite?</p>
          <input type="checkbox" value={data.fav} style={{ width: '50px', height: '35px' }} onChange={change} name="fav" />
        </div>
      </div>
      <div className="addprod-item-field">
        <p>Product Category</p>
        <select name="category" value={data.category} onChange={change} className="addprod-selector">
          <option value="Formal">Formal</option>
          <option value="Casual">Casual</option>
          <option value="Gen-Z">GenZ</option>
          <option value="Traditional">Traditional</option>
        </select>
      </div>
      <div className="addprod-item-field">
        <label htmlFor="fileInput">
          <img src={image ? URL.createObjectURL(image) : upload} onChange={change} className="addprod-thumbnail" alt="" />
        </label>
        <input type="file"
          id="fileInput"
          onChange={imageHandler}
          style={{ display: 'none' }}
          name="image"
        />
      </div>
      <button onClick={() => { addProduct() }} className="addprod-button">ADD</button>
    </div>
  )
}

export default Addproduct
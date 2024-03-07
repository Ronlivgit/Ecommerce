import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './AddProduct.css'
import { UserContext } from '../../context/UserProvider';
import { APIBaseUrl } from '../../config/Api';

export default function AddProduct() {
    const { user } = useContext(UserContext);
    const [productCard, setProductCard] = useState({});
    const [ErrMsg, setErrMsg] = useState("");

    // const [title, setTitle] = useState('');
    // const [desc, setDesc] = useState('');
    // const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    // const [discount, setDiscount] = useState('');
    // const [units, setUnits] = useState('');

    const changeHandler = (e) => {
        const newProductCard = { ...productCard }
        newProductCard[e.target.name] = e.target.value;
        console.log(productCard);
        setProductCard(newProductCard);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userToken = localStorage.getItem('token');
            ;

            const response = await fetch(`${APIBaseUrl}/product`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
                body: JSON.stringify(productCard),
            });

            if (response.ok) {
                alert('product created successfully!');
            } else {
                alert('Failed to create product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const preset_key = "ml_default";
    const cloud_name = "djmlunvsl";

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        !formData.append("upload_preset", preset_key);

        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const apiUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

        fetch(apiUrl, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.secure_url) {
                    setImage(data.secure_url);
                } else {
                    console.error("Error uploading image to Cloudinary");
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            <div>AddProduct</div>
            <form className='form' onChange={changeHandler}>
                <TextField
                    id="standard-textarea"
                    label="title"
                    name="title"
                    placeholder="title"
                    multiline
                    variant="standard"
                />

                <TextField
                    id="standard-textarea"
                    label="description"
                    name="desc"
                    placeholder="description"
                    multiline
                    variant="standard"
                />

                <TextField
                    id="standard-textarea"
                    label="price"
                    name="price"
                    placeholder="price"
                    multiline
                    variant="standard"
                    inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                    }}
                /> 

                 <TextField
                    id="standard-textarea"
                    label="units"
                    name="units"
                    placeholder="units"
                    multiline
                    variant="standard"
                    inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                    }}
                /> 
                

                {/* <TextField
                    id="standard-textarea"
                    label="discount"
                    name="discount"
                    placeholder="discount"
                    multiline
                    variant="standard"
                /> */}



                <div className="input-group">
                    <label htmlFor="image"></label>
                    <br />
                    <input
                        type="file"
                        accept="image/*"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="image" className="fileLabel">
                        <div className="imageInputDiv">
                            <img

                                className="imageIcone"
                                src="https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_640.png"
                                alt=""
                                srcset=""
                            />  
                             {/* <span className='imageInputText'>Upload Picture</span>  */}
                         </div>
                    </label>
                </div> 
              <img className="addPostImg" src={img} alt="" /> 

              {/* <TextField
                    id="standard-textarea"
                    label="amount"
                    name="amount"
                    placeholder="anount"
                    multiline
                    variant="standard"
                /> */}

                <button type='submit' onClick={handleSubmit}>upload</button>
            </form>

        </>

    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners'

export default function CategoriesSection() {
  const [categories, setCategories]= useState([])
  const [showLoader, setshowLoader] = useState(true)
  
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((json) =>{setCategories(json.data); setshowLoader(false);})
  },[])
  

  
  return (
   <>
    {
        showLoader ?

          (
            <div className="container d-flex justify-content-center align-items-center" style={{ width: '100vw', height: '100vh' }}>
              <ScaleLoader color="black" />
            </div>
          )
          :
    <div className="container ">
      <div className="my-5 text-center ">
        <h1>Categories Section</h1>
        <p className='text-secodary'>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="row">
     
   {
    categories.map((val,key)=> <div className="col-md-4 my-3 "> 
       
    <Link className='text-decoration-none ' to={`/products/category/${val}`}>
    <Card >
    {/* <Image src="holder.js/171x180" roundedCircle /> */}
      {/* <Card.Img variant="top" src="holder.js/100px180" className='roundedCircle' /> */}
      <Card.Body >
      <Card.Title  >{val.toUpperCase().replace('-',' ')}</Card.Title>
      {/* <Card.Title >{key+1} - {val.toUpperCase().replace('-',' ')}</Card.Title> */}
    </Card.Body>
  </Card>
  </Link>
      </div>
      )
   }
      </div>
    </div>}
   </>
  )
}


 import React, { useEffect, useState } from 'react'
 import { Link } from 'react-router-dom'
 import Card from 'react-bootstrap/Card';
 import axios from "axios";
import TopProductsCard from '../TopProductsCard/TopProductsCard';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { ScaleLoader } from 'react-spinners'


 
 export default function Products() {

 const [products,setProducts] = useState([])
 const [showLoader, setshowLoader] = useState(true)

 useEffect(()=>{
 axios.get(`https:dummyjson.com/products/`)
 .then((json)=>{setProducts(json.data.products);setshowLoader(false);})
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
     <div className="container">
         <div className="my-5 text-center">
             <h1>Top Products</h1>
             <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias minus cum nostrum eveniet sed alias qui dicta ratione magni voluptatibus culpa deleniti enim voluptate recusandae consequuntur est illum, incidunt repellat.</p>
         </div>
 <div className="row">

   {
     products.map((val,key)=>
     
     <div className="col-md-3 my-2" key={key}>
     <Link className='text-decoration-none' to={`/products/${val.id}`}>
     {/* <Card> */}
     <Col xs={6} md={4}>
          <Image  width={160}
        height={160}  src={val.thumbnail} roundedCircle />
        <div className='d-flex justify-content-center align-items-center '>
          <h6 className='text-decoration-none justify-content-center align-items-center text-align-center text-dark'>{val.title} - {val.price}$</h6>
          </div>
        
        </Col>
       {/* <Card.Img variant="top" src={val.thumbnail} /> */}
       {/* <Card.Body>
         <Card.Title>{val.thumbnail} - {val.price}$</Card.Title>
         <Card.Text>
         {val.description}
         </Card.Text>
        
       </Card.Body>
     </Card> */}
     </Link>
     </div>)
  
  // <TopProductsCard/>
  }

 </div>

     </div>}
     </>
   )
  }
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { ScaleLoader } from 'react-spinners'

export default function CategoryPage() {
    
const {categoryName} = useParams()
const [products,setProducts] = useState([])
const [showLoader, setshowLoader] = useState(true)


useEffect(()=>{
axios.get(`https://dummyjson.com/products/category/${categoryName}`)
.then((json)=>{setProducts(json.data.products);
setshowLoader(false);})
},[categoryName])



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
        <div className="my-5 text-center">
            <h1>{categoryName.toUpperCase()}</h1>
            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias minus cum nostrum eveniet sed alias qui dicta ratione magni voluptatibus culpa deleniti enim voluptate recusandae consequuntur est illum, incidunt repellat.</p>
        </div>
<div className="row row-cols-1 row-cols-md-3 g-4 py-5">
  {
    products.map((val,key)=>
    <div className="col-md-6 my-4" key={key}>
    <Link className='text-decoration-none' to={`/products/${val.id}`}>
    <Card >
    {/* <Figure>
    <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      </Figure> */}
      <Card.Img  width={250}
        height={400}  variant="top " src={val.thumbnail}  />
      <Card.Body>
        <Card.Title >{val.title} - {val.price}$</Card.Title>
        <Card.Text>
        {val.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
    </div>)
  }

</div>

    </div>}
    </>
  )
}











import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../Components/ImageSection'
import ShopCart from '../MyCart/ShopCart'
import { ScaleLoader } from 'react-spinners'
// import {GlobalContext} from '../Context/CartContext'



export default function ProductPage() {

  const { productID } = useParams()
  const [product, setproduct] = useState({})
  const [review, setReview] = useState("")
  const [ratingstar, setratingStar] = useState(0)
  const [productQuantity, setproductQuantity] = useState(1)
  const [showLoader, setshowLoader] = useState(true)
  // const {state , dispatch } = useContext(GlobalContext)

  const ratingChanged = (newRating) => {
    setratingStar(newRating)
  }

  const submitReview = () => {
    const payLoad = {
      productID: productID,
      review: review,
      rating: ratingstar
    }
    console.log(payLoad)


    Swal.fire({
      title: 'Successfully Submitted!',
      text: 'Thanks for reviewing our product',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    })
    setReview("")
    setratingStar(0)
  }

  // const addToCart = (e) => {
  //   e.preventDefault();
  //   const payLoad = {
  //     ...product,
  //     productQuantity,
  //     totalPrice: product.price * productQuantity
  //   }
  //   console.log(payLoad)

  //   dispatch({
  //     type :"USER_CART",
  //     payload : payLoad
  //   })

  const addToCart = () => {
    const payLoad = {
      ...product,
      productQuantity,
      totalPrice: product.price * productQuantity
    }
    console.log(payLoad)

    Swal.fire({
      title: 'Added to Cart!',
      text: 'Check your Cart for Check Out',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    })
  }



  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`)
      .then((json) => {
        setproduct(json.data);
        setshowLoader(false);
      })
  }, [])




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

          (
            <div className="container" >
              <div className="text-center my-5">
                <h1>{product.title} - {product.price}$</h1>
                <p className="text-secondary">{product.description}</p>

                <div className='d-flex justify-content-center'>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={product.rating}
                    color2={'#ffd700'}
                  />
                </div>

                <div className="my-3">
                  <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}>-</button>
                  {productQuantity}
                  <button className="btn btn-dark mx-3" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
                </div>

                <div className="d-flex justify-content-center" onClick={addToCart}>
                  <ShopCart />
                </div>

                {/* <button className='btn btn-dark' onClick={addToCart}>Add to cart</button> */}





              </div>
              <div className="row">
                <div className="col-md-6">

                  {
                    product?.images?.length > 0 && <ImageSection images={product.images} />
                  }

                </div>

                <div className="col-md-6">

                  <div className="container  mb-5">
                    <h2 className="text-center">Review Us</h2>
                    <p className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ad.</p>
                  </div>

                  <div>
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: 100 }}
                        defaultValue={review}
                        onChange={(e) => setReview(e.target.value)}
                      />
                      <label htmlFor="floatingTextarea2">Comments</label>
                    </div>

                    <div className='mt-3'>
                      Rate Us:
                      <div className='d-flex align-items-center'>
                        <ReactStars
                          count={5}
                          size={24}
                          value={ratingstar}
                          onChange={ratingChanged}
                          color2={'#ffd700'}
                        />
                        <span className='ms-3'>({ratingstar})</span>
                      </div>
                    </div>

                    <button className='btn btn-dark my-3' onClick={submitReview}>Submit Review</button>
                  </div>


                </div>
              </div>
            </div>
          )

      }





      {/* //   )
    //    :
    //    //  (<Loader/>)
    //  (
    //  <Loader/>
    //  )} */}
    </>
  )
}


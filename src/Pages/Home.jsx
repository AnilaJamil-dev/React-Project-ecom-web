import React, { useContext, useEffect } from 'react'
import HeaderSection from '../Components/HeaderSection'
import Products from './Products'
import {GlobalContext} from "../Context/Context"


export default function Home() {

  const {state , dispatch} = useContext(GlobalContext)

  useEffect(()=>{
    console.log(state)
  },[])

  return (
    <>
      <div className=" d-flex justify-content-center align-items-center text-light ">
        {/* <h>Welcome to<br></br> <h1></h1><span>Ying & Yang</span></h> */}
        <img width={150} height={150} src="https://i.redd.it/8gemk0quwmb71.jpg" alt="logo" srcset="" />
      </div>
{/* ====================================================================================================================================================== */}
      <HeaderSection />
{/* ====================================================================================================================================================== */}
<Products/>

  </>
  )
}

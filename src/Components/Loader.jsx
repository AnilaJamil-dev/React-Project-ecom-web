import React from 'react'
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function Loader() {

    let [loading, setLoading] = useState(true);
  
  
    // useEffect(()=>{}
    // const t = setTimeout(()
    //  setLoading(false);
    // },3000);
    // return ( )=>{
    //  clearTimeout(t);
    // }
    //  },[]);
 

    
  return (
    <>
    <div className="sweet-loading">
    

    <ClipLoader
      // color={color}
      // loading={loading}
      // cssOverride={override}
      // size={150}
      // aria-label="Loading Spinner"
      // data-testid="loader"
    />
  </div>
  </>
);
}

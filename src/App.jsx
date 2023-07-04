import React, { useState } from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Page404 from './Pages/Page404'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage'
import CategoriesSection from './Components/CategoriesSection'
import UserCartInfo  from "./Pages/UserCartInfo";


function App() {

const [user, setUser]= useState(true)
// const [cart, setCart]= useState([])





// const [cartItems, setCartItems] = useState([]);

// const addToCart = (product) => {
//   setCartItems([...cartItems, product]);
// };



  return (
  <>

  <NavigationBar/>


  {
    user 
    ?
    (<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoriessection" element={<CategoriesSection />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productID" element={<ProductPage />} />
      <Route path="/products/category/:categoryName" element={<CategoryPage />} />
      <Route path="/usercartinfo" element={<UserCartInfo/>}/>
      <Route path="*" element={<Page404/>} />
      </Routes>) 
    : 
    (<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/signin" replace={true} />} />
      </Routes>)
  }
<br />
<br />
<br />
<FooterSection/>
  </>
  )
}

export default App
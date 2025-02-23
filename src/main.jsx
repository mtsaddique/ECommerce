import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import Product from './Component/Product.jsx'
import Cart from './Component/Cart/Cart.jsx'
import  CartContext  from './Component/context/CartContext.jsx'
import AddtoCart from './Component/Cart/AddtoCart.jsx'
import CheckOutPage from './Component/Cart/CheckOutPage.jsx'
import Dashboard from './Component/UserProfile/Dashboard.jsx'



const router = createBrowserRouter([
  {
    path: "/ECommerce",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "user",
        element: <Dashboard />
      },
      {
        path: "cart/:id",
        element: <Cart />
      },
      {
        path: "addtocart",
        element: <AddtoCart />
      },{
        path:"checkout",
        element:<CheckOutPage/>
      }
    ]
  },

])

const Main = () => {
  return (
    <RouterProvider router={router} />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
      <Main />
    </CartContext>
  </StrictMode>
)

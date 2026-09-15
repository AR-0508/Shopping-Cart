import {useState} from "react";
import {createBrowserRouter} from "react-router-dom";
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const routes =createBrowserRouter([
   {
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "shop",
            element: <Shop />
        },
        {
            path: "cart",
            element: <Cart />
        }
      ]
    }
  ]);

function App(){ 
  const [cart, setCart] = useState([]);

  function handleAddToCart(product, quantity){
      if(cart.length === 0){
          let newCart = [
              ...cart,
              {
                  product: product,
                  quantity: quantity
              }
          ];

          setCart(newCart);
          return;
      }

      let productFound = false;
      let newCart = [...cart];

      for(let i = 0; i < newCart.length; i++){
          if(newCart[i].product.id === product.id){
              newCart[i].quantity = newCart[i].quantity + quantity;
              productFound = true;
              break;
          }
      }

      if(!productFound){
          newCart.push({
              product: product,
              quantity: quantity
          });
      }

      setCart(newCart);
  }

    return (
      <>
      <Navbar/>
      <Outlet context = {{cart, setCart, handleAddToCart}}/>
      </>
    )
}

export {routes};
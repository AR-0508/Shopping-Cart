import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
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
  
    return (
      <>
      <Navbar/>
      <Outlet/>
      </>
    )
}

export default App;
export {routes};
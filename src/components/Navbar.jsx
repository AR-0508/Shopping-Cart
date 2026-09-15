import { Link } from "react-router-dom";

function Navbar({cart}){
    let totalQuantity = cart.reduce((acc, item) => {
        return item.quantity + acc;
    }, 0);

    return(
        <div className = "navbar">
            <nav>ShopHub</nav>
            <ul>
                <Link to = "/">Home</Link>
                <Link to = "/shop">Shop</Link>
                <Link to = "/cart">
                Cart
                <div className = "navbar-cart-items-no">
                    {cart.length === 0 ?
                    "" :
                    totalQuantity
                    }
                </div>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
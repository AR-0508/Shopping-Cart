import { Link } from "react-router-dom";

function Navbar({cart}){
    return(
        <div className = "navbar">
            <nav>ShopHub</nav>
            <ul>
                <Link to = "/">Home</Link>
                <Link to = "/shop">Shop</Link>
                <Link to = "/cart">Cart</Link>
            </ul>
        </div>
    );
}

export default Navbar;
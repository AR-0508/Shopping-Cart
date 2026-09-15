import {Link} from "react-router-dom";

function Home(){
    return (
        <div className = "home-page-container">
            <p>Fall 2026 Collection</p>
            <h1>Elevate Your Daily Lifestyle Essentials</h1>
            <h3>Discover carefully selected apparel, precision electronics, and premium goods designed for modern life.</h3>

            <div className = "home-page-btns">
                <button type = "button">
                    <Link to = "shop">
                    Explore Products
                    </Link>
                </button>

                <button type = "button">
                    <Link to = "cart">
                        View Cart
                    </Link>
                </button>
            </div>

            <div className = "home-page-cards">
                <div className = "home-page-card">
                    <p>Fast Delivery</p>
                    <p>Worldwide insured shipping directly to your doorstep.</p>
                </div>

                <div className = "home-page-card">
                    <p>Verified Quality</p>
                    <p>Hand-picked, high standard catalog from verified makers.</p>
                </div>

                <div className = "home-page-card">
                    <p>Hassle-Free Returns</p>
                    <p>30-day money-back guarantee with straightforward support.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
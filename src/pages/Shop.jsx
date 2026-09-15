import {useState, useEffect} from "react";
import ProductCard from "../components/ProductCard.jsx";

function Shop(){
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchProducts(){
        try{
        const response = await fetch("https://fakestoreapi.com/products");
        
        if(response.ok){
        const data = await response.json();
        setProducts(data);
        }

        else
        setError("Error Occurred while getting products!");
            }

        catch{
            setError("Network request failed!");
          }
          
        finally{
            setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return (
        loading ? 
        <h1>...Loading</h1>:
        error ? 
        <h1>{error}</h1>:

        <div>
            <h1>Featured Catalogue</h1>
            <h2>Select your quantity and add items directly to your cart.</h2>

            <div className = "products">
            {products.map(product => (
                <div className = "product" key = {product.id}>
                <ProductCard product = {product}/>
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default Shop;
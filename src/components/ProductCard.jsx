import {useState} from "react";
import { useOutletContext } from "react-router-dom";

function ProductCard({product}){
    const [quantity, setQuantity] = useState(1);
    const {handleAddToCart} = useOutletContext();

    function handleAddQuantity(){
        setQuantity(quantity =>  quantity + 1);
    }

    function handleDecreaseQuantity(){
        if(quantity === 1)
        return;

        setQuantity(quantity =>  quantity - 1);
    }

    function handleChangeQuantity(e){
        let value = Number(e.target.value);

        if(value <= 0)
        return;

        setQuantity(value);
    }       

    return(
    <>
    <img src = {product.image}/>
    <p>{product.title}</p>
    <p>{product.description}</p>
                
    <div className = "price">
    <p> Price : </p>
    <p>${product.price}</p>
    </div>

    <div className = "quantity-control">
        <button className = "decrement" onClick = {handleDecreaseQuantity}>-</button>
        <input className = "quantity-input" type = "text" value = {quantity} onChange = {(e) => handleChangeQuantity(e)}/>
        <button className = "increment" onClick = {handleAddQuantity}>+</button>
    </div>

    <button type = "button" onClick = {() => handleAddToCart(product, quantity)}>Add to Cart</button>
    </>
    )
}

export default ProductCard;
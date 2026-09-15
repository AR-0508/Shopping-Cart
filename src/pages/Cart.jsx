import {Link ,useOutletContext} from "react-router-dom";

function Cart(){
    const {cart, setCart} = useOutletContext();
    let subTotal = cart.reduce((accumulator, item) => {
       return accumulator + (item.product.price * item.quantity)
    }, 0);

    subTotal =  Number(subTotal.toFixed(2));

    function handleDeleteCartItem(id){
        let newCart = [];
        for(let i = 0; i < cart.length; i++){
            if(cart[i].product.id === id)
            continue;

            else
            newCart.push({
            product : cart[i].product,
            quantity : cart[i].quantity
            })
        }

        setCart(newCart);
    }

    function handleAddQuantity(id){
        let newCart = [];

        for(let i = 0; i < cart.length; i++){
            if(cart[i].product.id === id)
            cart[i].quantity = cart[i].quantity + 1;

            newCart.push({
                product : cart[i].product,
                quantity : cart[i].quantity
            })
        }

        setCart(newCart);
    }

    function handleDecreaseQuantity(id){
        let newCart = [];

        for(let i = 0; i < cart.length; i++){
            if(cart[i].product.id === id)
            cart[i].quantity = cart[i].quantity - 1;

            if(cart[i].quantity === 0){
            handleDeleteCartItem(cart[i]);
            continue;
            }
            
            newCart.push({
                    product : cart[i].product,
                    quantity : cart[i].quantity
                })
        }

        setCart(newCart);
    }

    return(
        cart.length === 0 ? 
        <div className = "empty-cart-msg">
            <h2>Your shopping cart is empty</h2>
            <h3>Looks like you haven't added anything to your cart yet.</h3>
            <button type = "button">
                <Link to = "/shop">
                Start Shopping Now!
                </Link>
            </button>
        </div>:
        <div className = "cart-section">
                <div className = "cart-container">
                {cart.map(item => (
                    <div className = "cart-item" key = {item.product.id}>
                        <img src = {item.product.image}/>

                        <div className = "cart-text">
                            <p>{item.product.title}</p>
                            <p>{item.product.description}</p>
                        </div>

                        <div className = "quantity-control">
                            <button className = "decrement" onClick = {() => handleDecreaseQuantity(item.product.id)}>-</button>
                            <p className = "cart-item-quantity-show">{item.quantity}</p>
                            <button className = "increment" onClick = {() => handleAddQuantity(item.product.id)}>+</button>
                        </div>

                        <button type = "button" className = "del-cart-item" onClick = {() => handleDeleteCartItem(item.product.id)}>X</button>
                        <p>{item.product.price * item.quantity}</p>
                    </div> 
                    
                ))}
                </div>

                <div className = "order-summary">
                    <h2> Order Summary </h2>
                    <hr></hr>

                    <div className = "cart-subtotal">
                        <p>Subtotal</p>
                        <p>{subTotal}</p>
                    </div>

                    <div className = "shipping">
                        <p>Estimated Shipping</p>
                        <p>Free</p>
                    </div>

                    <hr></hr>

                    <div className = "total">
                        <p>Total</p>
                        <p>{subTotal}</p>
                    </div>

                    <button type = "button" onClick = {() => alert("Checking you out Now!")}>Checkout</button>
                </div>
            </div>
    )
}

export default Cart;
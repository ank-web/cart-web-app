import React from "react";

const CartItem = (props) => {
    const {price, title, qty} = props.product;

    return (
        <div className="cart-item">
            <div className="left-block" >
                <img style={style.image} src={props.product.img}>

                </img>
            </div>
            <div className="right-block">
                <div>{title}</div>
                <div>Rs {price}</div>
                <div>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */ }
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        onClick={() => props.onIncreaseQuantity(props.product)}
                        src="https://cdn-icons.flaticon.com/png/512/3524/premium/3524388.png?token=exp=1650309397~hmac=89fa00977566e0e8ab738302e9482a5f" 
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        onClick={() => props.onDecreaseQuantity(props.product)}
                        src="https://cdn-icons-png.flaticon.com/512/992/992514.png" 
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        onClick={() => props.onDeleteProduct(props.product.id)}
                        src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1650309440~hmac=ee0dbfba6bdf9b4d901815462ac97e8a" 
                    />
                </div>
            </div>

        </div>
    );
}
const style = {
    image: {
        height:110,
        width:100,
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem;
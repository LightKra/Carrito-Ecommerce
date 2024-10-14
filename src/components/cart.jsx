import imageTelefono from '../assets/box.jpg';
import { ClearCartIcon, CartIcon } from './icons.jsx';
import { useId } from 'react';
import { useCart } from '../hooks/useCart.js';
import './cart.css'

const CartItem = ({price, title, quantity, addToCart})=>{

    return(
                <li>
                    <img
                        src={imageTelefono}
                        alt={title}
                    />
                    <div>
                        <strong>{title}</strong> ${price}
                    </div>
                    <footer>
                        <small>
                        Qty: {quantity}
                        </small>
                        <button onClick={addToCart}>+</button>
                    </footer>
                </li>
    )
}
export const Cart = ()=>{
    const cartCheckBoxId = useId();
    const {clearCart, cart , addCart} = useCart();
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckBoxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckBoxId} type='checkbox' hidden/>

            <aside className="cart"> 
            <ul>
                {
                    cart.map(item=>{

                        return (<CartItem 
                            key={item.id} 
                            price={item.price} 
                            title={item.title} 
                            quantity={item.quantity} 
                            addToCart={()=>addCart(item)}
                            />)
                    })
                }
            </ul>
            <button onClick={clearCart}>
                <ClearCartIcon/>
            </button>
            </aside>
        </>
    )
}
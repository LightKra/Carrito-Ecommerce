import './products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './icons.jsx';
import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart.js';

export const Products = ({products})=>{
    const {addCart, cart, clearCart, removeFromCart} = useCart();
    const checkProductInCart = product =>{
        return cart.some(item=> item.id === product.id);
    }
    const hanlderClick = (product, isProductInCart) => ()=>{
       isProductInCart ? removeFromCart(product) : addCart(product);
    }
    return(
        <ul className='products'>
            {
                products.map(item=>{
                    const isProductInCart = checkProductInCart(item);

                    return(
                    <li key={item.id}>
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                        />
                        <div>
                            <strong>{item.title}</strong> - {item.price}
                        </div>
                        <div>
                            <button onClick={hanlderClick(item, isProductInCart)}>
                                {
                                    isProductInCart ?
                                    <RemoveFromCartIcon/>
                                    : <AddToCartIcon/>
                                }
                            </button>
                        </div>
                    </li>
                )})
            }
        </ul>
    );
}

Products.propTypes = {
    products: PropTypes.array.isRequired
}
import './footer.css'
import { useFilters } from '../hooks/useFilters.js';
import { useCart } from '../hooks/useCart.js';
export const Footer = ()=>{
    //const {filters} = useFilters();
    const {cart} = useCart();
    console.log(cart)
    return(
        <footer className='footer'>
            {cart.map(item=>{
                return (
                    <h3>{item.title}</h3>
                )
            })}
            <span>Products Card</span>
            <h5>Shopping car con useContext</h5>
        </footer>
    )
} 
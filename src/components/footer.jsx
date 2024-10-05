import './footer.css'
import { useFilters } from '../hooks/useFilters.js';
import { useCart } from '../hooks/useCart.js';
export const Footer = ()=>{
    //const {filters} = useFilters();
    const {cart} = useCart()
    return(
        <footer className='footer'>
            <h3>
                {JSON.stringify(cart)}
            </h3>
            <span>michael</span>
            <h5>Shopping car con useContext</h5>
        </footer>
    )
} 
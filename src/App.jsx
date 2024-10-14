import { products as initialProducts} from './mocks/products.json';
import { Products } from './components/products.jsx';
import { Header } from './components/header.jsx';
import { Footer } from './components/footer.jsx';
import { useFilters } from './hooks/useFilters.js';
import { Cart } from './components/cart.jsx';
import { CartProvider } from './context/cart.jsx';

function App() {

 const {filterProducts} = useFilters();

const newProducts = filterProducts(initialProducts);
  //minuto 11:12
  return (
    <>
    <CartProvider>
        <Header/>
        <Cart/>
        <Products products={newProducts}></Products>
        <Footer/>
      </CartProvider>
    </>
  )
}

export default App

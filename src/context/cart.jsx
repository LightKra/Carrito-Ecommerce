import { createContext, useReducer} from "react";
import { reducer, initialState} from "../reducers/cart.js";

export const CartContext = createContext();

const useCartReducer = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const addCart = product => dispatch({
        actionType: "ADD_TO_CART",
        actionPayload: product
    });

    const removeFromCart = product => dispatch({
        actionType: "REMOVE_FROM_CART",
        actionPayload: product
    });

    const clearCart = product => dispatch({
        actionType: "CLEAR_CART",
        actionPayload: product
    });
    return [state, addCart, removeFromCart, clearCart]
}

export const CartProvider = ({children})=>{
    const [state, addCart, removeFromCart, clearCart] = useCartReducer();

    return (
        <CartContext.Provider
            value={
                {
                    cart: state,
                    addCart,
                    removeFromCart,
                    clearCart
                }
            }
        >
            {children}
        </CartContext.Provider>
    )
}


export const initialState = JSON.parse(window.localStorage.getItem("cart")) || [];

const updateLocalStorage = state =>{
    window.localStorage.setItem("cart", JSON.stringify(state));
}

export const reducer = (state, action) =>{
    const {actionType, actionPayload} = action;
    switch(actionType){
        case "ADD_TO_CART":{
            const {id} = actionPayload;
            const productInCartIndex = state.findIndex(item => item.id === id);

            if(productInCartIndex >=0){
                const newCart = structuredClone(state);
                newCart[productInCartIndex].quantity += 1;
                return newCart
            }

            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ];
            updateLocalStorage(state);
            return newState;
        }
        case "REMOVE_FROM_CART":{
            const newState = state.filter(item=> item.id !== actionPayload.id);
            updateLocalStorage(state);
            return newState;
        }
        case "CLEAR_CART":{
            updateLocalStorage([])
            return [];
        }
    }
    return state;
}
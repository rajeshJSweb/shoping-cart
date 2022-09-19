export const cartReducer = (state, action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state, 
                cart:[...state.cart, {...action.plyload, qty:1}]};
        case "REMOVE_TO_CART":
            return {
                ...state, 
                cart:state.cart.filter(c=>c.id!==action.plyload.id)}
        default:
            return state;
    }
}
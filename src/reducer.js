import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from './actions';

function reducer(state, action) {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] }
    }
    if (action.type === DECREASE) {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                cartItem = { ...cartItem, amount: cartItem.amount - 1 }
            }

            return cartItem;
        })

        return { ...state, cart: tempCart }



    }


    if (action.type === INCREASE) {
        //to keep it clean, we could do it the same as remove
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                cartItem = { ...cartItem, amount: cartItem.amount + 1 }
            }

            return cartItem;
        })
        return { ...state, cart: tempCart }
    }
    if (action.type === REMOVE) {
        return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id) }
    }

    if (action.type === GET_TOTALS) {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {

            const { price, amount } = cartItem
            const itemtotal = price * amount

            cartTotal.total += itemtotal;
            cartTotal.amount += amount;

            return cartTotal;
        },
            {
                total: 0,
                amount: 0
            });
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }

    return state;
}

export default reducer;
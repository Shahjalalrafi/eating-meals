import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultState = {
    items: [],
    totalAmmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updateItems = state.items.concat(action.item)
        const updateItemsTotal = state.totalAmmount + state.items.price * state.items.amount
        console.log(state)
        return {
            items: updateItems,
            totalAmmount: updateItemsTotal
        }
    }
    return defaultState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultState)
    console.log(cartState)

    const AddItemToCartHandler = (item) => {
        dispatchCartState({type: "ADD", item: item})
    }

    const removeItemToCartHandler = (id) => {
        dispatchCartState({type: "REMOVE", id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmmount: cartState.totalAmmount,
        addItem: AddItemToCartHandler,
        removeItem: removeItemToCartHandler 
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
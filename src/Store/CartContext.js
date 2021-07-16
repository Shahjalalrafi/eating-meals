import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalAmmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext
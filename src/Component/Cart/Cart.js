import React, { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    
    const totalAmmount = `$${cartCtx.totalAmmount.toFixed(2)}`
    const hasItem = cartCtx.items.length > 0

    const cartItemAddHandler = (item) => {}

    const cartItemRemoveHandler = id => {}

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map(item => (
                <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price = {item.price}
                    onRemove = {cartItemRemoveHandler.bind(null, item.id)}
                    onAdd = {cartItemAddHandler.bind(null, item)}
                />
            ))
        }
    </ul>

    return (
        <Modal onClose = {props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Ammount</span>
                <span>{totalAmmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHideCart} >Close</button>
                {hasItem && <button className={classes.button}>order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
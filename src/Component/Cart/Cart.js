import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = () => {
    const cartItems = <ul>
        {
            [{id: "c1", name: "rafi", amount: 2, price: 12.99}].map(item => (
                <li>{item.name}</li>
            ))
        }
    </ul>

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.92</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}>Close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    );
};

export default Cart;
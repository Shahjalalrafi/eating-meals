import React, { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((acc, cur) => {
        return acc + cur.amount
    }, 0)
    return (
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                your cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;
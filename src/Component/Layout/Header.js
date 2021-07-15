import React from 'react';

import styles from './Header.module.css'
import MealImg from '../../Assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Eating Meals</h1>
                <HeaderCartButton onShowCart = {props.onShowCart}  />
            </header>  
            <div className={styles['main-image']}>
                <img src={MealImg} alt="meals" />
            </div>
        </>
    );
};

export default Header;
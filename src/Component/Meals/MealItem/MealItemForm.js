import React from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = () => {
    return (
        <form className={classes.form}>
            <Input 
                label="amount"
                input={
                    {
                        id: 'amount',
                        type: "text",
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }
                }
            />
            <button>+ add</button>
        </form>
    );
};

export default MealItemForm;
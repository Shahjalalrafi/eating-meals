import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const [amountIsValid, setAmmountIsvalid] = useState(true)

    const handleSubmit = event => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmmountIsvalid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Input 
                ref={amountInputRef}
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
            {
                !amountIsValid && <p>please enter a valid number including (1-5)</p>
            }
        </form>
    );
};

export default MealItemForm;
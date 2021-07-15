import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummery';

const Meals = () => {
    return (
        <>
            <MealsSummary />
            <AvailableMeals />  
        </>
    );
};

export default Meals;
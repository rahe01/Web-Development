

import Meals from '@/components/Meals';
import React from 'react';
import Style from './style.module.css'

const MealsPage = () => {
   

    return (
        <div>
            <h1 className={Style.h111}>this is n=meals page</h1>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;
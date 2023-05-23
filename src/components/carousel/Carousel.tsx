import React, { useEffect, useState } from 'react';
import "./Carousel.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'


const Carousel = () =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState);
    
    return (
        <div className=''>
            
        </div>
    )
}

export default Carousel;


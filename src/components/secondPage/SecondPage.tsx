import React, { useEffect, useState } from 'react';
import "./SecondPage.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'
import Carousel from '../carousel/Carousel';


const SecondPage = () =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState);
    
    return (
        <div className='secondPageLayout'>
            <Carousel></Carousel>
        </div>
    )
}

export default SecondPage;


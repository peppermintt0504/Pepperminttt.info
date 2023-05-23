import React, { useEffect, useState } from 'react';
import "./Carousel.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'


const Carousel = () =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState);
    const [index, setIndex] = useState<number>(0)
    const next = () =>{
        setIndex((pre)=>pre+1);
    }

    return (
        <div className='carouselLayout'>
            <div className='leftBTN'><img className='BTNImage' src={require('../../asset/left-arrow.png')}/></div>
            <div onClick={next} className='rightBTN'><img className='BTNImage' src={require('../../asset/right-arrow.png')}/></div>
            <div className='photo' style={{transform : `translate(-160px,-200px) rotate(5deg)`, animationName : 'slide'}}>

            </div>
            <div className='photo'>
                
            </div>
            <div className='photo'>
                
            </div>
            <div className='photo'>
                
            </div>
        </div>
    )
}

export default Carousel;


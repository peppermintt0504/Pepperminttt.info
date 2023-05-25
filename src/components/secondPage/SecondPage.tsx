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
            <Carousel/>
            <div className='descriptionContainer'>
                <div className='Main1'>안녕하세요!</div>
                <div className='Main2'>개발자 유동건입니다.</div>
                <div className='detail'>항상 도전하는 자세로 다양한 경험에 도전하며 개발 역량을 키워나가는 개발자입니다.
                어아아아ㅏ
                </div>
            </div>
        </div>
    )
}

export default SecondPage;


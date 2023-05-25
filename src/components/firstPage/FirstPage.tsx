import React, { useEffect, useState } from 'react';
import "./FirstPage.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'
import Carousel from '../carousel/Carousel';


const FirstPage = () =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState);
    
    return (
        <div className='firstPageLayout'>
            <div className='leftSection'></div>
            <div className='rightSection'>
                <img src={require('../../asset/mainPhoto.jpg')}/>
            </div>
            <div className='MainTitle'>
                <div className='mainTitleText'>환영합니다!</div>
                <div className='secondTitleText'>개발자 유동건의 개인 페이지입니다.</div>
                </div>
            {/* <div className='thirdTitleText'>해당 페이지는 외부 라이브러리를 최소로 사용하여 개발하였습니다.</div> */}
        </div>
    )
}

export default FirstPage;


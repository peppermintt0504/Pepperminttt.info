import React, { useEffect, useState } from 'react';
import "./FourthPage.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'
import { myWorkList } from '../../data/myWork';

const FourthPage = ({scrollEvent}: any) =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState);
    const [hoverIndex,setHoverIndex] = useState<number>(-1);

    return (
        <div className='fourthPageLayout'>
            <img src={require('../../asset/pngwing.com.png')} />
        </div>
    )
}

export default FourthPage;


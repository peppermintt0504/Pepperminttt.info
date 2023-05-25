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
                <div>

                    <div className='Main1'>안녕하세요!</div>
                    <div className='Main2'>개발자 유동건입니다.</div>
                    <div className='detailList'>
                        <div className='detail'>
                            <div className='detailCategory'>introduce</div>
                            <div className='detailContent'>
                                <li>항상 도전하는 자세로 다양한 경험을 통해 개발 역량을 키우는 개발자입니다.</li>
                                <li>개발 초기에 합류하여 월 매출 15억을 달성한 서비스를 개발한 경험이 있습니다.</li>
                                <li>재능 기부로 웹 개발 관련 지도를 진행하며 다양한 커뮤니케이션 기술을 배웠습니다.</li>
                                <li>블로그와 깃허브에 꾸준한 기록하며 꾸준하게 학습을 기록과 공유를 하고 있습니다.</li>
                                <li>최적의 성능을 위해 넓은 관점으로 생각하고, 이를 적용하기 위해 노력합니다.</li>
                                <li>높은 집중력과 강한 체력을 위해 매일 운동을 진행하고 있습니다.</li>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage;


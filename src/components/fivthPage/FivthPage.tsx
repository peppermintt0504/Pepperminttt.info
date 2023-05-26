import React, { useEffect, useState } from 'react';
import "./FivthPage.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'

const FivthPage = ({scrollEvent}: any) =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState);
    
    return (
        <div className='fivthPageLayout '>
            <div className='title'>Thanks For Watching</div>
            <div className='contact'>CONTACT</div>
            <div className='contactList'>
                <div>
                    <img src={require('../../asset/telephone.png')}/>
                    <p>010-4263-0042</p>
                </div>
                <div>
                    <img src={require('../../asset/mail.png')}/>
                    <p>animus0504@naver.com</p>
                </div>
            </div>
            <div className='iconList'>
                <div className='iconContainer'><img
                    onClick={()=>{ window.open('https://github.com/peppermintt0504', "_blank", "noopener, noreferrer");}}
                    src={require('../../asset/gitIcon.png')}/></div>
                <div className='iconContainer'><img 
                    onClick={()=>{ window.open('https://spiritual-notebook-05f.notion.site/43d6ac61625a4dc99fa297a5de16ed40', "_blank", "noopener, noreferrer");}}
                    src={require('../../asset/notionIcon.png')}/></div>
                <div className='iconContainer'><img 
                    onClick={()=>{ window.open('https://www.instagram.com/yoooooo_dong/', "_blank", "noopener, noreferrer");}}
                    src={require('../../asset/instagram.png')}/></div>
                <div className='iconContainer'><img 
                    onClick={()=>{ window.open('https://pepperminttt.tistory.com/', "_blank", "noopener, noreferrer");}}
                    src={require('../../asset/tistory.png')}/></div>

            </div>
            <div className='copyRight'>ⓒ 2023. pepperminttt all rights reserved.</div>
        </div>
    )
}

export default FivthPage;


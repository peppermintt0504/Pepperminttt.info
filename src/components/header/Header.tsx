import React, { useState } from 'react';
import "./Header.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'
import { EnumHomeMenu } from '../../enum/homeMenu';

const Header = () =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState.temp);
    const [curMenu, setCurMenu] = useState<EnumHomeMenu>(EnumHomeMenu.HOME);
    const [curMenuPos, setCurMenuPos] = useState<number>(0);
    const [curMenuSize, setCurMenuSize] = useState<number>(50);

    const selectMenu = (selectedMenu : EnumHomeMenu, event : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setCurMenu(selectedMenu)
        let pos;
        switch(selectedMenu) {
            case EnumHomeMenu.HOME :    pos = 1; break;
            case EnumHomeMenu.ABOUT :   pos = 2; break;
            case EnumHomeMenu.WORKS :   pos = 3; break;
            case EnumHomeMenu.BLOG :    pos = 4; break;
            case EnumHomeMenu.CONTACT : pos = 5; break;
        }
        setCurMenuPos(((window.innerWidth * 0.6 - 500)/6 * pos) + 100 * (pos - 1) + 50);
        setCurMenuSize(event.currentTarget.offsetWidth);
    }

    return (
        <div className='headerLayout'>
            <div className='protofiloTitle center'>PROTOFILO.</div>
            <div className='headerContents'>
                <div className='indecator' style={{left : curMenuPos+'px', width:curMenuSize, transform: `translateX(${-curMenuSize/2}px)`}}/>
                <div className='content center'><p onClick={(e)=> selectMenu(EnumHomeMenu.HOME,e)} className='contentText'>HOME</p></div>
                <div className='content center'><p onClick={(e)=> selectMenu(EnumHomeMenu.ABOUT,e)} className='contentText'>ABOUT</p></div>
                <div className='content center'><p onClick={(e)=> selectMenu(EnumHomeMenu.WORKS,e)} className='contentText'>WORKS</p></div>
                <div className='content center'><p onClick={(e)=> selectMenu(EnumHomeMenu.BLOG,e)} className='contentText'>BLOG</p></div>
                <div className='content center'><p onClick={(e)=> selectMenu(EnumHomeMenu.CONTACT,e)} className='contentText'>CONTACT</p></div>
            </div>
        </div>
    )
}

export default Header;


import React, { useEffect, useState } from 'react';
import "./Header.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'
import { EnumHomeMenu } from '../../enum/homeMenu';
import { menuChange } from '../../redux/action/menu_change';
import { debounceFunction } from '../../tools/debounce';
import { throttle } from '../../tools/throttle';
import { getMenuIndex } from '../../tools/getMenuIndex';


const Header = () =>{
    const dispatch = useDispatch();
    const curMenu = useSelector((state:RootState)=> state.generalState.menu);
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
    const [curMenuPos, setCurMenuPos] = useState<number>(1);
    const [curMenuSize, setCurMenuSize] = useState<number>(50);



    useEffect(() => {
        const updateWindowDimensions = () => {
          const width = window.innerWidth;
          setWindowSize(width);
        };
    
        window.addEventListener("resize", updateWindowDimensions);
    
        return () => window.removeEventListener("resize", updateWindowDimensions) 
    
      }, []);
    
    
    useEffect(()=>{
        setCurMenuPos(getMenuIndex(curMenu) + 1);
    },[curMenu]);
    
    const selectMenu = (selectedMenu : EnumHomeMenu, event : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(curMenu === selectedMenu)    return;

        dispatch(menuChange(selectedMenu));

        setCurMenuPos(getMenuIndex(selectedMenu) + 1);
        setCurMenuSize(event.currentTarget.offsetWidth);
    }

    return (
        <div className='headerLayout'>
            <div className='protofiloTitle center'>PROTOFILO.</div>
            <div className='headerContents'>
                <div className='indecator' style={{
                    left : (((windowSize > 900 ? windowSize : 900 ) * 0.6 - 500)/6 * curMenuPos) + 100 * (curMenuPos - 1) + 50, 
                    width: curMenuSize, 
                    transform: `translateX(${-curMenuSize/2}px)`,
                    }}/>
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


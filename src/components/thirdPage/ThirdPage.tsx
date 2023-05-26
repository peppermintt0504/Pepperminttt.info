import React, { useEffect, useState } from 'react';
import "./ThirdPage.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'
import { myWorkList } from '../../data/myWork';

const ThirdPage = ({scrollEvent}: any) =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState);
    const [hoverIndex,setHoverIndex] = useState<number>(-1);
    const holdScroll = () =>{
        if(!scrollEvent.current)
            scrollEvent.current = true;
    }
    const releaseScroll = () =>{
        if(scrollEvent.current)
            scrollEvent.current = false;
    }
    const hover = (index : number)=>{
        if(hoverIndex !== index)
            setHoverIndex(index);
        
    }
    const releaseHover = ()=>{
        setHoverIndex(-1);
    }
    return (
        <div className='thirdPageLayout '>
            <div className='Title'>
                <div className='underLine'/>
                <div className='titleText'>My Experience</div>
            </div>
            <div className='contentContainer'>
                <div className='contentRow'>
                    {myWorkList.map((x,i)=>{
                        if(i > 2)   return;
                        return(
                            <div className='contentCard' >
                            <img className='cardImage' 
                                style={{transform : hoverIndex === i ? 'scale(1.05)' : ''}}
                                src={require(`../../asset/${x.image}`)}/>
                            <div className='cardHover' 
                                style={{opacity : hoverIndex === i ? 0.9 : 0}} 
                                onMouseOver={()=>hover(i)} 
                                onMouseLeave={()=>releaseHover()}
                            >
                                <div className='title'>{x.name}</div>
                                <div className='description'>{x.desc}</div>
                                <div className='link'>
                                    {x.git && <img onClick={()=>{ window.open(x.git, "_blank", "noopener, noreferrer");}} src={require("../../asset/gitIconWhite.png")}/>}
                                    {x.notion && <img onClick={()=>{ window.open(x.notion, "_blank", "noopener, noreferrer");}} src={require("../../asset/notionIconWhite.png")}/>}
                                    {x.link &&<img onClick={()=>{ window.open(x.link, "_blank", "noopener, noreferrer");}} src={require("../../asset/internetIconWhite.png")}/>}
                                </div>
                            </div>
                        </div>
                        )
                    }
                    )}
                    
                </div>
                <div className='contentRow'>
                {myWorkList.map((x,i)=>{
                        if(i < 3)   return;
                        return(
                            <div className='contentCard' >
                            <img className='cardImage'
                                style={{transform : hoverIndex === i ? 'scale(1.05)' : ''}}
                                src={require(`../../asset/${x.image}`)}/>
                            <div className='cardHover' 
                                style={{opacity : hoverIndex === i ? 0.9 : 0}} 
                                onMouseOver={()=>hover(i)} 
                                onMouseLeave={()=>releaseHover()}
                            >
                                <div className='title'>{x.name}</div>
                                <div className='description'>{x.desc}</div>
                                <div className='link'>
                                    {x.git && <img onClick={()=>{ window.open(x.git, "_blank", "noopener, noreferrer");}} src={require("../../asset/gitIconWhite.png")}/>}
                                    {x.notion && <img onClick={()=>{ window.open(x.notion, "_blank", "noopener, noreferrer");}} src={require("../../asset/notionIconWhite.png")}/>}
                                    {x.link &&<img onClick={()=>{ window.open(x.link, "_blank", "noopener, noreferrer");}} src={require("../../asset/internetIconWhite.png")}/>}
                                </div>
                            </div>
                        </div>
                        )
                    }
                    )}
                </div>
                
            </div>  
        </div>
    )
}

export default ThirdPage;


import React, { useEffect, useRef, useState } from 'react';
import "./Carousel.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'


const Carousel = () =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState<number>(0)

    const tempPhoto = [
        'https://cdn.mmnews.co.kr/news/photo/202212/14803_13984_1144.jpg',
        'https://photo.akmall.com/image2/goods/07/03/18/97/107031897_M_1500.jpg',
        'https://openimage.interpark.com/goods_image_big/5/2/5/7/8101415257_l.jpg',

    ]

    console.log(index);
    const next = () =>{
        if(!carouselRef.current)    return;
        carouselRef.current.style.transition = 'left 0.5s';
        carouselRef.current.style.left = '-560px';
        setTimeout(()=>{
            carouselRef.current!.style.transition = '';
            setIndex((pre)=>{
                if(pre === tempPhoto.length - 1)    return 0;
                else    return pre + 1;
            });
            carouselRef.current!.style.left = '-280px';
        },500)
    }
    const before = () =>{
        if(!carouselRef.current)    return;
        carouselRef.current.style.transition = 'left 0.5s';
        carouselRef.current.style.left = '0px';
        setTimeout(()=>{
            carouselRef.current!.style.transition = '';
            setIndex((pre)=>{
                if(pre === 0)    return tempPhoto.length - 1;
                else    return pre - 1;
            });
            carouselRef.current!.style.left = '-280px';
        },500)
    }

    return (
        <div className='carouselLayout'>
            <div onClick={before} className='leftBTN'><img className='BTNImage' src={require('../../asset/left-arrow.png')}/></div>
            <div onClick={next} className='rightBTN'><img className='BTNImage' src={require('../../asset/right-arrow.png')}/></div>
            
            <div className='photo'>
                <div ref={carouselRef} className='carousel'>
                    <div className='carouselImg'>
                        <img src={index === 0 ? tempPhoto[tempPhoto.length - 1] :tempPhoto[index - 1]}></img>
                    </div>
                    <div className='carouselImg'>
                        <img src={tempPhoto[index]}></img>
                    </div>
                    <div className='carouselImg'>
                        <img src={index === tempPhoto.length - 1 ? tempPhoto[0] :tempPhoto[index + 1]}></img>
                    </div>
                    
                </div>
            </div>
            <div className='leftPhoto'>
                
            </div>
            <div className='rightPhoto'>
                
            </div>
        </div>
    )
}

export default Carousel;


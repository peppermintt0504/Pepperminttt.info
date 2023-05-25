import React, { useEffect, useRef, useState } from 'react';
import "./Carousel.style.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/reducer/index'


const Carousel = () =>{
    const dispatch = useDispatch();
    const temp = useSelector((state:RootState)=> state.generalState);
    const carouselRef = useRef<null[] | HTMLDivElement[]>([]);
    const isMoving = useRef<Boolean>(false);
    const [reload, setReload] = useState<Boolean>(false)
    const [index, setIndex] = useState<number>(0)

    const tempPhoto = [
        'https://blog.kakaocdn.net/dn/yDtgP/btrJaVA4iLN/9QtVWLrCIrUtDz7U4Udsr0/img.jpg',
        'https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNjIg/MDAxNjEyNDA4OTk5NDQ4.6UGs399-0EXjIUwwWsYg7o66lDb-MPOVQ-zNDy1Wnnkg.m-WZz0IKKnc5OO2mjY5dOD-0VsfpXg7WVGgds6fKwnIg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D2.jpg?type=w800',
        'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
        'https://djpms9a1go7nf.cloudfront.net/prod/uploads/thumbnail/images/10043263/167100535142741_md.png',
        'https://image.musinsa.com/mfile_s01/2022/04/05/8e78082b9922dd076806a39073c8615c215014.jpg',
    ]
    useEffect(()=>{
        //image preload
        tempPhoto.map(image => {
            const img = new Image()
            img.src = image;
        })
    },[])

    const next = () =>{
        if(!carouselRef.current || isMoving.current)    return;
        isMoving.current = true;
        carouselRef.current.forEach((cur,i)=>{
            if(!cur)    return
            cur.style.transition = 'left 0.5s';
            cur.style.left = '-560px';
        })
        
        setTimeout(()=>{
            carouselRef.current.forEach((cur,i)=>{
                if(!cur)    return
                cur.style.transition = '';
            })
            setIndex((pre)=>{
                if(pre === tempPhoto.length - 1)    return 0;
                else    return pre + 1;
            });
            setReload(true);
        },500)
        setTimeout(()=>{
            carouselRef.current.forEach((cur,i)=>{
                if(!cur)    return
                cur.style.left = '-280px';
            })
            setReload(false);
            isMoving.current = false;
        },550)
    }
    const before = () =>{
        if(!carouselRef.current || isMoving.current)    return;
        isMoving.current = true;
        carouselRef.current.forEach((cur,i)=>{
            if(!cur)    return
            cur.style.transition = 'left 0.5s';
            cur.style.left = '0px';
        })
        setTimeout(()=>{
            carouselRef.current.forEach((cur,i)=>{
                if(!cur)    return
                cur.style.transition = '';
            })
            setIndex((pre)=>{
                if(pre === 0)    return tempPhoto.length - 1;
                else    return pre - 1;
            });
            setReload(true);
            
        },500)
        setTimeout(()=>{
            carouselRef.current.forEach((cur,i)=>{
                if(!cur)    return
                cur.style.left = '-280px';
            })
            setReload(false);
            isMoving.current = false;
        },550)
    }

    return (
        <div className='carouselLayout'>
            <div onClick={before} className='leftBTN'><img className='BTNImage' src={require('../../asset/left-arrow.png')}/></div>
            <div onClick={next} className='rightBTN'><img className='BTNImage' src={require('../../asset/right-arrow.png')}/></div>
            
            <div className='photo'>
                <div ref={(element) => carouselRef.current[0] = element} className='carousel'>
                    <div className='carouselImg'>
                        <img src={reload ? tempPhoto[index] : index === 0 ? tempPhoto[tempPhoto.length - 1] :tempPhoto[index - 1]}></img>
                    </div>
                    <div className='carouselImg'>
                        <img src={tempPhoto[index]}></img>
                    </div>
                    <div className='carouselImg'>
                        <img src={reload ? tempPhoto[index] :index === tempPhoto.length - 1 ? tempPhoto[0] :tempPhoto[index + 1]}></img>
                    </div>
                    
                </div>
            </div>

            <div className='leftPhoto'>
                <div ref={(element) => carouselRef.current[1] = element} className='carousel'>
                    <div className='carouselImg'>
                        <img src={reload ? tempPhoto[index - 1 < 0 ? tempPhoto.length + (index - 1) :(index - 1) % tempPhoto.length] :
                            tempPhoto[index - 2 < 0 ? tempPhoto.length + (index - 2) :(index - 2) % tempPhoto.length]
                        }></img>
                    </div>
                    <div className='carouselImg'>
                        <img src={tempPhoto[index - 1 < 0 ? tempPhoto.length + (index - 1) :(index - 1) % tempPhoto.length]}></img>
                    </div>
                    <div className='carouselImg'>
                        <img src={reload ? tempPhoto[index - 1 < 0 ? tempPhoto.length + (index - 1) :(index - 1) % tempPhoto.length] : tempPhoto[index]}></img>
                    </div>
                    
                </div>
            </div>
            <div className='leftBlod'/>

            <div className='rightPhoto'>
                <div ref={(element) => carouselRef.current[3] = element} className='carousel'>
                    <div className='carouselImg'>
                        <img src={reload ? tempPhoto[(index + 1) % tempPhoto.length] : tempPhoto[index]}></img>
                    </div>
                    <div className='carouselImg'>
                        <img src={tempPhoto[(index + 1) % tempPhoto.length]}></img>
                    </div>
                    <div className='carouselImg'>
                        <img src={reload ? tempPhoto[(index + 1) % tempPhoto.length] : tempPhoto[(index + 2) % tempPhoto.length]}></img>
                    </div>
                    
                </div>
            </div>
            <div className='rightBold'/>
        </div>
    )
}

export default Carousel;


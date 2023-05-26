import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Header from '../../components/header/Header';
import "./Home.style.css"
import Carousel from '../../components/carousel/Carousel';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { getMenuIndex } from '../../tools/getMenuIndex';
import { useDispatch } from 'react-redux';
import { menuChange } from '../../redux/action/menu_change';
import { nextMenu } from '../../tools/nextMenu';
import { getMenu } from '../../tools/getMenu';
import SecondPage from '../../components/secondPage/SecondPage';
import FirstPage from '../../components/firstPage/FirstPage';
import ThirdPage from '../../components/thirdPage/ThirdPage';
import FivthPage from '../../components/fivthPage/FivthPage';
import FourthPage from '../../components/fourthPage/FourthPage';
type homeProps = {
  
};

const Home: React.FC<homeProps> = ({  }) => {
  const dispatch = useDispatch();
  const curMenu = useSelector((state : RootState)=>state.generalState.menu);
  const outerDivRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const holdScrolling = useRef<Boolean>(false);
  const scrolling = useRef<Boolean>(false);
  useLayoutEffect(()=>{
    const windowHeight = window.innerHeight;

    outerDivRef.current?.scrollTo({
      top: (windowHeight - 80) * (getMenuIndex(curMenu)),
      left: 0,
      behavior: "smooth",
    });
    if(scrollbarRef.current){
      scrollbarRef.current.style.width = '10px';
      scrollbarRef.current.style.top = `calc((100vh - 80px) / 5 * ${getMenuIndex(curMenu)})`;
      scrollbarRef.current.style.opacity = '0.4';
      scrollbarRef.current.style.borderRadius = '5px';
      setTimeout(()=>{
        if(scrollbarRef.current){
          scrollbarRef.current.style.width = '';
          scrollbarRef.current.style.opacity = '';
          scrollbarRef.current.style.borderRadius = '';
        } 
      },500)
    }
  },[curMenu]);

  useLayoutEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      if(!outerDivRef.current || holdScrolling.current || scrolling.current) return
      const { deltaY } = e;
      const windowHeight = window.innerHeight;

      const cur = Math.round(outerDivRef.current.scrollTop / (windowHeight - 83));
      if(deltaY > 0){ //스크롤 내릴 떄
        if(cur === 4)  return;
        scrolling.current = true;
        dispatch(menuChange(getMenu(cur + 1)));
        setTimeout(()=>{scrolling.current=false},500);
      }else{          //스크롤 올릴 떄
        if(cur === 0)  return;
        scrolling.current = true;
        dispatch(menuChange(getMenu(cur - 1)));
        setTimeout(()=>{scrolling.current=false},500);
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent?.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div className='homePageContainer'>
      <Header/>
      <div ref={outerDivRef} className='homePageLayout'>
        <div className='firstScreen'>
          <FirstPage/>
        </div>
        <div className='secondScreen'>
          <SecondPage/>
        </div>
        <div className='secondScreen'>
          <ThirdPage scrollEvent={holdScrolling}/>
        </div>
        <div className='secondScreen'>
          <FourthPage/>
        </div>
        <div className='secondScreen'>
          <FivthPage/>
        </div>
      </div>
      <div className='scrollbarContainer'><div ref={scrollbarRef} className='scrollbar'></div></div>
    </div>
  );
}

export default Home;
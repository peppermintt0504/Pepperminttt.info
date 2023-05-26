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
type homeProps = {
  
};

const Home: React.FC<homeProps> = ({  }) => {
  const dispatch = useDispatch();
  const curMenu = useSelector((state : RootState)=>state.generalState.menu);
  const outerDivRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const holdScrolling = useRef<Boolean>(false);
  useLayoutEffect(()=>{
    const windowHeight = window.innerHeight;

    outerDivRef.current?.scrollTo({
      top: (windowHeight - 80) * (getMenuIndex(curMenu)),
      left: 0,
      behavior: "smooth",
    });
    if(scrollbarRef.current){
      scrollbarRef.current.style.width = '12px';
      scrollbarRef.current.style.top = `calc((100vh - 80px) / 5 * ${getMenuIndex(curMenu)})`;
      scrollbarRef.current.style.opacity = '0.6';
      setTimeout(()=>{
        if(scrollbarRef.current){
          scrollbarRef.current.style.width = '';
          scrollbarRef.current.style.opacity = '';
        }
      },500)
    }
  },[curMenu]);

  useLayoutEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      if(!outerDivRef.current || holdScrolling.current) return
      const { deltaY } = e;
      const windowHeight = window.innerHeight;

      const cur = Math.round(outerDivRef.current.scrollTop / (windowHeight - 83));
      if(deltaY > 0){ //스크롤 내릴 떄
        if(cur === 4)  return;

        dispatch(menuChange(getMenu(cur + 1)));


  

      }else{          //스크롤 올릴 떄
        if(cur === 0)  return;
        
        dispatch(menuChange(getMenu(cur - 1)));

      
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

        </div>
        <div className='secondScreen'>

        </div>
      </div>
      <div className='scrollbarContainer'><div ref={scrollbarRef} className='scrollbar'></div></div>
    </div>
  );
}

export default Home;
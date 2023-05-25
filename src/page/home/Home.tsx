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
type homeProps = {
  
};

const Home: React.FC<homeProps> = ({  }) => {
  const dispatch = useDispatch();
  const curMenu = useSelector((state : RootState)=>state.generalState.menu);
  const outerDivRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef<Boolean>(false);
  useLayoutEffect(()=>{
    const windowHeight = window.innerHeight;

    outerDivRef.current?.scrollTo({
      top: (windowHeight - 80) * (getMenuIndex(curMenu)),
      left: 0,
      behavior: "smooth",
    });
  },[curMenu]);

  useLayoutEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      if(!outerDivRef.current) return
      const { deltaY } = e;
      const windowHeight = window.innerHeight;

      const cur = Math.round(outerDivRef.current.scrollTop / (windowHeight - 83));
      if(deltaY > 0){ //스크롤 내릴 떄
        if(cur === 4)  return;

        dispatch(menuChange(getMenu(cur + 1)));


        outerDivRef.current?.scrollTo({
          top: (windowHeight - 80) * (cur + 1),
          left: 0,
          behavior: "smooth",
        });

      }else{          //스크롤 올릴 떄
        if(cur === 0)  return;
        
        dispatch(menuChange(getMenu(cur - 1)));

        outerDivRef.current?.scrollTo({
          top: (windowHeight - 80) * (cur - 1),
          left: 0,
          behavior: "smooth",
          
        });
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

        </div>
        <div className='secondScreen'>

        </div>
        <div className='secondScreen'>

        </div>
      </div>
    </div>
  );
}

export default Home;
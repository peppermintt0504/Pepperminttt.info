import React, { useEffect, useLayoutEffect, useState } from "react";
import "./FirstPage.style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer/index";
import Carousel from "../carousel/Carousel";
import { menuChange } from "../../redux/action/menu_change";
import { getMenu } from "../../tools/getMenu";

const FirstPage = () => {
  const dispatch = useDispatch();
  const temp = useSelector((state: RootState) => state.generalState);
  const [init, setInit] = useState<Boolean>(false);
  const scrollDown = () => {
    dispatch(menuChange(getMenu(1)));
  };
  useLayoutEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 3000);
  }, []);
  return (
    <div className="firstPageLayout">
      <div className="leftSection">
        <div className="decoration">
          {[0, 0, 0, 0, 0].map((v, i) => (
            <div key={i + "-line" + Math.random()} className="line">
              {[0, 0, 0, 0, 0].map((v1, i1) => (
                <div key={i + "-spot" + Math.random()} className="spot"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="rightSection">
        <img src={require("../../asset/mainPhoto.jpg")} />
      </div>
      <div className="MainTitle">
        <div className="mainTitleText">환영합니다</div>
        <div className="secondTitleText">
          개발자 유동건의 개인 페이지입니다.
        </div>
      </div>
      {/* <div className='thirdTitleText'>해당 페이지는 외부 라이브러리를 최소로 사용하여 개발하였습니다.</div> */}
      <div
        style={{ opacity: init ? "" : 0 }}
        onClick={scrollDown}
        className="navigator"
      >
        <img
          src={require("../../asset/down-arrow.png")}
          className="downArrow"
        />
        <img
          src={require("../../asset/down-arrow.png")}
          className="downArrow"
        />
        <img
          src={require("../../asset/down-arrow.png")}
          className="downArrow"
        />
      </div>
    </div>
  );
};

export default FirstPage;

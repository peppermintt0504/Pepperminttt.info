import { EnumHomeMenu } from "../../enum/homeMenu";
import { general } from "../action/general_state";
import { menuChange } from "../action/menu_change";
import { GENERAL_STATE, MENU_CHANGE } from "../action/types";

// 리듀서 파라미터 중 initialState의 타입 정의
type GeneralStateType = {
  menu : EnumHomeMenu;
  temp : Number;
};

const initialState = {
  menu : EnumHomeMenu.HOME,
  temp: 123,
};

// 리듀서 파라미터 중 action의 타입 정의
type GeneralActionType =
  | ReturnType<typeof menuChange>
  | ReturnType<typeof general>;

export default function generalState(
  state: GeneralStateType = initialState,
  action: GeneralActionType
) {
  switch (action.type) {
    case GENERAL_STATE:
      return { ...state, temp: state.temp };
    case MENU_CHANGE :
      return {...state, menu : action.payload};
    default:
      return state;
  }
}
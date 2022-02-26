import { SET_CURRENT_TAB } from "../type";
import { useDispatch } from "react-redux";

const dispatch = useDispatch();
//Setting Current Tab
export const setCurrentTab = (newTab) => {
  dispatch({
    type: SET_CURRENT_TAB,
    payload: {
      newTab: newTab,
    },
  });
};

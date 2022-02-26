import { SET_CURRENT_TAB, SET_FOOD_CATEGORY } from "../type";

let initialState = {
  restaurants: [],
  city: "",
};

let RestaurantReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_CURRENT_TAB:
      var newState = { ...state };
      newState.activeTab = payload.newTab;
      console.log("SWITCHING TAB");
      return newState;
    default:
      return state;
  }
};

export default RestaurantReducer;

import { SET_FOOD_CATEGORY } from "../type";

let initialState = {
  items: [],
  category: "",
};

let MenuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FOOD_CATEGORY:
      console.log("SETTING FOOD CATEGORY");
      return {
        ...state,
        items: payload.items,
        category: payload.category,
      };
    default:
      return state;
  }
};

export default MenuReducer;

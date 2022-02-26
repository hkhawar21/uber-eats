import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import RestaurantReducer from "./RestaurantReducer";
import MenuReducer from "./MenuReducer";

let reducers = combineReducers({
  cart: CartReducer,
  restaurant: RestaurantReducer,
  menu: MenuReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;

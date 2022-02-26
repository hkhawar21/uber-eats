import { ADD_TO_CART } from "../type";

let initialState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

let CartReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TO_CART:
      var newState = { ...state };
      if (payload.checkboxValue) {
        console.log("ADDING TO CART");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, payload],
          restaurantName: payload.restaurantName,
        };
      } else {
        console.log("REMOVING FROM CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title != payload.title
            ),
          ],
          restaurantName: payload.restaurantName,
        };
      }
      return newState;
    default:
      return state;
  }
};

export default CartReducer;

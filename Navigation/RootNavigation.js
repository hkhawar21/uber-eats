import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Redux imports
import configureStore from "../store/store";
import { Provider as ReduxProvider } from "react-redux";
import BottomTabNav from "./BottomTabNav";

const store = configureStore();

const RootNavigation = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNavigation;

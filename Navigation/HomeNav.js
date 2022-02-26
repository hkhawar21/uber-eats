import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Orders from "../screens/Orders";
import Account from "../screens/Account";
import Restaurant from "../screens/Restaurant";
import CategoryItemScreen from "../screens/CategoryItemScreen";
import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();
const screenOptions = {
  // headerLeft: () => (
  //   <View style={{ paddingRight: 10, alignItems: "center" }}>
  //     <Ionicons name="menu" size={24} color="black" />
  //   </View>
  // ),
  // headerRight: () => (
  //   <View style={{ paddingRight: 20 }}>
  //     <Ionicons name="cart" size={24} color="black" />
  //   </View>
  // ),
  headerShown: true,
  headerStyle: {
    backgroundColor: Colors.light,
  },
  headerTintColor: Colors.primary,
};

const HomeNavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Restaurant" component={Restaurant} />
    </Stack.Navigator>
  );
};

const OrderNavStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

const AccountNavStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

const CategoryNavStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: "Food Categories" }}
      />
      <Stack.Screen name="CategoryItem" component={CategoryItemScreen} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
    </Stack.Navigator>
  );
};

export { HomeNavStack, OrderNavStack, AccountNavStack, CategoryNavStack };

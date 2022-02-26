import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const activeTabIcon = (iconName, routeName, size) => {
  return (
    <View style={styles.activeTabWrapper}>
      <Ionicons name={iconName} size={16} color={Colors.primary} />
      <Text style={styles.activeTabText}>{routeName}</Text>
    </View>
  );
};

//Stacks
import {
  HomeNavStack,
  OrderNavStack,
  CategoryNavStack,
  AccountNavStack,
} from "./HomeNav";

const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeRoute"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let rn = route.name;
          let icon;

          if (rn === "HomeRoute") {
            iconName = focused
              ? (icon = activeTabIcon("home", "Home", size, color))
              : (icon = (
                  <Ionicons name="home-outline" size={size} color={color} />
                ));
          } else if (rn === "CategoriesRoute") {
            iconName = focused
              ? (icon = activeTabIcon("ios-list", "Categories", size, color))
              : (icon = (
                  <Ionicons name="ios-list-outline" size={size} color={color} />
                ));
          } else if (rn === "OrdersRoute") {
            iconName = focused
              ? (icon = activeTabIcon("ios-bookmark", "Orders", size, color))
              : (icon = (
                  <Ionicons
                    name="ios-bookmark-outline"
                    size={size}
                    color={color}
                  />
                ));
          } else if (rn === "AccountRoute") {
            iconName = focused
              ? (icon = activeTabIcon("ios-person", "Profile", size, color))
              : (icon = (
                  <Ionicons
                    name="ios-person-outline"
                    size={size}
                    color={color}
                  />
                ));
          }
          return icon;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "grey",
        tabBarItemStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        tabBarStyle: { padding: 10, height: 70 },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeRoute"
        component={HomeNavStack}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="CategoriesRoute"
        component={CategoryNavStack}
        options={{ title: "Category" }}
      />
      <Tab.Screen
        name="OrdersRoute"
        component={OrderNavStack}
        options={{ title: "Orders" }}
      />
      <Tab.Screen
        name="AccountRoute"
        component={AccountNavStack}
        options={{ title: "Account" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabWrapper: {
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: Colors.light,
    padding: 8,
    borderRadius: 12,
    justifyContent: "flex-end",
  },
  activeTabText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default BottomTabNav;

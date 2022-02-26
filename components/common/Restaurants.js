import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantItem from "./RestaurantItem";

const localRestaurants = [
  {
    id: 1,
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 97,
    waiting: "45-50 min",
  },
  {
    id: 2,
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 85,
    waiting: "45-50 min",
  },
  {
    id: 3,
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 88,
    waiting: "45 min",
  },
];

const Restaurants = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <RestaurantItem restaurant={item} navigation={navigation} />;
  };
  return (
    <View>
      <FlatList
        data={localRestaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({});

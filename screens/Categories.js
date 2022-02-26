import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodCategory from "../components/category/FoodCategory";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <FoodCategory navigation={navigation} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
});

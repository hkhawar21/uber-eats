import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Restaurants from "../components/common/Restaurants";

const CategoryItemScreen = ({ route, navigation }) => {
  const { category } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: category });
  });
  return (
    <View style={styles.root}>
      <Restaurants navigation={navigation} />
    </View>
  );
};

export default CategoryItemScreen;

const styles = StyleSheet.create({
  root: {
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 0,
  },
});

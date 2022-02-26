import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Menu from "../components/menu/Menu";

const Restaurant = ({ navigation, route }) => {
  const { name, image } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: name });
  });
  return (
    <View style={styles.safeArea}>
      <Menu image={image} />
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

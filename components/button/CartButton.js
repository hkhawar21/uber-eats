import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CartButton = () => {
  return (
    <View style={styles.buttonWrapper}>
      <FontAwesome5 name="shopping-bag" size={20} color="#fff" />
      <Text style={styles.numberCart}>2</Text>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#FECA57",
    borderRadius: 12,
  },
  numberCart: {
    marginLeft: 12,
    color: "#fff",
  },
});

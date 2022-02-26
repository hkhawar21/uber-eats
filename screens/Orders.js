import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Orders = () => {
  return (
    <View style={styles.root}>
      <Text>This is Orders screen</Text>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

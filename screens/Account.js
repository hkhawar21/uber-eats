import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Account = () => {
  return (
    <View style={styles.root}>
      <Text>This is Account screen</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

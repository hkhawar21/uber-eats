import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const MenuTitle = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuTitle} onPress={() => onPress(title)}>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuTitle;

const styles = StyleSheet.create({
  menuTitle: {
    marginRight: 10,
    padding: 4,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.light,
  },
});

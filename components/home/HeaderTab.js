import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CartButton from "../button/CartButton";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const HeaderTab = () => {
  const activeTab = useSelector((state) => state.restaurant.activeTab);
  return (
    <View style={styles.headerTab}>
      <View style={styles.detailWrapper}>
        <Text style={styles.boldInfo}>What do you{"\n"}have a taste for?</Text>
        <Text style={styles.lightInfo}>101 restaurants available</Text>
      </View>
      <View style={styles.bagWrapper}>
        <CartButton />
      </View>
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  headerTab: {
    flexDirection: "row",
  },
  detailWrapper: {
    justifyContent: "space-between",
  },
  boldInfo: {
    fontSize: 24,
    paddingRight: 12,
    fontWeight: "bold",
    color: Colors.text,
  },
  lightInfo: {
    marginTop: 12,
    color: "#798184",
  },
  bagWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

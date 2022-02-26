import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

const FoodCategory = (props) => {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.text}
        renderItem={(item) => (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              props.navigation.navigate("CategoryItem", {
                category: item.item.text,
              });
            }}
          >
            <Image source={item.item.image} style={styles.iconImage} />
            <Text style={styles.iconText}>{item.item.text}</Text>
            <View style={styles.arrowIconContainer}>
              <Ionicons name="arrow-forward-sharp" size={18} color="black" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FoodCategory;

const styles = StyleSheet.create({
  iconContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  iconImage: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  iconText: {
    fontSize: 18,
    fontWeight: "900",
    marginLeft: 14,
  },
  arrowIconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 16,
  },
});

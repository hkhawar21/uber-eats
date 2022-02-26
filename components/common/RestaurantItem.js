import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

const RestaurantItem = ({ restaurant, navigation }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("Restaurant", {
            name: restaurant.name,
            image: restaurant.image_url,
          });
        }}
      >
        <View style={styles.restaurantDetailsWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: restaurant.image_url,
              }}
              style={styles.restaurantImage}
            />
          </View>
          <TouchableOpacity style={styles.heartIcon}>
            <Icon name="heart-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.restaurantDetails}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <View style={styles.categoriesWrapper}>
            {restaurant.categories.map((item, index) => (
              <View key={index} style={styles.categoriesWrapper}>
                <Text style={styles.restaurantCategory}>{item}</Text>
                <FontAwesome
                  name="dot-circle-o"
                  size={14}
                  color={Colors.primary}
                />
              </View>
            ))}
          </View>
          <View style={styles.ratingWrapper}>
            <FontAwesome
              style={{ fontWeight: "bold" }}
              name="smile-o"
              size={24}
              color={Colors.primary}
            />
            <Text style={styles.ratingText}>{restaurant.rating}%</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.light,
    padding: 8,
    borderRadius: 8,
    marginTop: 30,
  },
  restaurantDetailsWrapper: {
    marginTop: 10,
    overflow: "hidden",
  },
  heartIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  imageWrapper: {
    borderRadius: 20,
    overflow: "hidden",
  },
  restaurantImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
    borderRadius: 10,
  },
  restaurantDetails: {
    alignItems: "stretch",
    marginTop: 15,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  categoriesWrapper: {
    flexDirection: "row",
    marginRight: 6,
    alignItems: "center",
  },
  restaurantCategory: {
    fontSize: 18,
    marginRight: 6,
  },
  ratingWrapper: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },
  ratingText: {
    fontWeight: "bold",
    color: Colors.primary,
    marginLeft: 6,
    fontSize: 18,
  },
});

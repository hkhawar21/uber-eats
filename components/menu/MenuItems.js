import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const MenuItem = ({ description, name, price, image }) => {
  return (
    <View style={styles.menuItemWrapper}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.menuItemTitle}>{name}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
        <Text style={styles.menuItemPrice}>{price}</Text>
      </View>
    </View>
  );
};

const MenuItems = ({ food }) => {
  return (
    <View style={{ height: "83%" }}>
      <FlatList
        data={food}
        keyExtractor={(item) => item.id}
        style={styles.listWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => (
          <MenuItem
            key={item.item.id}
            name={item.item.name}
            description={item.item.description}
            price={item.item.price}
            image={item.item.image}
          />
        )}
      />
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  listWrapper: {
    flexGrow: 1,
  },
  menuItemWrapper: {
    padding: 14,
    borderBottomWidth: 2,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  imageWrapper: {
    width: "30%",
    height: 120,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
  },
  descriptionWrapper: {
    width: "69%",
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 9,
  },
  menuItemPrice: {
    marginTop: 3,
    color: "#111",
  },
  itemDescription: {
    fontSize: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#fff",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 4,
    paddingBottom: 4,
  },
});

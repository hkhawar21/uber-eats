import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuTitle from "./MenuTitle";
import MenuItems from "./MenuItems";
import { SET_FOOD_CATEGORY } from "../../store/type";

const Menu = ({ image }) => {
  const dispatch = useDispatch();
  let categoryItems = useSelector((state) => state.menu.items);

  useEffect(() => {
    dispatch({
      type: `${SET_FOOD_CATEGORY}`,
      payload: {
        items: food[0].items,
        category: food[0].category,
      },
    });
  }, []);

  const onPressMenuTitle = (category) => {
    let newCategoryItems = food;
    newCategoryItems.map((item) => {
      if (item.category == category) {
        categoryItems = item.items;
      }
    });
    dispatch({
      type: `${SET_FOOD_CATEGORY}`,
      payload: {
        items: categoryItems,
        category: category,
      },
    });
    console.log("CONSOLE LOGGING CATEGORY");
    console.log(categoryItems);
  };

  return (
    <View style={styles.root}>
      <View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.menuItems}>
        <View style={styles.menuTitles}>
          <FlatList
            data={food}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.category}
            renderItem={(item) => (
              <MenuTitle
                title={item.item.category}
                onPress={onPressMenuTitle}
              />
            )}
          />
        </View>
        <View style={{ marginBottom: 50 }}>
          <MenuItems food={categoryItems} />
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 160,
  },
  menuTitles: {
    marginBottom: 4,
    marginTop: 16,
    marginLeft: 12,
  },
  menuItems: {
    paddingHorizontal: 20,
  },
});

const food = [
  {
    category: "Pizza",
    items: [
      {
        name: "Chicken Tikka",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 1,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Fajita",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 2,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Supreme",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 3,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Bonfire",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1399",
        id: 4,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Bonfire",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1499",
        id: 5,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Bonfire",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1999",
        id: 6,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
    ],
  },
  {
    category: "Burger",
    items: [
      {
        name: "Chicken Burger",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 1,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Fajita",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 2,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Supreme",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 3,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Bonfire",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1399",
        id: 4,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
    ],
  },
  {
    category: "Steaks",
    items: [
      {
        name: "Chicken Steak",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 1,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Fajita",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 2,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Supreme",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 3,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Bonfire",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1399",
        id: 4,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
    ],
  },
  {
    category: "Wings",
    items: [
      {
        name: "Buffalo Wings",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 1,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Fajita",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 2,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Supreme",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1099",
        id: 3,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
      {
        name: "Chicken Bonfire",
        description:
          "A Large stuffed crust Pizza made with stretched hand tossed dough, stuffed with cheese making every bite filled with Cheesy Goodness",
        price: "RS 1399",
        id: 4,
        image:
          "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      },
    ],
  },
];

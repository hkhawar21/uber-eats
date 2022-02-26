import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTab from "../components/home/HeaderTab";
import Restaurants from "../components/common/Restaurants";
import { Divider } from "react-native-elements";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navBackground}>
        <HeaderTab />
        {/* <SearchBar /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Restaurants navigation={navigation} />
      </ScrollView>
      <Divider width={2} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  navBackground: {
    backgroundColor: "white",
  },
});

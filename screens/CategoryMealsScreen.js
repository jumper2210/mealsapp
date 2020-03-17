import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};
CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.getParams("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default CategoryMealsScreen;

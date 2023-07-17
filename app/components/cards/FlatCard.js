import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

const FlatCard = ({ item }) => {
  const { thumbnail, brand, bottle_desc } = item;
  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.qty}>2</Text>
        <Title>{brand}</Title>
        <SubTitle>{bottle_desc}</SubTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    height: 80,
    width: "100%",
  },
  image: {
    flex: 0.35,
    height: "100%",
  },
  qty: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});

export default FlatCard;

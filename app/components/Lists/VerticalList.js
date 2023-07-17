import { View, StyleSheet } from "react-native";
import React from "react";
import Title from "../common/Title";
import FlatCard from "../cards/FlatCard";

const VerticalList = ({ title, data }) => {
  console.log("list title", title);
  return (
    <View style={styles.container}>
      <Title>{title}</Title>
      {data.map((item) => (
        <FlatCard item={item} key={item.bottle_id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default VerticalList;

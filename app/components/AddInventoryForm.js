import { View, StyleSheet, TextInput } from "react-native";
import React from "react";

const AddInventoryForm = ({ inputStyle }) => {
  return (
    <View style={styles.container}>
      <TextInput style={inputStyle} placeholder="UPC" />
      <TextInput style={inputStyle} placeholder="Brand" />
      <TextInput style={inputStyle} placeholder="Years Aged" />
      {/* Category needs to be a selection */}
      <TextInput style={inputStyle} placeholder="Category" />
      <TextInput style={inputStyle} placeholder="Size" />
      <TextInput style={inputStyle} placeholder="MSRP" />
      <TextInput style={inputStyle} placeholder="Description" />
      <TextInput style={inputStyle} placeholder="Image" />
      <TextInput style={inputStyle} placeholder="Tasting Notes" />
      <TextInput style={inputStyle} placeholder="Purchase location" />
      <TextInput style={inputStyle} placeholder="Price" />
      <TextInput style={inputStyle} placeholder="Rating" />
      <TextInput style={inputStyle} placeholder="Demand" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default AddInventoryForm;

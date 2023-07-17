import { Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import AddInventoryForm from "../AddInventoryForm";
import AddBottleForm from "../AddBottleForm";
import Screen from "../common/Screen";

const AddBottle = () => {
  const [value, setValue] = useState(0);
  return (
    <Screen>
      {/* <View style={styles.container}> */}
      <Text>Add to Inventory</Text>
      {/* <AddBottleForm inputStyle={styles.input}/> */}
      <AddInventoryForm inputStyle={styles.input} />
      {/* </View> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 5,
    borderRadius: 10,
    paddingLeft: 5,
    marginVertical: 5,
  },
});

export default AddBottle;

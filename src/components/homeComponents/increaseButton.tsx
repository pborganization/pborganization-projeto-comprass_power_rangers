import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const IncreaseButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, { borderTopRightRadius: props.radius }]}>
        <AntDesign name="plus" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

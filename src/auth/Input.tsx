import React,  { forwardRef } from "react";
import { TextInput, TextInputProps, View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { Colors } from "../../assets/styles/Colors";

export const Input = forwardRef((props: TextInputProps, ref)  => {
  return (
    <View style={[styles.container]}>
      <TextInput style={styles.input}  {...props} />
    </View>
  );
});

const styles = StyleSheet.create({
 container: {
   height: 64,
   width: 343,
   paddingHorizontal: 16,
   marginHorizontal: 16,
   marginVertical: 8,
   alignItems: 'center',
   flexDirection: "row",
   justifyContent: 'space-between',
   backgroundColor: Colors.gray_200,
   borderRadius: 12
 },
 input: {
 fontSize: 16,
 color: Colors.gray_500
 },
})

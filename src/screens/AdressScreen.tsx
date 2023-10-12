import React from "react";
import { AdressForm } from "../auth/AddressForm";
import { View, StyleSheet } from "react-native"
import { Colors } from "../../assets/styles/Colors";

export const AdressScreen = () => {
   return (
      <View style={styles.container}>
         <AdressForm />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.white,
   }
})
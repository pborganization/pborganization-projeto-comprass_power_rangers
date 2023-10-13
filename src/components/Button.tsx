import React, { ReactNode } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../assets/styles/Colors";

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
}
export const Button = ({ children, onPress, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity >
      <View style={[styles.container, disabled ? styles.disabled : null]}>
        <Text style={styles.text} disabled={disabled} onPress={onPress}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 25,
    height: 48,
    width: 343,
    backgroundColor: Colors.red_500,
  },
  disabled: {
    backgroundColor: Colors.gray_500
   },
  text: {
   color: Colors.white, 
   fontWeight: 'bold',
  }
})
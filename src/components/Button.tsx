import React, { ReactNode } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../assets/styles/Colors";

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
}
export const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text} onPress={onPress}>{children}</Text>
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
    backgroundColor: Colors.gray_900,
  },
  text: {
   color: Colors.white, 
   fontWeight: 'bold',
  }
})
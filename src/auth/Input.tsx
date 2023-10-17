import React,  { forwardRef, useRef, useState } from 'react';
import { TextInput, TextInputProps, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../assets/styles/Colors';


export const Input = forwardRef((props: TextInputProps, ref)  => {

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handlerBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={[styles.container, isFocused ? styles.focusedInput : null]}>
      <TextInput style={[styles.input, isFocused ? styles.textInputFocused : null]}
        onFocus={handleFocus}
        ref={(inputRef as any)}
        onBlur={handlerBlur}
        {...props}/>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.gray_200,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.gray_200,
  },
  input: {
    fontSize: 14,
    color: Colors.gray_500
  },
  focusedInput: {
    backgroundColor: Colors.white,
    borderColor: Colors.gray_200,
  },
  textInputFocused: {
    color: Colors.black
  }

});

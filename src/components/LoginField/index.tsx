import { useState } from 'react';
import { Text } from '../Text';
import { Container, IconContainer, Input } from './styles';
import { StyleSheet } from 'react-native';
import { FieldError } from 'react-hook-form';
// import {ValidIcon} from '../Icons/ValidIcon';
// import {InvalidIcon} from '../Icons/InvalidIcon';
import React from 'react';
import { ClosedEye } from '../Icons/ClosedEye';
import { OpenEye } from '../Icons/OpenEye';

interface LoginFieldProps {
  children: string;
  isInvalid: FieldError | undefined;
  showIcon: boolean;
  onChangeText: () => void;
  isPassword?: boolean;
  value: string;
}

export function LoginField({
  children,
  isInvalid,
  showIcon,
  onChangeText,
  isPassword,
  value,
  ...rest
}: LoginFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container style={isInvalid && styles.isInvalid}>
      <Text
        size={11}
        color={isInvalid ? '#EA6275' : '#9B9B9B'}
        style={[styles.fieldName, isFocused && styles.focusedFieldName]}
      >
        {children}
      </Text>
      <Input
        onChangeText={onChangeText}
        secureTextEntry={isPassword && isSecureEntry}
        value={value}
        onFocus={handleFocus}
        onBlur={!value ? handleBlur : null}
        {...rest}
      />

      {isPassword ? (
        <IconContainer
          style={styles.Icon}
          onPress={() => {
            setIsSecureEntry((prev) => !prev);
          }}
        >
          {isSecureEntry ? <ClosedEye /> : <OpenEye />}
        </IconContainer>
      ) : (
        <></>
      )}

      {/* {showIcon ? (
        <IconContainer style={styles.Icon}>
          {isInvalid ? <InvalidIcon /> : <ValidIcon />}
        </IconContainer>
      ) : (
        <></>
      )} */}
    </Container>
  );
}

const styles = StyleSheet.create({
  fieldName: {
    position: 'absolute',
    left: 16,
    top: 22,
    fontSize: 14,
    color: '#9B9B9B',
  },
  focusedFieldName: {
    top: 12,
    fontSize: 12,
  },
  isInvalid: {
    borderWidth: 1,
    borderColor: '#EA6275',
  },
  Icon: {
    position: 'absolute',
    top: 22,
    right: 16,
  },
  Transparent: {
    display: 'none',
  },
});

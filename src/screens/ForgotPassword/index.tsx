import { ImageBackground, Dimensions, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { LoginField } from '../../components/LoginField';
import { Text } from '../../components/Text';
import { LeftArrow } from '../../components/LeftArrow';
import { useState } from 'react';

const schema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z0-9\s]+$/,
      'Name can only contain letters, numbers, and spaces'
    )
    .required('Please complete all fields'),
  email: yup
    .string()
    .email('Your email is not valid')
    .required('Please complete all fields'),
  password: yup
    .string()
    .min(6, 'Your password must be longer than 6 digits.')
    .required('Please complete all fields'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Your password is not the same as your confirmation'
    )
    .required('Please complete all fields'),
});

export function ForgotPasswordScreen() {
  const [isFontsLoaded] = useFonts({
    'OpenSans-400': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-600': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-700': require('../../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-800': require('../../assets/fonts/OpenSans-ExtraBold.ttf'),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (!isFontsLoaded) {
    return null;
  }

  async function handleEmailCheck(data: any) {
    setIsSubmitting(true);

    const { email } = data;

    const userData = {
      email: email,
    };

    fetch('https://api.escuelajs.co/api/v1/users/is-available', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Handle the response data here
        console.log('Successfully registered:', data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  function handlePasswordChange(data: any) {
    setIsSubmitting(true);

    const { email, password } = data;

    const userData = {
      email: email,
      password: password,
    };

    fetch('https://api.escuelajs.co/api/v1/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Handle the response data here
        console.log('Successfully registered:', data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }
  return (
    <Container>
      <ImageBackground
        source={require('../../assets/img/CompassBackgroundLogo.png')}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        resizeMode="contain"
      >
        <LeftArrow />

        <Text size={32} weight={800} color="#FFF" style={styles.Title}>
          Forgot Password
        </Text>
        <Text size={16} color="#FFF" style={styles.Description}>
          Enter your email and let us see if it exists for you to change your
          password :)
        </Text>
        <Form>
          <Controller
            control={control}
            name="email"
            render={({
              formState: { isSubmitted },
              field: { onChange, value, ...rest },
            }) => (
              <LoginField
                isInvalid={errors.email}
                showIcon={isSubmitted}
                onChangeText={onChange}
                value={value}
              >
                Email
              </LoginField>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({
              formState: { isSubmitted },
              field: { onChange, value, ...rest },
            }) => (
              <LoginField
                isInvalid={errors.password}
                showIcon={isSubmitted}
                onChangeText={onChange}
                value={value}
                isPassword={true}
              >
                New Password
              </LoginField>
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({
              formState: { isSubmitted },
              field: { onChange, value, ...rest },
            }) => (
              <LoginField
                isInvalid={errors.confirmPassword}
                showIcon={isSubmitted}
                onChangeText={onChange}
                value={value}
                isPassword={true}
                isSubmitting={isSubmitting}
              >
                Confirm New Password
              </LoginField>
            )}
          />

          {errors.email && (
            <Text size={14} color="#EA6275" style={styles.ErrorsText}>
              {errors.email?.message}
            </Text>
          )}

          {!errors.email && errors.password && (
            <Text size={14} color="#EA6275" style={styles.ErrorsText}>
              {errors.password?.message}
            </Text>
          )}

          {!errors.email &&
            !errors.password &&
            errors.confirmPassword && (
            <Text size={14} color="#EA6275" style={styles.ErrorsText}>
              {errors.confirmPassword?.message}
            </Text>
          )}

          <Button onPress={handleSubmit(handleEmailCheck)} disabled={isSubmitting}>
            SEARCH
          </Button>

          <Button onPress={handleSubmit(handlePasswordChange)} disabled={isSubmitting}>
            CONFIRM
          </Button>
        </Form>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  Title: {
    marginLeft: 16,
  },
  Description: {
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  ErrorsText: {
    marginLeft: 16,
  },
});

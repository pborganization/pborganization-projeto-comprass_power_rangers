import { useState } from 'react';
import { ImageBackground, Dimensions, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Form, Logo, OtherOptions } from './styles';
import { LoginField } from '../../components/LoginField';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { FirstPartLogo } from '../../components/Icons/FirstPartLogo';
import { LogoUol } from '../../components/Icons/LogoUol';
import { SecondPartLogo } from '../../components/Icons/SecondPartLogo';
import { SubText } from '../../components/SubText';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid Email')
    .required('Please complete all fields'),
  password: yup
    .string()
    .min(6, 'A valid password must have at least 6 characters')
    .required('Please complete all fields'),
});

export function LoginScreen() {
  const [isFontsLoaded] = useFonts({
    'OpenSans-400': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-600': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-700': require('../../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-800': require('../../assets/fonts/OpenSans-ExtraBold.ttf'),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = useNavigation();

  const { user, signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogIn(data: any) {
    setIsSubmitting(true);

    const { email, password } = data;

    const userData = {
      email: email,
      password: password,
    };

    fetch('https://api.escuelajs.co/api/v1/auth/login', {
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
        const { access_token } = data;
        signIn(access_token);
        console.log('Successfully registered:', data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });

    {
      console.log(user);
    }
  }

  if (!isFontsLoaded) {
    return null;
  }

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };
  const handleNotLogin = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar style="light" backgroundColor="#111213" />
      <Container>
        <ImageBackground
          source={require('../../assets/img/CompassBackgroundLogo.png')}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          resizeMode="contain"
        >
          <Logo>
            <FirstPartLogo />
            <View style={{ marginLeft: 4.9, marginRight: 5.91 }}>
              <LogoUol />
            </View>
            <View style={{ marginBottom: -8.52 }}>
              <SecondPartLogo />
            </View>
          </Logo>

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
                  Password
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

            <Button
              styles={styles.Button}
              disabled={isSubmitting}
              onPress={handleSubmit(handleLogIn)}
            >
              LOGIN
            </Button>
          </Form>

          <OtherOptions>
            <SubText onPress={handleSignUp}>
              Not have an account yet? Sign up
            </SubText>
            <SubText onPress={handleForgotPassword}>
              I forgot my password
            </SubText>
            <SubText onPress={handleNotLogin}>I don't want to log in</SubText>
          </OtherOptions>
        </ImageBackground>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  ErrorsText: {
    marginLeft: 16,
  },
  Button: {
    marginBottom: 31,
    marginLeft: 16,
  },
});

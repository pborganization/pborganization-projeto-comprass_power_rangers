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
import { useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

const emailSchema = yup.object({
  email: yup
    .string()
    .email('Your email is not valid')
    .required('Please complete all fields'),
});

const passwordSchema = yup.object({
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

  useCallback(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);

  const { user } = useAuth();

  const {
    control: emailControl,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });

  const {
    control: passwordControl,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  if (!isFontsLoaded) {
    return null;
  }

  async function checkEmailValidity() {
    setIsEmailSubmitting(true);

    emailSchema
      .validate({ email: emailValue })
      .then(() => {
        // Email is valid; you can make the API call here
        const userData = {
          email: emailValue,
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
            console.log('Email is valid:', data);
            setIsEmailValid(true);
          })
          .catch((error) => {
            // Handle errors here
            console.error('Error:', error);
          })
          .finally(() => {
            setIsEmailSubmitting(false);
          });
      })
      .catch((error) => {
        console.error('Invalid email:', error);
        setIsEmailSubmitting(false);
      });
  }

  async function handlePasswordChange(data: any) {
    setIsPasswordSubmitting(true);

    const { password } = data;

    try {
      if (!user) {
        console.error('User is not authenticated');
        setIsPasswordSubmitting(false);
        return;
      }

      // Obtém o ID do usuário do perfil
      const profileResponse = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });

      if (!profileResponse.ok) {
        throw new Error('Error fetching user profile');
      }

      const userProfile = await profileResponse.json();
      const userId = userProfile.id;

      // Atualiza a senha do usuário
      const updateUserResponse = await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user}`,
        },
        body: JSON.stringify({
          password: password,
        }),
      });

      if (!updateUserResponse.ok) {
        throw new Error('Error updating user');
      }

      const updatedUserData = await updateUserResponse.json();
      console.log('Successfully updated user:', updatedUserData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsPasswordSubmitting(false);
    }
  }

  return (
    <>
      <StatusBar
        backgroundColor="#111213"
        translucent
        barStyle={'light-content'}
      />
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
              control={emailControl}
              name="email"
              render={({ field }) => (
                <LoginField
                  isInvalid={emailErrors.email}
                  showIcon={isEmailValid || emailErrors.email}
                  onChangeText={(text) => {
                    setEmailValue(text);
                    field.onChange(text);
                  }}
                  value={field.value}
                  isEmailCheck={true}
                  isSubmitting={isEmailSubmitting}
                >
                  Email
                </LoginField>
              )}
            />

            <Controller
              control={passwordControl}
              name="password"
              render={({ field }) => (
                <LoginField
                  isInvalid={passwordErrors.password}
                  showIcon={passwordErrors.password}
                  onChangeText={field.onChange}
                  value={field.value}
                  isPassword={true}
                  editable={isEmailValid}
                >
                  New Password
                </LoginField>
              )}
            />

            <Controller
              control={passwordControl}
              name="confirmPassword"
              render={({ field }) => (
                <LoginField
                  isInvalid={passwordErrors.confirmPassword}
                  showIcon={passwordErrors.confirmPassword}
                  onChangeText={field.onChange}
                  value={field.value}
                  isPassword={true}
                  isSubmitting={isPasswordSubmitting}
                  editable={isEmailValid}
                >
                  Confirm New Password
                </LoginField>
              )}
            />

            <Button
              onPress={handleEmailSubmit(checkEmailValidity)}
              disabled={isEmailSubmitting}
            >
              SEARCH
            </Button>

            <Button
              onPress={handlePasswordSubmit(handlePasswordChange)}
              disabled={isPasswordSubmitting || !isEmailValid}
            >
              CONFIRM
            </Button>

            {emailErrors.email && (
              <Text size={14} color="#EA6275" style={styles.ErrorsText}>
                {emailErrors.email?.message}
              </Text>
            )}

            {passwordErrors.password && (
              <Text size={14} color="#EA6275" style={styles.ErrorsText}>
                {passwordErrors.password?.message}
              </Text>
            )}

            {!passwordErrors.password && passwordErrors.confirmPassword && (
              <Text size={14} color="#EA6275" style={styles.ErrorsText}>
                {passwordErrors.confirmPassword?.message}
              </Text>
            )}
          </Form>
        </ImageBackground>
      </Container>
    </>
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

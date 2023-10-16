import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '../components/Buttons/Button';
import { Input } from './Input';
import { Colors } from '../../assets/styles/Colors';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddress } from '../../contexts/zustand';


export const AddressForm = () => {
  const schemaValidate = yup.object({
    zipCode: yup.string().required('Postal Code is required'),
    address: yup.string().required('Adress is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State, Province or region is required'),
    fullName: yup.string().required('Full name is required'),
  });
  const {
    control,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidate),
    mode: 'onChange',
    defaultValues: {
      zipCode: '',
      address: '',
      city: '',
      state: '',
      fullName: '',
    },
  });

  const [zipCode, setZipCode] = useState('');
  const [isValidZipCode, setIsValidZipCode] = useState(false);
  const [allFieldsFilled, setFieldsFilled] = useState(false);
  const setAddress = useAddress(state => state.setAddress);


  const onSubmit = async () => {
    if (isValidZipCode && allFieldsFilled) {
      console.log('envie os dados');
      const formData = {
        zipCode: getValues('zipCode'),
        address: getValues('address'),
        city: getValues('city'),
        state: getValues('state'),
        fullName: getValues('fullName'),
      };
  
      setAddress(formData);
  
      console.log('Novo estado do endereço:', useAddress.getState().address);
    } else {
      console.log('preencha todos os campos');
    }

    if (isValidZipCode) {
      console.log('deu certo');
    } else {
      console.log('Dados inválidos.');
    }
  };
  useEffect(() => {
    if (zipCode.length <= 8 ) {
      const apiUrl = `https://viacep.com.br/ws/${zipCode}/json/`;

      fetch(apiUrl, {
        method: 'GET',
      })
        .then((response) => {
          if (response.status === 404) {
            console.log('Código postal não encontrado');
            setIsValidZipCode(false);
          } else if (response.ok) {
            console.log('Código postal válido');
            setIsValidZipCode(true);
          } else if (response.status === 400) {
            console.log('Cep invalido');
            setIsValidZipCode(false);
          } else {
            console.log(
              'Erro desconhecido',
              zipCode,
              apiUrl,
              response.status,
              response.statusText
            );
            setIsValidZipCode(false);
          }
        })
        .catch((error) => {
          console.error('Erro ao chamar a API:', error);
          setIsValidZipCode(false);
        });
    } else {
      console.log('Codigo invalidooo');
    }
  }, [zipCode]);

  const checkAllFields = () => {
    const { zipCode, address, city, state, fullName } = getValues();
    const fields = [zipCode, address, city, state, fullName];

    const isFilled = fields.every((value) => value.trim());
    setFieldsFilled(isFilled);
  };

  useEffect(() => {
    checkAllFields();
  }, [getValues()]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          name="zipCode"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Zip Code (Postal Code)"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                setZipCode(text);
              }}
              style={[
                value && !errors.zipCode ? styles.validInput : null,
              ]}
            />
          )}
        />
        {errors.zipCode && <Text  style={styles.errorMessage}>{errors.zipCode.message}</Text>}

        <Controller
          name="address"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Address"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.address && <Text  style={styles.errorMessage}>{errors.address.message}</Text>}

        <Controller
          name="city"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input placeholder="City" value={value} onChangeText={onChange} />
          )}
        />
        {errors.city && <Text  style={styles.errorMessage}>{errors.city.message}</Text>}

        <Controller
          name="state"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="State/Province/Region"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.state && <Text  style={styles.errorMessage}>{errors.state.message}</Text>}

        <Controller
          name="fullName"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Full name"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.fullName && <Text style={styles.errorMessage}>{errors.fullName.message}</Text>}
      </View>

      <Button
        disabled={!isValidZipCode}
        onPress={handleSubmit(onSubmit)}
      >
        SAVE ADDRESS
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    top: 32,
  },
  errorMessage: {
    color: Colors.red_500,
    marginHorizontal: 16,
  }, 
  validInput: {
    borderColor: Colors.green_900
  }
});

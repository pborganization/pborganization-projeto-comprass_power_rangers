import React, {useState, useEffect} from "react";
import { View, StyleSheet, TextInput, Text} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/Button";
import { Input } from "./Input";


export const AdressForm = () => {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      zipCode: '',
      address: '',
      city: '',
      state: '',
      fullName: ''

    }
  });

  const [zipCode, setZipCode] = useState("");
  const [isValidZipCode, setIsValidZipCode] = useState(true)

  const onSubmit = async (data: any) => {
    console.log(data);

    if (isValidZipCode) {
      console.log('deu certo porra');
    } else {
      console.log("Dados inválidos.")
    }
  };
  useEffect(() => {
  
    if (zipCode.length === 8) {
      
      const apiUrl = `https://viacep.com.br/ws/${zipCode}/json/`;

      
      fetch(apiUrl, {
        method: "GET",
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
            console.log('Erro desconhecido', zipCode, apiUrl, response.status, response.statusText);
            setIsValidZipCode(false);
          }
        })
        .catch((error) => {
          console.error("Erro ao chamar a API:", error);
          setIsValidZipCode(false);
        });
    }
  }, [zipCode]);


   
  return (
    <View style={styles.container}>
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
            onBlur={onBlur}
          />
        )}
      />
     {errors.zipCode && <Text>This is required.</Text>}


      <Controller
        name="address"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Address"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.address && <Text>This is required.</Text>}


      <Controller
        name="city"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="City"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.city && <Text>This is required.</Text>}


      <Controller
        name="state"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="State/Province/Region"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.state && <Text>This is required.</Text>}


      <Controller
        name="fullName"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Full name"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.fullName && <Text>This is required.</Text>}

    
    <Button onPress={handleSubmit(onSubmit)}>SAVE ADDRESS</Button>
    </View>
  );
        };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 32,
  },
});

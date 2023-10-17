<<<<<<< HEAD
import React, {ReactNode} from 'react';
=======
import React, { ReactNode } from 'react';
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/styles/Colors';

interface PriceProps {
<<<<<<< HEAD
   children: ReactNode
}
export const TotalAmount = ({children}: PriceProps) => {
=======
  children: ReactNode;
}
export const TotalAmount = ({ children }: PriceProps) => {
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
  return (
    <View style={styles.container}>
      <Text style={styles.totalAmount}>Total amount:</Text>
      <Text style={styles.price}>{children} R$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
<<<<<<< HEAD
    width: 343,
    height: 22,
    margin: 16,
=======
    width: '100%',
    paddingHorizontal: 18,
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
  },
  totalAmount: {
    fontSize: 14,
    color: Colors.gray_500,
  },
  price: {
    fontWeight: '600',
<<<<<<< HEAD
    fontSize: 18
  }
});
=======
    fontSize: 18,
    justifyContent: 'flex-end',
    marginLeft: 16,
  },
});
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50

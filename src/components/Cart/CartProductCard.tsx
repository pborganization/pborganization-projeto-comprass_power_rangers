import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Delete } from "../../../assets/images/svg/DeleteProduct";
import { Colors } from "../../../assets/styles/Colors";
import { AntDesign } from "@expo/vector-icons";

interface ProductProps {
  title: string;
  price: number;
  image?: string;
}

export const CartProductCard = ({ title, price, image }: ProductProps) => {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrementValue = () => {
    setValue((prevState) => prevState - 1);
  };
  const handleDelete = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/image.png")}
        />
      </View>

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.deleteIcon}>
            <Delete onPress={handleDelete} />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.count}>
            <AntDesign
              onPress={decrementValue}
              name="minuscircle"
              size={36}
              color={Colors.red_500}
            />
            <Text style={styles.countText}>{value}</Text>
            <AntDesign
              onPress={incrementValue}
              name="pluscircle"
              size={36}
              color={Colors.red_500}
            />
          </View>

          <Text style={styles.price}>{price} R$</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 343,
    height: 104,
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 1,
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 2,
    justifyContent: "space-between",
  },
  deleteIcon: {
    position: "absolute",
    right: 0,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 5,
  },
  count: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 12,
  },
  countText: {
    fontSize: 14,
    fontWeight: "600",
    margin: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 16,
  },
  img: {
    display: "flex",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});

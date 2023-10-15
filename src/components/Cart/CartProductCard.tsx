import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Delete } from '../../../assets/images/svg/DeleteProduct';
import { Colors } from '../../../assets/styles/Colors';
import { ProductType } from '../../contexts/productType';
import { useProductStore } from '../../hooks/productStore';
import { QuantityIndicator } from '../home/quantityIndicator';

interface ProductProps {
	product: ProductType;
}

export const CartProductCard: React.FC<ProductProps> = ({ product }) => {
	const { products, setProductState } = useProductStore();

	const productState = products[product.id];

	const handleDelete = () => {
		setProductState(product.id, {
			...productState,
			quantity: 0,
		});
	};
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.img} source={{ uri: product.images[0] }} />
			</View>

			<View style={styles.infoContainer}>
				<View>
					<Text style={styles.text}>{product.title}</Text>
					<View style={styles.deleteIcon}>
						<Delete onPress={handleDelete} />
					</View>
				</View>
				<View style={styles.itemContainer}>
					<QuantityIndicator
						productId={product.id}
						increasestyle={styles.increaseButton}
						decreasestyle={styles.decreaseButton}
					/>

					<Text style={styles.price}>{product.price} R$</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
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
		justifyContent: 'space-between',
	},
	deleteIcon: {
		position: 'absolute',
		right: 0,
	},
	itemContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 12,
		marginHorizontal: 5,
	},
	count: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 12,
	},
	countText: {
		fontSize: 14,
		fontWeight: '600',
		margin: 8,
	},
	price: {
		fontSize: 14,
		fontWeight: '600',
		marginHorizontal: 16,
	},
	img: {
		display: 'flex',
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
	},
	increaseButton: {
		backgroundColor: Colors.red_500,
	},
	decreaseButton: {
		backgroundColor: Colors.red_500,
	},
});

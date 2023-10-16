import axios from 'axios';
import { ProductType } from '../contexts/productType';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

export const fetchCategories = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    const categoriesData = await response.json();
    return categoriesData;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    throw error;
  }
};

export const fetchProductsForCategory = async (
  categoryId: any,
  offset: any,
  limit: any
) => {
  try {
    const response = await api.get(
      `/products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (productId: any) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function fetchProductCountForCategory(categoryId: any) {
  try {
    const response = await api.get(`/products?categoryId=${categoryId}`);
    return response.data.length;
  } catch (error) {
    console.error('Erro ao buscar produtos da categoria:', error);
    return 0; // Trate o erro adequadamente de acordo com a sua aplicação.
  }
}

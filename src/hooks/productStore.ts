import { create } from "zustand";

interface ProductState {
  quantity: number;
}

interface ProductStore {
  products: Record<number, ProductState>;
  setProductState: (productId: number, state: ProductState) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: {},
  setProductState: (productId, state) =>
    set((prev) => ({ products: { ...prev.products, [productId]: state } })),
  increaseQuantity: (productId) => {
    set((prev) => {
      const updatedProducts = { ...prev.products };
      updatedProducts[productId] = {
        quantity: (updatedProducts[productId]?.quantity || 0) + 1,
      };
      return { products: updatedProducts };
    });
  },
  decreaseQuantity: (productId) => {
    set((prev) => {
      const updatedProducts = { ...prev.products };
      const currentQuantity = updatedProducts[productId]?.quantity || 0;
      if (currentQuantity > 0) {
        updatedProducts[productId] = {
          quantity: currentQuantity - 1,
        };
      }
      return { products: updatedProducts };
    });
  },
}));

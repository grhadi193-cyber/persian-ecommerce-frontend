import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem(product, quantity = 1) {
        const items = get().items;
        const existing = items.find((i) => i.product.id === product.id);
        if (existing) {
          set({
            items: items.map((i) =>
              i.product.id === product.id
                ? { ...i, quantity: Math.min(i.quantity + quantity, product.stock || 99) }
                : i
            ),
          });
        } else {
          set({ items: [...items, { product, quantity }] });
        }
      },

      removeItem(productId) {
        set({ items: get().items.filter((i) => i.product.id !== productId) });
      },

      updateQuantity(productId, quantity) {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i
          ),
        });
      },

      clearCart() {
        set({ items: [] });
      },

      get totalItems() {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },

      get subtotal() {
        return get().items.reduce(
          (sum, i) =>
            sum +
            (i.product.discount_price || i.product.price) * i.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;

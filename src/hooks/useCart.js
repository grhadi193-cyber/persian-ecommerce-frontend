import useCartStore from '../store/cartStore';

export const useCart = () => {
  const store = useCartStore();
  const totalItems = store.items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = store.items.reduce(
    (s, i) => s + (i.product.discount_price || i.product.price) * i.quantity,
    0
  );
  return { ...store, totalItems, subtotal };
};

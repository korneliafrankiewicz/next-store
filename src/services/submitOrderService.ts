import { CartProduct } from '@/app/models/cartProduct';
import { mapFromCartProductToCMSProduct } from '@/app/helpers';

export const submitOrder = async (cartProducts: CartProduct[], user: any, totalQuantity: number, total: number) => {
  const products = cartProducts.map((item) => mapFromCartProductToCMSProduct(item));

  const orderData = {
    data: {
      products,
      totalAmount: totalQuantity,
      totalPrice: total,
      user: user?.email,
    },
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit order');
  }
  await response.json(); 
  return orderData;
}
import {CartProduct} from '@/app/models/cartProduct';

export const submitOrder = async (orderData: CartProduct) => {
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

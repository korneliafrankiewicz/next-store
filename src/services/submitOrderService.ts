import {OrderData} from '@/app/models/orderData';

export const submitOrderService = async (orderData: OrderData) => {
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

  console.log(orderData);
  await response.json(); 
  console.log('Order submitted from service:', orderData);
  return orderData;
}

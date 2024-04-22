import useSWR, { mutate } from 'swr';

const orderProducts = async (cartItems: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonResponse = await response.json();
    console.log('Order saved successfully:', jsonResponse);

    mutate(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/order`, jsonResponse, false);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
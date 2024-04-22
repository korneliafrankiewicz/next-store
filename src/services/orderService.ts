import useSWR, { mutate } from 'swr';

// ... (fetcher function and useProducts hook)

const orderProducts = async (cartItems) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/cart`, {
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
    console.log('Cart saved successfully:', jsonResponse);

    // After a successful save, update the local data
    mutate(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/cart`, jsonResponse, false);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
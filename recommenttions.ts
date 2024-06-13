import dotenv from 'dotenv';
dotenv.config();

import fetch from 'node-fetch';

export async function getProductRecommendations(productId: number) {
  const apiKey = process.env.VERCEL_AI_API_KEY;
  console.log(process.env);
  if (!apiKey) {
    throw new Error('Missing VERCEL_AI_API_KEY');
  }

  const response = await fetch('https://api.vercel.ai/recommendations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'product-recommendations',
      itemID: productId,
      limit: 5,
    }),
  });

  const data = await response.json() as { recommendations: any[] };
  return data.recommendations || [];
}

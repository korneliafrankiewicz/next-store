export async function getProductRecommendations(productId: number) {
  const apiKey = process.env.NEXT_PUBLIC_VERCEL_AI_API_KEY;
  console.log('NEXT_PUBLIC_VERCEL_AI_API_KEY:', process.env);
  if (!apiKey) {
    throw new Error('Missing NEXT_PUBLIC_VERCEL_AI_API_KEY');
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

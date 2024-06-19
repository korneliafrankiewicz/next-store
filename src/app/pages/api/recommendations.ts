import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
   
    const { productId } = req.body;

    const apiKey = process.env.NEXT_PUBLIC_VERCEL_AI_API_KEY;
    if (!apiKey) {
      throw new Error('Missing NEXT_PUBLIC_VERCEL_AI_API_KEY');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommendations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        itemID: productId,
        limit: 5, 
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recommendations from Vercel AI');
    }

    console.log('response from:', response);

    const data = await response.json();

    res.status(200).json({ recommendations: data.recommendations });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
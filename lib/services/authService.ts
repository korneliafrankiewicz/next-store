interface LoginResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

interface LoginError {
  message: string;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse | LoginError> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login error');
    }

    return data;
  } catch (error: any) {
    return { message: error.message || 'Login error' };
  }
};

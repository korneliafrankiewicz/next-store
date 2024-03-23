interface RegisterResponse {
    jwt: string;
    user: {
      id: number;
      username: string;
      email: string;
    };
  }
  
  interface RegisterError {
    message: string;
  }
  
  export const registerUser = async (
    email: string,
    username: string,
    password: string
  ): Promise<RegisterResponse | RegisterError> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Registration error');
      }
  
      return data;
    } catch (error: any) {
      return { message: error.message || 'Registration error' };
    }
  };
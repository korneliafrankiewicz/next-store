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
  errorType?: 'password' | 'email' | 'empty';
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse | LoginError> => {
  if (!email.trim() && !password.trim()) {
    return {
      message: 'email and password fields cannot be empty',
      errorType: 'empty',
    };
  }
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
      let errorType: 'password' | 'email' | 'empty' | undefined;

      if (data.error.message.includes('password')) {
        errorType = 'password';
      } else if (
        data.error.message.includes('identifier') ||
        data.error.message.includes('email')
      ) {
        errorType = 'email';
      }

      throw new Error(
        JSON.stringify({
          message: data.error.message || 'Login error',
          errorType,
        })
      );
    }

    return data;
  } catch (error: any) {
    let errorMessage: string = 'Login error';
    let errorType: 'password' | 'email' | 'empty' | undefined;

    try {
      const errorData = JSON.parse(error.message);
      errorMessage = errorData.message;
      errorType = errorData.errorType;
    } catch (parseError) {
        console.error('Error parsing the error message:', parseError);
        return { message: 'Error during login. Please try again.', errorType: undefined };
    }

    return { message: errorMessage, errorType };
  }
};

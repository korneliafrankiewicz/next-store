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
  errorType?: 'password' | 'email' | 'empty' | null;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse | LoginError> => {

  let ErrorType: 'password' | 'email' | 'empty' | null | undefined;

  if (!email.trim() && !password.trim()) {
    return {
      message: 'email and password fields cannot be empty',
      errorType: ErrorType,
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
      ErrorType;

      if (data.error.message.includes('password')) {
        ErrorType = 'password';
      } else if (
        data.error.message.includes('identifier') ||
        data.error.message.includes('email')
      ) {
        ErrorType = 'email';
      }

      throw new Error(
        JSON.stringify({
          message: data.error.message || 'Login error',
          errorType: ErrorType,
        })
      );
    }

    return data;
  } catch (error: any) {
    let errorMessage: string = 'Login error';
    ErrorType;

    try {
      const errorData = JSON.parse(error.message);
      errorMessage = errorData.message;
      ErrorType = errorData.errorType;
    } catch (parseError) {
      console.error(`'Error parsing the error message:' errorType: ${JSON.parse(error)}`);
      return {
        message: 'Error during login. Please try again.',
        errorType: JSON.parse(error),
      };
    }

    return { message: errorMessage, errorType: ErrorType};
  }
};

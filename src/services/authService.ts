import useSWRMutation from 'swr/mutation'

interface LoginData { 
  identifier: string;
  password: string;
  user: string;
}

interface LoginResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
  status: number;
  message: string;
}
interface LoginError {
  message: string;
  errorType?: 'password' | 'email' | 'empty' | null;
  status?: number;
}

 const login = async (url: string,
  data: LoginData
): Promise<LoginResponse | LoginError> => {

  let ErrorType: 'password' | 'email' | 'empty' | null | undefined;

  if (!data.identifier.trim() && !data.password.trim()) {
    return {
      message: 'email and password fields cannot be empty',
      errorType: ErrorType,
    };
  }
  try {
    const response = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
    );

    if (!response.ok) {
      ErrorType;
      const data = await response.json();

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

    return {
      data: await response.json(),
      status: response.status,
    };

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

export const useLogin = () => {
  const { data, error, trigger, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
    (url, { arg} : {arg: LoginData}) => login(url, arg)
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error ? { message: error.message } : null,
    trigger,
  };
}

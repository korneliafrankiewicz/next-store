import useSWRMutation from 'swr/mutation';

interface RegisterData {
  username: string;
  email: string;
  password: string;
}
interface RegisterResponse {
  user: {
    username: string;
    email: string;
  };
}

interface RegisterError {
  message: string;
}

const registerUser = async (url: string,
  data: RegisterData
): Promise<RegisterResponse | RegisterError> => {
  const res = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error('An error occurred while registering the user.');
  }
  return res.json();
};

export const useRegisterUser = () => {
  const { data, error, trigger, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`,
    (url, { arg } : { arg: RegisterData }) => registerUser(url, arg)
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error ? { message: error.message } : null,
    trigger
  };
};
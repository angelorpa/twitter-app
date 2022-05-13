import { setSession } from '../auth';

export async function signIn({ username, password }) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/v1/users/signin`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    },
  );
  const json = await response.json();
  if (response.ok) {
    setSession({
      user: json.data,
      token: json.meta.token,
    });

    return json;
  } else {
    return Promise.reject(json.message);
  }
}

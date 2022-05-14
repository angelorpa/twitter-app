import http from './http';

import { setSession } from '../auth';

export async function signIn({ username, password }) {
  return http
    .post(`/users/signin`, { username, password })
    .then(({ data: json }) => {
      setSession({
        user: json.data,
        token: json.meta.token,
      });

      return json;
    });
}

import useSWR from 'swr';

import { getTweet, updateTweet } from '../api/tweets';

export default function useTweet({ id }) {
  const { data, error, mutate } = useSWR(`/tweets/${id}`, () =>
    getTweet({ id }),
  );

  function like() {
    const payload = {
      id,
      likes: data.likes + 1,
    };

    mutate(
      {
        ...data,
        likes: payload.likes,
      },
      false,
    );

    updateTweet(payload);
  }

  return {
    data: data ?? {},
    error,
    loading: !error && !data,
    actions: {
      like,
    },
  };
}

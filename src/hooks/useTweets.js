import useSWR from 'swr';

import { getTweets, updateTweet } from '../api/tweets';

export default function useTweets() {
  const { data, error, mutate } = useSWR(`/tweets`, getTweets);

  function like({ id }) {
    const payload = {
      id,
    };

    const updatedData = data.data.map(function (item) {
      if (item.id === id) {
        payload.likes = item.likes + 1;
        return {
          ...item,
          likes: payload.likes,
        };
      }
      return item;
    });

    mutate(
      {
        ...data,
        data: updatedData,
      },
      false,
    );

    updateTweet(payload);
  }

  return {
    data: data?.data || [],
    error,
    loading: !error && !data,
    actions: {
      like,
    },
  };
}

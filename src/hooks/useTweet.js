import useSWR from 'swr';

import { getTweet } from '../api/tweets';

export default function useTweet({ id }) {
  const { data, error } = useSWR(`/tweets/${id}`, () => getTweet({ id }));

  return {
    data,
    error,
    loading: !error && !data,
  };
}

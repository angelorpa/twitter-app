import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Tweet from '../components/Tweet';
import useTweet from '../hooks/useTweet';

export default function SingleTweet() {
  const params = useParams();
  const { data, error, loading } = useTweet({
    id: params.id,
  });

  if (loading) {
    return (
      <Spinner animation="border" role="status" style={{ margin: '16px auto' }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      {error && <p>{error.message}</p>}
      <Tweet user={data?.user} date={data?.date} content={data?.content} />
    </>
  );
}

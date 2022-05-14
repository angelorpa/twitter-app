import React from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';

import Tweet from '../components/Tweet';
import useTweet from '../hooks/useTweet';

export default function SingleTweet() {
  const params = useParams();
  const {
    data,
    error,
    loading,
    actions: { like },
  } = useTweet({
    id: params.id,
  });

  function onLike(event) {
    event.stopPropagation();

    like({ id: data.id });
  }

  if (loading) {
    return (
      <Spinner animation="border" role="status" style={{ margin: '16px auto' }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      {error && <Alert variant="danger">{error.message}</Alert>}
      <Tweet
        user={data.user}
        date={data.date}
        content={data.content}
        commentsCount={data.commentsCount}
        comments={data.comments}
        likes={data.likes}
        onLike={onLike}
      />
    </>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Tweet from './../components/Tweet';
import useTweets from '../hooks/useTweets';
import { Alert } from 'bootstrap';

export default function List() {
  const navigate = useNavigate();
  const { data, error, loading } = useTweets();

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
      {data.map(function (item) {
        return (
          <div
            onClick={function (event) {
              navigate(`/tweets/${item.id}`);
            }}
            key={item.id}
          >
            <Tweet
              user={item.user}
              date={item.date}
              content={item.content}
              commentsCount={item.commentsCount}
            />
          </div>
        );
      })}
    </>
  );
}

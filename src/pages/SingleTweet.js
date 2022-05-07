import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Tweet from '../components/Tweet';
import { getTweet } from '../api/tweets';

export default function SingleTweet() {
  const params = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadTweet() {
    setLoading(true);
    try {
      const response = await getTweet({
        id: params.id,
      });
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(function () {
    loadTweet();
  }, []);

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
      <Tweet user={data.user} date={data.date} content={data.content} />
    </>
  );
}

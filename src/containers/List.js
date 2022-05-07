import React, { useEffect, useState } from 'react';
import Tweet from './../components/Tweet';
import { getTweets } from './../api/tweets';

export default function List() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadList() {
    setLoading(true);
    try {
      const response = await getTweets();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(function () {
    loadList();
  }, []);

  if (loading) {
    return <p>Loading ....</p>;
  }

  return (
    <>
      {error && <p>{error.message}</p>}
      {data.map(function (item) {
        return (
          <Tweet
            key={item._id}
            user={item.user}
            date={item.date}
            content={item.content}
          />
        );
      })}
    </>
  );
}

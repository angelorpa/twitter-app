function transformTweet(item) {
  return {
    id: item._id,
    content: item.content,
    date: item.createdAt,
    user: {
      name: item.userId ? item.userId.name : 'Unknown',
      username: item.userId ? item.userId.username : 'Unknown',
    },
  };
}

export async function getTweets() {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/v1/tweets?direction=desc&sortBy=createdAt`,
  );
  const json = await response.json();

  const transformData = json.data.map(function (item) {
    return transformTweet(item);
  });

  return {
    data: transformData,
    meta: json.meta,
  };
}

export async function getTweet({ id }) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/v1/tweets/${id}`,
  );
  const json = await response.json();

  return transformTweet(json.data);
}

export async function createTweet(tweet) {
  const token = localStorage.getItem('token');

  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/tweets/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tweet),
  });

  const json = await response.json();
  if (response.ok) {
    return transformTweet(json.data);
  } else {
    return Promise.reject(json.message);
  }
}

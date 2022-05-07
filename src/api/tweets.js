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
  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/tweets`);
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

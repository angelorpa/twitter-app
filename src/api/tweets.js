export async function getTweets() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/tweets`);
  const json = await response.json();

  const transformData = json.data.map(function (item) {
    return {
      id: item._id,
      content: item.content,
      date: item.createdAt,
      user: {
        name: item.userId ? item.userId.name : 'Unknown',
        username: item.userId ? item.userId.username : 'Unknown',
      },
    };
  });

  return {
    data: transformData,
    meta: json.meta,
  };
}

import { formatDistance } from 'date-fns';

import http from './http';

function transformTweet(item) {
  return {
    commentsCount: Array.isArray(item.comments) ? item.comments.length : 0,
    id: item._id,
    content: item.content,
    date: formatDistance(new Date(item.createdAt), new Date()),
    user: {
      name: item.userId ? item.userId.name : 'Unknown',
      username: item.userId ? item.userId.username : 'Unknown',
    },
    commentsCount: item.comments.length,
    comments: item.comments,
  };
}

export function getTweets() {
  return http.get(`/tweets?direction=desc`).then(({ data: json }) => {
    const transformData = json.data.map(function (item) {
      return transformTweet(item);
    });

    return {
      data: transformData,
      meta: json.meta,
    };
  });
}

export function getTweet({ id }) {
  return http
    .get(`/tweets/${id}`)
    .then(({ data: json }) => transformTweet(json.data));
}

export function createTweet(payload) {
  return http
    .post(`/tweets/`, payload)
    .then(({ data: json }) => transformTweet(json.data));
}

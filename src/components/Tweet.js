import React from 'react';

export default function Tweet({ user = {}, date, content }) {
  return (
    <div>
      <p>
        {user.name} @{user.username} - {date}
      </p>
      <p>{content}</p>
      <hr />
    </div>
  );
}

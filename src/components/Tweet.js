import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Tweet({ user = {}, date, content }) {
  return (
    <Card style={{ margin: '16px 0' }}>
      <Card.Body>
        <Card.Title>
          {user.name} - @{user.username}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

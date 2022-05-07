import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap';

import { createTweet } from '../api/tweets';

export default function Create() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    const { content } = event.target.elements;

    try {
      setError('');
      await createTweet({
        content: content.value,
      });

      navigate('/');
    } catch (err) {
      setError(err);
    }
  }

  return (
    <>
      {error && <Alert variant="warning">{error}</Alert>}
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" name="content" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Tweet
        </Button>
      </Form>
    </>
  );
}

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap';

import { signIn } from '../api/users';
import UserContext from '../containers/UserContext';

export default function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    try {
      setError('');
      const { data: user } = await signIn({
        username: username.value,
        password: password.value,
      });

      setUser(user);

      navigate('/');
    } catch (err) {
      setError(err);
    }
  }

  return (
    <>
      <h2 className="mt-2">Sign In</h2>
      {error && <Alert variant="warning">{error}</Alert>}
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" placeholder="submit">
          Sign In
        </Button>
      </Form>
    </>
  );
}

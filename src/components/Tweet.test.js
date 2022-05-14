import { render, screen } from '@testing-library/react';
import Tweet from './Tweet';

describe('Test Tweet Component', () => {
  test('with normal values', () => {
    const user = {
      name: 'Gustavo Morales',
      username: 'gmoralesc',
    };
    const content = 'Hello World';
    const likes = 1;

    render(<Tweet user={user} content={content} likes={likes} />);

    expect(screen.getByText(`${user.name} - @${user.username}`)).toBeTruthy();
  });
});

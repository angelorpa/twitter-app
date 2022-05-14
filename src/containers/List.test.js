import { render, screen, waitFor } from '@testing-library/react';
import List from './List';
import { getTweets } from '../api/tweets';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../api/tweets');

describe('List Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('display tweets', async () => {
    const tweet = {
      id: '1',
      content: 'Hello World',
      user: {
        username: 'gmoralesc',
        name: 'Gustavo Morales',
        email: 'gustavo.morales@gmail.com',
      },
      date: '2 minutes ago',
    };

    getTweets.mockResolvedValue({
      data: [tweet],
    });

    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>,
    );

    await waitFor(() => screen.findByText(tweet.content));

    expect(screen.getByText(tweet.content)).toBeTruthy();
  });
});

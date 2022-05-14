import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SignIn from '../pages/SignIn';
import { signIn } from '../api/users';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../api/users');

describe('Sign In Page', () => {
  it('display error for incorect username or password', async () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>,
    );

    const username = screen.getByPlaceholderText(/username/i);
    const password = screen.getByPlaceholderText(/password/i);
    const submit = screen.getByPlaceholderText(/submit/i);

    const errorMessage = 'Username or password are incorrect';

    signIn.mockRejectedValue(errorMessage);

    fireEvent.change(username, {
      target: {
        value: 'gmoralesc',
      },
    });

    fireEvent.change(password, {
      currentTarget: {
        value: '12345678',
      },
    });

    fireEvent.click(submit);

    await waitFor(() => screen.findByText(errorMessage));

    expect(screen.getByText(errorMessage)).toBeTruthy();
  });
});

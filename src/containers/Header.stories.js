import React from 'react';

import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './UserContext';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => (
  <BrowserRouter>
    <UserProvider>
      <Header {...args} />
    </UserProvider>
  </BrowserRouter>
);

export const Default = Template.bind({});

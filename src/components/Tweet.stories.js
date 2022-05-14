import React from 'react';

import Tweet from './Tweet';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Components/Tweet',
  component: Tweet,
};

const Template = (args) => <Tweet {...args} />;

export const Default = Template.bind({});

Default.args = {
  user: {
    name: 'Gustavo Morales',
    username: 'gmoralesc',
  },
  content: 'Hola mundo',
  date: '5 seconds ago',
};

export const Popular = Template.bind({});

Popular.args = {
  user: {
    name: 'Gustavo Morales',
    username: 'gmoralesc',
  },
  content: 'Hola mundo',
  date: '5 seconds ago',
  likes: 99999,
  commentsCount: 999999999,
};

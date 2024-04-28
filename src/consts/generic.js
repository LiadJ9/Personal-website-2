import UserCard from '../components/UserCard';

export const BOX_CONTENTS = [
  {
    Component: UserCard,
    props: {
      title: 'FooBar paddington',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
  {
    Component: UserCard,
    props: {
      title: 'John Doe',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  },
  {
    Component: UserCard,
    props: {
      title: 'Steven Stevens',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  },
];

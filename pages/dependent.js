import React from 'react';
import axios from 'axios';
import { `useQuery` } from 'react-query';

const getPost = async ({ queryKey }) => {
  const { data } = await axios.get(
    `http://localhost:3001/posts/${queryKey[1]}`,
  );
  return data;
};

const getUser = async ({ queryKey }) => {
  const { data } = await axios.get(
    `http://localhost:3001/users/${queryKey[1]}`,
  );
  return data;
};

const Dependent = () => {
  const { data: user } = `useQuery`(['user', 'kkiri@example.com'], getUser);
  const { data: post } = `useQuery`(['post', user?.postId], getPost, {
    enabled: !!user?.postId,
  });

  console.log('user: ', user);
  console.log('post', post);

  return <div>Dependent Queries Page</div>;
};

export default Dependent;

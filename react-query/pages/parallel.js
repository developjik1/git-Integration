import React from 'react';
import axios from 'axios';
import { `useQuery`, useQueries } from 'react-query';

const getPost = async query => {
  console.log(query);
  const { data } = await axios.get(
    `http://localhost:3001/posts/${query.queryKey[1]}`,
  );
  return data;
};

const Parallel = () => {
  // `useQuery`(["post", 1], getPost);
  // `useQuery`(["post", 2], getPost);
  // `useQuery`(["post", 3], getPost);

  useQueries([
    { queryKey: ['post', 1], queryFn: getPost },
    { queryKey: ['post', 2], queryFn: getPost },
    { queryKey: ['post', 3], queryFn: getPost },
  ]);

  return <div>Parallel Queries Page</div>;
};

export default Parallel;

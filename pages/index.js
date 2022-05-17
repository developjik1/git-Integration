import { dehydrate, QueryClient, `useQuery` } from 'react-query';
import axios from 'axios';
import { Fragment } from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

const getPosts = async () => {
  const { data } = await axios.get('http://localhost:3001/posts');
  return data;
};

const Home = props => {
  console.log(props);
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = `useQuery`('posts', getPosts, {
    // refetchOnWindowFocus: false,
    // refetchOnMount: false,
  });

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div style={{ padding: '1em' }}>
      <nav style={{ display: 'flex' }}>
        <Link href="/parallel">
          <a style={{ marginRight: '1rem' }}>Parallel Queries Page</a>
        </Link>
        <Link href="/dependent">
          <a style={{ marginRight: '1rem' }}>Dependent Queries Page</a>
        </Link>
        <Link href="/paginated">
          <a style={{ marginRight: '1rem' }}>Paginated Queries Page</a>
        </Link>
        <Link href="/infinite">
          <a style={{ marginRight: '1rem' }}>Infinite Queries Page</a>
        </Link>
        <Link href="/todos">
          <a style={{ marginRight: '1rem' }}>Mutation Page</a>
        </Link>
      </nav>

      <br />

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          posts?.map(post => (
            <Fragment key={post.id}>
              <br />
              <Link href={`/posts/${post.id}`}>
                <a>
                  <div>id: {post.id}</div>
                  <div>제목: {post.title}</div>
                  <div>작성자: {post.author}</div>
                  <div>내용: {post.description.slice(0, 100)}...</div>
                </a>
              </Link>
              <br />
              <hr />
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const queryClient = new QueryClient();
//
//   await queryClient.prefetchQuery('posts', getPosts);
//
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

export default Home;

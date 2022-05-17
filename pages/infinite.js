import { `useInfiniteQuery` } from 'react-query';
import axios from 'axios';
import { Fragment } from 'react';

const getPosts = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `http://localhost:3001/posts?_limit=2&_page=${pageParam}`,
  );
  return data;
};

const InfiniteQueriesPage = () => {
  const {
    data: postPages,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = `useInfiniteQuery`('paginated', getPosts, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length === 5) {
        return undefined;
      }

      return pages.length + 1;
    },
  });

  return (
    <>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          postPages?.pages.map((posts, i) => (
            <Fragment key={i}>
              {posts?.map(post => (
                <Fragment key={post.id}>
                  <div>id: {post.id}</div>
                  <div>제목: {post.title}</div>
                  <div>작성자: {post.author}</div>
                  <div>내용: {post.description.slice(0, 100)}...</div>
                  <br />
                </Fragment>
              ))}
            </Fragment>
          ))
        )}
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
          Load More
        </button>
      </div>
    </>
  );
};

export default InfiniteQueriesPage;

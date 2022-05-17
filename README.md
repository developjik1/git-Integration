# react-query

<br/>

## 기본 Next.js 프로젝트에 추가된 것

### 1) 설치 된 라이브러리 및 패키지
- `axios`
- `json-server`
- `react-query`

### 2) Dummy Data => db.json 추가
```json
// db.json
{
  "posts": [
    {
      "id": 1,
      "title": "게시물1",
      "author": "Kkiri",
      "description": "벌레는 흙으로 별에도 헤는 그리고 둘 위에 딴은 위에도 버리었습니다. 내린 계절이 밤을 아무 나는 하나에 경, 별 봅니다. 잠, 묻힌 그리고 패, 강아지, 잔디가 가을로 나의 다 듯합니다. 이름과, 잔디가 까닭이요, 위에 밤이 사람들의 계십니다. 잠, 이름과, 차 이 까닭입니다. 같이 딴은 가을로 경, 별빛이 비둘기, 동경과 하나에 둘 계십니다. 멀리 없이 시인의 오면 불러 봅니다. 자랑처럼 이름자 많은 불러 딴은 별 별을 버리었습니다. 하나에 언덕 릴케 있습니다."
    },
    {
      "id": 2,
      "title": "게시물2",
      "author": "끼리",
      "description": "노새, 나의 라이너 너무나 있습니다. 별 계절이 멀리 아무 파란 가득 무덤 가을 자랑처럼 듯합니다. 이런 별이 별 위에도 까닭입니다. 계집애들의 않은 까닭이요, 까닭입니다. 멀리 것은 차 계절이 헤일 이 딴은 위에 어머님, 까닭입니다. 그리워 지나가는 쓸쓸함과 헤는 거외다. 잔디가 멀리 별 이네들은 이름을 까닭입니다. 불러 봄이 헤는 않은 오면 하나에 버리었습니다. 내일 하늘에는 무덤 나는 계십니다. 불러 벌써 별 까닭입니다. 나의 별 밤을 듯합니다."
    },
    {
      "id": 3,
      "title": "게시물3",
      "author": "끼리끼리",
      "description": "애기 소녀들의 이름과 다하지 별이 듯합니다. 이웃 쓸쓸함과 멀리 하나에 둘 별에도 별 소학교 계십니다. 이국 비둘기, 불러 거외다. 이네들은 청춘이 위에 자랑처럼 내 헤일 계십니다. 나는 멀리 아스라히 무덤 별이 때 라이너 헤는 까닭입니다. 언덕 하늘에는 사랑과 다 둘 듯합니다. 별 멀듯이, 위에도 말 이런 봅니다. 나는 봄이 이네들은 나는 옥 까닭입니다. 써 노새, 남은 아스라히 있습니다. 아이들의 새워 덮어 까닭입니다."
    },
    {
      "id": 4,
      "title": "게시물4",
      "author": "Kkiri",
      "description": "이상, 귀는 기쁘며, 사막이다. 생명을 피가 있음으로써 그들의 우리의 부패뿐이다. 두기 곧 청춘의 장식하는 칼이다. 이상 불어 주며, 오직 바이며, 피고, 가는 행복스럽고 것이다. 사라지지 피가 지혜는 무한한 무엇을 끓는다. 그것은 가진 황금시대를 청춘을 현저하게 사막이다. 방황하였으며, 굳세게 착목한는 동산에는 유소년에게서 청춘의 인류의 것이다. 얼마나 인간의 귀는 모래뿐일 옷을 천하를 황금시대다. 이상은 무엇을 보내는 목숨을 그러므로 주는 우리의 불어 전인 봄바람이다. 구할 남는 앞이 있는 있으며, 간에 이성은 되는 만물은 것이다. 실현에 튼튼하며, 두손을 피부가 봄바람이다."
    },
    {
      "id": 5,
      "title": "게시물5",
      "author": "Kkiri",
      "description": "인간의 이상의 반짝이는 것은 가슴에 이상은 청춘의 피어나는 밝은 것이다. 없으면 위하여 그들에게 이것은 평화스러운 보배를 타오르고 있다. 작고 일월과 얼마나 사막이다. 아니한 꾸며 일월과 피부가 하는 귀는 있는 봄바람이다. 구하기 영락과 심장의 그것은 많이 가는 이것을 영원히 있다. 동력은 투명하되 만물은 인간은 피가 그들은 운다. 위하여 청춘의 풀이 가지에 철환하였는가? 이는 하는 열락의 생생하며, 역사를 노래하며 가슴이 그것을 힘있다. 피어나는 인류의 심장의 청춘 천지는 그들에게 싹이 많이 운다."
    },
    {
      "id": 6,
      "title": "게시물6",
      "author": "Kkiri",
      "description": "이상 대중을 품으며, 거선의 전인 피는 오직 지혜는 위하여서. 미묘한 두손을 모래뿐일 있으며, 구하기 피다. 광야에서 그들을 대한 있는 용기가 우리의 가지에 얼음에 듣는다. 이상이 그들의 구하기 곳으로 우는 뿐이다. 가슴이 창공에 인생의 우리 가장 뿐이다. 유소년에게서 곧 주며, 같은 있는 고동을 그들에게 이상은 있다. 할지니, 예가 피가 오직 뛰노는 약동하다. 품고 우리의 붙잡아 그러므로 있는 끓는 고동을 아름다우냐? 뭇 시들어 속잎나고, 자신과 품에 품었기 예수는 때까지 칼이다. 꾸며 이성은 않는 것이다. 공자는 수 보내는 것은 피에 만물은 위하여, 쓸쓸하랴?"
    },
    {
      "id": 7,
      "title": "게시물7",
      "author": "Kkiri",
      "description": "가치를 몸이 가는 천지는 풍부하게 낙원을 있으랴? 청춘의 위하여 위하여 기쁘며, 소담스러운 끓는다. 예수는 때에, 동산에는 풍부하게 청춘에서만 무엇을 이것이다. 청춘 용기가 인생을 사막이다. 원질이 수 용기가 것이다. 용기가 목숨을 들어 뜨거운지라, 찾아 약동하다. 충분히 바이며, 싶이 내는 풀밭에 봄바람이다. 이는 만물은 이것은 같은 생명을 심장은 칼이다. 뭇 청춘 내는 수 풀이 크고 피부가 간에 피어나기 교향악이다. 싹이 창공에 것이다.보라, 장식하는 위하여서 무엇을 아름다우냐? 속잎나고, 못할 쓸쓸한 찾아다녀도, 같이 듣기만 부패뿐이다."
    },
    {
      "id": 8,
      "title": "게시물8",
      "author": "Kkiri",
      "description": "뜨고, 청춘이 가는 그들은 것이다. 눈이 석가는 인간이 이상 평화스러운 사막이다. 뼈 많이 지혜는 힘차게 이상의 위하여 속잎나고, 끓는 봄바람이다. 힘차게 얼음에 풍부하게 이것이다. 귀는 그들에게 가치를 때에, 우리의 아름다우냐? 쓸쓸한 동산에는 더운지라 갑 뜨거운지라, 끓는다. 보배를 이 평화스러운 위하여, 넣는 이성은 황금시대다. 같이, 풍부하게 이것을 뛰노는 바이며, 길을 간에 새가 찬미를 아니다. 고행을 얼마나 길지 있으랴?"
    },
    {
      "id": 9,
      "title": "게시물9",
      "author": "Kkiri",
      "description": "새가 원대하고, 용기가 이상을 풀이 청춘의 산야에 사막이다. 풀이 되려니와, 청춘의 밝은 품에 그들에게 사는가 무엇을 사랑의 있다. 심장의 보는 수 그들의 곳이 이상의 구하지 운다. 생명을 눈이 자신과 인생의 이 곳이 얼마나 온갖 그리하였는가? 위하여서, 피어나기 청춘을 이상의 보는 사막이다. 설산에서 없으면, 사는가 옷을 대중을 그들의 아름다우냐? 얼마나 사람은 눈이 힘있다. 사랑의 공자는 심장은 황금시대의 곳이 힘있다. 그들은 아름답고 굳세게 능히 미인을 구할 품고 끓는 위하여 끓는다. 곧 새 사라지지 풀밭에 장식하는 용기가 두손을 그들의 봄바람이다."
    }
  ],
  "users": [
    {
      "id": "kkiri@example.com",
      "nickname": "Kkiri",
      "postId": 1
    },
    {
      "id": "kkiri_kkiri@example.com",
      "nickname": "끼리끼리",
      "postId": 3
    }
  ],
  "todos": [
    {
      "todo": "test",
      "done": false,
      "id": 1
    },
    {
      "todo": "12314",
      "done": false,
      "id": 2
    },
    {
      "todo": "123123",
      "done": false,
      "id": 3
    },
    {
      "todo": "213",
      "done": false,
      "id": 4
    }
  ]
}

```

### 3) package.json의 scipts 내용 추가
```json
"scripts": {
    ...,
    ...,
    ...,
    "server": "json-server --watch db.json --port 3001"
},
```

### 4) 프로젝트 실행 시 json-server & Next.js 두개의 서버 모두 사용하기
- 터미널 두개 생성하여 아래의 명령어 각각 입력하기. 
꼭, 두개의 서버가 모두 실행되어야 실습이 제대로 진행됩니다.
    ```shell
    npm run server
    ```

    ```shell
    npm run dev
    ```

<br/>

## react-query 적용
```javascript
// _app.js
import '../styles/globals.css'
import { useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default MyApp
```

1) `QueryClient`를 이용하여 queryClient 인스턴스 생성을 합니다.
2) queryClient를 `QueryclientProvider`의 client props로 전달해줍니다.
3) `ReactQueryDevtools`를 개발도구를 설정을 위해 추가합니다. 

`ReactQueryDevtools`는 개발도구로 개발환경이 development(NODE_ENV=development)일 때만 나타납니다.

<br/>

## `useQuery`
```javascript
// index.js
import { `useQuery` } from 'react-query';
import axios from 'axios';
import { Fragment } from 'react';
import Link from 'next/link';

const getPosts = async () => {
  const { data } = await axios.get('http://localhost:3001/posts');
  return data;
};

const Home = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = `useQuery`('posts', getPosts);

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
              <Link href={`/post/${post.id}`}>
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

export default Home;

```

> 결과화면
> 
>![result1](https://user-images.githubusercontent.com/104342916/168740736-41e88e6f-9830-4a72-b317-509131feb91f.png)

1) `react-query`의 ``useQuery``의 첫 번째 인자로는 `queryKey`를 넣어줍니다. 
`queryKey`란 이후에 사용되는 캐싱이나 데이터 재요청, 상태 변경 등 여러 곳에서 사용될 `식별자`입니다. 
`queryKey`는 `문자열 혹은 배열의 형태`로도 올 수 있습니다.
2) `react-query`의 ``useQuery``의  두 번째 인자로는 `queryFn`을 넣어줍니다. 
  `queryFn`에는 비동기 통신하여 Promise를 반환하는 함수를 넣어줍니다.
3) `react-query`의 ``useQuery``의 세 번째 인자로는 옵션을 설정해줄 수 있습니다. 이번예제의 옵션은 없습니다.
4) ``useQuery``가 반환하는 값들 중 data에는 비동기 통신이 성공(resolve)했을 경우의 데이터가 들어가게 됩니다. 
  실패했을 경우에는 isError가 true가 되고, error에 에러 내용이 들어가게 됩니다. 
  ``useQuery``의 모든 반환 값을 확인하고 싶으면, [공식 문서](https://react-query.tanstack.com/reference/`useQuery`)를 참고해주세요.

<br/>

## query State 알아보기

`react-query`의 결과 값 `State`는 총 4가지 상태(`fresh`, `fetching`, `stale`, `inactive`)를 가질 수 있다.
<img width="518" alt="stale" src="https://user-images.githubusercontent.com/104342916/168751765-ff37f812-f4a6-4269-903a-662569dac1be.png">
- fresh: refetch가 이루어질 수 없는 상태
- fetching: fetch 진행 중인 상태
- stale: refetch가 이루어질 수 있는 상태. 기본적으로 refetchOnMount: true, refetchOnWindowFocus: true 이기 때문에 다시 화면에 마운트 되거나 포커스가 잡히면 refetch가 발생한다.
  ```javascript
  // _index.js
    const {
      data: posts,
      isLoading,
      isError,
      error,
    } = `useQuery`("posts", getPosts, {
      staleTime: 5 * 1000,
    });
  ```
  > staleTime: 5 * 1000 // 처음 5초간 fresh 상태를 유지한 후에 stale 상태로 변경된다.

- inactive: query의 비활성화 상태를 나타낸다. 이 상태에서는 기본적으로 5분동안 캐싱된 상태로 query 값을 저장하고, 그 이후에는 삭제한다.

<br/>

## Caching & Background Refetch & Initial Data

```javascript
// posts/[id].js
import axios from 'axios';
import { useRouter } from 'next/router';
import { `useQuery`, `useQuery`Client } from 'react-query';

const getPost = async query => {
  console.log(query);
  const { data } = await axios.get(
    `http://localhost:3001/posts/${query.queryKey[1]}`,
  );
  return data;
};

const PostPage = () => {
  const router = useRouter();
  const { id: postId } = router.query;

  const queryClient = `useQuery`Client();

  const { data: post, isLoading } = `useQuery`(['post', postId], getPost, {
    initialData: () => {
      const posts = queryClient.getQueryData('posts');
      const post = postId ? posts?.find(post => post.id === +postId) : null;

      if (!post) {
        return undefined;
      }

      return post;
    },
  });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : post ? (
        <>
          <div>id: {post.id}</div>
          <div>제목: {post.title}</div>
          <div>작성자: {post.author}</div>
          <div>내용: {post.description}</div>
        </>
      ) : null}
    </div>
  );
};

export default PostPage;

```

### Caching & Background Refetch
1. ``useQuery`` 세 번째 인수로 제공된 옵션을 주석처리하고, 실행시켜주세요.
2. 개발자 도구를 열어서, 네트워크 속도를 Slow 3G로 변경해주세요.
   <img width="503" alt="network1" src="https://user-images.githubusercontent.com/104342916/168740730-41bb080d-55eb-4ea0-8b7c-ea66b995b549.png">
   <img width="502" alt="network2" src="https://user-images.githubusercontent.com/104342916/168740731-0ad3fe5f-7009-4e4c-954a-484428d121b6.png">
3. /에서 각 게시물을 클릭하면 다음과 같이 Loading...이 보인 후에 내용이 모두 나타나는 것을 확인할 수 있습니다.
4. 페이지를 뒤로 이동했다가, 다시 상세 페이지로 이동한다.
   이번에는 Loading...이 보이지 않고 바로 게시물 내용이 보일 것입니다.
   `react-query`가 데이터를 cacheTime(기본값 5분)동안 `queryKey`를 식별자로 가지면서 각 데이터를 캐싱해놓기 때문입니다.
   하지만, 5분이 지나기 전에는 이전에 캐싱해놓은 값만 보게 되는 것은 아닙니다.
   이전에 옵션값 중 `refetchOnMount`, `refetchOnWindowFocus`가 기본 값으로 true로 설정되어있다고 했습니다.
   기본적으로 `stale` 상태에서 `mount` or `window foucs`가 되면 `Background Refetch`를 진행하기 때문에 변경된 값이 존재한다면 새로운 데이터로 변경이 됩니다.
   이때 중요한 것은 무조건 `stale` 상태이어야만 합니다. `fresh`인 상태에서는 `Background Refetch`를 진행하지 않습니다.

### Initial Data

이번에는 ``useQuery`Client`를 이용해서 `_app.js`에서 생성했던 `queryClient`를 가져와 보겠습니다.
이 객체로부터 이전에 요청해서 캐싱된 데이터를 가져올 수 있습니다.

현재 루트 페이지("/")에서 이미 게시물들(posts)의 데이터를 가져왔는데, 상세 페이지에서도 posts 데이터를 바로 이용할 수 있게 구현해보겠습니다.
이제 아까 주석을 걸어줬던 세 번째 옵션의 주석을 풀고, `ctrl + shift + R` 을 눌러서 `캐시 비우기 및 강력 새로고침`을 눌러 다시 한 번 예제를 실행해주세요.
이제 / 페이지로 이동하고 다시 상세 페이지로 이동해보면 Loading... 이라는 글씨가 보이는 대신 해당 게시물의 내용이 바로 보이는 것을 확인할 수 있을 것입니다.

이렇게 동작하는 이유는 세 번째 옵션으로 설정한 initialData에 캐싱했던 데이터를 이용하여 값을 설정해놨기 때문입니다.

```javascript
 const { data: post, isLoading } = `useQuery`(['post', postId], getPost, {
  initialData: () => {
    const posts = queryClient.getQueryData('posts');
    const post = postId ? posts?.find(post => post.id === +postId) : null;

    if (!post) {
      return undefined;
    }

    return post;
  },
});
```

initialData를 보시면 `queryClient.getQueryData`의 인수로 "posts"가 들어갔습니다.
이것은 "posts" 라고 하는 `queryKey`를 가진 쿼리로부터 데이터를 가져오겠다는 것을 의미합니다.
나머지 코드는 찾고자 하는 post가 있는지 확인하는 것이고, 있을 경우에는 해당 post를 초기값으로 설정하여 Loading 대신 보여주는 것입니다.

참고로 Loading이 보여지지 않을 뿐이지, background에서는 fetching이 진행되고 있습니다. 
데이터가 다르다면 fetching 진행된 이후에 바뀐 데이터가 보여지게 됩니다.

<br/>

## Parallel Query
여러 개의 Query를 다루는 것을 말한다.

```javascript
// parallel.js
import React from 'react';
import axios from 'axios';
import { `useQuery`, useQueries } from 'react-query';

const getPost = async query => {
  const { data } = await axios.get(
    `http://localhost:3001/posts/${query.queryKey[1]}`,
  );
  return data;
};

const Parallel = () => {
  `useQuery`(["post", 1], getPost);
  `useQuery`(["post", 2], getPost);
  `useQuery`(["post", 3], getPost);

  return <div>Parallel Queries Page</div>;
};

export default Parallel;
```
`useQuery`의 `queryKey`로 배열을 활용 할 수 있고,`queryFn` 함수의 매개변수로 query를 사용할 수 있다.

<br/>

## Dynamic Parallel Query

- 여러 개의 Query를 한번에 다루는 것을 말한다.

```javascript
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
  useQueries([
    { queryKey: ['post', 1], queryFn: getPost },
    { queryKey: ['post', 2], queryFn: getPost },
    { queryKey: ['post', 3], queryFn: getPost },
  ]);

  return <div>Parallel Queries Page</div>;
};

export default Parallel;

```

<br/>

## Dependent Query

동기적으로 실행되는 Query를 말한다. 즉, 다른 Query에 의존적이며, 순서가 보장이 된다.

```javascript
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

  console.log({ user });
  console.log({ post });

  return <div>Dependent Queries Page</div>;
};

export default Dependent;

```
1) 첫 번째 ``useQuery``가 실행되고, 요청이 성공적으로 완료되었을 경우에 user 객체가 존재
2) 두 번째 ``useQuery``의 enabled가 true 가 되면서 요청을 시작

두번째 ``useQuery``에서 { enabled: !!user?.postId, }에서는 user객체의 postId가 존재하면 enabled가 true이고, postId가 존재하지 않으면 false입니다.

즉, 두 번째 ``useQuery``는 enabled에 따라서 쿼리가 활성화되고, 비활성화 되는 옵션이고, 첫 번째 ``useQuery``에 의존적이기 때문에 Dependent Queries라고 합니다.
이는 동기적으로 요청을 수행해야 할 때 유용하게 사용될 수 있습니다.

> !! 연산자는 undefined일 경우라도 확실한 true / false  값을 가지게하기위해서 사용합니다.

<br/>

## Paginated Query

```javascript
// paginated.js
import { Fragment, useState } from 'react';
import { `useQuery` } from 'react-query';
import axios from 'axios';

const getPosts = async ({ queryKey }) => {
  const { data } = await axios.get(
    `http://localhost:3001/posts?_limit=2&_page=${queryKey[1]}`,// 각 페이지당 받아오는 데이터 2개로 제한하기
  );
  return data;
};

const PaginatedPage = () => {
  const [page, setPage] = useState(1); // Page 숫자 관리용 State
  const { data: posts, isLoading } = `useQuery`(['paginated', page], getPosts, {
    keepPreviousData: true,
  });

  return (
    <>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          posts?.map(post => (
            <Fragment key={post.id}>
              <div>id: {post.id}</div>
              <div>제목: {post.title}</div>
              <div>작성자: {post.author}</div>
              <div>내용: {post.description.slice(0, 100)}...</div>
            </Fragment>
          ))
        )}
        <button onClick={() => setPage(page => page - 1)} disabled={page === 1}>
          Prev Page
        </button>
        <button onClick={() => setPage(page => page + 1)} disabled={page === 5}>
          Next Page
        </button>
      </div>
    </>
  );
};

export default PaginatedPage;

```

``useQuery``의 세번째 옵션에서 `keepPreviousData`를 주석처리하고 개발자도구 Network에서 No throttling => Slow 3G로 바꾸고
Next Page 누를 경우 Loading이 보여지고 UI가 달라지는 것을 볼 수 있습니다.

이런 상황에서 이전 상태를 유지하여 Loading을 보지않게 하기 위해 `keepPreviousData` 옵션을 제공합니다.
`keepPreviousData` 주석 처리를 해제하고 다시 실행해보면 Next Page 버튼 Click시 Loading으로 바뀌지 않고 이전의 내용이 유지되며 data가 바뀌게 됩니다.

<br/>

## Infinite Query(`useInfiniteQuery`)

```javascript
// infinite.js
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

```
1) `queryFn`에 해당하는 getPosts의 인자로 { pageParam =1 }을 사용했습니다.  
   이는 아래에서 사용할 ``useInfiniteQuery``의 getNextPageParam 옵션에 의해서 페이지 정보를 넘겨받게 됩니다.

2) ``useInfiniteQuery``는 `useQuery`와 마찬가지로 첫 번째 인자로는 식별자인 `queryKey`를, 두 번째 인자로는 fetch 함수인 `queryFn`, 세 번째 인자로 옵션이 들어가게 됩니다.
   세 번째 옵션의 `getNextPageParam`에서 함수를 정의합니다. 첫 번째 인자로는 lastPage가, 두 번째로는 pages가 들어옵니다.
   `getNextPageParam`에서 반환하는 값은 getPosts의 { pageParam = 1 } 으로 전달됩니다.

3) `useInfiniteQuery`를 사용하면 `useQuery`를 사용했을 때와는 데이터의 구조가 달라집니다.
   먼저 실행 후에 루트 페이지에서 Infinite Queries Page 를 클릭하여 이동하겠습니다.
   아래 이미지에서 Data Explorer의 Data 구조를 보면 `useQuery`를 사용했을 때와는 달리 `pages`와 `pageParams` 객체로 나뉘어져 있는 것을 볼 수 있습니다.
   `pages`에는 요청한 데이터의 정보가, `pageParams`에는 페이지에 대한 정보가 들어있습니다.
   이전에 getPosts의 인자로 넣어줬던 `pageParams`가 이에 해당합니다.
   `pages`는 배열로 이루어져있고, 안의 배열의 요소들 또한 배열로 이루어져 있는 것을 확인할 수 있습니다.
   따라서 이를 jsx로 표현할 때는 위와 같이 map을 두 번 사용해서 표현해야합니다.
   ![infinite-query-result](https://user-images.githubusercontent.com/104342916/168751738-e851bc97-7c20-4f9b-ac78-ceadbb6fdc76.jpeg)

5) `useInfiniteQuery`가 반환하는 값중 `hasNextPage`는 더 이상 가져올 데이터가 있는지, 즉 `getNextPageParam`에서 undefined가 반환됐을 때만 false가 됩니다.
   그리고 `fetchNextPage`는 `getNextPageParam`에서 반환한 페이지 정보를 바탕으로 `queryFn`을 실행시키는 함수입니다.

우리가 Load More 버튼을 클릭하면 (pages.length + 1)이 getPosts의 `PageParam`으로 전달되어 서버에 데이터를 요청하고 정보를 받아온 후에 브라우저에 그리게 됩니다.

<br/>

## `useMutation`

`useMutation`을 이용하여 어떻게 데이터를 변화시키고 변화시킨 데이터를 UI에 반영할 수 있는지 알아보겠습니다.

### 1) 업데이트 후, 쿼리를 무효화시킨 후에 재요청하여 모든 데이터를 다시 가져오는 방법(`Invalidate Queries(쿼리 무효화)`)

```javascript
// todos.js
import { `useMutation`, `useQuery`, `useQuery`Client } from 'react-query';
import axios from 'axios';
import { ChangeEvent, FormEvent, Fragment, useCallback, useState } from 'react';

const getTodos = async () => {
  const { data } = await axios.get('http://localhost:3001/todos');
  return data;
};

const addTodo = async todo => {
  const { data } = await axios.post('http://localhost:3001/todos/123', {
    todo,
    done: false,
  });

  return data;
};

const TodosPage = () => {
  const [todo, setTodo] = useState('');

  const queryClient = `useQuery`Client();

  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = `useQuery`('todos', getTodos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = `useMutation`(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      mutate(todo);
      setTodo('');
    },
    [mutate, todo],
  );

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>할 일: </label>
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button type="submit">작성</button>
      </form>

      <br />

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          todos?.map(todo => (
            <Fragment key={todo.id}>
              <div>ID: {todo.id}</div>
              <div>할 일: {todo.todo}</div>

              <br />
              <hr />
            </Fragment>
          ))
        )}
      </div>
    </>
  );
};

export default TodosPage;


```

getTodos함수는 "todos"를 `queryKey`로 갖는 `useQuery`에 대한 `queryFn`이고, addTodo는 `useMutation`에 대한 `queryFn`입니다.

`useMutation`은 `useQuery`와는 다르게 `queryKey`를 첫 번째 인자로 갖지 않고 첫 번째 인자로 `queryFn`이 들어갑니다. 그리고 두 번째 인자로 옵션이 들어갑니다.
여기서는 `onSuccess` 메서드가 들어갔습니다. 요청이 성공한 후에 실행되는 부분입니다.

`onSuccess` 함수의 내부에 `queryClient.invalidateQueries("todos")` 가 있습니다.
이것은 `queryFn`인 addTodo 함수가 호출되고 요청이 성공적이었으면, "todos" `queryKey`를 갖는 쿼리의 데이터를 무효화시키겠다는 것입니다.
데이터를 무효화시키게 될 경우 `refetch(재요청)`가 일어나고 그로 인해 UI가 업데이트 되는 것을 확인할 수 있습니다.

`useMutation`이 반환하는 값 중 `mutate` 함수가 있는데요. 이 함수가 `queryFn`을 호출하는 역할을 합니다.

위의 방식은 데이터 추가후 작성 버튼을 누르면, `OPTION`, `POST`, `GET` 요청이 발생합니다.
`OPTIONS` 요청은 `POST`요청에 대한 사전요청입니다. 즉, 다음과 같이 동작이 발생한 것입니다.

> 작성 클릭 > mutate 호출 > addTodo 호출(POST 요청) > onSuccess호출 > 'todos' 쿼리키를 갖는 쿼리 데이터 무효화 > 'todos' 쿼리키를 갖는 쿼리 refetch > getTodos 호출(GET 요청)


하지만, 이전 데이터를 다 무효화시켜서 모든 리스트를 다시 받아오는 것은 네트워크 낭비가 발생합니다.

### 2) 업데이트 후, 업데이트 된 데이터만을 추가/수정/삭제 하는 방법(setQueryData)

`useMutation`부분을 다음과 같이 변경해주세요.

```javascript
  const { mutate } = `useMutation`(addTodo, {
    onSuccess: data => {
      queryClient.setQueryData('todos', oldData => {
        if (!oldData) {
          return [];
        }

        return [...oldData, { id: data.id, todo: data.todo, done: false }];
      });
    },
  });
```

`onSuccess`의 인자로 data가 들어갔으며 이 data는 `useMutation`을 통해 응답받은 데이터입니다.
`queryClient` 객체의 `invalidateQueries` 메서드 대신 `setQueryData` 메서드를 이용합니다.

`setQueryData`의 첫 번째 인자로는 변경시키고자 하는 쿼리의 `queryKey`를 입력해줍니다.

그리고 두 번째 인자로는 업데이트 함수가 들어갑니다. 업데이트 함수의 인자로는 oldData가 들어가는데요. 현재 이 값은 'todos' 쿼리가 가지고 있던 데이터를 의미합니다.
우리는 여기서 기존 데이터에 응답받은 데이터인 `onSuccess`의 매개변수 data를 추가하면 됩니다.

따라서 setQueryData의 업데이트 함수에서는 [...oldData,{ ~~~~}] 형태로 불변성을 지키면서 새로운 값을 반환하게 됩니다.

이전과는 달리 `GET`요청을 하지 않고, UI가 정상적으로 업데이트가 되게 됩니다.

참고로 `setQueryData`에서 값을 업데이트 할 경우에는 반드시 불변성을 지켜줘야 합니다.

### 3) Optimistic Update(낙관적 업데이트)

`Optimistic Update(낙관적 업데이트)`는 "내가 보낸 요청이 성공이라고 가정"하고 서버에서 응답이 오기 전에 프론트 측에서 UI를 미리 업데이트하는 것입니다.

`useMutation`을 다음과 같이 변경해주세요.

```javascript
const { mutate } = `useMutation`(addTodo, {
    onMutate: async newTodo => {
      await queryClient.cancelQueries('todos');

      const previousTodos = queryClient.getQueryData('todos');

      queryClient.setQueryData('todos', oldData => {
        if (!oldData) {
          return [];
        }

        return [
          ...oldData,
          { id: oldData.length + 1, todo: newTodo, done: false },
        ];
      });

      return { previousTodos };
    },

    onError: (_error, _newTodo, context) => {
      queryClient.setQueryData('todos', context?.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries('todos');
    },
  });
```

이번에는 `onSuccess`를 이용하는 것이 아닌, `onMutate`, `onError`, `onSettled`를 이용하였습니다.

실행 흐름은 다음과 같습니다.

1) `mutate`함수가 호출되면 `onMutate`는 `useMutation`의 `queryFn`(addTodo)가 실행되기 전에 호출됩니다.

2) cancelQueries("todos")를 실행하여 혹시 발생할지도 모르는 `refetch`를 취소하여 `Optimistic Update`의 데이터를 덮어쓰지 않도록 예방합니다.

3) getQueryData("todos")를 이용하여 서버에 전송한 요청이 잘못되었을 경우를 대비해서 이전 데이터를 저장해둡니다.

4) setQueryData("todos") 를 이용해서 'todos' 쿼리 키를 갖는 쿼리를 업데이트 해줍니다. 즉, 서버의 응답이 오기 전에 UI를 미리 업데이트 하는 것입니다.

5) 에러가 발생했을 경우 복원할 수 있도록 이전 데이터(previousTodos)를 반환합니다. 이는 `onError`의 context로 들어갑니다.

위 과정이 `mutate` 호출 시 `onMutate`가 동작하는 과정입니다.

에러가 발생했을 경우에는 `onError`가 동작하여 `onMutate`의 3) 과정에서 저장해뒀던 백업 데이터로 데이터를 복원합니다.

`onSettled`는 요청이 성공했거나 실패했을 경우 모두 발생합니다. 
예제에서는 'todos' 쿼리키를 갖는 쿼리를 무효화시켜서 `refetch`를 하여 데이터를 서버와 일치시켰습니다.

개발자도구 Network 탭 No throttling을 Slow 3G로 변경한 후 할 일 목록을 입력해서 추가해보세요.
그러면 서버의 응답이 오기 전에 미리 UI를 업데이트 하는 것을 볼 수 있습니다.

이를 더 확실히 확인해보기 위해 잘못된 end point로 요청을 고의로 에러를 발생시켜 보겠습니다. 다음과 같이 요청 end point를 'todos/123' 으로 변경해주세요.

```javascript
    const addTodo = async (todo: string) => {
    const { data } = await axios.post("http://localhost:3001/todos123", {
        todo,
        done: false,
    });
    
        return data;
    };
```

그리고 할 일 목록을 추가해보면, 추가한 데이터가 즉시 보였다가 에러가 발생했기 때문에 이전 데이터(previousData)로 교체합니다.
항상 `onSettled`에 의해서 서버 데이터와 일치시키는 작업까지 이루어지게 됩니다.
굳이 `refetch` 과정이 불필요하다면 `onSettled`를 주석처리하면 됩니다.

<br/>

## react-query로 Next.js SSR하기 

```javascript
// _app.js
import '../styles/globals.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

```

`_app.js`에서 `Hydrate` 로 Component를 감싸줘야 합니다.

```javascript
// index.js
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
  console.log(props.dehydratedState);
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = `useQuery`('posts', getPosts, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
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

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;

```

<img width="644" alt="ssr-result" src="https://user-images.githubusercontent.com/104342916/168751781-aa72a3bf-8f7f-4388-9c08-a2f182c83574.png">


`getServerSideProps`에서 `QueryClient` 클래스를 이용해서 queryClient 인스턴스를 생성한 후에 `prefetchQuery` 메서드를 호출했습니다.
그리고 queryClient 인스턴스를 `dehydrate`해서 `props`로 전달합니다.
이후에 queryClient는 hydration 과정에서 hydrate되어 클라이언트 측에서 사용 가능합니다.
즉, 서버 사이드 렌더링 시 사용했던 `queryKey`를 가지고 프론트 측에서 동일한 `queryKey`로 데이터를 불러오는 것이 가능한 것입니다.

SSR 이후에 한번 더 `refetch`가 일어나는 것이 불필요하다고 느껴질 경우,
`useQuery`의 옵션에 `refetchOnMount`를 false로 설정하거나 `staleTime`을 Infinity로 설정하면 SSR이후 `refetch`가 추가적으로 발생하지 않습니다.

위에서 살펴본 예제들을 실제 프로젝트에 적용할 때에는 반복을 피하기 위해서 `useQuery`나 `useInfiniteQuery`, ``useMutation`` 등을 커스텀 훅으로 선언하고 별도의 모듈에서 관리하는 것이 재사용성에 좋습니다.



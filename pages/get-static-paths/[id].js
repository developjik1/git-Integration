// 이 페이지에서 렌더될 컴포넌트
import React from "react";
import Link from "next/link";

import axios from "axios";

import {C} from "common/styles";

function GetStaticPaths(props) {
  return (
    <C>
      {
        props.data && <div>uuid: {props.data.uuid}</div>
      }
      <Link href="/">
        <a>
          돌아가기
        </a>
      </Link>
    </C>
  )
}

// 빌드될 때 실행
export const getStaticPaths = async (context) => {
  console.log("getStaticPaths 시작");
  const res = await axios.get('http://localhost:3000/api/uuid')
  const data = await res.data

  // pre-render할 Path를 얻음
  const paths = [
    {
      params: { id: "1", },
    },
    {
      params: { id: "2", },
    },
    {
      params: { id: "3", },
    },
  ]

  console.log("data 값: ", data)
  console.log("getStaticPaths 종료");

  // 우리는 오로지 이 path들만(즉, 위의 path의 params에 정의한 값들) 빌드타임에 프리렌더 함
  // { fallback: false } 는 다른 routes들은 404임을 의미
  // true이면 만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄 거라는 뜻
  return { paths, fallback: false }
}

// 빌드될 때 실행 
export const getStaticProps = async (context) => {
  console.log("getStaticProps 시작");
  const res = await axios.get('http://localhost:3000/api/uuid')
  const data = await res.data
  console.log("data 값: ", data)
  console.log("getStaticProps 종료");

  return {
    props: {
      data
    },
  }
}

export default GetStaticPaths
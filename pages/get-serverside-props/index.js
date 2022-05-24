// 이 페이지에서 렌더될 컴포넌트
import React from "react";
import axios from "axios";
import Link from "next/link";
import {C} from "common/styles";

function GetServerSideProps(props) {
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
export const getServerSideProps = async (context) => {
  console.log("getServerSideProps 시작");
  const res = await axios.get('http://localhost:3000/api/uuid')
  const data = await res.data
  console.log("data 값: ", data)
  console.log("getServerSideProps 종료");

  return {
    props: {
      data
    },
  }
}

export default GetServerSideProps
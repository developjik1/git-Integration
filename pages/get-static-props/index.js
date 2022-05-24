import React from 'react';
import axios from "axios";
import Link from "next/link";
import {C} from "common/styles";

function GetStaticProops(props) {
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
  );
}

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

export default GetStaticProops;
import React from 'react';
import axios from "axios";
import Link from "next/link";
import {C} from "common/styles";

function GetStaticProops(props) {
  return (
    <C>
      <Link href="/">
        <a>
          돌아가기
        </a>
      </Link>
      {
        props.data && <div>uuid: {props.data.uuid}</div>
      }
    </C>
  );
}

export const getStaticProps = async (context) => {
  console.log("getStaticProps 시작");
  const res = await axios.get('http://localhost:3000/api/uuid')
  console.log("getStaticProps 종료");

  console.log(res.data)
  return {
    props: {
      data: res.data,
    },
  }
}

export default GetStaticProops;
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import axios from "axios";
import styled from "@emotion/styled";

function CSR(props) {
  console.log("render")
  const [uuid, setUuid] = useState('');

  const getData = async () => {
    const result = await axios.get('/api/uuid')
    setUuid(result.data.uuid)
  }

  useEffect(() => {
    getData()
  }, [])

  // console.log(props)

  return (
    <>
      <Center>
        {/*<h1>{props.label} :   </h1>*/}
        {/*<h1>{props.uuid}</h1>*/}
        {uuid && <h1>uuid : {uuid}</h1>}
      </Center>
      <Center>
        <Link href="/">
          <a>
            돌아가기
          </a>
        </Link>
      </Center>
    </>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default CSR;
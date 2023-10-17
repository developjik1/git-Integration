import React from "react";
import Head from 'next/head'
import Link from "next/link";

import styled from "@emotion/styled";
import {C} from "common/styles";

const SC = styled(C)`
  flex-direction:row;
  justify-content: space-between;
  padding:0 10vw;
  width:80vw;
`

export default function Home() {
  return (
    <C>
      <Head>
        <title>Next.js Render 알아보기</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SC>
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
          <Link href="/get-static-props">
            <a>
              getStaticProps
            </a>
          </Link>
          <Link href="/get-static-paths/1">
            <a>
              getStaticPaths
            </a>
          </Link>
          <Link href="/get-serverside-props">
            <a>
              getServerSideProps
            </a>
          </Link>
          <Link href="/csr">
            <a>
              csr
            </a>
          </Link>
        </SC>
      </main>
    </C>
  )
}

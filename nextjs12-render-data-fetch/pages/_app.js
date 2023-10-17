import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next!</title>
      </Head>
       <Component {...pageProps} />
    </>
  );
}


// MyApp.getInitialProps = async (context) => {
//   console.log('getInitialProps 시작');
//   const { ctx, Component } = context;
//   let pageProps = {};
//
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//
//   console.log('getInitialProps 종료');
//   return { pageProps };
// };

export default MyApp

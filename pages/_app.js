import Wrapper from "@/components/wrapper";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fossil Repository | ASC IITGN</title>
        <meta name="description" content="Fossil Repository | ASC IITGN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
      ></script>
    </>
  );
}

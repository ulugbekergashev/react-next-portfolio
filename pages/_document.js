import { Html, Head, Main, NextScript } from 'next/document'
import { Link } from 'next/link';

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <link href='../public/assets/uelogo.png' rel='icon'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
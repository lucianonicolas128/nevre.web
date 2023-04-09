import HeadApp from '@/components';
import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <HeadApp></HeadApp>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

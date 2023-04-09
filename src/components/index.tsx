import Head from 'next/head';
import React from 'react';

const HeadApp = (props: any) => {
  const {title} = props;
  return (
    <Head>
      {/* <title>
        {title ? title + ' - Match Services App' : 'Match Services App'}
      </title> */}
      <link rel="stylesheet" href="../styles/bootstrap.min.css" />
      <link rel="stylesheet" href="css/font-awesome.min.css" />
      <link rel="stylesheet" href="css/aos.css" />
    </Head>
  );
};

export default HeadApp;

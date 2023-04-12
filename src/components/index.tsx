import Head from 'next/head';
import React from 'react';

const HeadApp = (props: any) => {
  const {title} = props;
  return (
    <Head>
      {/* <title>
        {title ? title + ' - Match Servic
        es App' : 'Match Services App'}
      </title> */}
      <title>
        NEVRE DEV FACTORY - Desarrollo de software y sistemas de gestión de
        negocios
      </title>
      <meta
        name="description"
        content="Desarrollo de software, desarrollo de apps, desarrollo de aplicaciones mobile y web. Programación. Empresa de programación. Sistemas de gestión de negocios y emprendimientos"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="aplicaciones, apps, development, desarrollo, software, software de gestión, software de gestion, aplicaicones web, aplicacion web, desarrollo de aplicaciones web, desarrollo de aplicaciones para telefonos, desarrollo de apps, gestion, gestión, gestion de negocios, gestion de emprendimientos, software de gestión de negocios, software de gestión de emprendimientos, apps para gestion de negocios, apps apra gestión de negocios, apps para gestión de emprendimiento"
      />

      <link
        rel="icon"
        href="https://res.cloudinary.com/lucianonicolas/image/upload/v1681166409/levelapp-logo-circle_iyy2x6.png"
        sizes="32x32"
      />
      <link rel="stylesheet" href="../styles/bootstrap.min.css" />
      <link rel="stylesheet" href="css/font-awesome.min.css" />
      <link rel="stylesheet" href="css/aos.css" />
    </Head>
  );
};

export default HeadApp;

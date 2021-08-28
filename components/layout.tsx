import * as React from "react";
import Head from "next/head";
import "../styles.scss";

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "Harvey Delaney's Portfolio"
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Heebo"
        rel="stylesheet"
      />

      <meta name="author" content="Harvey Delaney" />
      <meta
        name="description"
        content="Harvey Delaney's Personal Website. An overview of Harvey's education history, work history, personal projects and his technical skills."
      />
      <meta name="keywords" content="Harvey,Delaney,Portfolio,Personal" />
      <meta name="theme-color" content="#f9873b" />

      <meta property="og:title" content="Harvey Delaney's Portfolio" />
      <meta
        property="og:description"
        content="Harvey Delaney's Personal Website. An overview of Harvey's education history, work history, personal projects and his technical skills."
      />
      <meta property="og:image" content="/images/harvey-640x640.jpg" />

      <link rel="shortcut icon" href="/favicon.ico" />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=UA-98365855-2`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-98365855-2');
          `
        }}
      />
    </Head>
    {children}
  </>
);

export default Layout;

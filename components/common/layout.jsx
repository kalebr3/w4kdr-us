import React from "react";
import Head from "next/head";

import Header from "components/common/header";
import Heading from "components/common/heading";

export default function Layout({ heading, children }) {
  const [active, setActive] = React.useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <>
      <Head>
        <title>W4KDR - {heading}</title>
      </Head>
      <main className="h-screen bg-gray-200">
        <Header onClick={handleClick} active={active} />
        {heading ? <Heading text={heading} /> : null}
        {children}
      </main>
    </>
  );
}

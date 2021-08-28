import Head from "next/head";
import { useState } from "react";
import About from "../components/About";
import InProgress from "../components/inprogress/InProgress";

export default function Home() {
  const [inProgress, setInProgress] = useState(true);

  return (
    <div className="space-y-14 lg:space-y-24 m-96">
      <Head>
        <title>Harun Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        {inProgress ? <InProgress /> : <About />}
      </main>
    </div>
  );
}

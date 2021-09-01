import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [inProgress, setInProgress] = useState(false);

  return (
    <div className="space-y-14 my-36 lg:space-y-24 lg:my-56">
      <Head>
        <title>Harun Codes |</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero section */}
        <section></section>

        {/* Blog Posts section */}
        <section className="max-w-4xl md:flex md:justify-center">
          <div className="max-w-xs md:max-w-sm mx-auto border-solid border border-gray-100 mb-5 rounded dark:border-gray-600">
            <img src="https://1password.com/img/resources/creating-a-culture-of-security-header.b17acb8a6866301d3bc8c2f6d2d0a3bc.svg" />
            <div className="bg-gray-50 p-5 dark:bg-gray-800">
              <h1 className="text-lg text-left py-2 dark:text-white">
                Learn More about how Next Js works!
              </h1>
              <h2 className="text-base mb-5 dark:text-white">
                Next.js gives you the best developer experience with all the
                features you need for production: hybrid static & server
                rendering, TypeScript support, smart bundling, route
                pre-fetching, and more. No config needed.
              </h2>
              <a href="#" className="text-sm">
                Read more about NextJS
              </a>
            </div>
          </div>

          <div className="max-w-xs md:max-w-sm mx-auto border-solid border border-gray-100 mb-5 rounded dark:border-gray-600">
            <img src="https://1password.com/img/resources/creating-a-culture-of-security-header.b17acb8a6866301d3bc8c2f6d2d0a3bc.svg" />
            <div className="bg-gray-50 p-5 dark:bg-gray-800">
              <h1 className="text-lg text-left py-2 dark:text-white">
                Learn More about how Next Js works!
              </h1>
              <h2 className="text-base mb-5 dark:text-white">
                Next.js gives you the best developer experience with all the
                features you need for production: hybrid static & server
                rendering, TypeScript support, smart bundling, route
                pre-fetching, and more. No config needed.
              </h2>
              <a href="#" className="text-sm">
                Read more about NextJS
              </a>
            </div>
          </div>

          <div className="max-w-xs md:max-w-sm mx-auto border-solid border border-gray-100 mb-5 rounded dark:border-gray-600">
            <img src="https://1password.com/img/resources/creating-a-culture-of-security-header.b17acb8a6866301d3bc8c2f6d2d0a3bc.svg" />
            <div className="bg-gray-50 p-5 dark:bg-gray-800">
              <h1 className="text-lg text-left py-2 dark:text-white">
                Learn More about how Next Js works!
              </h1>
              <h2 className="text-base mb-5 dark:text-white">
                Next.js gives you the best developer experience with all the
                features you need for production: hybrid static & server
                rendering, TypeScript support, smart bundling, route
                pre-fetching, and more. No config needed.
              </h2>
              <a href="#" className="text-sm">
                Read more about NextJS
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

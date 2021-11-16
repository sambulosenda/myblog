import React from "react";
import Link from "next/link";
import { BlogNewsletterForm } from "../Newsletter/Newsletter";

function Banner() {
  return (
    <div>
      <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
        <div className="pt-6">
          <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I’m Sambulo
          </h1>
          <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
            {`I have a confession😁. As much as I love to build mobile applications using flutter and dart. I love to write and teach more.
`}
            <Link href="/projects">side projects</Link>
            {" and "}
            <Link href="/blog">blogging</Link>
            {" about them. Have a good read!"}
          </h2>
        </div>
        <div className="flex items-center justify-center mx-2 my-12 w-96">
          <BlogNewsletterForm title="Stay updated, receive the latest post straight to your mailbox" />
        </div>
      </div>
    </div>
  );
}

export default Banner;

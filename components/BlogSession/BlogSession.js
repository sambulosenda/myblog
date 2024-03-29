import React from "react";

function BlogSession({ children }) {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Blog
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Thoughts from a wandering mind.
        </p>
      </div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {listItems.map((blog, i) => (
          <BlogPost key={i} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogSession;

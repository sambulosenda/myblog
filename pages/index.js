import Head from "next/head";
import matter from "gray-matter";
import BlogPost from "../components/Blog/BlogPost";
import Banner from "../components/Banner/Banner";

export default function Home(props) {
  const realData = props.data.map((blog) => matter(blog));
  const listItems = realData.map((listItem) => listItem.data);

  return (
    <div className=" max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <Banner />
      <div>
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-mm text-gray-500 sm:mt-4">
            Check out our blog for the latest tips, tricks, and best practices
            on Javascript, React/React Native, AWS and Startups.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          {listItems.map((blog, i) => (
            <BlogPost key={i} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const blogs = files.filter((fn) => fn.endsWith(".md"));
  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return rawContent;
  });
  return {
    props: {
      data,
    },
  };
};

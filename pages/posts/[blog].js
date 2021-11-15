import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Pagetitle from "../../components/PageTitle/Pagetitle";
import remarkGfm from "remark-gfm";
import CodeBlock from "../../components/Codeblock/Codeblock";

function Blog(props) {
  const { data, content } = matter(props.content);
  return (
    <div id="blog-post-container">
      <div className=" max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div></div>
            </dl>
            <div>
              <Pagetitle>{data.title}</Pagetitle>
            </div>
          </div>
        </header>
        <ReactMarkdown
          style={{ text: { fontSize: 70 } }}
          components={CodeBlock}
          children={content}
          remarkPlugins={[remarkGfm]}
          escapeHtml={false}
        />
        , document.body
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const fs = require("fs");
  const { blog } = context.params;
  const content = fs.readFileSync(
    `${process.cwd()}/content/${blog}.md`,
    "utf8"
  );
  return {
    props: {
      content,
    },
  };
};

export default Blog;

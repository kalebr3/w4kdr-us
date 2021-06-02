import Layout from "components/common/layout";

import { getPostBySlug } from "utils/api";
import md2html from "utils/md2html";

export default function Home({ post }) {
  return (
    <Layout heading="Home">
      <div className="flex justify-center">
        <article
          className="prose p-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const post = getPostBySlug("home", ["content"]);
  const content = await md2html(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

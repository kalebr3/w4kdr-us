import Layout from "components/common/layout";

import { getPostBySlug } from "services/LocalMarkdown";
import md2html from "utils/md2html";

export default function Home({ post }) {
  return (
    <Layout heading="Home">
      <div className="flex justify-center px-6 py-10">
        <article
          className="prose"
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

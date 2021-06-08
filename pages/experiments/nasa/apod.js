import Layout from "components/common/layout";

import { getPostBySlug } from "services/LocalMarkdown";
import md2html from "utils/md2html";

import { useAPOD } from "services/swrHooks";

export default function APOD({ post }) {
  const { apod, isLoading, isError } = useAPOD();

  if (isError) return <div>ERROR!</div>;
  if (isLoading) return <div>LOADING!</div>;

  return (
    <Layout heading="NASA Astronomy Picture of the Day">
      <div className="flex justify-center">
        <article
          className="prose p-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <div className="bg-gray-200">
        <div className="m-2 p-4 grid gap-6 grid-col-1 lg:grid-cols-12 bg-gray-200">
          <div className="lg:col-span-5">
            <img src={apod.url} alt={apod.title} />
          </div>
          <div className="lg:col-span-7">
            <h1 className="text-3xl">{apod.title}</h1>
            <h2 className="text-2xl">{apod.copyright}</h2>
            <p>{apod.date}</p>
            <p className="text-lg">{apod.explanation}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const post = getPostBySlug("NASAAPOD", ["content"]);
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

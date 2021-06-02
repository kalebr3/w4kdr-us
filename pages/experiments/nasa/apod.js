import useSWR from "swr";

import Layout from "components/common/layout";
import ErrorBanner from "components/common/ErrorBanner";
import RefreshIcon from "components/common/svg/refreshIcon";

import { getPostBySlug } from "utils/api";
import md2html from "utils/md2html";

import { getNASA } from "services/NASA";
import APODCard from "components/apodCard";

export default function APOD({ post }) {
  const { data, error } = useSWR("/planetary/apod/", getNASA);
  return (
    <Layout heading="NASA APOD">
      <div className="flex justify-center">
        <article
          className="prose p-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      {error ? (
        <ErrorBanner
          title="Something Went Wrong"
          body="Unable to load the NASA Astronomy Picture of the Day"
        />
      ) : !data ? (
        <RefreshIcon />
      ) : (
        <APODCard apod={data} />
      )}
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

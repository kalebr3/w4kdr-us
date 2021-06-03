import { useState, useEffect } from "react";

import Layout from "components/common/layout";

import { getPostBySlug } from "services/LocalMarkdown";
import md2html from "utils/md2html";

import { getAPOD } from "services/NASA";
import APODCard from "components/apodCard";

export default function APOD({ post }) {
  const [apod, setAPOD] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAPOD();
      setAPOD(response.data);
    };
    fetchData();
  }, []);

  return (
    <Layout heading="NASA Astronomy Picture of the Day">
      <div className="flex justify-center">
        <article
          className="prose p-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <div className="bg-gray-200">
        <APODCard apod={apod} />
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

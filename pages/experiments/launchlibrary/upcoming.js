import Layout from "components/common/layout";
import { useState, useEffect } from "react";
import { getUpcoming } from "services/LaunchLibrary";
import _ from "lodash";
import PaginatedContainer from "components/paginatedContainer";
import LaunchCard from "components/launchCard";

import { getPostBySlug } from "services/LocalMarkdown";
import md2html from "utils/md2html";

export default function UpcomingLaunches({ post }) {
  const [launches, setLaunches] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setlimit] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUpcoming({
        search: "FL, USA",
        ordering: "net",
        limit: limit,
        offset: offset,
      });
      setLaunches(response.data.results);
      setTotalRecords(response.data.count);
    };
    fetchData();
  }, [limit, offset]);

  const pages = _.range(1, _.ceil(totalRecords / limit) + 1);
  const firstPage = _.min(pages);
  const lastPage = _.max(pages);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  const handlePageChange = (page) => {
    if (page < firstPage) return;
    if (page > lastPage) return;
    setCurrentPage(page);
    setOffset((page - 1) * limit);
  };

  const handleNextPage = () => {
    if (nextPage > lastPage) return;
    setCurrentPage(nextPage);
    setOffset((nextPage - 1) * limit);
  };

  const handlePrevPage = () => {
    if (prevPage < firstPage) return;
    setCurrentPage(prevPage);
    setOffset((prevPage - 1) * limit);
  };

  return (
    <Layout heading="Upcoming Launches">
      <div className="flex justify-center">
        <article
          className="prose p-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <PaginatedContainer
        itemsCount={totalRecords}
        pageSize={limit}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      >
        <div className="flex flex-wrap justify-center bg-gray-200">
          {launches.map((launch) => (
            <LaunchCard key={launch.id} launch={launch} />
          ))}
        </div>
      </PaginatedContainer>
      <button className="hidden" onClick={() => setlimit(8)}>
        Limit 8
      </button>
    </Layout>
  );
}

export async function getStaticProps() {
  const post = getPostBySlug("upcomingLaunches", ["content"]);
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

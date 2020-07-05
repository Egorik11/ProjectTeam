import React, { useState, useEffect } from "react";

import FilterBar from "./FilterBar/FilterBar";
import PostsList from "./PostsList/PostsList";
import LoadMore from "./LoadMore/LoadMore";
import Pagination from "./Pagination/Pagination";

import { loadPosts } from '../../api';

const TOTAL_COUNT = 100;

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const totalPages = Math.ceil(TOTAL_COUNT / limit)

  useEffect(() => {
    loadPosts()
      .then((data) => setPosts(data));
  }, []);

  const handleLimitChange = (selectedLimit) => {
    setLimit(selectedLimit);
    setCurrentPage(1);
    setIsLoadMore(false);
    loadPosts(1, selectedLimit)
      .then((data) => setPosts(data));
  };

  const handlePaginationSelect = (selectedPage) => {
    if (isLoadMore && selectedPage <= currentPage) return;
  
    setCurrentPage(selectedPage);
    setIsLoadMore(false);
    loadPosts(selectedPage, limit)
      .then((data) => setPosts(data));
  };

  const handleLoadMore = () => {
    const page = currentPage + 1;
    setIsLoadMore(true);
    setCurrentPage(page);
    loadPosts(page, limit)
      .then((data) => setPosts(posts.concat(data)));
  };
  
  return (
    <main className="uk-main uk-section uk-container">
      <FilterBar handleLimitChange={handleLimitChange} />
      <PostsList posts={posts} />
      <LoadMore handleLoadMore={handleLoadMore} />
      <Pagination 
        handlePaginationSelect={handlePaginationSelect}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
}

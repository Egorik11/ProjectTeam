import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar/FilterBar";
import PostsList from "./PostsList/PostsList";
import LoadMore from "./LoadMore/LoadMore";
import Pagination from "./Pagination/Pagination";

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [limit, setLimit] = useState(6);
  const [currentPagination, setCurrentPagination] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setFilteredPosts(data.slice());
        });
    };
    loadPosts();
  }, []);

  const filterPosts = (length) => {
    setLimit(length);
    setCurrentPagination(1);
    const newFilteredPosts = posts.slice(
      (currentPagination - 1) * length,
      currentPagination * length
    );
    setFilteredPosts(newFilteredPosts);
  };

  const countPagination = Math.ceil(posts.length/limit)
  return (
    <main className="uk-main uk-section uk-container">
      <FilterBar filterPosts={filterPosts} />
      <PostsList posts={filteredPosts} />
      <LoadMore />
      <Pagination countPagination={countPagination}/>
    </main>
  );
}

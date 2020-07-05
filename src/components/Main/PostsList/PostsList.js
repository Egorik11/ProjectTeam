import React from "react";
import PostItem from "./PostItem/PostItem";



export default function PostsList({ posts }) {
  const renderPosts = () => {
    const showPost = posts.map((post) => {
      return <PostItem key={post.id} title={post.title} body={post.body} id={post.id} />;
    });
    return showPost;
  };

  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {renderPosts()}
    </div>
  );
}

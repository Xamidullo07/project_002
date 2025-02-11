"use client";

import React, { useState } from "react";
import "./style.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postText.trim()) return;

    const newPost = {
      id: posts.length + 1,
      text: postText,
      likes: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    setPostText("");
  };

  return (
    <div className="posts-container">
      <h2 className="title">Posts</h2>
      <p className="subtitle">
        <span className="icon">👥</span> Welcome to the community
      </p>

      <div className="post-form">
        <h3>Say Something...</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Create a post"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Posts;

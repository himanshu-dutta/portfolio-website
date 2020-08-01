import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const h3_style = {
    textAlign: "center",
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/`
        );
        setBlogs(res.data);
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

  const capitalize = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    else return "";
  };

  const makeEven = (text, size) => {
    if (text.length < size) {
      var sz = text.length;
      sz = Math.floor((size - sz) / 32);
      text = "<br />".repeat(sz) + text;
    }
    return { __html: text };
  };

  const getBlogs = () => {
    let results = [];
    blogs.map((blogPost) => {
      return results.push(
        <Post
          key={blogPost.id}
          img={blogPost.thumbnail}
          title={capitalize(blogPost.title)}
          description={makeEven(blogPost.intro, 150)}
          slug={blogPost.slug}
          type="blog"
        />
      );
    });
    return results;
  };

  return (
    <section className="s2">
      <div className="portfolio-container">
        <h3 style={h3_style}>Some of my past projects</h3>

        <div className="post-wrapper">
          {/* Adding all different posts altogether */}
          {getBlogs()}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

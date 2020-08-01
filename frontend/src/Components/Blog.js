import React, { useState, useEffect } from "react";

import axios from "axios";
import Navbar from "./Navbar";
import Placeholder from "./Placeholder";

export default function Blog(props) {
  const [blog, setBlog] = useState({});
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const slug = props.match.params.id;

    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/${slug}`
        );
        setBlog(res.data);
        setTags(res.data.tags);
      } catch (err) {}
    };
    fetchBlog();
  }, [props.match.params.id]);

  const createBlog = () => {
    return { __html: blog.content };
  };
  const getTags = () => {
    let tagList = [];
    tags.map((tag) => {
      return tagList.push(
        <li className="tag-list" key={tag}>
          #{tag}
        </li>
      );
    });
    return <ul>{tagList}</ul>;
  };

  return (
    <section className="s1">
      <div className="main-container">
        <Placeholder minHeight="5em" />
        <Navbar />
        <section className="blog-title">
          <h1> {blog.title}</h1>
          {getTags()}
        </section>
        <div className="blog" dangerouslySetInnerHTML={createBlog()} />
        <Placeholder minHeight="5em" />
      </div>
    </section>
  );
}

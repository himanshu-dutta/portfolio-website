import React from "react";
import { Link } from "react-router-dom";

export default function Post(props) {
  const capitalize = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    else return "";
  };
  let source = null;
  let link = null;
  let slug_link = null;
  if (props.source) {
    source = (
      <a target="_blank" rel="noopener noreferrer" href={props.source}>
        Source Code
      </a>
    );
  }
  if (props.link) {
    link = <Link to={`/${props.link}`}>View {capitalize(props.type)}</Link>;
  }
  if (props.slug) {
    slug_link = (
      <Link to={`/${props.type}/${props.slug}`}>
        View {capitalize(props.type)}
      </Link>
    );
  }

  return (
    <div>
      <div className="post">
        <img
          className="thumbnail"
          src={props.img}
          alt={capitalize(props.type)}
        />
        <div className="post-preview">
          <h6 className="post-title">{props.title}</h6>
          <p
            className="post-intro"
            dangerouslySetInnerHTML={props.description}
          />
          {link}
          {slug_link}
          <br />
          {source}
        </div>
      </div>
    </div>
  );
}

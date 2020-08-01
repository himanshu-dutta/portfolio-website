import React from "react";
import Post from "./Post";
import PostImg from "../images/portfolio.png";

export const Portfolio = () => {
  const h3_style = {
    textAlign: "center",
  };
  return (
    <section className="s2">
      <div className="portfolio-container">
        <h3 style={h3_style}>Some of my past projects</h3>

        <div className="post-wrapper">
          {/* Adding all different posts altogether */}

          <Post
            img={PostImg}
            title="Portfolio Website"
            description={{
              __html:
                "This project is basically this website. Hence no redirection.",
            }}
            link={`//${process.env.REACT_APP_PROJECT_PORTFOLIO_URL}`}
            type="Project"
            source="//github.com/himanshu-dutta/portfolio-website"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

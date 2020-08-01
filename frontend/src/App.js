import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./App.css";

// Components
import Placeholder from "./Components/Placeholder";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Blogs from "./Components/Blogs";

function App(props) {
  // hooks
  const [pageName, setPageName] = useState("Landing");
  const [skills, setSkills] = useState([]);
  const [data, setData] = useState({});

  function setPage(page) {
    setPageName(page);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/details/himanshu`
        );
        setData(res.data);
        setSkills(res.data.top_skills);
      } catch (err) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (props.location.state) {
      console.log(props.location.state.pageName);
      setPage(props.location.state.pageName);
      const { location, history } = props;
      history.replace();
    }
  });
  const skillList = () => {
    let list = [];
    skills.map((skill) => {
      return list.push(<li key={skill}>{skill}</li>);
    });

    return (
      <div id="skills">
        <ul>{list.slice(0, 5)}</ul>
        <ul>{list.slice(5, 10)}</ul>
      </div>
    );
  };

  let page = <Landing />;
  if (pageName === "Landing") {
    page = <Landing key="landing" data={data} />;
  } else if (pageName === "About") {
    page = <About key="about" data={data} skills={skillList()} />;
  } else if (pageName === "Blogs") {
    page = <Blogs key="blogs" />;
  } else if (pageName === "Portfolio") {
    page = <Portfolio key="portfolio" />;
  }

  return (
    <div className="App">
      <section className="s1">
        <div className="main-container">
          <Placeholder text={data.placeholder} minHeight="10em" />
          <Navbar handler={setPageName} type="landing" />
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={300}
          >
            {page}
          </ReactCSSTransitionGroup>
          <Placeholder minHeight="10em" />
        </div>
      </section>
    </div>
  );
}

export default withRouter(App);

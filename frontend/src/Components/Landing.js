import React from "react";

const Landing = (props) => {
  const switchTheme = (theme) => {
    Object.keys(theme).map((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
      return null;
    });
  };

  const lightTheme = {
    "--mainColor": "#eaeaea",
    "--secondaryColor": "#fff",

    "--borderColor": "#c1c1c1",

    "--mainText": "black",
    "--secondaryText": "#4b5156",
    "--secondarytext": "#4b5156",

    "--themeDotBorder": "#24292e",

    "--previewBg": "rgba(251, 249, 243, 0.8)",
    "--previewShadow": "#f0ead6",

    "--projectShadow": "rgba(88, 88, 88, 0.452)",

    "--buttonColor": "black",
  };
  const darkTheme = {
    "--mainColor": "#15202b",
    "--secondaryColor": "#192734",

    "--borderColor": "#164d56",

    "--mainText": "#fff",
    "--secondaryText": "#eeeeee",
    "--secondarytext": "#eeeeee",

    "--themeDotBorder": "#fff",

    "--previewBg": "rgba(25, 39, 52, 0.8)",
    "--previewShadow": "#111921",

    "--projectShadow": "rgba(255, 255, 255, 0.582)",

    "--buttonColor": "#17a2b8",
  };

  const h5_style = { textAlign: "center", lineHeight: 0 };
  return (
    <section className="s2">
      <div className="landing-wrapper">
        {/* left column */}
        <div className="left-column">
          <img id="profile_pic" src={props.data.profile} alt="profile" />
          <h5 style={h5_style}>Change Theme</h5>

          <div id="theme-option-wrapper">
            <div
              id="light-mode"
              className="theme-dot"
              onClick={() => switchTheme(lightTheme)}
            ></div>
            <div
              id="dark-mode"
              className="theme-dot"
              onClick={() => switchTheme(darkTheme)}
            ></div>
          </div>
        </div>

        {/* right column */}
        <div className="right-column">
          <div id="preview-shadow">
            <div id="preview">
              <div id="corner-tl" className="corner"></div>
              <div id="corner-tr" className="corner"></div>
              <h3>What I Do?</h3>
              <p>{props.data.what_i_do}</p>
              <div id="corner-bl" className="corner"></div>
              <div id="corner-br" className="corner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

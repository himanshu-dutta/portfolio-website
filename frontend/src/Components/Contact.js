import React, { Component } from "react";

export class Contact extends Component {
  render() {
    const h3_style = {
      textAlign: "center",
    };
    return (
      <section className="s2">
        <div className="main-container">
          <h3 style={h3_style}>Get In Touch</h3>
          <form id="contact-form">
            {/* <a name="contact"></a> */}

            <label>Name</label>
            <input className="input-field" type="text" name="name" />

            <label>Subject</label>
            <input className="input-field" type="text" name="subject" />

            <label>Email</label>
            <input className="input-field" type="text" name="email" />

            <label>Message</label>
            <textarea className="input-field" name="message" />

            <input id="submit-btn" type="submit" value="Send" />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;

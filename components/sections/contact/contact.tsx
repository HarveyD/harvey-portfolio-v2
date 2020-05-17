import * as React from "react";

import SocialIcon, { ISocialIcon } from "../../shared/social/social";

import "./contact.scss";

interface IProps {
  socialIconList: ISocialIcon[];
}

const Contact: React.FunctionComponent<IProps> = ({ socialIconList }) => (
  <section id="contact" className="section section-theme">
    <h2>Contact</h2>

    <div className="contact-container">
      <div className="social-container">
        {socialIconList.map((social, i) => (
          <SocialIcon key={i} social={social} />
        ))}
      </div>

      <div className="form-container">
        <h3>Send me a message</h3>
        <form
          method="POST"
          className="form"
          action="https://formspree.io/harvey@harveydelaney.com"
        >
          <input
            type="hidden"
            name="_subject"
            value="Contact request from personal website"
          />
          <input type="email" name="_replyto" placeholder="Your email" />
          <textarea name="message" placeholder="Your message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;

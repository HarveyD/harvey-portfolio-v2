import * as React from "react";

import "./footer.scss";

const Footer: React.FunctionComponent = () => (
  <footer className="section section-dark section-footer">
    <div className="footer-container">
      Copyright © {new Date().getFullYear()} Harvey Delaney
    </div>
  </footer>
);

export default Footer;

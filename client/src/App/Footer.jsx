import React from 'react';

export default function Footer() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
    <footer>
      <div className="text-center">
        <div className="mx-auto">
          <ul className="nav">
            <li className="nav-item"><a href="https://twitter.com/lighthouse_labs" target="0"><i className="fa fa-twitter fa-2x"></i></a></li>
            <li className="nav-item"><a href="https://www.facebook.com/lighthouselabsvancouver" target="0"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li className="nav-item"><a href="https://plus.google.com/+LighthouselabsCan/posts" target="0"><i className="fa fa-google-plus fa-2x"></i></a></li>
            <li className="nav-item"><a href="https://www.linkedin.com/company/lighthouse-labs" target="0"><i className="fa fa-linkedin fa-2x"></i></a></li>
          </ul>
          <ul className="nav">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="https://www.lighthouselabs.ca/contact" target="0">Contact us</a></li>
          </ul>
          <small>Lighthouse Labs © 2018</small>
        </div>
      </div>
    </footer>
  </div>
  );
}

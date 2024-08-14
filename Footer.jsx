import React from 'react';
import { Link } from 'react-router-dom';

const footerStyles = {
  container: {
    backgroundColor: '#282c34',
    padding: '20px 0',
    color: '#fff',
  },
  header: {
    fontSize: '1.5rem',
    color: '#61dafb',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#21a0f6',
  },
  button: {
    backgroundColor: '#61dafb',
    borderColor: '#61dafb',
    color: '#282c34',
    borderRadius: '20px',
  },
  hr: {
    borderColor: '#61dafb',
    margin: '2rem 0',
  },
  copyright: {
    marginTop: '1rem',
    color: '#a9a9a9',
  },
};

const Footer = () => {
  return (
    <div style={footerStyles.container}>
      <div className="container my-5">
        <footer className="text-center text-lg-start">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 style={footerStyles.header}>Project Management Tool</h5>
                  <p>
                    A project management tool is a powerful tool designed to help individuals and teams efficiently organize, track, and accomplish their tasks and projects.
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 style={footerStyles.header}>About Us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Company Overview
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Our History
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 style={footerStyles.header}>Contact Us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Sales Inquiries
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Press Contacts
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Office Locations
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 style={footerStyles.header}>Resources</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Community Forums
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 style={footerStyles.header}>Quick Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#!" style={footerStyles.link}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr style={footerStyles.hr} />

            <section className="d-flex justify-content-center align-items-center">
              <p>
                <span className="me-3">Login from here</span>
                <Link to="/user/login">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded"
                    style={footerStyles.button}
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr style={footerStyles.hr} />
          </div>

          <div style={footerStyles.copyright} className="text-center">
            © 2024 Copyright:
            <a
              className="text-color-3"
              href="https://CDACBengaluru.com"
              style={footerStyles.link}
            >
              CDACBengaluru.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

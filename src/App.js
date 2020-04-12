import React from "react";
// import logo from './logo.svg';
import Portfolio from "./components/Portfolio";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  const portfolioLinks = [
    {
      picture:
        "https://fortellingenskraft.no/2019/wp-content/uploads/sites/5/2019/03/Mario-Garcia-Portrait-1-x-1-e1553205512929.jpg",
      quote:
        "Time is of the essence. faktual is a time-friendly product. Mobile storytelling requires a lot of “slices” of a story, much of which comes from research that sometimes is long and tedious. faktual cuts to the heart of what is important, and I know journalists will appreciate this very much.",
      title: "Mario Garcia ",
      caption:
        "Senior Adviser on News Design - Columbia University - School of Journalism"
    },
    {
      picture:
        "https://www.gogol-publishing.de/wp-content/uploads/2017/05/dr-matthias-moeller.jpg",
      quote:
        "What the team behind Faktual developed in 4 months would have taken years in the industry. They deconstructed needs in the enormous complex newspaper industry and created a product which already created significant demand in the industry.",
      title: "Matthias Möller",
      caption: "Co-Founder and CMO Gogol Publishing / Multicom"
    }
  ];

  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            f a k t u a l
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a
          className="btn btn-signon button text-uppercase js-scroll-trigger"
          href="https://searchfaktual.de"
        >
          Login
        </a>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome to faktual!</div>
            <div className="intro-heading text-uppercase">
              Research the smart way!
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#about"
            >
              Start now
            </a>
          </div>
        </div>
      </header>

      <section className="bg-light page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">How we do it</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      //className="rounded-circle img-fluid"
                      src="https://faktual.de/wp-content/uploads/2020/02/Screenshot-2020-02-05-at-15.17.33.png"
                      alt=""
                      width="200px"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading">Search engine</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        faktual automatically collects and extracts information
                        from national and regional sources. Additional sources
                        can be added. Based on your search words, faktual
                        extracts relevant facts, quotes and information which
                        can directly be saved and transferred to your editor.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      //className="rounded-circle img-fluid"
                      src="https://faktual.de/wp-content/uploads/2020/02/Screenshot-2020-02-05-at-15.27.12.png"
                      alt=""
                      width="200px"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading">Topic alerts</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Never miss a post from your favorite source again by
                        setting alerts. Simply enter the search words, select
                        the sources that are relevant, and get informed if
                        something comes up.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      //className="rounded-circle img-fluid"
                      src="https://faktual.de/wp-content/uploads/2020/02/Screenshot-2020-02-05-at-15.21.45.png"
                      alt=""
                      width="200px"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading">News feed</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Find unique and unconventional information and get
                        inspired by reading through the latest updates from the
                        sources that are relevant to you. 
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Be part
                      <br />
                      Of Our
                      <br />
                      Story!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Advantages</h2>
              <h3 className="section-subheading text-muted">
                Start using faktual today
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-line-chart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Efficiency</h4>
              <p className="text-muted">
                Save around 15hrs/knowledge worker/month by searching through
                many connected sources (from the internet and the intranet) with
                a single query
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Quality</h4>
              <p className="text-muted">
                More targeted results through each knowledge workers own
                selection of relevant and reliable sources
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Traceability</h4>
              <p className="text-muted">
                Each piece of information is automatically linked to its source
              </p>
            </div>
          </div>

          <div className="video">
            <ReactPlayer url="https://www.youtube.com/watch?v=U1brSb6Plbg" />
          </div>
        </div>
      </section>

      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      <section className="page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">The team </h2>
              <h3 className="section-subheading text-muted">
                We want to make a change!
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://faktual.de/wp-content/uploads/2020/02/Picture-2.png"
                  alt=""
                />
                <h4>Moritz Beutter</h4>
                <p className="text-muted">Sales and business development</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/moritz-beutter-37b117121/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://faktual.de/wp-content/uploads/2020/02/Picture-1.png"
                  alt=""
                />
                <h4>Abraham Duplaa</h4>
                <p className="text-muted">Development</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/abraham-duplaa/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                We are looking forward working with you
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/envato.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/designmodo.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/themeforest.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/creative-market.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone *"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; faktual UG</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#something">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

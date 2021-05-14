import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Pdf from "../../editable-stuff/resume.pdf";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist className="lead typist" cursor={{ show: false }}>
            {" "}
            {message}
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-dark btn-lg "
            href="https://tylertaewook.github.io/blog/"
            role="button"
            aria-label="Check out my blog!"
          >
            Check out my blog!
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            className="btn btn-outline-dark btn-lg "
            href="https://tylertaewook.github.io/static/media/resume.ac6f176c.pdf"
            role="button"
            aria-label="Resume"
          >
            Resume
          </a>
          
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;

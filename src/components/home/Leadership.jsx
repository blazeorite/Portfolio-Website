import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <div
      id="leadership"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
          <div className="col-md-5">
            <p className="lead">
              Senior Peer Mentor
              <ul style={{ fontSize: 15 }}>
                <li>Trained other peer menotrs to succesully mentor.</li>
                <li>
                  Organized study sessions, and coordinated weekly personal
                  check-in's with multiple mentors, and mentees weekly.
                </li>
                <li>
                  Guided students in development of skills and strategies for
                  dealing with their problems.
                </li>
              </ul>
              <br />
              Computer Science Club
              <ul style={{ fontSize: 15 }}>
                <li>
                  Helped with organizing events and bringing attention to the
                  club. Volunteered at events to teach and inspire young
                  children about code.
                </li>
                <li>
                  Participated in Hackathons, presented on advanced topics, and
                  gained insight from professionals
                </li>
              </ul>
            </p>
          </div>
          <div className="col-md-7">
            <Carousel>
              {img.map((value, index) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={value.img}
                      alt="First slide"
                      width={imageSize.width}
                      height={imageSize.height}
                    />
                    <Carousel.Caption>
                      <h3>{value.label}</h3>
                      <p>{value.paragraph}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;

// stylesheet
import style from "@/styles/framework.module.css";

// react-bootstrap
import { Container, Stack, Row, Col } from "react-bootstrap";

// react-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Assets
import django from "@/Assets/Images/django.png";
import asp from "@/Assets/Images/asp.png";
import express from "@/Assets/Images/express.png";
import flask from "@/Assets/Images/flask.png";
import laravel from "@/Assets/Images/laravel.png";
import next from "@/Assets/Images/nextjs.png";
import ruby from "@/Assets/Images/rubyonrails.png";
import spring from "@/Assets/Images/springboot.png";

// next
import Image from "next/image";

function Frameworks() {
  return (
    <>
      <Container className="mt-4 mb-4" fluid>
        {/* Title */}
        <div className="d-flex align-items-center justify-content-center">
          <h2 className={style.title}>
            Revolutionize Your API Development Workflow
          </h2>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p className={style.subtext}>
            Create Custom APIs in Any Language and Framework with Beanstalk's
            AI-Powered Code Generation!
          </p>
        </div>
        <Container fluid>
          {/* Carousel */}
          <Carousel
            className="d-none d-lg-flex"
            showStatus={false}
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            renderIndicator={false}
            showIndicators={false}
            showThumbs={false}
            centerMode
            centerSlidePercentage={25}
          >
            <div
              style={{ height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                style={{ height: "100px", width: "200px" }}
                src={django}
                alt="img"
              />
            </div>
            <div
              style={{ height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                style={{ height: "100px", width: "200px" }}
                src={express}
                alt="img"
              />
            </div>
            <div
              style={{ height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                style={{ height: "100px", width: "100px" }}
                src={flask}
                alt="img"
              />
            </div>
            <div
              style={{ height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                style={{ height: "125px", width: "200px" }}
                src={laravel}
                alt="img"
              />
            </div>
            <div
              style={{ height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                style={{ height: "50px", width: "200px" }}
                src={next}
                alt="img"
              />
            </div>
            <div
              style={{ height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                style={{ height: "100px", width: "100px" }}
                src={ruby}
                alt="img"
              />
            </div>
            <div
              style={{ height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                style={{ height: "100px", width: "200px" }}
                src={spring}
                alt="img"
              />
            </div>
          </Carousel>
        </Container>
        <Carousel
          className="d-flex d-lg-none"
          showStatus={false}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          renderIndicator={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              style={{ height: "100px", width: "200px" }}
              src={django}
              alt="img"
            />
          </div>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              style={{ height: "100px", width: "200px" }}
              src={express}
              alt="img"
            />
          </div>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              style={{ height: "100px", width: "100px" }}
              src={flask}
              alt="img"
            />
          </div>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              style={{ height: "125px", width: "200px" }}
              src={laravel}
              alt="img"
            />
          </div>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              style={{ height: "50px", width: "200px" }}
              src={next}
              alt="img"
            />
          </div>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              style={{ height: "100px", width: "100px" }}
              src={ruby}
              alt="img"
            />
          </div>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              style={{ height: "100px", width: "200px" }}
              src={spring}
              alt="img"
            />
          </div>
        </Carousel>
      </Container>
    </>
  );
}

export default Frameworks;

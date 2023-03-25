// stylesheet
import style from "@/styles/hero.module.css";

import { Container, Stack, Row, Col } from "react-bootstrap";

// react-icons
import { AiFillThunderbolt } from "react-icons/ai";

// Assets
import HeroIllustration from "@/Assets/Images/hero-illustration.png";

// next
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <>
      <Container className={` ${style.heroContainer}`} fluid>
        <Row>
          {/* Call to action */}
          <Col className="d-flex justify-content-center align-items-center">
            <Container className="text-center" fluid>
              <Stack
                gap={2}
                direction="horizontal"
                className="justify-content-center align-items-center"
              >
                <span className={`${style.title}`}>
                  <span className={style.heroGreenBack}>Blazing</span>
                </span>
                <AiFillThunderbolt
                  style={{ height: "52px", width: "52px", color: "#33c481" }}
                />
                <span className={`${style.title}`}>Fast</span>
              </Stack>
              <div className="mt-2">
                <span className={style.subtext}>
                  <span className={`${style.greenBackground}`}>AI</span> based{" "}
                  <span className={`${style.greenBackground}`}>API</span>{" "}
                  generator
                </span>
              </div>
              <div className="mt-2">
                <span className={` ${style.subtext}`}>
                  Get started with{" "}
                  <span className={`${style.greenUnderline}`}>Beanstalk</span>{" "}
                  to generate code for your API endpoints in a matter of
                  minutes.
                </span>
              </div>
              <div className="mt-2">
                <Link className={style.link} href="/dashboard">
                  <button className={style.getStartedButton}>
                    Get Started
                  </button>
                </Link>
              </div>
            </Container>
          </Col>
          {/* Illustration section */}
          <Col>
            <Container
              className={`d-flex justify-content-center align-items-center`}
              fluid
            >
              <Image
                className={`${style.heroIllustration}`}
                src={HeroIllustration}
                alt="illustration"
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hero;

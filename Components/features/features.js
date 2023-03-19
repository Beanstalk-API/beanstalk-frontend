import style from "@/styles/features.module.css";
import { Container, Stack, Row, Col } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import { FaShieldAlt, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

// Assets
import GenerateCode from "@/Assets/Images/generate-code.png";
import Security from "@/Assets/Images/security.png";
import Web from "@/Assets/Images/web.png";
import document from "@/Assets/Images/documentation.png";

// next
import Image from "next/image";

function Features() {
  return (
    <Container id="features" className={` ${style.featuresContainer}`} fluid>
      {/* Features list */}
      <Container className="text-center" fluid>
        <h2 className={`${style.title}`}>Features</h2>
        {/* Generate Code feature */}
        <Row style={{ marginTop: "50px" }}>
          {/* Feature description */}
          <Col className="d-flex justify-content-center align-items-center">
            <div className={`${style.feature}`}>
              <h3 className={style.featureTitle}>Generate Code</h3>
              <p className={style.featureDescription}>
                Beanstalk's AI-powered code generation accelerates API endpoint
                creation by quickly generating RESTful endpoints for common
                database operations. This saves developers time and effort,
                giving them greater flexibility and control over their APIs.
              </p>
            </div>
          </Col>
          {/* Feature illustration */}
          <Col className="d-flex justify-content-center align-items-center">
            <Image
              className={style.generateIllustration}
              src={GenerateCode}
              alt="illustration"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          {/* Feature illustration */}
          <Col className="d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "350px", width: "350px" }}
              src={Security}
              alt="illustration"
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div className={`${style.feature}`}>
              <h3 className={style.featureTitle}>Secure</h3>
              <p className={style.featureDescription}>
                Beanstalk generates secure API code using industry-standard
                security practices, including parameterized queries, input
                validation, token-based authentication, and OAuth. The code is
                regularly updated to stay protected against emerging threats,
                giving developers peace of mind knowing their applications are
                secure.
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col className="d-flex justify-content-center align-items-center">
            <div className={`${style.feature}`}>
              <h3 className={style.featureTitle}>Customizable</h3>
              <p className={style.featureDescription}>
                Beanstalk's in-browser editor allows developers to easily
                customize the AI-generated API code to meet their specific
                requirements. The real-time editing feature saves time and
                effort while ensuring easy accessibility from any device with an
                internet connection.
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            {/* Feature illustration */}
            <Image
              className={style.generateIllustration}
              src={Web}
              alt="illustration"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          {/* Feature illustration */}
          <Col className="d-flex justify-content-center align-items-center">
            <Image
              className={style.generateIllustration}
              src={document}
              alt="illustration"
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div className={`${style.feature}`}>
              <h3 className={style.featureTitle}>Documentation</h3>
              <p className={style.featureDescription}>
                Beanstalk's AI-generated API code includes automatic
                documentation, saving developers time and effort by eliminating
                the need to write documentation manually. The documentation
                includes detailed information about the API and is regularly
                updated to remain accurate and up-to-date.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Features;

import style from "@/styles/features.module.css";
import { Container, Stack, Row, Col } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import { FaShieldAlt, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

function Features() {
  return (
    <Container id="features" className={` ${style.featuresContainer}`} fluid>
      <Row>
        {/* Features list */}
        <Col className="d-flex justify-content-center align-items-center">
          <Container className="text-center" fluid>
            <Stack
              gap={4}
              direction="vertical"
              className="justify-content-center align-items-center"
            >
              <h2 className={`${style.title}`}>Features</h2>
              <div className={`${style.feature}`}>
                <BsCodeSlash style={{ height: "64px", width: "64px", color: "#33c481" }} />
                <h3>Generate Code</h3>
                <p>Quickly generate code for your API endpoints in minutes.</p>
              </div>
              <div className={`${style.feature}`}>
                <FaShieldAlt style={{ height: "64px", width: "64px", color: "#33c481" }} />
                <h3>Secure</h3>
                <p>Ensure your API is secure with built-in authentication.</p>
              </div>
              <div className={`${style.feature}`}>
                <FaLaptopCode style={{ height: "64px", width: "64px", color: "#33c481" }} />
                <h3>Web</h3>
                <p>Integrate your API with web applications with ease.</p>
              </div>
              <div className={`${style.feature}`}>
                <FaMobileAlt style={{ height: "64px", width: "64px", color: "#33c481" }} />
                <h3>Mobile</h3>
                <p>Build mobile applications that rely on your API.</p>
              </div>
            </Stack>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
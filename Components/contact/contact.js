import style from "@/styles/contact.module.css";
import { Container, Stack, Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

function Contact() {
  return (
    <Container id="contact" className={` ${style.contactContainer}`} fluid>
      <Row>
        {/* Contact details */}
        <Col className="d-flex justify-content-center align-items-center">
          <Container className="text-center" fluid>
            <Stack
              gap={2}
              direction="vertical"
              className="justify-content-center align-items-center"
            >
              <h2 className={`${style.title}`}>Contact Us</h2>
              <div className={`${style.contactDetails}`}>
                <AiOutlineMail style={{ height: "32px", width: "32px", color: "#33c481" }} />
                <a href="mailto:contact@beanstalk.com" className={`${style.contactLink}`}>contact@beanstalk.com</a>
              </div>
              <div className={`${style.contactDetails}`}>
                <AiOutlinePhone style={{ height: "32px", width: "32px", color: "#33c481" }} />
                <span className={`${style.contactLink}`}>+91 8890763450</span>
              </div>
              <div className={`${style.contactDetails}`}>
                <FaLocationArrow style={{ height: "32px", width: "32px", color: "#33c481" }} />
                <span className={`${style.contactLink}`}>#54, 6th Cross, Malleswaram, Bengaluru, Karnataka 560003</span>
              </div>
            </Stack>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
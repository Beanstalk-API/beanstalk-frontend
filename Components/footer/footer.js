import style from "@/styles/Footer.module.css";

// react-bootstrap
import { Container, Stack } from "react-bootstrap";

function Footer() {
  return (
    <footer className={style.footer}>
      <Container className="" fluid>
        <Stack
          direction="horizontal"
          gap={4}
          className="justify-content-center align-items-center"
        >
          <a className={`${style.footerLink}`} href="#home">
            Home
          </a>
          <a className={`${style.footerLink}`} href="#features">
            Features
          </a>
        </Stack>
      </Container>
      <p className="style.footerText">© 2023 Beanstalk. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

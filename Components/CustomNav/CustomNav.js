// stylesheet
import style from "@/styles/navbar.module.css";

// next
import Link from "next/link";

// react-bootstrap
import { Navbar, Container, Stack } from "react-bootstrap";

// react icons
import { GiHamburgerMenu } from "react-icons/gi";

// react
import { useState } from "react";

function CustomNav() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar className={style.navbar}>
        <Container fluid>
          {/* Navbar brand */}
          <Navbar.Brand>
            <span className={style.nav_brand}>
              <span className={style.green_highlight}>B</span>eanstalk
            </span>
          </Navbar.Brand>
          {/* Nav links */}
          <Stack
            direction="horizontal"
            gap={4}
            className={`mx-auto d-none d-lg-flex`}
          >
            <a className={`${style.navLink}`} href="#home">
              Home
            </a>
            <a className={`${style.navLink}`} href="#features">
              Features
            </a>
            <a className={`${style.navLink}`} href="#contact">
              Contact
            </a>
          </Stack>
          {/* Get started/Dropdown */}
          {/* Get started */}
          <Link className={style.link} href="/dashboard">
            <button className={`${style.getStartedButton} d-none d-lg-block`}>
              Get Started
            </button>
          </Link>

          {/* Hamburger button */}
          <div
            onClick={() => handleClick()}
            className={`d-lg-none ${style.hamburgerButton}`}
          >
            <GiHamburgerMenu />
          </div>
        </Container>
      </Navbar>
      {/* Hamburger menu */}
      {showMenu === true ? (
        <>
          <Container
            className="d-flex d-lg-none justify-content-center align-items-center"
            fluid
          >
            <Stack
              className="justify-content-center align-items-center"
              gap={2}
            >
              <a className={`${style.navLink}`} href="#home">
                Home
              </a>
              <a className={`${style.navLink}`} href="#features">
                Features
              </a>
              <Link href="/dashboard">
                <button className={`${style.getStartedButton}`}>
                  Get Started
                </button>
              </Link>
            </Stack>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default CustomNav;

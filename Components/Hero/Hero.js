// stylesheet
import style from "@/styles/hero.module.css";

import { Container, Stack } from "react-bootstrap";

// react-icons
import { AiFillThunderbolt } from "react-icons/ai";

// Assets
import Waves from "@/Assets/Images/svg.png";

// next
import Image from "next/image";

function Hero() {
  return (
    <>
      <Container className={`text-center ${style.heroContainer}`} fluid>
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
        <span className={style.subtext}>AI based API generator</span>
      </Container>
    </>
  );
}

export default Hero;

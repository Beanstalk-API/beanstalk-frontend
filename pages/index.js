import Head from "next/head";
import styles from "@/styles/Home.module.css";

// components
import GenerateAPIForm from "@/Components/GenerateAPIForm";
import CustomNav from "@/Components/CustomNav/CustomNav";
import Hero from "@/Components/Hero/Hero";

// react-bootstrap
import { Container } from "react-bootstrap";
import Contact from "@/Components/contact/contact";
import Features from "@/Components/features/features";
import Frameworks from "@/Components/Frameworks/Frameworks";
export default function Home() {
  return (
    <>
      <Head>
        <title>Beanstalk</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="p-0 m-0" fluid>
        <CustomNav />
      </Container>
      <Container fluid>
        <Hero />
      </Container>
      <Container fluid>
        <Features />
      </Container>
      <Container fluid>
        <Frameworks />
      </Container>
    </>
  );
}

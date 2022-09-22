import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Socials from "../components/Socials";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import BlogSection from "../components/BlogSection";
import { HeroSection } from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Chris Tomshack's Blog`}</title>
        <meta name="Chris Tomshack.dev" content="Chris Tomshack.dev" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        ></link>
      </Head>

      <div className={styles.homeContainer}>
        <section id="HeroSection">
          <HeroSection />
        </section>
        <section id="BlogSection">
          <BlogSection />
        </section>
      </div>
    </div>
  );
}

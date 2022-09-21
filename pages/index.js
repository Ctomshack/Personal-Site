import Head from "next/head";
import styles from "../styles/Blog.module.css";
import { ArticleCard, Categories, ArticleWidget } from "../components";
import { getArticles } from "../services";
import Navbar from "../components/Navbar";


export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Chris Tomshack's Blog`}</title>
        <meta name="Chris Tomshack.dev" content="Chris Tomshack.dev" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
      </Head>

      <div>Home</div>

    </div>
  );
}


export async function getStaticProps() {
  const articles = (await getArticles()) || [];

  return {
    props: { articles }
  }
} 
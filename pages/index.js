import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music To Power Your Faith | Next Lyfe Audio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/nla-logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Music To Power Your Faith</h1>

        <p className={styles.description}>Search, Find, Minister</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Search Library</h2>
            <p>Over 3,000 tracks to choose from.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Custom Music</h2>
            <p>
              Do you need a custom song made on demand for a particular event?
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Search Assist</h2>
            <p>Let us find the right music for you!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Subscribe</h2>
            <p>
              Subscribe today and gain instant access to our entire library.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

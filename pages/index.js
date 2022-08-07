import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/classes");
    } else {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Classfinder</title>
        <meta name="description" content="The next generation classfinder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {status === "authenticated" ? (
        <h1>Redirecting...</h1>
      ) : (
        <h1>Redirecting to signin...</h1>
      )}
    </div>
  );
}

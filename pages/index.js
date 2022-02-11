import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import styles from "../styles/HomePage.module.css";
import Image from "next/image";
import Head from "next/head";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const HomePage = () => {
  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log("Item placed!");
      }

      if (canceled) {
        console.log("Item canceled");
      }
    }
  }, [success, canceled]);

  return (
    <>
      <Head>
        <title>Checkout CodeChallege</title>
      </Head>

      <form
        action="/api/checkout_sessions"
        method="POST"
        className={styles.form}
      >
        <section className={styles.card}>
          <div>
            <Image
              className={styles.image}
              src="https://stripe-camo.global.ssl.fastly.net/37e8d15837b47d567fcf0332d1a2ee1ad3a5515a54c3ed601cf9b2039d632899/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387853314a30656e5248525735484d46646a5744645466475a735833526c63335266556b315351307074616b394c525646504e32777a4f44525851304e475354423030304b554b47376a6663"
              alt="Jordan Air 1 UNC"
              width={180}
              height={180}
            />
            <div className={styles.description}>
              <h3 className={styles.heading}>Off White Air Jordan 1 UNC</h3>
              <h5 className={styles.price}>Price: $2,000.00</h5>
            </div>
          </div>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
      </form>
    </>
  );
};

export default HomePage;

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.container} ${styles["hero-container"]}`}>
        <h1>
          HELLO.
          <br />
          I’M FULLSTACK DEVELOPER
          <br />
          OLEH TATARYNOV.
        </h1>
        <ul className={styles["social-links"]}>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              IG
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              FB
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="youtube"
            >
              YT
            </a>
          </li>
          <li>
            <a
              href="https://github.com/khrystynakozakevych/project_My_portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              GH
            </a>
          </li>
          <li>
            <a className={styles.email} href="mailto:jefferson@gmail.com">
              jefferson@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

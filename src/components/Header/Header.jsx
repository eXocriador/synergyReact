import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          Oleh Tatarynov
        </a>
        <nav>
          <ul className={styles["nav-list"]}>
            <li>
              <a href="#abt-me-section">About me</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <a href="#work-together" className={styles["order-button"]}>
          Order the project
        </a>
      </div>
    </header>
  );
}

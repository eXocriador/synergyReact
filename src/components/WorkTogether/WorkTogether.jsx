import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./WorkTogether.module.css";

export default function WorkTogether() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setModalOpen(true);
    e.target.reset();
  }

  return (
    <footer className={`${styles.footer} ${styles.blure}`} id="work-together">
      <div className={`${styles.container} ${styles.wrapper}`}>
        <h2 className={styles.logo_description}>
          <span className={styles.pictureTextWrapper}>
            <a href="/" className={styles.footerAnchor}>
              <picture>
                <source
                  media="(min-width: 376px)"
                  srcSet="/img/footer/footer-logo-desk.webp 1x, /img/footer/footer-logo-desk-2x.webp 2x"
                />
                <source
                  media="(max-width: 375px)"
                  width="44"
                  height="44"
                  srcSet="/img/footer/footer-logo-mob.webp 1x, /img/footer/footer-logo-mob-2x.webp 2x"
                />
                <img
                  src="/img/footer/footer-logo-desk.webp"
                  width="70"
                  height="70"
                  alt="footer-logo-desk"
                  loading="lazy"
                />
              </picture>
            </a>
            Let’s <span className={styles.logoRed}>work</span>
          </span>
          <span>together</span>
        </h2>

        <form
          className={styles.contactForm}
          id="contactForm"
          name="contactForm"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className={styles.flexWrapper}>
            <label className={styles.formWrapper} htmlFor="email">
              <input
                className={styles.inputTextarreaBothStyles}
                type="email"
                id="email"
                placeholder="Your Email"
                aria-label="Your email address"
                required
                autoComplete="off"
              />
            </label>
            <label className={styles.formWrapper} htmlFor="comments">
              <textarea
                className={styles.inputTextarreaBothStyles}
                id="comments"
                placeholder="Your Comments"
                rows="1"
                aria-label="Your comments"
                required
              ></textarea>
            </label>
          </div>
          <button className={styles.formBtn} type="submit">
            Send
          </button>
        </form>

        <div className={styles.callMailInfo}>
          <a className={styles.mailTel} href="mailto:lloydjefferson@gmail.com">
            lloydjefferson@gmail.com
          </a>
          <a className={styles.mailTel} href="tel:+3801111111111">
            +380 11 1111 11 11
          </a>
        </div>

        <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </footer>
  );
}

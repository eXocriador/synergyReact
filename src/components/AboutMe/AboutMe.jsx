import React, { useState } from "react";
import styles from "./AboutMe.module.css";

const accordionData = [
  {
    title: "About me",
    content: [
      "I am Oleh Tatarynov, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.",
      "Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."
    ]
  },
  {
    title: "Role",
    content: [
      "Frontend development",
      "HeadlessCMS, Wordpress",
      "Blender (enjoy)"
    ]
  },
  {
    title: "Education",
    content: [
      "2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York",
      "2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York",
      "2020 - 2022 / Advanced Blender Animation Techniques, Udemy"
    ]
  }
];

const skills = [
  "HTML/CSS",
  "JavaScript",
  "React",
  "Node.js",
  "React Native",
  "Soft skills",
  "Git",
  "Jest"
];

export default function AboutMe() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="abt-me-section" className={styles["about-me-section"]}>
      <div className={styles.container}>
        <h2 className={styles["visually-hidden"]}>About me</h2>
        <div className={styles.banner}>
          <div className={styles["text-block"]}>
            <p>
              I work with people all over the world to create impressive and{" "}
              <span>functional</span> <span>websites</span> that reflect each
              client's unique personality.
            </p>
          </div>
          <div className={styles["image-block"]}>
            <picture>
              <source
                srcSet="/img/about-me/about-me-desk.png 1x, /img/about-me/about-me-desk-2x.png 2x"
                media="(min-width: 1440px)"
              />
              <source
                srcSet="/img/about-me/about-me-tab.png 1x, /img/about-me/about-me-tab-2x.png 2x"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/img/about-me/about-me-mob.png 1x, /img/about-me/about-me-mob-2x.png 2x"
                media="(max-width: 767px)"
              />
              <img
                className={styles["about-me-pic"]}
                src="/img/about-me/about-me-desk.png"
                alt="Person"
                width="704"
                height="700"
              />
            </picture>
          </div>
        </div>

        <ul className={styles["accordion-block"]}>
          {accordionData.map((item, idx) => (
            <li className={styles.ac} key={item.title}>
              <h2 className={styles["ac-header"]}>
                {item.title}
                <button
                  type="button"
                  className={styles["ac-trigger"]}
                  aria-expanded={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <svg className={styles.icon} width="20" height="20">
                    <use href="/img/icons.svg#icon-arrow-bot"></use>
                  </svg>
                </button>
              </h2>
              <div
                className={`${styles["ac-panel"]} ${
                  openIndex === idx ? styles.open : ""
                }`}
              >
                <ul className={styles["ac-text"]}>
                  {item.content.map((text, i) => (
                    <li key={i}>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles["skills-swiper-block"]}>
          <div className={styles["skills-swiper"]}>
            <ul className={styles["skills-list"]}>
              {skills.map((skill) => (
                <li className={styles["skills-slide"]} key={skill}>
                  <span className={styles["slide-text"]}>{skill}</span>
                </li>
              ))}
            </ul>
            {/* Можно додати Swiper або горизонтальний скрол для крутого ефекту */}
          </div>
          {/* Тут можна додати кнопки навігації, якщо використовуєш Swiper */}
        </div>
      </div>
    </section>
  );
}

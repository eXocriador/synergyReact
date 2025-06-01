import styles from "./Benefits.module.css";

const benefits = [
  {
    icon: "icon-user",
    title: "Expertise",
    description:
      "As a highly experienced developer, I have deep knowledge of programming and website development."
  },
  {
    icon: "icon-message-chat-circle",
    title: "Communication",
    description:
      "Understanding your needs and wants is my priority, and I am always open to discussions and corrections."
  },
  {
    icon: "icon-brush",
    title: "Art",
    description:
      "Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life."
  },
  {
    icon: "icon-hourglass",
    title: "Urgent execution",
    description:
      "I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."
  }
];

export default function Benefits() {
  return (
    <section className={styles.benefits} id="benefits">
      <div className={`${styles.container} ${styles["container-benefits"]}`}>
        <h1 className={styles["benefits-header"]}>
          BENEFITS OF WORKING WITH ME
        </h1>
        <div className={styles.desk}>
          <ul className={styles["benefits-frame"]}>
            {benefits.map((b) => (
              <li className={styles["benefits-frame-content"]} key={b.title}>
                <div className={styles["icon-frame"]}>
                  <svg
                    className={styles["benefits-icon"]}
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <use href={`/img/icons.svg#${b.icon}`} />
                  </svg>
                </div>
                <div className={styles["benefits-content"]}>
                  <h2 className={styles["benefits-h"]}>{b.title}</h2>
                  <p className={styles["benefits-description"]}>
                    {b.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <a className={styles["button_work_together"]} href="#work-together">
            Order the project
          </a>
        </div>
      </div>
    </section>
  );
}

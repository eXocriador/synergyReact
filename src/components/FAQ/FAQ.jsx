import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqData = [
  {
    question: "What programming languages are most often used in your project?",
    answer:
      "In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."
  },
  {
    question: "What are the deadlines for the project?",
    answer:
      "The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."
  },
  {
    question: "How can I contact you?",
    answer:
      "In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."
  },
  {
    question: "Do you provide advice or support?",
    answer:
      "The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."
  },
  {
    question:
      "What does the process of developing a software product look like from idea to implementation?",
    answer:
      "Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>FAQ</h2>
        <ul className={styles.accordionContainer}>
          {faqData.map((item, idx) => (
            <li className={styles.ac} key={item.question}>
              <button
                type="button"
                className={styles.acHeader}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                id={`faq-header-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.question}
                <svg
                  className={styles.icon}
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <use href="/img/icons.svg#icon-arrow-bot"></use>
                </svg>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`${styles.acPanel} ${
                  openIndex === idx ? styles.open : ""
                }`}
                role="region"
                aria-labelledby={`faq-header-${idx}`}
                hidden={openIndex !== idx}
              >
                <p className={styles.acText}>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

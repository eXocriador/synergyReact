import styles from "./Modal.module.css";

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>
          Thank you for your interest in cooperation!
        </h2>
        <p className={styles.modalDescription}>
          The manager will contact you shortly to discuss further details
          regarding your request. Please stay in touch.
        </p>
        <button
          className={styles.modalClose}
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

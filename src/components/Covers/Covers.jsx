import styles from "./Covers.module.css";

const covers = [
  {
    href: "https://goit.global/ua/",
    imgDesk: "/img/covers/rectangle-1-desk.jpg",
    imgDesk2x: "/img/covers/rectangle-1-desk-2x.jpg",
    imgMob: "/img/covers/rectangle-1-mob.jpg",
    imgMob2x: "/img/covers/rectangle-1-mob-2x.jpg",
    alt: "cover 1"
  },
  {
    href: "https://khrystynakozakevych.github.io/project_Synergy/",
    imgDesk: "/img/covers/rectangle-2-desk.jpg",
    imgDesk2x: "/img/covers/rectangle-2-desk-2x.jpg",
    imgMob: "/img/covers/rectangle-2-mob.jpg",
    imgMob2x: "/img/covers/rectangle-2-mob-2x.jpg",
    alt: "cover 2"
  }
  // ...add all covers as needed
];

export default function Covers() {
  return (
    <section id="covers">
      <div className={styles.coversSection}>
        <h2 className="visually-hidden">Covers of various projects</h2>
        <div className={styles.content}>
          <ul className={styles.marquee}>
            <li className={styles.marqueeList}>
              <ul className={styles.marqueeInner}>
                {covers.map((cover, idx) => (
                  <li className={styles.marqueeLine} key={idx}>
                    <a
                      href={cover.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`link to ${cover.href}`}
                    >
                      <picture className={styles.coverImg}>
                        <source
                          srcSet={`${cover.imgDesk} 1x, ${cover.imgDesk2x} 2x`}
                          media="(min-width: 768px)"
                        />
                        <source
                          srcSet={`${cover.imgMob} 1x, ${cover.imgMob2x} 2x`}
                          media="(max-width: 767px)"
                        />
                        <img
                          src={cover.imgDesk}
                          alt={cover.alt}
                          width="544"
                          loading="lazy"
                        />
                      </picture>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {/* Повтори marqueeList, якщо треба */}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Programming Across Borders: Ideas, Technologies, Innovations",
    tags: ["#react", "#js", "#node js", "#git"],
    imageDesk: "/img/projects/1-project-desk.jpg",
    imageDesk2x: "/img/projects/1-project-desk-2x.jpg",
    imageMob: "/img/projects/1-project-mob.jpg",
    imageMob2x: "/img/projects/1-project-mob-2x.jpg",
    link: "https://khrystynakozakevych.github.io/project_Synergy/",
    alt: "Project 1"
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className={`${styles.projects} ${styles.container}`} id="projects">
      <h2 className={styles["projects-header"]}>Projects</h2>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles["arrow-next"]}`,
          prevEl: `.${styles["arrow-prev"]}`
        }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 }
        }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
        <div className={styles.arrows}>
          <button className={styles["arrow-prev"]}>
            <svg className={styles.arrow} width="32" height="32">
              <use href="/img/icons.svg#icon-arrow-narrow-left"></use>
            </svg>
          </button>
          <button className={styles["arrow-next"]}>
            <svg className={styles.arrow} width="32" height="32">
              <use href="/img/icons.svg#icon-arrow-narrow-right"></use>
            </svg>
          </button>
        </div>
      </Swiper>
    </section>
  );
}

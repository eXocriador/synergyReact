import PropTypes from "prop-types";
import styles from "./Projects.module.css";

export default function ProjectCard({
  title,
  tags,
  imageDesk,
  imageDesk2x,
  imageMob,
  imageMob2x,
  link,
  alt
}) {
  return (
    <div className={styles["swiper-slide-content"]}>
      <div className={styles["swiper-slide-main-content"]}>
        <ul className={styles["project-tags"]}>
          {tags.map((tag) => (
            <li className={styles["project-tag"]} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <h3 className={styles["project-title"]}>{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["project-link"]}
        >
          See project
        </a>
      </div>
      <div className={styles["project-image"]}>
        <picture>
          <source
            srcSet={`${imageDesk2x} 2x, ${imageDesk} 1x`}
            media="(min-width: 769px)"
          />
          <source
            srcSet={`${imageMob2x} 2x, ${imageMob} 1x`}
            media="(max-width: 768px)"
          />
          <img src={imageMob} alt={alt} />
        </picture>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageDesk: PropTypes.string.isRequired,
  imageDesk2x: PropTypes.string.isRequired,
  imageMob: PropTypes.string.isRequired,
  imageMob2x: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

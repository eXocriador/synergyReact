import PropTypes from "prop-types";
import "./Reviews.module.css";

export default function ReviewCard({ avatarUrl, author, review }) {
  return (
    <div className="review-card">
      <img
        className="review-avatar"
        src={avatarUrl}
        alt={`${author}'s avatar`}
        loading="lazy"
      />
      <h3 className="review-author">{author}</h3>
      <p className="review-text">{review}</p>
    </div>
  );
}

ReviewCard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired
};

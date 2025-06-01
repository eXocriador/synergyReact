import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";

async function fetchReviews() {
  return [
    {
      _id: "1",
      avatar_url: "/img/reviews/avatar1.jpg",
      author: "John Doe",
      review: "Great work! Highly recommended."
    },
    {
      _id: "2",
      avatar_url: "/img/reviews/avatar2.jpg",
      author: "Jane Smith",
      review: "Professional and fast delivery."
    }
  ];
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);

  return (
    <section className={styles.reviewsSection} id="reviews-section-id">
      <div className={`${styles.reviews} container`}>
        <h2 className={styles.reviewsHeader}>REVIEWS</h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles.rightBtn2}`,
            prevEl: `.${styles.leftBtn2}`
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
        >
          {reviews.map((r) => (
            <SwiperSlide key={r._id}>
              <ReviewCard
                avatarUrl={r.avatar_url}
                author={r.author}
                review={r.review}
              />
            </SwiperSlide>
          ))}
          <div className={styles.btnDiv} id="btn-div-id2">
            <button
              className={`${styles.leftBtn2} swiper-button-prev`}
              id="left-btn2"
            >
              <svg className={styles.arrowBtnSvg} width="24" height="24px">
                <use
                  href="/img/icons.svg#icon-arrow-narrow-left"
                  stroke="#fafafa"
                  fill="none"
                ></use>
              </svg>
            </button>
            <button
              className={`${styles.rightBtn2} swiper-button-next`}
              id="right-btn2"
            >
              <svg className={styles.arrowBtnSvg} width="24" height="24px">
                <use
                  href="/img/icons.svg#icon-arrow-narrow-right"
                  stroke="#fafafa"
                  fill="none"
                ></use>
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { SLIDER } from "../../../data/products-slider";
import Link from "next/link";

import styles from "./index.module.css";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <svg
        width="14"
        height="26"
        viewBox="0 0 14 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0001 24.5002L1.5 13.0001L13.0001 1.5"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default function SectionOne() {
  const settings = {
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    dots: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 500,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 766,
        settings: {
          autoplay: 5000,
          speed: 500,
        },
      },
    ],
  };

  return (
    <section className={styles.container}>
      <div className={styles.row} id="section-one-slide">
        <Slider {...settings}>
          {SLIDER.map((product) => (
            <div className={styles.option}>
              <h2>{product.title}</h2>
              <img
                className={styles.image}
                src={product.image}
                alt={product.title}
                width="1080"
                height="1182"
              />
              <Link href={product.link}>
                <a href="">Ver produto</a>
              </Link>
              <div className={styles["product-info"]}>
                <h2>{product.title}</h2>
                <p>{product.FirstParagraph}</p>
                <p>{product.SecondParagraph}</p>
                <div className={styles.link}>
                  <Link href={product.link}>
                    <a>
                      Ver produto{" "}
                      <span>
                        <img src={product.arrow} />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

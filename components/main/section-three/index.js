import Slider from "react-slick";
import Link from "next/link";
import { ICONS } from "../../../data/products-icons";

import styles from "./index.module.css";
// import Category from "../../category";

function SampleNextArrow(props) {
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

function SamplePrevArrow(props) {
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

export default function SectionThree() {
  const settings2 = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 6,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className={styles.container} id="produtos">
      <div className={styles.row}>
        <h2>Produtos artesanais</h2>
        <div className={styles["icons"]}>
          <div id={"icons-container"}>
            <Slider {...settings2}>
              {ICONS.map( icon => 
                <div className={styles["icons-item"]}>
                <Link href={icon.href}>
                  <a>
                    <img
                      className={styles.smaller}
                      src={icon.image}
                      alt={icon.alt}
                    />
                    <p>{icon.name}</p>
                  </a>
                </Link>
              </div>
                )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

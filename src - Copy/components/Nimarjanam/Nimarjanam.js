import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Heart,
  Play,
  Sparkles,
} from "lucide-react";
import "./Nimarjanam.css";

import nimarjanam1 from "../../assets/images/celb.jpg";
import nimarjanam2 from "../../assets/images/f1.webp";
import nimarjanam3 from "../../assets/images/f2.webp";
import nimarjanam4 from "../../assets/images/f3.jpg";
import nimarjanam5 from "../../assets/images/f5.heic";
import nimarjanam6 from "../../assets/images/f4.jpg";
import nimarjanam7 from "../../assets/images/f7.heic";
import nimarjanam8 from "../../assets/images/f8.webp";
import nimarjanam9 from "../../assets/images/f9.jpg";

const nimarjanamImages = [
  {
    image: nimarjanam1,
    number: "01",
    label: "THE FINAL JOURNEY",
  },
  {
    image: nimarjanam2,
    number: "02",
    label: "DEVOTION IN MOTION",
  },
  {
    image: nimarjanam3,
    number: "03",
    label: "THE FAREWELL",
  },
  {
    image: nimarjanam4,
    number: "04",
    label: "TOGETHER IN FAITH",
  },
  {
    image: nimarjanam5,
    number: "05",
    label: "THE SACRED PROCESSION",
  },
  {
    image: nimarjanam6,
    number: "06",
    label: "STREETS OF DEVOTION",
  },
  {
    image: nimarjanam7,
    number: "07",
    label: "ONE HEART TOGETHER",
  },
  {
    image: nimarjanam8,
    number: "08",
    label: "A FAREWELL OF FAITH",
  },
  {
    image: nimarjanam9,
    number: "09",
    label: "UNTIL WE MEET AGAIN",
  },
];

const Nimarjanam = () => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage(
      (previous) =>
        (previous + 1) % nimarjanamImages.length
    );
  };

  return (
    <section
      className="nimarjanam"
      id="nimarjanam"
    >
      <div className="nimarjanam-background">
        <div className="nimarjanam-glow"></div>
        <div className="nimarjanam-grain"></div>
      </div>

      <div className="nimarjanam-container">

        {/* INTRO */}
        <motion.div
          className="nimarjanam-intro"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="nimarjanam-eyebrow">
            <span></span>

            <Sparkles
              size={13}
              strokeWidth={1.3}
            />

            <span>
              NIMARJANAM DAY
            </span>

            <Sparkles
              size={13}
              strokeWidth={1.3}
            />

            <span></span>
          </div>

          <h2>
            The Final
            <span>Journey</span>
          </h2>

          <p>
            A day filled with devotion, emotion and
            togetherness — as Railway Ganesh begins
            the final journey of the celebration.
          </p>
        </motion.div>

        {/* FEATURE SECTION */}
        <div className="nimarjanam-feature">

          {/* MAIN IMAGE */}
          <motion.div
            className="nimarjanam-main-image"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.img
              key={activeImage}
              src={
                nimarjanamImages[
                  activeImage
                ].image
              }
              alt={
                nimarjanamImages[
                  activeImage
                ].label
              }
              initial={{
                opacity: 0,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />

            <div className="nimarjanam-main-overlay"></div>

            {/* TOP INFO */}
            <div className="nimarjanam-main-top">
              <span>
                RAILWAY GANESH
              </span>

              <span>
                1983 — PRESENT
              </span>
            </div>

            {/* BOTTOM INFO */}
            <div className="nimarjanam-main-bottom">

              <div>
                <span className="nimarjanam-main-number">
                  {
                    nimarjanamImages[
                      activeImage
                    ].number
                  }
                </span>

                <span className="nimarjanam-main-label">
                  {
                    nimarjanamImages[
                      activeImage
                    ].label
                  }
                </span>
              </div>

              <button
                type="button"
                className="nimarjanam-next"
                onClick={nextImage}
                aria-label="Next Nimarjanam image"
              >
                <ArrowDownRight
                  size={20}
                  strokeWidth={1.4}
                />
              </button>

            </div>
          </motion.div>

          {/* 9 SIDE IMAGES */}
          <div className="nimarjanam-side-images">

            {nimarjanamImages.map(
              (item, index) => (
                <button
                  type="button"
                  className={`nimarjanam-side-image ${
                    activeImage === index
                      ? "nimarjanam-side-image-active"
                      : ""
                  }`}
                  key={item.number}
                  onClick={() =>
                    setActiveImage(index)
                  }
                  aria-label={`View ${item.label}`}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                    decoding="async"
                  />

                  <span>
                    {item.number}
                  </span>
                </button>
              )
            )}

          </div>
        </div>

        {/* MESSAGE */}
        <motion.div
          className="nimarjanam-message"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
        >
          <div className="nimarjanam-message-icon">
            <Heart
              size={19}
              strokeWidth={1.3}
            />
          </div>

          <div className="nimarjanam-message-content">

            <span>
              THE MEANING OF NIMARJANAM
            </span>

            <h3>
              A farewell filled with faith.
            </h3>

            <p>
              On Nimarjanam Day, devotees come
              together for the final procession of
              Railway Ganesh. The streets of Kadiri
              become a celebration of devotion,
              music and memories as everyone joins
              the journey with one heart.
            </p>

            <p>
              Though the idol is immersed, the
              devotion remains. The celebration ends,
              but the blessings, memories and
              tradition of Railway Ganesh continue
              with every devotee.
            </p>

          </div>
        </motion.div>

        {/* JOURNEY */}
        <div className="nimarjanam-journey">

          <div className="nimarjanam-journey-item">
            <span>01</span>

            <strong>
              PROCESSION
            </strong>

            <small>
              The final journey begins.
            </small>
          </div>

          <div className="nimarjanam-journey-line"></div>

          <div className="nimarjanam-journey-item">
            <span>02</span>

            <strong>
              TOGETHERNESS
            </strong>

            <small>
              Devotees walk together in faith.
            </small>
          </div>

          <div className="nimarjanam-journey-line"></div>

          <div className="nimarjanam-journey-item">
            <span>03</span>

            <strong>
              NIMARJANAM
            </strong>

            <small>
              A farewell until next year.
            </small>
          </div>

        </div>

        {/* CLOSING */}
        <motion.div
          className="nimarjanam-closing"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          <div className="nimarjanam-closing-line"></div>

          <div className="nimarjanam-closing-content">
            <Play
              size={13}
              strokeWidth={1.2}
            />

            <span>
              UNTIL NEXT YEAR
            </span>
          </div>

          <div className="nimarjanam-closing-line"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Nimarjanam;
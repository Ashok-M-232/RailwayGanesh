import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import special2026_1 from "../../assets/images/special-2026-1.heic";
import special2026_2 from "../../assets/images/special-2026-2.heic";
import special2026_3 from "../../assets/images/special-2026-3.heic";
import special2026_4 from "../../assets/images/special-2026-4.heic";
import special2026_5 from "../../assets/images/special-2026-5.jpg";
import special2026_6 from "../../assets/images/special-2026-6.jpg";
import special2026_7 from "../../assets/images/special-2026-7.jpg";
import special2026_8 from "../../assets/images/special-2026-8.jpg";

import "./Special2026.css";

const Special2026 = () => {
  const images = [
    {
      image: special2026_1,
      number: "01",
      title: "The Beginning",
    },
    {
      image: special2026_2,
      number: "02",
      title: "The Grand Arrival",
    },
    {
      image: special2026_3,
      number: "03",
      title: "The Divine Form",
    },
    {
      image: special2026_4,
      number: "04",
      title: "Moments of Devotion",
    },
    {
      image: special2026_5,
      number: "05",
      title: "The Celebration",
    },
    {
      image: special2026_6,
      number: "06",
      title: "Together in Faith",
    },
    {
      image: special2026_7,
      number: "07",
      title: "The Spirit of Kadiri",
    },
    {
      image: special2026_8,
      number: "08",
      title: "Railway Ganesh 2026",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);

      setActiveIndex((previous) =>
        previous === images.length - 1 ? 0 : previous + 1
      );
    }, 5500);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  const nextImage = () => {
    setDirection(1);

    setActiveIndex((previous) =>
      previous === images.length - 1 ? 0 : previous + 1
    );
  };

  const previousImage = () => {
    setDirection(-1);

    setActiveIndex((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const selectImage = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const currentImage = images[activeIndex];

  return (
    <section id="special-2026" className="special-2026-section">
      <div className="special-2026-noise"></div>

      <div className="special-2026-glow special-2026-glow-one"></div>
      <div className="special-2026-glow special-2026-glow-two"></div>

      <div className="special-2026-container">

        {/* HEADER */}

        <motion.div
          className="special-2026-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1 }}
        >
          <div className="special-2026-eyebrow">
            <Sparkles size={14} strokeWidth={1.4} />
            <span>THIS YEAR • A NEW CHAPTER</span>
          </div>

          <div className="special-2026-year">
            2026
          </div>

          <h2>
            Railway Ganesh
            <span>Special</span>
          </h2>

          <p>
            A new year. A new celebration. The same devotion that has
            brought generations of Kadiri together since 1983.
          </p>

          <div className="special-2026-divider">
            <span></span>
            <i></i>
            <span></span>
          </div>
        </motion.div>


        {/* FEATURED EXPERIENCE */}

        <div className="special-2026-feature">

          <motion.div
            className="special-2026-main-image"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={currentImage.image}
                src={currentImage.image}
                alt={currentImage.title}
                custom={direction}
                initial={{
                  opacity: 0,
                  scale: 1.06,
                  x: direction * 45,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.03,
                  x: direction * -45,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </AnimatePresence>

            <div className="special-2026-image-shade"></div>

            <div className="special-2026-image-top">
              <span>RAILWAY GANESH</span>
              <strong>2026</strong>
            </div>

            <div className="special-2026-image-bottom">
              <div>
                <span>{currentImage.number}</span>
                <strong>{currentImage.title}</strong>
              </div>

              <div className="special-2026-image-arrows">
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous 2026 image"
                >
                  <ArrowLeft size={18} strokeWidth={1.4} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next 2026 image"
                >
                  <ArrowRight size={18} strokeWidth={1.4} />
                </button>
              </div>
            </div>

          </motion.div>


          {/* SIDE CONTENT */}

          <motion.div
            className="special-2026-side"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
          >

            <span className="special-2026-side-label">
              THE 2026 EDITION
            </span>

            <h3>
              A celebration
              <br />
              <em>like never before.</em>
            </h3>

            <p className="special-2026-lead">
              Every year, Railway Ganesh becomes more than a celebration.
              It becomes a memory shared by an entire community.
            </p>

            <p>
              From the first preparations to the grand celebrations,
              every moment carries the devotion, energy and tradition
              that make Railway Ganesh special.
            </p>

            <div className="special-2026-stats">

              <div className="special-2026-stat">
                <strong>1983</strong>
                <span>
                  THE TRADITION
                  <br />
                  BEGAN
                </span>
              </div>

              <div className="special-2026-stat">
                <strong>2026</strong>
                <span>
                  THIS YEAR'S
                  <br />
                  CELEBRATION
                </span>
              </div>

              <div className="special-2026-stat">
                <strong>∞</strong>
                <span>
                  FAITH ACROSS
                  <br />
                  GENERATIONS
                </span>
              </div>

            </div>

          </motion.div>

        </div>


        {/* IMAGE SELECTOR */}

        <motion.div
          className="special-2026-selector"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >

          <div className="special-2026-selector-header">
            <span>2026 MOMENTS</span>

            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          <div className="special-2026-selector-track">
            {images.map((item, index) => (
              <button
                type="button"
                key={item.number}
                className={`special-2026-selector-item ${
                  activeIndex === index
                    ? "special-2026-selector-active"
                    : ""
                }`}
                onClick={() => selectImage(index)}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <span>{item.number}</span>
              </button>
            ))}
          </div>

        </motion.div>


        {/* CLOSING MESSAGE */}

        <motion.div
          className="special-2026-closing"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9 }}
        >

          <div className="special-2026-closing-line"></div>

          <div className="special-2026-closing-content">
            <span>THE STORY CONTINUES</span>

            <p>
              Come witness Railway Ganesh 2026.
              <br />
              Be part of the tradition.
            </p>

            <a href="#gallery" className="special-2026-scroll">
              <span>EXPLORE THE JOURNEY</span>
              <ArrowDown size={15} strokeWidth={1.4} />
            </a>
          </div>

          <div className="special-2026-closing-line"></div>

        </motion.div>

      </div>
    </section>
  );
};

export default Special2026;
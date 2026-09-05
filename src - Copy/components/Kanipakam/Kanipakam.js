import React, { useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import kanipakam1 from "../../assets/images/kanipakam2.jpg";
import kanipakam2 from "../../assets/images/kanipakam1.jpg";
import kanipakam3 from "../../assets/images/kanipakam4.jpg";

import "./Kanipakam.css";

const Kanipakam = () => {
  const images = [
    {
      image: kanipakam1,
      number: "01",
      title: "The Sacred Abode",
    },
    {
      image: kanipakam2,
      number: "02",
      title: "Sri Varasiddhi Vinayaka",
    },
    {
      image: kanipakam3,
      number: "03",
      title: "A Journey of Devotion",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((previous) =>
      previous === images.length - 1 ? 0 : previous + 1
    );
  };

  const goToPrevious = () => {
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
    <section id="kanipakam" className="kanipakam-section">
      <div className="kanipakam-background-glow"></div>

      <div className="kanipakam-container">
        <motion.div
          className="kanipakam-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
        >
          <div className="kanipakam-eyebrow">
            <Sparkles size={14} strokeWidth={1.5} />
            <span>THE JOURNEY CONTINUES</span>
          </div>

          <h2>
            Kanipakam
            <span> Vinayaka</span>
          </h2>

          <p>
            After the sacred Nimarjanam, the journey of devotion continues
            towards the holy abode of Sri Varasiddhi Vinayaka Swamy at
            Kanipakam.
          </p>

          <div className="kanipakam-divider"></div>
        </motion.div>

        <div className="kanipakam-main">
          <motion.div
            className="kanipakam-gallery"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <div className="kanipakam-image-frame">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={currentImage.image}
                  src={currentImage.image}
                  alt={currentImage.title}
                  className="kanipakam-featured-image"
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction * 45,
                    scale: 1.03,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction * -45,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </AnimatePresence>

              <div className="kanipakam-image-overlay"></div>

              <div className="kanipakam-image-caption">
                <span>{currentImage.number}</span>
                <strong>{currentImage.title}</strong>
              </div>

              <div className="kanipakam-image-arrows">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous Kanipakam image"
                >
                  <ArrowLeft size={19} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next Kanipakam image"
                >
                  <ArrowRight size={19} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="kanipakam-thumbnails">
              {images.map((item, index) => (
                <button
                  type="button"
                  key={item.number}
                  className={`kanipakam-thumbnail ${
                    activeIndex === index
                      ? "kanipakam-thumbnail-active"
                      : ""
                  }`}
                  onClick={() => selectImage(index)}
                  aria-label={`View Kanipakam image ${index + 1}`}
                >
                  <img src={item.image} alt={item.title} />
                  <span>{item.number}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="kanipakam-content"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.12 }}
          >
            <span className="kanipakam-content-label">
              A SACRED DESTINATION
            </span>

            <h3>
              Where devotion
              <br />
              <em>continues.</em>
            </h3>

            <p className="kanipakam-lead">
              Sri Varasiddhi Vinayaka Swamy Temple at Kanipakam is one of the
              revered Vinayaka shrines of Andhra Pradesh.
            </p>

            <p>
              The temple is renowned for its Swayambhu Vinayaka — a
              self-manifested form of Lord Ganesha. The sacred deity is
              associated with a water-filled well where the divine presence
              was discovered.
            </p>

            <div className="kanipakam-location">
              <div className="kanipakam-location-icon">
                <MapPin size={18} strokeWidth={1.5} />
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Kanipakam, Chittoor District</strong>
                <small>Andhra Pradesh, India</small>
              </div>
            </div>

            <div className="kanipakam-facts">
              <div>
                <strong>11+</strong>
                <span>KM FROM<br />CHITTOOR</span>
              </div>

              <div>
                <strong>01</strong>
                <span>SACRED<br />VINAYAKA</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>FAITH &<br />DEVOTION</span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sri+Varasiddhi+Vinayaka+Swamy+Temple+Kanipakam"
              target="_blank"
              rel="noreferrer"
              className="kanipakam-map-button"
            >
              <MapPin size={16} strokeWidth={1.5} />
              <span>Explore Kanipakam</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="kanipakam-closing"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span></span>
          <p>
            From farewell to faith, the journey continues in the presence of
            Vinayaka.
          </p>
          <span></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Kanipakam;
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  CalendarDays,
  Camera,
  Sparkles,
  Users,
} from "lucide-react";

import "./Celebrations.css";

import img0 from "../../assets/images/c0.jpg";
import img1 from "../../assets/images/c1.jpg";
import img2 from "../../assets/images/c2.jpg";
import img4 from "../../assets/images/c4.webp";
import img5 from "../../assets/images/c5.jpg";


const celebrations = [
  {
    image: img1,
    number: "01",
    title: "The Grand Arrival",
    text: "A powerful beginning to the celebrations as Railway Ganesh arrives amidst devotion, music and the excitement of Kadiri.",
  },
  {
    image: img2,
    number: "02",
    title: "A City in Celebration",
    text: "Families, friends and devotees come together as the streets of Kadiri fill with the spirit of Ganesh Chaturthi.",
  },
  {
    image: img5,
    number: "03",
    title: "Moments of Devotion",
    text: "Every prayer, every offering and every moment of darshan becomes part of a tradition cherished across generations.",
  },
  {
    image: img4,
    number: "04",
    title: "The Spirit of Railway Ganesh",
    text: "A celebration shaped by faith, community and the unmistakable energy that makes Railway Ganesh special.",
  },
];

const celebrationStats = [
  {
    icon: CalendarDays,
    number: "1983",
    label: "Tradition Begins",
  },
  {
    icon: Users,
    number: "40+",
    label: "Years of Celebration",
  },
  {
    icon: Camera,
    number: "∞",
    label: "Memories Created",
  },
];

const Celebrations = () => {
  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery");

    if (gallery) {
      gallery.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="celebrations"
      id="celebrations"
    >
      <div className="celebrations-background">
        <div className="celebrations-glow celebrations-glow-one"></div>
        <div className="celebrations-glow celebrations-glow-two"></div>
      </div>

      <div className="celebrations-container">

        {/* HEADER */}

        <motion.div
          className="celebrations-header"
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="celebrations-kicker">
            <span></span>

            <Sparkles
              size={14}
              strokeWidth={1.4}
            />

            <span>THE CELEBRATION</span>

            <span></span>
          </div>

          <h2>
            When Kadiri
            <span>comes alive.</span>
          </h2>

          <p>
            Every year, Railway Ganesh transforms
            devotion into a celebration shared by
            thousands of hearts.
          </p>
        </motion.div>

        {/* FEATURED IMAGE */}

        <div className="celebrations-feature">

          <motion.div
            className="celebrations-feature-image"
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
            <img
              src={img0}
              alt="Railway Ganesh celebration in Kadiri"
            />

            <div className="celebrations-feature-overlay"></div>

            <div className="celebrations-feature-frame"></div>

            <div className="celebrations-feature-label">
              <span>RAILWAY GANESH</span>

              <small>
                GANESH CHATURTHI • KADIRI
              </small>
            </div>

            <div className="celebrations-feature-number">
              01
            </div>
          </motion.div>

          <motion.div
            className="celebrations-feature-content"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
          >
            <span className="celebrations-section-number">
              01 / CELEBRATION
            </span>

            <h3>
              More than a festival.
              <em>A feeling.</em>
            </h3>

            <p className="celebrations-lead">
              Ganesh Chaturthi at Railway Ganesh is
              more than an annual celebration. It is
              a moment when devotion, tradition and
              community come together.
            </p>

            <p>
              From the first preparations to the grand
              celebrations, every detail carries the
              love and dedication of the people who
              make Railway Ganesh a cherished part of
              Kadiri.
            </p>

            <div className="celebrations-feature-details">
              <div>
                <span>CELEBRATION</span>
                <strong>Ganesh Chaturthi</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Kadiri, Andhra Pradesh</strong>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS */}

        <motion.div
          className="celebrations-stats"
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.8,
          }}
        >
          {celebrationStats.map(
            (stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  className="celebrations-stat"
                  key={stat.label}
                >
                  <div className="celebrations-stat-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.3}
                    />
                  </div>

                  <div className="celebrations-stat-info">
                    <strong>
                      {stat.number}
                    </strong>

                    <span>
                      {stat.label}
                    </span>
                  </div>

                  {index !==
                    celebrationStats.length - 1 && (
                    <div className="celebrations-stat-divider"></div>
                  )}
                </div>
              );
            }
          )}
        </motion.div>

        {/* PHOTO STORY */}

        <div className="celebrations-gallery">

          <motion.div
            className="celebrations-gallery-heading"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div>
              <span>THROUGH THE YEARS</span>

              <h3>
                Moments that
                <em>remain.</em>
              </h3>
            </div>

            <p>
              A glimpse into the devotion, energy
              and unforgettable moments surrounding
              Railway Ganesh.
            </p>
          </motion.div>

          <div className="celebrations-photo-grid">
            {celebrations.map(
              (celebration, index) => (
                <motion.article
                  className={`celebration-card celebration-card-${index + 1}`}
                  key={celebration.number}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="celebration-card-image">
                    <img
                      src={celebration.image}
                      alt={celebration.title}
                    />

                    <div className="celebration-card-overlay"></div>
                  </div>

                  <div className="celebration-card-number">
                    {celebration.number}
                  </div>

                  <div className="celebration-card-content">
                    <span>
                      RAILWAY GANESH
                    </span>

                    <h4>
                      {celebration.title}
                    </h4>

                    <p>
                      {celebration.text}
                    </p>

                    <div className="celebration-card-arrow">
                      <ArrowDownRight
                        size={17}
                        strokeWidth={1.3}
                      />
                    </div>
                  </div>
                </motion.article>
              )
            )}
          </div>
        </div>

        {/* FINAL STATEMENT */}

        <motion.div
          className="celebrations-statement"
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
          }}
        >
          <div className="celebrations-statement-decoration"></div>

          <span>
            THE SPIRIT OF RAILWAY GANESH
          </span>

          <h3>
            One celebration.
            <br />
            <em>Thousands of memories.</em>
          </h3>

          <p>
            The celebration continues because the
            devotion continues — carried from one
            generation to the next.
          </p>

          <button
            type="button"
            className="celebrations-gallery-link"
            onClick={scrollToGallery}
          >
            <span>Explore the Gallery</span>

            <ArrowDownRight
              size={18}
              strokeWidth={1.4}
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Celebrations;
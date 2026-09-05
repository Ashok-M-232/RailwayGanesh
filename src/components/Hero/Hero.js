import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  MapPin,
  Sparkles,
} from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const scrollToStory = () => {
    const storySection = document.getElementById("story");

    if (storySection) {
      storySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-background">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
      </div>

      {/* Decorative glow */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      {/* Main Content */}
      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          {/* Location */}
          <motion.div
            className="hero-location"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
          >
            <MapPin size={14} strokeWidth={1.5} />

            <span>
              KADIRI • ANDHRA PRADESH
            </span>
          </motion.div>

          {/* Small decorative line */}
          <motion.div
            className="hero-eyebrow"
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
          >
            <span></span>

            <Sparkles
              size={13}
              strokeWidth={1.3}
            />

            <span></span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="hero-title"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="hero-title-small">
              RAILWAY
            </span>

            <span className="hero-title-main">
              GANESH
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.95,
            }}
          >
            Kadiri Ka Raja
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
          >
            A sacred tradition of devotion, celebration
            <br />
            and community since 1983.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.3,
            }}
          >
            <button
              type="button"
              className="hero-primary-button"
              onClick={scrollToStory}
            >
              <span>Discover Our Story</span>

              <span className="hero-button-arrow">
                <ArrowDown
                  size={16}
                  strokeWidth={1.7}
                />
              </span>
            </button>

            <a
              href="#special-2026"
              className="hero-secondary-button"
            >
              2026 Special
            </a>
          </motion.div>

        </motion.div>

      </div>

      {/* Since 1983 badge */}
      <motion.div
        className="hero-since"
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1.4,
        }}
      >
        <span className="hero-since-line"></span>

        <div className="hero-since-text">
          <span className="hero-since-year">
            1983
          </span>

          <span className="hero-since-label">
            A SACRED TRADITION
          </span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        className="hero-scroll"
        onClick={scrollToStory}
        aria-label="Scroll to our story"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.7,
        }}
      >
        <span className="hero-scroll-text">
          EXPLORE
        </span>

        <span className="hero-scroll-line"></span>

        <motion.span
          className="hero-scroll-arrow"
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            size={15}
            strokeWidth={1.4}
          />
        </motion.span>
      </motion.button>

      {/* Bottom decorative border */}
      <div className="hero-bottom-glow"></div>

    </section>
  );
};

export default Hero;
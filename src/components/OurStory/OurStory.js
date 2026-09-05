import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/images/pg2.jpg"
import {
  ArrowDownRight,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";
import "./OurStory.css";

const OurStory = () => {
  const storyStats = [
    {
      number: "1983",
      label: "Sacred Tradition",
    },
    {
      number: "40+",
      label: "Years of Devotion",
    },
    {
      number: "1",
      label: "Beloved Community",
    },
  ];

  const timeline = [
    {
      year: "1983",
      title: "The Beginning",
      text: "A sacred tradition began in Kadiri, growing through devotion, faith and the spirit of the local community.",
    },
    {
      year: "1990s",
      title: "A Growing Tradition",
      text: "Year after year, Ganesh Chaturthi became a cherished celebration, bringing families and devotees together.",
    },
    {
      year: "Today",
      title: "Kadiri Ka Raja",
      text: "Railway Ganesh continues to stand as a beloved symbol of devotion, celebration and Kadiri's cultural spirit.",
    },
  ];

  return (
    <section className="our-story" id="story">
      <div className="our-story-background">
        <div className="our-story-glow our-story-glow-one"></div>
        <div className="our-story-glow our-story-glow-two"></div>
      </div>

      <div className="our-story-container">
        {/* SECTION INTRO */}
        <motion.div
          className="our-story-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="our-story-kicker">
            <span className="our-story-kicker-line"></span>

            <Sparkles
              size={14}
              strokeWidth={1.4}
            />

            <span>OUR STORY</span>

            <span className="our-story-kicker-line"></span>
          </div>

          <h2>
            A Sacred Tradition
            <span>Since 1983</span>
          </h2>

          <p>
            More than a celebration.
            <br />
            A tradition carried through generations.
          </p>
        </motion.div>

        {/* MAIN STORY */}
        <div className="our-story-main">
          {/* IMAGE SIDE */}
          <motion.div
            className="our-story-visual"
            initial={{
              opacity: 0,
              x: -45,
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
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="our-story-image-frame">
              <div className="our-story-image">
                <img
                  src={img}
                  alt="Railway Ganesh, Kadiri"
                />
              </div>

              <div className="our-story-image-overlay"></div>

              <div className="our-story-image-corner our-story-image-corner-top"></div>
              <div className="our-story-image-corner our-story-image-corner-bottom"></div>

              <div className="our-story-image-caption">
                <span>RAILWAY GANESH</span>
                <small>KADIRI • ANDHRA PRADESH</small>
              </div>
            </div>

            <motion.div
              className="our-story-year-card"
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
            >
              <span className="our-story-year-card-small">
                ESTABLISHED
              </span>

              <strong>1983</strong>

              <span className="our-story-year-card-line"></span>

              <span className="our-story-year-card-label">
                A LEGACY OF FAITH
              </span>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            className="our-story-content"
            initial={{
              opacity: 0,
              x: 45,
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
              duration: 1,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="our-story-content-label">
              <span>01</span>
              <div></div>
              <span>HERITAGE</span>
            </div>

            <h3>
              Where devotion
              <br />
              becomes <em>tradition.</em>
            </h3>

            <p className="our-story-lead">
              Railway Ganesh is a revered temple and
              celebration in Kadiri, Sri Sathya Sai
              District, Andhra Pradesh.
            </p>

            <p>
              Since 1983, Railway Ganesh has grown into
              a cherished symbol of devotion, tradition
              and community celebration. Every year,
              devotees come together with the same
              spirit of faith that has shaped this
              tradition for generations.
            </p>

            <p>
              Known with love as{" "}
              <strong>Kadiri Ka Raja</strong> — the King
              of Kadiri — Railway Ganesh holds a special
              place in the hearts of the people of Kadiri
              and surrounding regions.
            </p>

            <div className="our-story-location">
              <div className="our-story-location-icon">
                <MapPin
                  size={18}
                  strokeWidth={1.4}
                />
              </div>

              <div>
                <span>OUR HOME</span>
                <strong>
                  Kadiri, Andhra Pradesh
                </strong>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          className="our-story-stats"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {storyStats.map((stat, index) => (
            <div
              className="our-story-stat"
              key={stat.label}
            >
              <span className="our-story-stat-number">
                {stat.number}
              </span>

              <span className="our-story-stat-label">
                {stat.label}
              </span>

              {index !== storyStats.length - 1 && (
                <span className="our-story-stat-divider"></span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Kadiri Ka Raja */}
        <div className="our-story-king">
          <motion.div
            className="our-story-king-decoration"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          ></motion.div>

          <motion.div
            className="our-story-king-content"
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <div className="our-story-king-icon">
              <Sparkles
                size={18}
                strokeWidth={1.2}
              />
            </div>

            <span className="our-story-king-overline">
              THE KING OF KADIRI
            </span>

            <h3>
              Kadirika
              <span>Ka Raja</span>
            </h3>

            <p>
              A name born from love, faith and the
              generations of devotees who continue to
              celebrate Lord Ganesha together.
            </p>

            <div className="our-story-king-bottom">
              <span></span>
              <small>RAILWAY GANESH • KADIRI</small>
              <span></span>
            </div>
          </motion.div>
        </div>

        {/* TIMELINE */}
        <div className="our-story-timeline-section">
          <motion.div
            className="our-story-timeline-heading"
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
            <span>OUR JOURNEY</span>

            <h3>
              From <em>1983</em> to today.
            </h3>
          </motion.div>

          <div className="our-story-timeline">
            <div className="our-story-timeline-line"></div>

            {timeline.map((item, index) => (
              <motion.div
                className={`our-story-timeline-item ${
                  index % 2 === 0
                    ? "timeline-item-left"
                    : "timeline-item-right"
                }`}
                key={item.year}
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
                  duration: 0.8,
                  delay: index * 0.12,
                }}
              >
                <div className="our-story-timeline-dot">
                  <span></span>
                </div>

                <div className="our-story-timeline-card">
                  <span className="our-story-timeline-year">
                    {item.year}
                  </span>

                  <h4>{item.title}</h4>

                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="our-story-bottom"
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
            duration: 0.8,
          }}
        >
          <div className="our-story-bottom-line"></div>

          <div className="our-story-bottom-content">
            <div>
              <CalendarDays
                size={18}
                strokeWidth={1.3}
              />

              <span>
                A TRADITION THAT CONTINUES
              </span>
            </div>

            <a
              href="#celebrations"
              className="our-story-bottom-link"
            >
              <span>
                Discover Our Celebrations
              </span>

              <ArrowDownRight
                size={18}
                strokeWidth={1.4}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Heart,
  Sparkles,
  Ticket,
  Trophy,
} from "lucide-react";
import "./LuckyDip.css";

import winner2025_1 from "../../assets/images/laddu-2025-1.jpg";
import winner2025_2 from "../../assets/images/laddu-2025-2.jpg";
import winner2025_3 from "../../assets/images/laddu-2025-3.jpg";
import winner2025_4 from "../../assets/images/laddu-2025-4.jpg";
import winner2025_5 from "../../assets/images/laddu-2025-5.jpg";

import winner2024_1 from "../../assets/images/w1.webp";
import winner2024_2 from "../../assets/images/w2.webp";
import winner2024_3 from "../../assets/images/w3.webp";
import winner2024_4 from "../../assets/images/w4.webp";
import winner2024_5 from "../../assets/images/w5.webp";

const winners2025 = [
  {
    image: winner2025_1,
    number: "01",
    name: "Lucky Winner",
  },
  {
    image: winner2025_2,
    number: "02",
    name: "Lucky Winner",
  },
  {
    image: winner2025_3,
    number: "03",
    name: "Lucky Winner",
  },
  {
    image: winner2025_4,
    number: "04",
    name: "Lucky Winner",
  },
  {
    image: winner2025_5,
    number: "05",
    name: "Lucky Winner",
  },
];

const winners2024 = [
  {
    image: winner2024_1,
    number: "01",
    name: "Lucky Winner",
  },
  {
    image: winner2024_2,
    number: "02",
    name: "Lucky Winner",
  },
  {
    image: winner2024_3,
    number: "03",
    name: "Lucky Winner",
  },
  {
    image: winner2024_4,
    number: "04",
    name: "Lucky Winner",
  },
  {
    image: winner2024_5,
    number: "05",
    name: "Lucky Winner",
  },
];

const WinnerRow = ({ year, winners }) => {
  return (
    <motion.div
      className="lucky-dip-year-section"
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="lucky-dip-year-heading">
        <div className="lucky-dip-year-left">
          <span className="lucky-dip-year-line"></span>

          <span className="lucky-dip-year-label">
            {year}
          </span>

          <span className="lucky-dip-year-text">
            LUCKY DIP WINNERS
          </span>
        </div>

        <span className="lucky-dip-year-count">
          05 WINNERS
        </span>
      </div>

      <div className="lucky-dip-winners">
        {winners.map((winner, index) => (
          <motion.div
            className={`lucky-dip-winner ${
              index === 2
                ? "lucky-dip-winner-featured"
                : ""
            }`}
            key={`${year}-${winner.number}`}
            whileHover={{
              y: -10,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <div className="lucky-dip-winner-image">
              <img
                src={winner.image}
                alt={`${year} Railway Ganesh Lucky Dip winner ${winner.number}`}
                loading="lazy"
                decoding="async"
              />

              <div className="lucky-dip-winner-shade"></div>

              <span className="lucky-dip-winner-number">
                {winner.number}
              </span>

              <div className="lucky-dip-winner-symbol">
                <Trophy
                  size={14}
                  strokeWidth={1.4}
                />
              </div>
            </div>

            <div className="lucky-dip-winner-info">
              <span>{winner.name}</span>
              <small>{year} • LUCKY DIP</small>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const LuckyDip = () => {
  return (
    <section
      className="lucky-dip"
      id="lucky-dip"
    >
      <div className="lucky-dip-background">
        <div className="lucky-dip-glow"></div>
        <div className="lucky-dip-orb lucky-dip-orb-one"></div>
        <div className="lucky-dip-orb lucky-dip-orb-two"></div>
      </div>

      <div className="lucky-dip-container">
        <motion.div
          className="lucky-dip-heading"
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
          <div className="lucky-dip-eyebrow">
            <span></span>

            <Sparkles
              size={13}
              strokeWidth={1.4}
            />

            <span>
              A SACRED TRADITION
            </span>

            <Sparkles
              size={13}
              strokeWidth={1.4}
            />

            <span></span>
          </div>

          <h2>
            The Laddu
            <strong>Lucky Dip</strong>
          </h2>

          <p>
            A tradition where devotion matters more
            than wealth, and every devotee has an
            equal chance to receive the sacred laddu.
          </p>
        </motion.div>

        <motion.div
          className="lucky-dip-story"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="lucky-dip-story-icon">
            <Gift
              size={25}
              strokeWidth={1.25}
            />
          </div>

          <div className="lucky-dip-story-content">
            <span className="lucky-dip-story-label">
              THE RAILWAY GANESH TRADITION
            </span>

            <h3>
              One Laddu. Five Sacred Shares.
            </h3>

            <p>
              Before the Nimarjanam day, the lucky
              name is announced. The sacred laddu,
              prepared as part of the Ganesh pooja,
              is then lovingly divided into five
              parts and shared with the five lucky
              devotees.
            </p>
          </div>

          <div className="lucky-dip-story-mark">
            <span>5</span>
            <small>SHARES</small>
          </div>
        </motion.div>

        <div className="lucky-dip-values">
          <div className="lucky-dip-value">
            <div className="lucky-dip-value-icon">
              <Ticket
                size={17}
                strokeWidth={1.35}
              />
            </div>

            <div>
              <strong>
                One Basic Contribution
              </strong>

              <span>
                Everyone gets an equal chance.
              </span>
            </div>
          </div>

          <div className="lucky-dip-value">
            <div className="lucky-dip-value-icon">
              <Heart
                size={17}
                strokeWidth={1.35}
              />
            </div>

            <div>
              <strong>
                Wealth Doesn't Matter
              </strong>

              <span>
                Devotion is what brings everyone together.
              </span>
            </div>
          </div>

          <div className="lucky-dip-value">
            <div className="lucky-dip-value-icon">
              <Sparkles
                size={17}
                strokeWidth={1.35}
              />
            </div>

            <div>
              <strong>
                Sacred Prasadam
              </strong>

              <span>
                A laddu prepared with the Ganesh pooja.
              </span>
            </div>
          </div>
        </div>

        <div className="lucky-dip-winners-header">
          <div>
            <span>MEMORIES OF LUCK</span>
            <h3>
              Our Lucky Devotees
            </h3>
          </div>

          <p>
            A glimpse of the devotees who received
            this special blessing in recent years.
          </p>
        </div>

        <WinnerRow
          year="2025"
          winners={winners2025}
        />

        <WinnerRow
          year="2024"
          winners={winners2024}
        />

        <motion.div
          className="lucky-dip-bottom-note"
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
          <span></span>

          <p>
            Every year, the tradition continues —
            bringing devotion, equality and the joy
            of prasadam to the Railway Ganesh community.
          </p>

          <span></span>
        </motion.div>
      </div>
    </section>
  );
};

export default LuckyDip;
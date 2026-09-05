import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./IntroLoader.css";

const IntroLoader = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          <div className="intro-glow"></div>

          <div className="intro-content">

            <motion.img
              src="/images/logo.png"
              alt="Railway Ganesh"
              className="intro-logo"
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            <motion.h1
              className="intro-title"
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
                delay: 0.55,
                ease: "easeOut",
              }}
            >
              RAILWAY GANESH
            </motion.h1>

            <motion.p
              className="intro-location"
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
                delay: 0.9,
                ease: "easeOut",
              }}
            >
              KADIRI • ANDHRA PRADESH
            </motion.p>

            <motion.div
              className="intro-divider"
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              }}
            />

            <motion.p
              className="intro-since"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.7,
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
              }}
            >
              A SACRED TRADITION SINCE 1983
            </motion.p>

          </div>

          <div className="intro-progress"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
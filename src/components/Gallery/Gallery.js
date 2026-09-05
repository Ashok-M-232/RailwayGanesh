import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Sparkles,
} from "lucide-react";
import "./Gallery.css";
import img2012 from "../../assets/images/history/2012.jpeg";
import img2013 from "../../assets/images/history/2013.jpeg";
import img2014 from "../../assets/images/history/2014.jpeg";
import img2015 from "../../assets/images/history/2015.jpeg";
import img2016 from "../../assets/images/history/2016.jpeg";
import img2017 from "../../assets/images/history/2017.jpeg";
import img2019 from "../../assets/images/history/2019.jpeg";
import img2020 from "../../assets/images/history/2020.webp";
import img2021 from "../../assets/images/history/2021.jpeg";
import img2022 from "../../assets/images/history/2022.jpeg";
import img2023 from "../../assets/images/history/2023.webp";
import img2024 from "../../assets/images/history/2024.webp";
import img2025 from "../../assets/images/history/2025.jpg";

const galleryImages = [
  {
    image: img2012,
    year: "2012",
    title: "A Tradition Begins",
  },
  {
    image: img2013,
    year: "2013",
    title: "Growing in Devotion",
  },
  {
    image: img2014,
    year: "2014",
    title: "Moments of Faith",
  },
  {
    image: img2015,
    year: "2015",
    title: "The Spirit of Railway Ganesh",
  },
  {
    image: img2016,
    year: "2016",
    title: "A Tradition Continues",
  },
  {
    image: img2017,
    year: "2017",
    title: "The Grand Celebration",
  },
  {
    image: img2019,
    year: "2019",
    title: "The Spirit of Kadiri",
  },
  {
    image: img2020,
    year: "2020",
    title: "Faith & Tradition",
  },
  {
    image: img2021,
    year: "2021",
    title: "Together in Devotion",
  },
  {
    image: img2022,
    year: "2022",
    title: "Railway Ganesh",
  },
  {
    image: img2023,
    year: "2023",
    title: "A Celebration of Faith",
  },
  {
    image: img2024,
    year: "2024",
    title: "Generations Together",
  },
  {
    image: img2025,
    year: "2025",
    title: "The Journey Continues",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalImages = galleryImages.length;

  const cloneCount = visibleCount;

  const carouselImages = useMemo(() => {
    const beginningClones = galleryImages.slice(-cloneCount);
    const endingClones = galleryImages.slice(0, cloneCount);

    return [
      ...beginningClones,
      ...galleryImages,
      ...endingClones,
    ];
  }, [cloneCount]);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();

    window.addEventListener(
      "resize",
      updateVisibleCount
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCount
      );
    };
  }, []);

  useEffect(() => {
    setTransitionEnabled(false);
    setCurrentIndex(visibleCount);

    const frame = requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [visibleCount]);

  useEffect(() => {
    if (isPaused || selectedImage) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentIndex((previous) => previous + 1);
    }, 4200);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused, selectedImage]);

  useEffect(() => {
    if (currentIndex >= totalImages + cloneCount) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(cloneCount);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransitionEnabled(true);
          });
        });
      }, 850);

      return () => {
        clearTimeout(timer);
      };
    }

    if (currentIndex < cloneCount) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalImages + currentIndex);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransitionEnabled(true);
          });
        });
      }, 850);

      return () => {
        clearTimeout(timer);
      };
    }

    return undefined;
  }, [
    currentIndex,
    totalImages,
    cloneCount,
  ]);

  const moveNext = () => {
    setTransitionEnabled(true);
    setCurrentIndex((previous) => previous + 1);
  };

  const movePrevious = () => {
    setTransitionEnabled(true);
    setCurrentIndex((previous) => previous - 1);
  };

  const getOriginalIndex = (index) => {
    return (
      (index - cloneCount + totalImages) %
      totalImages
    );
  };

  const activeOriginalIndex =
    getOriginalIndex(currentIndex + 1);

  return (
    <>
      <section
        className="gallery"
        id="gallery"
      >
        <div className="gallery-background">
          <div className="gallery-background-glow"></div>
          <div className="gallery-background-line"></div>
        </div>

        <div className="gallery-container">
          <motion.div
            className="gallery-heading"
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
            <div className="gallery-heading-top">
              <span className="gallery-heading-line"></span>

              <span className="gallery-heading-label">
                <Camera
                  size={13}
                  strokeWidth={1.5}
                />
                RAILWAY GANESH ARCHIVES
              </span>

              <span className="gallery-heading-line"></span>
            </div>

            <h2 className="gallery-title">
              A Decade of
              <span>Devotion</span>
            </h2>

            <p className="gallery-description">
              A collection of moments captured across
              the years — celebrations, devotion,
              tradition and the unforgettable spirit
              of Railway Ganesh.
            </p>
          </motion.div>

          <div
            className="gallery-carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <button
              type="button"
              className="gallery-control gallery-control-left"
              onClick={movePrevious}
              aria-label="Previous gallery image"
            >
              <ArrowLeft
                size={18}
                strokeWidth={1.5}
              />
            </button>

            <div className="gallery-carousel">
              <motion.div
                className="gallery-track"
                animate={{
                  x: `-${currentIndex * (100 / visibleCount)}%`,
                }}
                transition={
                  transitionEnabled
                    ? {
                        duration: 0.85,
                        ease: [
                          0.16,
                          1,
                          0.3,
                          1,
                        ],
                      }
                    : {
                        duration: 0,
                      }
                }
              >
                {carouselImages.map(
                  (item, index) => {
                    const originalIndex =
                      getOriginalIndex(index);

                    const isActive =
                      originalIndex ===
                      activeOriginalIndex;

                    return (
                      <div
                        className="gallery-slide"
                        key={`${item.year}-${index}`}
                      >
                        <motion.button
                          type="button"
                          className={`gallery-card ${
                            isActive
                              ? "gallery-card-active"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedImage(
                              item
                            )
                          }
                          whileHover={{
                            y: isActive
                              ? -16
                              : -8,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: "easeOut",
                          }}
                          aria-label={`View ${item.year} gallery image`}
                        >
                          <div className="gallery-image-wrapper">
                            <img
                              src={item.image}
                              alt={`${item.title} — ${item.year}`}
                              className="gallery-image"
                              loading="lazy"
                              decoding="async"
                            />

                            <div className="gallery-image-shade"></div>

                            <div className="gallery-card-number">
                              {String(
                                originalIndex + 1
                              ).padStart(2, "0")}
                            </div>

                            <div className="gallery-card-camera">
                              <Camera
                                size={15}
                                strokeWidth={1.4}
                              />
                            </div>
                          </div>

                          <div className="gallery-card-info">
                            <div className="gallery-card-year">
                              {item.year}
                            </div>

                            <div className="gallery-card-title">
                              {item.title}
                            </div>
                          </div>

                          <div className="gallery-card-accent"></div>
                        </motion.button>
                      </div>
                    );
                  }
                )}
              </motion.div>
            </div>

            <button
              type="button"
              className="gallery-control gallery-control-right"
              onClick={moveNext}
              aria-label="Next gallery image"
            >
              <ArrowRight
                size={18}
                strokeWidth={1.5}
              />
            </button>
          </div>

          <div className="gallery-bottom">
            <div className="gallery-progress">
              <motion.div
                className="gallery-progress-fill"
                key={currentIndex}
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: isPaused
                    ? 0
                    : 1,
                }}
                transition={{
                  duration: isPaused
                    ? 0
                    : 4.2,
                  ease: "linear",
                }}
              ></motion.div>
            </div>

            <div className="gallery-bottom-left">
              <Sparkles
                size={13}
                strokeWidth={1.3}
              />

              <span>
                PRESERVING MEMORIES • SINCE 1983
              </span>
            </div>

            <div className="gallery-bottom-right">
              <span>
                {String(
                  activeOriginalIndex + 1
                ).padStart(2, "0")}
              </span>

              <span className="gallery-bottom-divider">
                /
              </span>

              <span>
                {String(totalImages).padStart(
                  2,
                  "0"
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedImage(null)
            }
          >
            <motion.div
              className="gallery-lightbox-content"
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="gallery-lightbox-image"
              />

              <div className="gallery-lightbox-info">
                <span>
                  {selectedImage.year}
                </span>

                <strong>
                  {selectedImage.title}
                </strong>
              </div>

              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() =>
                  setSelectedImage(null)
                }
                aria-label="Close image"
              >
                <span></span>
                <span></span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
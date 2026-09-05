import React, { useEffect, useRef, useState } from "react";
import "./Reels.css";

import reel1 from "../../assets/videos/reel1.mp4";
import reel2 from "../../assets/videos/reel2.mp4";
import reel3 from "../../assets/videos/reel3.mp4";

import v1 from "../../assets/videos/v1.mp4";

const reels = [
  {
    src: reel1,
    title: "Railway Ganesh",
  },
  {
    src: reel2,
    title: "Moments of Devotion",
  },
  {
    src: reel3,
    title: "The Spirit of Kadiri",
  },
];

const videos = [
  {
    src: v1,
    title: "Railway Ganesh",
  },
  {
    src: reel2,
    title: "Moments of Devotion",
  },
  {
    src: v1,
    title: "The Spirit of Kadiri",
  },
];

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFeed, setActiveFeed] = useState("shorts");

  const containerRef = useRef(null);
  const videoRefs = useRef([]);

  const touchStartY = useRef(0);
  const touchStartX = useRef(0);

  const currentFeed =
    activeFeed === "shorts" ? reels : videos;

  /*
   * Lock background page scrolling.
   */
  useEffect(() => {
    const originalOverflow =
      document.body.style.overflow;

    const originalHeight =
      document.body.style.height;

    document.body.style.overflow = "hidden";
    document.body.style.height = "100dvh";

    return () => {
      document.body.style.overflow =
        originalOverflow;

      document.body.style.height =
        originalHeight;
    };
  }, []);

  /*
   * Reset feed when changing SHORTS / VIDEOS.
   */
  useEffect(() => {
    setActiveIndex(0);

    const container = containerRef.current;

    if (!container) return;

    container.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [activeFeed]);

  /*
   * Detect active slide.
   */
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let scrollTimeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const height = container.clientHeight;

        if (!height) return;

        const index = Math.round(
          container.scrollTop / height
        );

        const safeIndex = Math.max(
          0,
          Math.min(
            index,
            currentFeed.length - 1
          )
        );

        setActiveIndex((previousIndex) =>
          previousIndex === safeIndex
            ? previousIndex
            : safeIndex
        );
      }, 50);
    };

    container.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      clearTimeout(scrollTimeout);

      container.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [currentFeed.length]);

  /*
   * Play only active video.
   */
  useEffect(() => {
    videoRefs.current.forEach(
      (video, index) => {
        if (!video) return;

        if (index === activeIndex) {
          video.currentTime = 0;

          const playPromise =
            video.play();

          if (
            playPromise !== undefined
          ) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    );
  }, [activeIndex, activeFeed]);

  /*
   * Navigate to slide.
   *
   * Infinite loop:
   * Last → First
   * First → Last
   */
  const goToIndex = (index) => {
    const container =
      containerRef.current;

    if (
      !container ||
      currentFeed.length === 0
    ) {
      return;
    }

    let targetIndex = index;

    if (
      targetIndex >=
      currentFeed.length
    ) {
      targetIndex = 0;
    }

    if (targetIndex < 0) {
      targetIndex =
        currentFeed.length - 1;
    }

    setActiveIndex(targetIndex);

    container.scrollTo({
      top:
        targetIndex *
        container.clientHeight,
      behavior: "smooth",
    });
  };

  /*
   * Touch start.
   */
  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    touchStartY.current =
      touch.clientY;

    touchStartX.current =
      touch.clientX;
  };

  /*
   * Touch end.
   *
   * Normal scrolling is handled by
   * the browser/CSS.
   *
   * JS handles infinite looping only.
   */
  const handleTouchEnd = (event) => {
    const touch =
      event.changedTouches[0];

    const distanceY =
      touchStartY.current -
      touch.clientY;

    const distanceX =
      touchStartX.current -
      touch.clientX;

    const minimumSwipeDistance = 70;

    /*
     * Ignore horizontal gestures.
     */
    if (
      Math.abs(distanceX) >
      Math.abs(distanceY)
    ) {
      return;
    }

    /*
     * Ignore small movements.
     */
    if (
      Math.abs(distanceY) <
      minimumSwipeDistance
    ) {
      return;
    }

    /*
     * Last → First
     */
    if (
      distanceY > 0 &&
      activeIndex ===
        currentFeed.length - 1
    ) {
      goToIndex(0);
    }

    /*
     * First → Last
     */
    if (
      distanceY < 0 &&
      activeIndex === 0
    ) {
      goToIndex(
        currentFeed.length - 1
      );
    }
  };

  /*
   * Change SHORTS / VIDEOS.
   */
  const handleFeedChange = (feed) => {
    if (feed === activeFeed) return;

    videoRefs.current.forEach(
      (video) => {
        if (!video) return;

        video.pause();
        video.currentTime = 0;
      }
    );

    videoRefs.current = [];

    setActiveFeed(feed);
  };

  /*
   * Feed format class.
   *
   * SHORTS = 9:16
   * VIDEOS = 16:9
   */
  const feedClass =
    activeFeed === "shorts"
      ? "shorts-feed"
      : "videos-feed";

  return (
    <main
      className={`reels-wrapper ${feedClass}`}
    >
      <div
        ref={containerRef}
        className="reels-page"
        onTouchStart={
          handleTouchStart
        }
        onTouchEnd={handleTouchEnd}
      >
        {currentFeed.map(
          (item, index) => (
            <section
              key={`${activeFeed}-${item.src}-${index}`}
              className="reel-slide"
            >
              <video
                ref={(element) => {
                  videoRefs.current[
                    index
                  ] = element;
                }}
                className="reel-video"
                src={item.src}
                autoPlay={
                  index === activeIndex
                }
                loop
                muted={false}
                playsInline
                preload={
                  index === activeIndex
                    ? "auto"
                    : "metadata"
                }
              />
            </section>
          )
        )}
      </div>

      {/* SHORTS / VIDEOS */}
      <nav className="reels-feed-switch">
        <button
          type="button"
          className={
            activeFeed === "shorts"
              ? "active"
              : ""
          }
          onClick={() =>
            handleFeedChange(
              "shorts"
            )
          }
        >
          SHORTS
        </button>

        <button
          type="button"
          className={
            activeFeed === "videos"
              ? "active"
              : ""
          }
          onClick={() =>
            handleFeedChange(
              "videos"
            )
          }
        >
          VIDEOS
        </button>
      </nav>
    </main>
  );
};

export default Reels;

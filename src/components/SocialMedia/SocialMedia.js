import React from "react";
import "./SocialMedia.css";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="21"
          height="21"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle
            cx="17.3"
            cy="6.8"
            r="1"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="21"
          height="21"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M21 7.2a2.9 2.9 0 0 0-2.05-2.06C17.14 4.65 12 4.65 12 4.65s-5.14 0-6.95.49A2.9 2.9 0 0 0 3 7.2C2.51 9.01 2.51 12 2.51 12s0 2.99.49 4.8a2.9 2.9 0 0 0 2.05 2.06c1.81.49 6.95.49 6.95.49s5.14 0 6.95-.49A2.9 2.9 0 0 0 21 16.8c.49-1.81.49-4.8.49-4.8S21.49 9.01 21 7.2Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m10 15.25 5-3.25-5-3.25v6.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="21"
          height="21"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M14 21v-8h2.75l.4-3H14V8.08c0-.87.24-1.46 1.5-1.46h1.75V3.94c-.3-.04-1.34-.14-2.55-.14-2.52 0-4.25 1.54-4.25 4.37V10H7.75v3H10.5v8H14Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="social-media">
      <div className="social-media-line"></div>

      <div className="social-media-content">
        <p className="social-media-label">
          FOLLOW RAILWAY GANESH
        </p>

        <div className="social-media-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
              aria-label={`Railway Ganesh on ${social.name}`}
            >
              {social.icon}

              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="social-media-line"></div>
    </section>
  );
};

export default SocialMedia;
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   MapPin,
//   Navigation,
//   Sparkles,
// } from "lucide-react";
// import "./Visit.css";

// import visit1 from "../../assets/images/ced0.jpg";
// import visit2 from "../../assets/images/c10.webp";
// import visit3 from "../../assets/images/c5.jpg";
// import visit4 from "../../assets/images/c7.jpg";

// const visitImages = [
//   {
//     image: visit1,
//     number: "01",
//     label: "RAILWAY GANESH",
//   },
//   {
//     image: visit2,
//     number: "02",
//     label: "THE TEMPLE",
//   },
//   {
//     image: visit3,
//     number: "03",
//     label: "KADIRI",
//   },
//   {
//     image: visit4,
//     number: "04",
//     label: "KADIRI RAILWAY GANESH",
//   },
// ];

// const Visit = () => {
//   const [activeImage, setActiveImage] = useState(0);

//   const previousImage = () => {
//     setActiveImage(
//       (previous) =>
//         (previous - 1 + visitImages.length) %
//         visitImages.length
//     );
//   };

//   const nextImage = () => {
//     setActiveImage(
//       (previous) =>
//         (previous + 1) % visitImages.length
//     );
//   };

//   return (
//     <section
//       className="visit"
//       id="visit"
//     >
//       <div className="visit-background">
//         <div className="visit-glow"></div>
//         <div className="visit-grain"></div>
//       </div>

//       <div className="visit-container">

//         {/* HEADING */}

//         <motion.div
//           className="visit-heading"
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.25,
//           }}
//           transition={{
//             duration: 0.9,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//         >
//           <div className="visit-eyebrow">
//             <span></span>

//             <Sparkles
//               size={13}
//               strokeWidth={1.2}
//             />

//             <p>
//               VISIT RAILWAY GANESH
//             </p>

//             <Sparkles
//               size={13}
//               strokeWidth={1.2}
//             />

//             <span></span>
//           </div>

//           <h2>
//             Come With
//             <span>Devotion.</span>
//           </h2>

//           <p>
//             Visit Railway Ganesh in Kadiri and
//             experience a place where tradition,
//             devotion and community come together.
//           </p>
//         </motion.div>

//         {/* MAIN VISIT AREA */}

//         <motion.div
//           className="visit-content"
//           initial={{
//             opacity: 0,
//             y: 45,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           transition={{
//             duration: 1,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//         >

//           {/* IMAGE */}

//           <div className="visit-image-wrapper">

//             <motion.img
//               key={activeImage}
//               src={
//                 visitImages[
//                   activeImage
//                 ].image
//               }
//               alt={
//                 visitImages[
//                   activeImage
//                 ].label
//               }
//               initial={{
//                 opacity: 0,
//                 scale: 1.04,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 0.75,
//                 ease: "easeOut",
//               }}
//             />

//             <div className="visit-image-overlay"></div>

//             <div className="visit-image-top">
//               <span>
//                 RAILWAY GANESH
//               </span>

//               <span>
//                 {visitImages[activeImage].number}
//               </span>
//             </div>

//             <div className="visit-image-bottom">
//               <span>
//                 {visitImages[activeImage].label}
//               </span>
//             </div>

//             {/* ONLY LEFT / RIGHT */}

//             <div className="visit-navigation">

//               <button
//                 type="button"
//                 onClick={previousImage}
//                 aria-label="Previous image"
//               >
//                 <ArrowLeft
//                   size={20}
//                   strokeWidth={1.2}
//                 />
//               </button>

//               <button
//                 type="button"
//                 onClick={nextImage}
//                 aria-label="Next image"
//               >
//                 <ArrowRight
//                   size={20}
//                   strokeWidth={1.2}
//                 />
//               </button>

//             </div>

//           </div>

//           {/* INFORMATION */}

//           <div className="visit-information">

//             <div className="visit-info-number">
//               1983
//             </div>

//             <span className="visit-info-label">
//               A SACRED TRADITION
//             </span>

//             <h3>
//               Find Your Way
//               <span>to Railway Ganesh.</span>
//             </h3>

//             <p>
//               Railway Ganesh is located in Kadiri,
//               Sri Sathya Sai District, Andhra Pradesh.
//               For generations, devotees have gathered
//               here to celebrate faith, tradition and
//               the spirit of the community.
//             </p>

//             <div className="visit-details">

//               <div className="visit-detail">
//                 <div className="visit-detail-icon">
//                   <MapPin
//                     size={17}
//                     strokeWidth={1.2}
//                   />
//                 </div>

//                 <div>
//                   <span>
//                     LOCATION
//                   </span>

//                   <strong>
//                     Kadiri, Andhra Pradesh
//                   </strong>
//                 </div>
//               </div>

//               <div className="visit-detail">
//                 <div className="visit-detail-icon">
//                   <Navigation
//                     size={17}
//                     strokeWidth={1.2}
//                   />
//                 </div>

//                 <div>
//                   <span>
//                     DISTRICT
//                   </span>

//                   <strong>
//                     Sri Sathya Sai District
//                   </strong>
//                 </div>
//               </div>

//             </div>

//             <a
//               href="https://www.google.com/maps/search/?api=1&query=Railway+Ganesh+Kadiri+Andhra+Pradesh"
//               target="_blank"
//               rel="noreferrer"
//               className="visit-map-button"
//             >
//               <span>
//                 GET DIRECTIONS
//               </span>

//               <ArrowRight
//                 size={17}
//                 strokeWidth={1.2}
//               />
//             </a>

//           </div>

//         </motion.div>

//         {/* FOOTER LINE */}

//         <motion.div
//           className="visit-closing"
//           initial={{
//             opacity: 0,
//           }}
//           whileInView={{
//             opacity: 1,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 1,
//           }}
//         >
//           <div className="visit-closing-line"></div>

//           <div className="visit-closing-content">
//             <Sparkles
//               size={12}
//               strokeWidth={1.1}
//             />

//             <span>
//               RAILWAY GANESH • KADIRI
//             </span>

//             <Sparkles
//               size={12}
//               strokeWidth={1.1}
//             />
//           </div>

//           <div className="visit-closing-line"></div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Visit;











import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react";
import "./Visit.css";

import visit1 from "../../assets/images/ced0.jpg";
import visit2 from "../../assets/images/c10.webp";
import visit3 from "../../assets/images/c5.jpg";
import visit4 from "../../assets/images/c7.jpg";

const visitImages = [
  {
    image: visit1,
    number: "01",
    label: "RAILWAY GANESH",
  },
  {
    image: visit2,
    number: "02",
    label: "THE TEMPLE",
  },
  {
    image: visit3,
    number: "03",
    label: "KADIRI",
  },
  {
    image: visit4,
    number: "04",
    label: "KADIRI RAILWAY GANESH",
  },
];

// Replace these with the actual Railway Ganesh social media URLs
const socialLinks = {
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Railway+Ganesh+Kadiri+Andhra+Pradesh",
};

const Visit = () => {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage(
      (previous) =>
        (previous - 1 + visitImages.length) %
        visitImages.length
    );
  };

  const nextImage = () => {
    setActiveImage(
      (previous) =>
        (previous + 1) % visitImages.length
    );
  };

  return (
    <section className="visit" id="visit">
      <div className="visit-background">
        <div className="visit-glow"></div>
        <div className="visit-grain"></div>
      </div>

      <div className="visit-container">

        {/* HEADING */}

        <motion.div
          className="visit-heading"
          initial={{
            opacity: 0,
            y: 40,
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
          <div className="visit-eyebrow">
            <span></span>

            <Sparkles
              size={13}
              strokeWidth={1.2}
            />

            <p>VISIT RAILWAY GANESH</p>

            <Sparkles
              size={13}
              strokeWidth={1.2}
            />

            <span></span>
          </div>

          <h2>
            Come With
            <span>Devotion.</span>
          </h2>

          <p>
            Visit Railway Ganesh in Kadiri and
            experience a place where tradition,
            devotion and community come together.
          </p>
        </motion.div>

        {/* MAIN VISIT AREA */}

        <motion.div
          className="visit-content"
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
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          {/* IMAGE */}

          <div className="visit-image-wrapper">

            <motion.img
              key={activeImage}
              src={visitImages[activeImage].image}
              alt={visitImages[activeImage].label}
              initial={{
                opacity: 0,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
              }}
            />

            <div className="visit-image-overlay"></div>

            <div className="visit-image-top">
              <span>RAILWAY GANESH</span>

              <span>
                {visitImages[activeImage].number}
              </span>
            </div>

            <div className="visit-image-bottom">
              <span>
                {visitImages[activeImage].label}
              </span>
            </div>

            {/* IMAGE NAVIGATION */}

            <div className="visit-navigation">

              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <ArrowLeft
                  size={20}
                  strokeWidth={1.2}
                />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ArrowRight
                  size={20}
                  strokeWidth={1.2}
                />
              </button>

            </div>
          </div>

          {/* INFORMATION */}

          <div className="visit-information">

            <div className="visit-info-number">
              1983
            </div>

            <span className="visit-info-label">
              A SACRED TRADITION
            </span>

            <h3>
              Find Your Way
              <span>to Railway Ganesh.</span>
            </h3>

            <p>
              Railway Ganesh is located in Kadiri,
              Sri Sathya Sai District, Andhra Pradesh.
              For generations, devotees have gathered
              here to celebrate faith, tradition and
              the spirit of the community.
            </p>

            {/* LOCATION DETAILS */}

            <div className="visit-details">

              <div className="visit-detail">

                <div className="visit-detail-icon">
                  <MapPin
                    size={17}
                    strokeWidth={1.2}
                  />
                </div>

                <div>
                  <span>LOCATION</span>

                  <strong>
                    Kadiri, Andhra Pradesh
                  </strong>
                </div>

              </div>

              <div className="visit-detail">

                <div className="visit-detail-icon">
                  <Navigation
                    size={17}
                    strokeWidth={1.2}
                  />
                </div>

                <div>
                  <span>DISTRICT</span>

                  <strong>
                    Sri Sathya Sai District
                  </strong>
                </div>

              </div>

            </div>

            {/* GOOGLE MAPS */}

            <a
              href={socialLinks.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-map-button"
              aria-label="Get directions to Railway Ganesh"
            >
              <span>GET DIRECTIONS</span>

              <ArrowRight
                size={17}
                strokeWidth={1.2}
              />
            </a>

            {/* SOCIAL MEDIA */}

            <div className="visit-social">

              <span className="visit-social-label">
                CONNECT WITH US
              </span>

              <div className="visit-social-links">

                {/* INSTAGRAM */}

                <a
                  href="https://www.instagram.com/railway_ganesh_offical?igsi=MWxkNXdibXpwcGtrdA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-social-link"
                  aria-label="Railway Ganesh Instagram"
                >
                  <Sparkles
                    size={18}
                    strokeWidth={1.2}
                  />

                  <span>INSTAGRAM</span>
                </a>

                {/* FACEBOOK */}

                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-social-link"
                  aria-label="Railway Ganesh Facebook"
                >
                  <Navigation
                    size={18}
                    strokeWidth={1.2}
                  />

                  <span>FACEBOOK</span>
                </a>

                {/* GOOGLE MAPS */}

                <a
                  href={socialLinks.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-social-link"
                  aria-label="Railway Ganesh Google Maps"
                >
                  <MapPin
                    size={18}
                    strokeWidth={1.2}
                  />

                  <span>MAPS</span>
                </a>

              </div>

            </div>

          </div>
        </motion.div>

        {/* CLOSING LINE */}

        <motion.div
          className="visit-closing"
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
            duration: 1,
          }}
        >

          <div className="visit-closing-line"></div>

          <div className="visit-closing-content">

            <Sparkles
              size={12}
              strokeWidth={1.1}
            />

            <span>
              RAILWAY GANESH • KADIRI
            </span>

            <Sparkles
              size={12}
              strokeWidth={1.1}
            />

          </div>

          <div className="visit-closing-line"></div>

        </motion.div>

        {/* DEVELOPER CREDIT */}

        {/* <div className="visit-developer">
          <span>DEVELOPED BY</span>
          <strong>MUDDANGULA ASHOK</strong>
        </div> */}

      </div>
    </section>
  );
};

export default Visit;
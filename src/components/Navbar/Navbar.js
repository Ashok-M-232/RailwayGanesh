// // import React, { useEffect, useState } from "react";
// // import { Menu, X } from "lucide-react";
// // import "./Navbar.css";

// // const navItems = [
// //   { id: "home", label: "Home" },
// //   { id: "story", label: "Our Story" },
// //   { id: "celebrations", label: "Celebrations" },
// //   {
// //     id: "special-2026",
// //     label: "2026 Special",
// //     highlight: true,
// //   },
// //   { id: "gallery", label: "Gallery" },
// //   { id: "lucky-dip", label: "Lucky Dip" },
// //   { id: "nimarjanam", label: "Nimarjanam" },
// //   { id: "kanipakam", label: "Kanipakam" },
// //   { id: "visit", label: "Visit" },
// // ];

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const [activeSection, setActiveSection] = useState("home");

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 30);

// //       const navbarOffset = 130;
// //       let currentSection = "home";

// //       navItems.forEach((item) => {
// //         const section = document.getElementById(item.id);

// //         if (!section) return;

// //         const sectionTop =
// //           section.getBoundingClientRect().top +
// //           window.scrollY -
// //           navbarOffset;

// //         if (window.scrollY >= sectionTop) {
// //           currentSection = item.id;
// //         }
// //       });

// //       setActiveSection(currentSection);
// //     };

// //     window.addEventListener("scroll", handleScroll, {
// //       passive: true,
// //     });

// //     handleScroll();

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     if (menuOpen) {
// //       document.body.classList.add("navbar-menu-active");
// //     } else {
// //       document.body.classList.remove("navbar-menu-active");
// //     }

// //     return () => {
// //       document.body.classList.remove("navbar-menu-active");
// //     };
// //   }, [menuOpen]);

// //   const closeMenu = () => {
// //     setMenuOpen(false);
// //   };

// //   const handleNavigation = (event, sectionId) => {
// //     event.preventDefault();

// //     closeMenu();
// //     setActiveSection(sectionId);

// //     const section = document.getElementById(sectionId);

// //     if (section) {
// //       const navbarHeight = 90;

// //       const sectionPosition =
// //         section.getBoundingClientRect().top +
// //         window.scrollY -
// //         navbarHeight;

// //       window.scrollTo({
// //         top: sectionPosition,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   return (
// //     <header
// //       className={`navbar ${
// //         scrolled ? "navbar-scrolled" : ""
// //       } ${menuOpen ? "navbar-open" : ""}`}
// //     >
// //       <div className="navbar-container">
// //         <a
// //           href="#home"
// //           className="navbar-brand"
// //           onClick={(event) =>
// //             handleNavigation(event, "home")
// //           }
// //           aria-label="Railway Ganesh home"
// //         >
// //           <div className="navbar-logo-wrapper">
// //             <img
// //               src="/images/logo.png"
// //               alt="Railway Ganesh"
// //               className="navbar-logo"
// //             />
// //           </div>

// //           <div className="navbar-brand-text">
// //             <span className="navbar-title">
// //               Railway Ganesh
// //             </span>

// //             <span className="navbar-location">
// //               Kadiri • Since 1983
// //             </span>
// //           </div>
// //         </a>

// //         <nav
// //           id="main-navigation"
// //           className={`navbar-menu ${
// //             menuOpen ? "navbar-menu-open" : ""
// //           }`}
// //           aria-label="Main navigation"
// //         >
// //           {navItems.map((item) => (
// //             <a
// //               key={item.id}
// //               href={`#${item.id}`}
// //               className={`navbar-link ${
// //                 item.highlight
// //                   ? "navbar-link-highlight"
// //                   : ""
// //               } ${
// //                 activeSection === item.id
// //                   ? "navbar-link-active"
// //                   : ""
// //               }`}
// //               onClick={(event) =>
// //                 handleNavigation(event, item.id)
// //               }
// //             >
// //               <span>{item.label}</span>
// //             </a>
// //           ))}
// //         </nav>

// //         <button
// //           type="button"
// //           className="navbar-toggle"
// //           onClick={() => {
// //             setMenuOpen((previous) => !previous);
// //           }}
// //           aria-label={
// //             menuOpen
// //               ? "Close navigation menu"
// //               : "Open navigation menu"
// //           }
// //           aria-expanded={menuOpen}
// //           aria-controls="main-navigation"
// //         >
// //           <span className="navbar-toggle-icon">
// //             {menuOpen ? (
// //               <X size={25} strokeWidth={1.7} />
// //             ) : (
// //               <Menu size={25} strokeWidth={1.7} />
// //             )}
// //           </span>
// //         </button>
// //       </div>

// //       <div
// //         className={`navbar-mobile-overlay ${
// //           menuOpen
// //             ? "navbar-mobile-overlay-visible"
// //             : ""
// //         }`}
// //         onClick={closeMenu}
// //         aria-hidden="true"
// //       ></div>
// //     </header>
// //   );
// // };

// // export default Navbar;



// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import "./Navbar.css";

// const navItems = [
//   { id: "home", label: "Home" },
//   { id: "story", label: "Our Story" },
//   { id: "celebrations", label: "Celebrations" },
//   {
//     id: "special-2026",
//     label: "2026 Special",
//     highlight: true,
//   },
//   { id: "gallery", label: "Gallery" },
//   { id: "lucky-dip", label: "Lucky Dip" },
//   { id: "nimarjanam", label: "Nimarjanam" },
//   { id: "kanipakam", label: "Kanipakam" },
//   { id: "visit", label: "Visit" },
//   { id: "reels", label: "Reels", highlight: true },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);

//       const navbarOffset = 130;
//       let currentSection = "home";

//       navItems.forEach((item) => {
//         const section = document.getElementById(item.id);

//         if (!section) return;

//         const sectionTop =
//           section.getBoundingClientRect().top +
//           window.scrollY -
//           navbarOffset;

//         if (window.scrollY >= sectionTop) {
//           currentSection = item.id;
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.classList.add("navbar-menu-active");
//     } else {
//       document.body.classList.remove("navbar-menu-active");
//     }

//     return () => {
//       document.body.classList.remove("navbar-menu-active");
//     };
//   }, [menuOpen]);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const handleNavigation = (event, sectionId) => {
//     event.preventDefault();

//     closeMenu();
//     setActiveSection(sectionId);

//     const section = document.getElementById(sectionId);

//     if (section) {
//       const navbarHeight = 90;

//       const sectionPosition =
//         section.getBoundingClientRect().top +
//         window.scrollY -
//         navbarHeight;

//       window.scrollTo({
//         top: sectionPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <header
//       className={`navbar ${
//         scrolled ? "navbar-scrolled" : ""
//       } ${menuOpen ? "navbar-open" : ""}`}
//     >
//       <div className="navbar-container">
//         <a
//           href="#home"
//           className="navbar-brand"
//           onClick={(event) =>
//             handleNavigation(event, "home")
//           }
//           aria-label="Railway Ganesh home"
//         >
//           <div className="navbar-logo-wrapper">
//             <img
//               src="/images/logo.png"
//               alt="Railway Ganesh"
//               className="navbar-logo"
//             />
//           </div>

//           <div className="navbar-brand-text">
//             <span className="navbar-title">
//               Railway Ganesh
//             </span>

//             <span className="navbar-location">
//               Kadiri • Since 1983
//             </span>
//           </div>
//         </a>

//         <nav
//           id="main-navigation"
//           className={`navbar-menu ${
//             menuOpen ? "navbar-menu-open" : ""
//           }`}
//           aria-label="Main navigation"
//         >
//           {navItems.map((item) => (
//             <a
//               key={item.id}
//               href={`#${item.id}`}
//               className={`navbar-link ${
//                 item.highlight
//                   ? "navbar-link-highlight"
//                   : ""
//               } ${
//                 activeSection === item.id
//                   ? "navbar-link-active"
//                   : ""
//               }`}
//               onClick={(event) =>
//                 handleNavigation(event, item.id)
//               }
//             >
//               <span>{item.label}</span>
//             </a>
//           ))}
//         </nav>

//         <button
//           type="button"
//           className="navbar-toggle"
//           onClick={() => {
//             setMenuOpen((previous) => !previous);
//           }}
//           aria-label={
//             menuOpen
//               ? "Close navigation menu"
//               : "Open navigation menu"
//           }
//           aria-expanded={menuOpen}
//           aria-controls="main-navigation"
//         >
//           <span className="navbar-toggle-icon">
//             {menuOpen ? (
//               <X size={25} strokeWidth={1.7} />
//             ) : (
//               <Menu size={25} strokeWidth={1.7} />
//             )}
//           </span>
//         </button>
//       </div>

//       <div
//         className={`navbar-mobile-overlay ${
//           menuOpen
//             ? "navbar-mobile-overlay-visible"
//             : ""
//         }`}
//         onClick={closeMenu}
//         aria-hidden="true"
//       ></div>
//     </header>
//   );
// };

// export default Navbar;























import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "celebrations", label: "Celebrations" },
  {
    id: "special-2026",
    label: "2026 Special",
    highlight: true,
  },
  { id: "gallery", label: "Gallery" },
  { id: "lucky-dip", label: "Lucky Dip" },
  { id: "nimarjanam", label: "Nimarjanam" },
  { id: "kanipakam", label: "Kanipakam" },
  { id: "visit", label: "Visit" },
  {
    id: "reels",
    label: "Reels",
    highlight: true,
    route: "/reels",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (location.pathname !== "/") {
        return;
      }

      const navbarOffset = 130;
      let currentSection = "home";

      navItems.forEach((item) => {
        if (item.route) return;

        const section = document.getElementById(item.id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY -
          navbarOffset;

        if (window.scrollY >= sectionTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/reels") {
      setActiveSection("reels");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("navbar-menu-active");
    } else {
      document.body.classList.remove("navbar-menu-active");
    }

    return () => {
      document.body.classList.remove("navbar-menu-active");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleHomeSectionNavigation = (
    event,
    sectionId
  ) => {
    event.preventDefault();

    closeMenu();

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);

    if (section) {
      const navbarHeight = 90;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  const handleHomeNavigation = () => {
    closeMenu();
    setActiveSection("home");
  };

  const handleReelsNavigation = () => {
    closeMenu();
    setActiveSection("reels");
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      } ${menuOpen ? "navbar-open" : ""}`}
    >
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-brand"
          onClick={handleHomeNavigation}
          aria-label="Railway Ganesh home"
        >
          <div className="navbar-logo-wrapper">
            <img
              src="/images/logo.png"
              alt="Railway Ganesh"
              className="navbar-logo"
            />
          </div>

          <div className="navbar-brand-text">
            <span className="navbar-title">
              Railway Ganesh
            </span>

            <span className="navbar-location">
              Kadiri • Since 1983
            </span>
          </div>
        </Link>

        <nav
          id="main-navigation"
          className={`navbar-menu ${
            menuOpen ? "navbar-menu-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isReels = item.id === "reels";

            if (isReels) {
              return (
                <Link
                  key={item.id}
                  to="/reels"
                  className={`navbar-link ${
                    item.highlight
                      ? "navbar-link-highlight"
                      : ""
                  } ${
                    activeSection === item.id
                      ? "navbar-link-active"
                      : ""
                  }`}
                  onClick={handleReelsNavigation}
                >
                  <span>{item.label}</span>
                </Link>
              );
            }

            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className={`navbar-link ${
                  item.highlight
                    ? "navbar-link-highlight"
                    : ""
                } ${
                  activeSection === item.id
                    ? "navbar-link-active"
                    : ""
                }`}
                onClick={(event) =>
                  handleHomeSectionNavigation(
                    event,
                    item.id
                  )
                }
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => {
            setMenuOpen((previous) => !previous);
          }}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span className="navbar-toggle-icon">
            {menuOpen ? (
              <X size={25} strokeWidth={1.7} />
            ) : (
              <Menu size={25} strokeWidth={1.7} />
            )}
          </span>
        </button>
      </div>

      <div
        className={`navbar-mobile-overlay ${
          menuOpen
            ? "navbar-mobile-overlay-visible"
            : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
    </header>
  );
};

export default Navbar;
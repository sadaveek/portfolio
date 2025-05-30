import Logo from "../assets/ChipLogo.png";
import HamburgerMenu from "../assets/HamburgerIcon.png";
import HamburgerClose from "../assets/CloseButton.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ use motion from framer-motion

function NavBar() {
  const [nav, setNav] = useState(true);
  const [scrollLock, setScrollLock] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setScrollLock(!scrollLock);
  };

  useEffect(() => {
    if (scrollLock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scrollLock]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setNav(true);
        setScrollLock(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5, duration: 0.6, ease: "easeOut" }}
      className="relative font-mona font-extralight flex justify-between items-center w-full z-50"
    >
      <a href="#Home">
        <img
          id="myLogo"
          alt="Website Logo"
          src={Logo}
          className="size-16 ml-3 navbar-elements"
        />
      </a>
      <ul className="bg-transparent text-white space-x-5 text-xl my-3 pr-2 hidden sm:flex">
        <li className="navbar-elements">
          <a href="#Home">home</a>
        </li>
        <li className="navbar-elements">
          <a href="#Skills">skills</a>
        </li>
        <li className="navbar-elements">
          <a href="#Projects">projects</a>
        </li>
        <li className="navbar-elements">
          <a href="#Experience">experience</a>
        </li>
        <li className="navbar-elements pr-6">
          <a href="#Contact">contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block sm:hidden">
        {nav ? (
          <img
            id="hamburgerLogo"
            src={HamburgerMenu}
            className="size-10 navbar-elements mr-2 justify-end"
          />
        ) : (
          <img
            id="hamburgerLogo"
            src={HamburgerClose}
            className="size-10 navbar-elements mr-2 justify-end"
          />
        )}
      </div>
      <div
        className={
          !nav
            ? "absolute left-0 top-0 w-[60%] h-[120vh] shadow-md ease-in-out duration-200 bg-gray-50 sm:hidden"
            : "absolute top-0 left-[-100%] ease-in-out duration-1000 h-[120vh] w-[60%] bg-gray-50 shadow-md sm:hidden"
        }
      >
        <ul className="flex-col pt-24 space-y-5 text-xl pl-6 inline-block">
          <li className="navbar-elements">
            <a href="#Home" onClick={handleNav}>
              home
            </a>
          </li>
          <li className="navbar-elements">
            <a href="#Skills" onClick={handleNav}>
              skills
            </a>
          </li>
          <li className="navbar-elements">
            <a href="#Projects" onClick={handleNav}>
              projects
            </a>
          </li>
          <li className="navbar-elements">
            <a href="#Experience" onClick={handleNav}>
              experience
            </a>
          </li>
          <li className="navbar-elements">
            <a href="#Contact" onClick={handleNav}>
              contact
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default NavBar;
import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import useDetectClickOut from "../hooks/useClickOutside";
import { Social } from "../typings";
import ReactPortal from "./porta";
type Props = {
  socials?: Social[];
};

const HeroHeader = ({ socials }: Props) => {
  const { show, nodeRef, setShow } = useDetectClickOut(false);
  const [showHambuger, setshowHambuger] = useState(true);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      console.log("window.scrollY ", window.scrollY);
      if (window.scrollY > 150) {
        // if scroll down hide the navbar
        setshowHambuger(false);
      } else {
        // if scroll up show the navbar
        setshowHambuger(true);
      }

      // remember current page location to use in the next move
    }
  };

  const debouncedControlNavbar = useCallback(debounce(controlNavbar, 200), []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", debouncedControlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", debouncedControlNavbar);
      };
    }
  }, []);
  if (!socials) return null;
  return (
    <header>
      <div
        className="fixed p-5 items-start justify-between max-w-7xl mx-auto z-20
    h-11 w-full hidden lg:flex "
      >
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          {socials &&
            socials?.map((social) => (
              <SocialIcon
                url={social?.url}
                fgColor="gray"
                bgColor="transparent"
                key={social?._id}
              />
            ))}
        </motion.div>
        <Link href={"#contact"}>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-row items-center text-gray-300 cursor-pointer space-x-2 md:mr-2"
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </motion.div>
        </Link>
      </div>
      <div
        className={`fixed top-0 lg:hidden z-50 ${!showHambuger && "hidden"}`}
      >
        <button
          type="button"
          name="button"
          title="button"
          className=" flex items-center tex-white p-5 scale-125"
          onClick={() => setShow((predicate) => !predicate)}
        >
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      {show && (
        <ReactPortal>
          <div className="navbar-menu relative z-50 lg:hidden">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav
              ref={nodeRef}
              className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
            >
              <div className="flex items-center mb-8">
                <button
                  title="button"
                  className="navbar-close ml-auto"
                  onClick={() => setShow((predicate) => !predicate)}
                >
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <Link href="#">
                      <a className="block p-4 text-md font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#about">
                      <a className="block p-4 text-md font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#experience">
                      <a className="block p-4 text-md font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Experience
                      </a>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#skills">
                      <a className="block p-4 text-md font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Skills
                      </a>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#projects">
                      <a className="block p-4 text-md font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Projects
                      </a>
                    </Link>
                  </li>
                  <li >
                    <Link href="#contact">
                      <a className="block p-4 text-md font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <p className="my-4 text-xs text-center text-gray-400">
                  <span>Copyright © 2022</span>
                </p>
              </div>
            </nav>
          </div>
        </ReactPortal>
      )}
    </header>
  );
};
export default HeroHeader;

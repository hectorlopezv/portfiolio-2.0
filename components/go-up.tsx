import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import debounce from "lodash.debounce";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Props = {};

const GoUp = (props: Props) => {
  const [show, setShow] = useState(false);
  const detectScrollAtBottom = () => {
    const windowHeight = window.innerHeight
      ? window.innerHeight
      : document.documentElement.offsetHeight;
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = Math.round(windowHeight + window.pageYOffset);
    if (windowBottom >= docHeight * 0.8) {
    }
    // Small hack for windows. It counts windowBottom in different way
    const difference = docHeight - windowBottom;
    const additional = difference >= 1 && difference <= 2 ? difference : 0;

    if (windowBottom + additional >= docHeight) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const debouncedControlNavbar = useCallback(
    debounce(detectScrollAtBottom, 200),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", debouncedControlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", debouncedControlNavbar);
      };
    }
  }, []);
  return (
    <>
      {show && (
        <div className="fixed  cursor-pointer px-4 right-2 bottom-1 z-20">
          <Link href="#hero">
            <div className="flex items-end justify-end">
              <ArrowTrendingUpIcon className="hover:text-[#F7AB0A] h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default GoUp;

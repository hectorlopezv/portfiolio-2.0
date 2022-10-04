import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

type Props = {};

const GoUp = (props: Props) => {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <ArrowTrendingUpIcon className="hover:text-[#F7AB0A] h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
        </div>
      </footer>
    </Link>
  );
};

export default GoUp;

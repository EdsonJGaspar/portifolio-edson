"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ButtonScrollUp() {
  const [showButtonScrollUp, setShowButtonScrollUp] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowButtonScrollUp(true);
      } else {
        setShowButtonScrollUp(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTotOp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButtonScrollUp && (
        <button
          onClick={scrollTotOp}
          className="h-12 w-12 bg-slate-700 border-slate-600 cursor-pointer text-white rounded-full fixed bottom-4 right-4 flex items-center justify-center"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

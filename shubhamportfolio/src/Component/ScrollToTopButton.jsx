import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={goToTop}
          className="
            fixed bottom-6 right-6 
            bg-[#062B63]
            text-white 
            p-4 
            rounded-full 
            shadow-xl
            hover:bg-[#0B3E8C]
            transition-all 
            duration-300
            flex 
            items-center 
            justify-center
            z-50
          "
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
}

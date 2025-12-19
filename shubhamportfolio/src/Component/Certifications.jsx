import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import pythonimg from "../assets/Python-logo.png";
import awsimg from "../assets/awslogo.png";
import mlimg from "../assets/ml.png";
import dataimg from "../assets/data.png";
import mysqlimg from "../assets/mysql.png";
import mongodbimg from "../assets/mongodb-logo.svg";


function CertCard({ item, index }) {
  const overlayControls = useAnimation();
  const cardControls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Auto slide when card enters viewport
  const handleViewportEnter = async () => {
    // Smooth slow slide down
    await overlayControls.start({
      y: 0,
      transition: { duration: 1.1, ease: [0.18, 0.47, 0.35, 1] },
    });

    // Wait then hide if not hovered
    await new Promise((res) => setTimeout(res, 900));
    if (!hovered) {
      await overlayControls.start({
        y: "-100%",
        transition: { duration: 1.0, ease: [0.19, 0.03, 0.17, 1] },
      });
    }
  };

  const handleMouseEnter = async () => {
    setHovered(true);

    // Card zoom
    cardControls.start({ scale: 1.05, transition: { duration: 0.25 } });

    // Smooth slide down on hover
    overlayControls.start({
      y: 0,
      transition: { duration: 0.7, ease: [0.18, 0.47, 0.35, 1] },
    });
  };

  const handleMouseLeave = async () => {
    setHovered(false);

    // Remove zoom
    cardControls.start({ scale: 1, transition: { duration: 0.25 } });

    // Smooth slide up
    overlayControls.start({
      y: "-100%",
      transition: { duration: 0.8, ease: [0.19, 0.03, 0.17, 1] },
    });
  };

  const handleClick = async () => {
  if (!item.link || isNavigating) return;

  setIsNavigating(true);

  // Play top-down animation
  await overlayControls.start({
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  });

  // Navigate after animation
  window.open(item.link, "_blank", "noopener,noreferrer");

  setIsNavigating(false);
};

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.45 }}
      onViewportEnter={handleViewportEnter}
      animate={cardControls}
      className="rounded-xl shadow-lg bg-white overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ transformOrigin: "center" }}
    >
      {/* IMAGE */}
      <div
        className="relative h-40 flex items-center justify-center overflow-hidden"
        style={{ background: item.bg }}
      >
        <img src={item.img} alt={item.title} className="w-28 opacity-90" />

        <motion.div
          animate={overlayControls}
          initial={{ y: "-100%" }}
          className="absolute inset-0 bg-[rgba(0,0,0,0.55)] flex items-center justify-center
                     text-white text-lg sm:text-xl font-semibold tracking-widest"
          style={{ pointerEvents: "none" }}
        >
          CERTIFICATE
        </motion.div>
      </div>

      {/* TEXT */}
      <div className="bg-[#F2F7FB] text-center py-4 px-2">
        <h2 className="text-xl font-bold text-[#001C55]">{item.title}</h2>
        <p className="text-gray-600 text-md">- {item.author}</p>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const certData = [
     { title: "Cloud Computing with AWS", author: "Andrew Ng", img: awsimg, bg: "#222F3D",link: "https://drive.google.com/file/d/19BxzxZoXxJj7x3wBRlzFnDLszao0yaNB/view?usp=sharing" },
    { title: "Python", author: "Dhananjay Sharma", img:pythonimg, bg: "#8ec5ff", link: "https://drive.google.com/file/d/19Bk66SYbH3gST8tI8t8LIYERX3zJ6u0w/view?usp=sharing" },
    { title: "Machine Learning", author: "Shaad", img:mlimg, bg: "#e2e8f0", link: "https://drive.google.com/file/d/1lqenibHNsbi6-7aIFx7uIvTg8lOXZlu5/view?usp=sharing" },
    { title: "Data Analytics", author: "Tina McCreery", img: dataimg, bg: "#bedbff", link: "https://drive.google.com/file/d/1EvmvQbYUoiGPnf-hc-4Gfr0EPcTTiQe1/view?usp=sharing" },
    { title: "MySQL", author: "Harishankaran K", img: mysqlimg, bg: "white", link: "https://drive.google.com/file/d/1aEsBc9BuwvjEx5ye1sINCq3Au5HDQIT_/view?usp=sharing" },
    { title: "MongoDB", author: "Dev Ittycheria", img: mongodbimg, bg: "#a4f4cf", link: "https://drive.google.com/file/d/1rPO-KJdzqcbN15ortD3MDbIkvHc0czTo/view?usp=sharing" },
    
   

  ];

  return (
    <section className="w-full bg-sky-50 py-24 px-6 md:px-16 lg:px-32">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C2C57] mb-14">
        Certifications
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certData.map((item, index) => (
          <CertCard item={item} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}



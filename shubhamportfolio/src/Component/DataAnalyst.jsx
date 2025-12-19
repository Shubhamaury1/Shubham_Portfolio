import React from "react";
import {
  SiTensorflow,
  SiKeras,
  SiPycharm,
  SiJupyter,
  SiPython,
  SiOpencv,
} from "react-icons/si";
import { motion } from "framer-motion";
import maincontentimg from "../assets/Data analysis-amico.svg";

export default function DataAnalyst() {
  return (
    <section className="w-full bg-sky-50 py-20 px-8 md:px-30">

      {/* SECTION TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-6xl sm:text-5xl md:text-6xl font-semibold text-[#043D5D] mb-16"
      >
        What I Do
      </motion.h1>

      {/* ===================== MOBILE LAYOUT ===================== */}
      <div className="flex flex-col md:hidden">

        {/* TEXT FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full space-y-8 mb-12"
        >
          <h2 className="text-3xl font-semibold text-[#043D5D]">
            Data Science & Machine Learning
          </h2>

          {/* ICONS */}
          <div className="flex justify-center items-center space-x-6 text-5xl">
            <SiTensorflow className="text-[#F7B52C]" />
            <SiKeras className="text-red-600" />
            <SiPycharm className="text-green-600" />
            <SiJupyter className="text-orange-500" />
            <SiPython className="text-blue-500" />
            <SiOpencv className="text-black" />
          </div>

          {/* LIST */}
          <ul className="space-y-5 text-lg text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Building scalable AI models using TensorFlow & PyTorch.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Expertise in Computer Vision, NLP & automation.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              End-to-end ML pipelines from preprocessing to deployment.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Advanced statistical analysis & visualization.
            </li>
          </ul>
        </motion.div>

        {/* IMAGE SECOND ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <img
            src={maincontentimg}
            alt=""
            className="w-[85%]"
          />
        </motion.div>
      </div>

      {/* ===================== DESKTOP / LAPTOP LAYOUT ===================== */}
      <div className="hidden md:flex md:flex-row items-center justify-between">

        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-1/2 flex justify-center"
        >
          <img src={maincontentimg} className="w-[70%]" />
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-1/2 space-y-8"
        >
          <h2 className="text-5xl font-semibold text-[#043D5D]">
            Data Science & Machine Learning
          </h2>

          <div className="flex space-x-6 text-5xl">
            <SiTensorflow className="text-[#F7B52C]" />
            <SiKeras className="text-red-600" />
            <SiPycharm className="text-green-600" />
            <SiJupyter className="text-orange-500" />
            <SiPython className="text-blue-500" />
            <SiOpencv className="text-black" />
          </div>

          <ul className="space-y-5 text-xl text-gray-600">
            <li className="flex gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Building scalable AI models using TensorFlow & PyTorch.
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Expertise in Computer Vision, NLP & automation.
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              End-to-end ML pipelines from preprocessing to deployment.
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Advanced statistical analysis & visualization.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

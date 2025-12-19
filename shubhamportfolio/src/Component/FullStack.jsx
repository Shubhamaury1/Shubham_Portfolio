import React from "react";
import fullstackimg from "../assets/Code typing-pana.svg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNpm,
} from "react-icons/si";
import { motion } from "framer-motion";

function FullStack() {
  return (
    <section className="w-full bg-sky-50 py-20 px-8 md:px-30">

      <div className="flex flex-col md:flex-row items-center justify-between">

        {/* LEFT TEXT (scroll + load from left) */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
            delay: 0.2
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 space-y-8"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.5
            }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-semibold text-[#043D5D]"
          >
            Full Stack Development
          </motion.h2>

          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.7
            }}
            viewport={{ once: false }}
            className="flex justify-center items-center space-x-6 text-5xl"
          >
            <SiHtml5 className="text-orange-600" />
            <SiCss3 className="text-blue-600" />
            <SiJavascript className="text-yellow-500" />
            <SiReact className="text-blue-400" />
            <SiNodedotjs className="text-green-600" />
            <SiExpress className="text-gray-700" />
            <SiMongodb className="text-green-700" />
            <SiMysql className="text-blue-800" />
            <SiNpm className="text-red-600" />
          </motion.div>

          {/* Description List */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.2,
              ease: "easeOut",
              delay: 1
            }}
            viewport={{ once: false }}
            className="space-y-5 text-xl text-gray-600 leading-relaxed"
          >
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Skilled in building responsive, high-performance web applications
              using React, Redux, JavaScript, HTML and CSS.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Experienced in developing scalable backend architectures
              using Node.js, Express.js and REST APIs.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Strong understanding of complete MERN stack
              (React, Node, Express, MongoDB).
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Implementing secure JWT authentication and role-based access control.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Integrated payment gateways (Razorpay, Stripe),
              cloud uploads and third-party APIs.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Developed full admin dashboards, user management, and real-time apps.
            </li>
          </motion.ul>
        </motion.div>

        {/* RIGHT IMAGE (scroll + load from right) */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
            delay: 0.4
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
        >
          <img
            src={fullstackimg}
            alt="Full Stack Illustration"
            className="w-[80%] md:w-[70%]"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default FullStack;

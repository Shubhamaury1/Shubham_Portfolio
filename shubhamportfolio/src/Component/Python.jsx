// import React from "react";
// import {
//   SiPycharm,
//   SiJupyter,
//   SiPython,
//   SiFlask,
//   SiDjango,
// } from "react-icons/si";
// import { motion } from "framer-motion";
// import maincontentimg from "../assets/Python Developer.svg";

// function Python() {
//   return (
//     <section className="w-full bg-sky-50 py-20 px-8 md:px-30">
      
//       <div className="flex flex-col md:flex-row items-center justify-between">

//         {/* LEFT SIDE IMAGE WITH ANIMATION */}
//         <motion.div
//           initial={{ opacity: 0, x: -120 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{
//             duration: 1.6,
//             ease: "easeOut",
//             delay: 0.2,
//           }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
//         >
//           <img
//             src={maincontentimg}
//             alt="Python Developer Illustration"
//             className="w-[80%] md:w-[70%]"
//           />
//         </motion.div>

//         {/* RIGHT SIDE TEXT WITH ANIMATION */}
//         <motion.div
//           initial={{ opacity: 0, x: 120 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{
//             duration: 1.8,
//             ease: "easeOut",
//             delay: 0.4,
//           }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="w-full md:w-1/2 space-y-8"
//         >
//           <h2 className="text-3xl md:text-5xl font-semibold text-[#043D5D]">
//             Python Developer
//           </h2>

//           {/* ICONS ANIMATION */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 2,
//               ease: "easeOut",
//               delay: 0.6,
//             }}
//             viewport={{ once: false }}
//             className="flex justify-center items-center space-x-6 text-5xl"
//           >
//             <SiPycharm className="text-green-600" />
//             <SiJupyter className="text-orange-500" />
//             <SiPython className="text-blue-500" />
//             <SiFlask className="text-gray-700" />
//             <SiDjango className="text-green-800" />
//           </motion.div>

//           {/* TEXT LIST ANIMATION */}
//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{
//               duration: 2.2,
//               ease: "easeOut",
//               delay: 0.8,
//             }}
//             viewport={{ once: false }}
//             className="space-y-5 text-xl text-gray-600 leading-relaxed"
//           >
//             <li className="flex items-start gap-3">
//               <span className="text-orange-500 text-2xl">⚡</span>
//               Proficient in building robust, scalable backend systems using
//               Python and modern frameworks including Django and Flask.
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-orange-500 text-2xl">⚡</span>
//               Strong command over Python tools such as PyCharm, VS Code,
//               JupyterLab, and virtual environments.
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-orange-500 text-2xl">⚡</span>
//               Experienced in crafting efficient database-driven apps using
//               Django ORM, SQLAlchemy, MySQL, and MongoDB.
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-orange-500 text-2xl">⚡</span>
//               Skilled at deploying Python applications on AWS, Render,
//               Vercel, and Docker environments.
//             </li>
//           </motion.ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Python;




import React from "react";
import {
  SiPycharm,
  SiJupyter,
  SiPython,
  SiFlask,
  SiDjango,
} from "react-icons/si";
import { motion } from "framer-motion";
import maincontentimg from "../assets/Python Developer.svg";

function Python() {
  return (
    <section className="w-full bg-sky-50 py-20 px-8 md:px-30">

      {/* ===================== MOBILE LAYOUT (TEXT FIRST) ===================== */}
      <div className="flex flex-col md:hidden">

        {/* TEXT FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full space-y-8 mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#043D5D]">
            Python Developer
          </h2>

          {/* ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex justify-center items-center space-x-6 text-5xl"
          >
            <SiPycharm className="text-green-600" />
            <SiJupyter className="text-orange-500" />
            <SiPython className="text-blue-500" />
            <SiFlask className="text-gray-700" />
            <SiDjango className="text-green-800" />
          </motion.div>

          {/* TEXT LIST */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="space-y-5 text-lg text-gray-600 leading-relaxed"
          >
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Proficient in building robust backend systems using Python, Django and Flask.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Strong command over Python tools like PyCharm, VS Code, and JupyterLab.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Experience with Django ORM, SQLAlchemy, MySQL, and MongoDB.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Skilled at deploying Python apps on AWS, Render, Vercel, and Docker.
            </li>
          </motion.ul>
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
            alt="Python Developer Illustration"
            className="w-[90%]"
          />
        </motion.div>
      </div>

      {/* ===================== DESKTOP LAYOUT (IMAGE LEFT, TEXT RIGHT) ===================== */}
      <div className="hidden md:flex md:flex-row items-center justify-between">

        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-1/2 flex justify-center"
        >
          <img
            src={maincontentimg}
            alt="Python Developer Illustration"
            className="w-[70%]"
          />
        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-1/2 space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#043D5D]">
            Python Developer
          </h2>

          {/* ICONS */}
          <div className="flex justify-start items-center space-x-6 text-5xl">
            <SiPycharm className="text-green-600" />
            <SiJupyter className="text-orange-500" />
            <SiPython className="text-blue-500" />
            <SiFlask className="text-gray-700" />
            <SiDjango className="text-green-800" />
          </div>

          {/* LIST */}
          <ul className="space-y-5 text-xl text-gray-600 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Proficient in building robust backend systems using Python, Django and Flask.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Strong command over Python tools like PyCharm, VS Code, and JupyterLab.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Experience with Django ORM, SQLAlchemy, MySQL, and MongoDB.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl">⚡</span>
              Skilled at deploying Python apps on AWS, Render, Vercel, and Docker.
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

export default Python;

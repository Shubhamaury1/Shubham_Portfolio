import React from "react";
import address from "../assets/address_image.svg"

function Address() {
  return (
    <section className="w-full bg-sky-50 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">

        {/* ================= LEFT : ILLUSTRATION ================= */}
        <div  className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={address}   
            alt="Message Sent Illustration"
            className="w-[80%] sm:w-[70%] md:w-[85%] lg:w-[85%] "
          />

        </div>

        {/* ================= RIGHT : ADDRESS CONTENT ================= */}
        <div  className="w-full md:w-1/2 text-center space-y-6 mb-24">
         <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#092E53]">
            Address
          </h2>

          <p className="text-gray-500 text-lg mb-8">
            Shahawabad, Nai bazar,
            <br />
           Bhadohi - 221401,
            <br />
            Uttar Pradesh, India.
          </p>

          <a
            href="https://www.google.com/maps/place/SURAJ+HARDWARE+CENTER/@25.4036503,82.5762896,20z/data=!4m14!1m7!3m6!1s0x398fdfe0e9e83ef9:0x3000ca3cf1187d27!2sSURAJ+HARDWARE+CENTER!8m2!3d25.4034843!4d82.5762194!16s%2Fg%2F11fp3tzjnq!3m5!1s0x398fdfe0e9e83ef9:0x3000ca3cf1187d27!8m2!3d25.4034843!4d82.5762194!16s%2Fg%2F11fp3tzjnq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0a1b4f] text-white px-8 py-3 rounded-lg text-lg font-medium shadow hover:bg-[#09203f] transition"
          >
            Visit on Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}

export default Address;

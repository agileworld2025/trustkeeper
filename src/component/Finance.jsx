import React from "react";
import Image from "next/image";

const FinancesApp = () => {
  return (
    <>
      <section className="bg-[#0F1417] py-16 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold font-serif text-white text-center mb-16 leading-snug">
          All Your Finances In <br /> One App
        </h2>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="border border-gray-700 rounded-2xl p-8 flex flex-col justify-between transition bg-[linear-gradient(180.2deg,_#121717_40.98%,_#00E6F5_250.7%)] duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            {/* Icon */}
            <div className="mb-6">
              <img
                src="/share.png" // replace with your icon
                alt="Share Icon"
                className="w-14 h-14"
              />
            </div>
            {/* Title */}
            <h3 className="text-4xl font-poppins font-normal text-white mb-4">
              Share With Your Loved Ones
            </h3>
            {/* Description */}
            <p className="text-[rgba(189,188,188,1)] text-lg font-poppins font-normal mb-6">
              You Stay In Control. <br />
              Add Family Members Or Trusted Contacts. <br />
              Set Rules: Share Instantly Or Only After An Emergency. <br />
              No Access Without Your Permission.
            </p>
            {/* Family Members UI Image */}
            <div className="flex justify-center ">
              <img
                src="/family-card.png"
                alt="Family Members"
                className="lg:w-[460px]  md:w-72 h-72 drop-shadow-2xl rounded-lg text-center"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-700 rounded-2xl p-8 flex flex-col justify-between transition duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            {/* Icon */}
            <div className="mb-6">
              <img
                src="/support.png" // replace with your icon
                alt="Support Icon"
                className="w-14 h-14"
              />
            </div>
            {/* Title */}
            <h3 className="text-4xl font-poppins font-normal text-white mb-4">
              Personalized Support & Check
            </h3>
            {/* Description */}
            <p className="text-[rgba(189,188,188,1)] text-lg font-poppins font-normal mb-6">
              You Stay In Control. <br />
              Add Family Members Or Trusted Contacts. <br />
              Set Rules: Share Instantly Or Only After An Emergency. <br />
              No Access Without Your Permission.
            </p>
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <img
                src="/finance-app.png"
                alt="Finance App Phone"
                className="w-60 md:w-72 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancesApp;

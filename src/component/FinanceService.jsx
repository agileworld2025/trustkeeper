import React from "react";
import Image from "next/image";

const FinanceApp = () => {
  const cards = [
    {
      id: 1,
      title: "Money & Investments",
      description:
        "We Offer A Comprehensive Range Of Innovative Financial Services Tailored To Meet Your Needs.",
      gradient: "linear-gradient(148.2deg, #121717 35.98%, #00E6F5 114.7%)",
    },
    {
      id: 2,
      title: "Money & Investments",
      description:
        "We Offer A Comprehensive Range Of Innovative Financial Services Tailored To Meet Your Needs.",
      gradient: "linear-gradient(148.2deg, #121717 35.98%, #00B512 114.7%)",
    },
    {
      id: 3,
      title: "Money & Investments",
      description:
        "We Offer A Comprehensive Range Of Innovative Financial Services Tailored To Meet Your Needs.",
      gradient: "linear-gradient(148.2deg, #121717 35.98%, #EF3E3D 114.7%)",
    },
    {
      id: 4,
      title: "Money & Investments",
      description:
        "We Offer A Comprehensive Range Of Innovative Financial Services Tailored To Meet Your Needs.",
      gradient: "linear-gradient(148.2deg, #121717 35.98%, #FFC828 114.7%)",
    },
  ];

  return (
    <div className="min-h-screen text-white p-6 lg:p-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row  justify-between items-end mb-16 ">
        <h1 className="text-5xl lg:text-8xl font-serif font-bold leading-tight max-w-4xl">
          All Your Finances In
          <br />
          One App
        </h1>

        <button className="flex items-center gap-3 bg-transparent border border-gray-600 rounded-full px-6 py-3 mt-10 hover:bg-gray-800 transition-colors">
          <span className="text-gray-300">View More</span>
          <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
            <Image src="/arrow.png" alt="arrow" width={20} height={20} />
          </div>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            style={{ background: card.gradient }}
            className="relative rounded-3xl p-8 h-96 flex flex-col justify-between border-1 border-white group cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* Content */}
            <div className="space-y-4 pt-10">
              <h2 className="text-4xl font-poppins font-normal text-[rgba(255, 255, 255, 1)]">
                {card.title}
              </h2>
              <p className="text-[rgba(255, 255, 255, 1)] text-lg font-poppins font-normal leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Arrow Button */}
            <div className="flex justify-end">
              <div className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <Image
                  src="/rightarrow.png"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceApp;

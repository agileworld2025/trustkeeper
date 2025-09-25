import Image from "next/image";
const Service = () => {
  const tags = [
    "LEGAL DOCUMENTS",
    "LOANS",
    "PROPERTIES",
    "INSURANCE",
    "HOME LOAN",
    "VEHICLES",
    "COMMERCIAL PROPERTY",
    "LEGAL DOCUMENTS",
    "LEGAL DOCUMENTS",
    "LEGAL DOCUMENTS",
  ];
  return (
    <>
      <div className="relative overflow-hidden bg-[#0F1417] py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="mx-3 px-6 py-2 border border-white text-white rounded-full text-sm font-medium 
                       transition duration-300 ease-in-out 
                       hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] hover:scale-105 hover:cursor-pointer"
            >
              {tag}
            </span>
          ))}
          {/* Duplicate tags for smooth infinite scroll */}
          {tags.map((tag, idx) => (
            <span
              key={`dup-${idx}`}
              className="mx-3 px-6 py-2 border border-white text-white rounded-full text-sm font-medium 
                       transition duration-300 ease-in-out 
                       hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-5">
        <section
          className="max-w-screen-xl mx-auto  relative flex items-center justify-center text-center rounded-xl overflow-hidden py-20 my-20"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for smooth gradient effect */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl">
            <h1 className="lg:text-8xl font-serif font-bold  md:text-6xl text-white leading-tight">
              Made For Everyone Who <br />
              Wants To Stay Prepared
            </h1>

            <p className="mt-6 text-2xl font-family:poppins font-weight:400 text-white/80">
              Our Mission Is To Make Finance More Accessible, Transparent, And
              Secure For Everyone.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-transparent border-2 border-cyan-400 rounded-full hover:bg-white hover:text-black transition shadow-lg"
              >
                Get Started
                <span className="text-xl ">
                  <Image src="/arrow.png" alt="arrow" width={20} height={20} />
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;

import Image from "next/image";
const TrustSection = () => {
  const features = [
    {
      title: "End-To-End Encryption",
      desc: "We Offer A Comprehensive Range Of Innovative Financial Services Tailored To Meet Your Needs.",
      icon: "/encryption.png",
    },
    {
      title: "Cloud Backup",
      desc: "We Offer A Comprehensive Range Of Innovative Financial Services Tailored To Meet Your Needs.",
      icon: "/cloud.png",
    },
    {
      title: "Document Expiry Reminder",
      desc: "We Offer A Comprehensive Range Of Innovative Financial Services Tailored To Meet Your Needs.",
      icon: "/remainder.png",
    },
    {
      title: "Easy To Use & Always Available",
      desc: "We Offer A Comprehensive Range Of Innovative Financial Services Tailored To Meet Your Needs.",
      icon: "/available.png",
    },
  ];

  return (
    <>
      <section className="bg-[#0F1417] py-16 px-6 md:px-12 lg:px-20">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500/90 to-[#00383f] pt-15 flex flex-col md:flex-row h-110 items-start gap-10">
          {/* Left side - Images */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Legal Will background */}
            <img
              src="/legal-will.png"
              alt="Legal Will background"
              className="w-[306px] h-[248px] md:w-50 lg:w-62 absolute rotate-[-5deg] translate-x-[-15px] translate-y-[-20px] z-0 drop-shadow-md"
            />

            {/* Legal Will foreground (with image + overlay text) */}
            <div className="relative w-[306px] md:w-50 lg:w-62 z-0 drop-shadow-md">
              <img
                src="/legal-will.png"
                alt="Legal Will"
                className="w-full h-[248px]"
              />
              <div className="absolute top-6 left-6 right-6">
                <h2 className="text-[38px] font-bold font-serif text-[rgba(45,55,57,1)] mb-3">
                  Legal Will
                </h2>
                <p className="text-[8px] text-[rgba(62,66,66,1)] font-poppins leading-snug">
                  I Declare That I Am Of Legal Age To Make This Will And That I
                  Am Doing So Voluntarily And Without Any Undue Influence.
                </p>
                <p className="text-[8px] text-[rgba(62,66,66,1)] font-poppins leading-snug mt-2">
                  I Hereby Revoke All Former Wills And Testamentary...
                </p>
              </div>
            </div>

            {/* iPhone overlay */}
            <img
              src="/will-phone.png"
              alt="iPhone"
              className="absolute top-28 lg:w-[657px] rotate-[1deg] drop-shadow-[0_10px_25px_rgba(0,200,255,0.6)] z-10"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Icon */}
            <div className="flex justify-center md:justify-start mb-6">
              <img
                src="/gavel.png"
                alt="Gavel Icon"
                className="w-[58px] h-[58px]"
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-normal font-poppins text-white mb-4">
              Create Your Will
            </h2>

            {/* List */}
            <ul className="text-white font-poppins space-y-2 text-base md:text-lg leading-relaxed">
              <li>You Stay In Control.</li>
              <li>Add Family Members Or Trusted Contacts.</li>
              <li>Set Rules: Share Instantly Or Only After An Emergency.</li>
              <li>No Access Without Your Permission.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0F1417] py-16 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="lg:text-8xl text-4xl md:text-5xl font-bold font-serif text-white mb-12">
          Built In Peace Of Mind
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border border-gray-700 rounded-2xl p-6 pt-12 flex flex-col justify-between 
                       text-center md:text-left transition duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            >
              <div>
                <h3 className="text-3xl text-cyan-400 mb-4 font-weight:400 font-family:poppins">
                  {feature.title}
                </h3>
                <p className="text-[rgba(219,219,219,1)] text-[13px] leading-relaxed font-weight:400 font-family:poppins">
                  {feature.desc}
                </p>
              </div>
              <div className="mt-6 flex justify-center md:justify-end">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-17 h-16"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#0F1417] py-16">
        <div className=" max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-2">
          {/* Left Side Image */}
          <div className=" flex justify-center mb-10 md:mb-0">
            <img
              src="/hand-shake.png" // replace with your image name
              alt="Trust and Security"
              className="max-w-md w-full border-none"
            />
          </div>

          {/* Right Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="lg:text-7xl text-4xl md:text-5xl font-serif font-bold text-white leading-tight text-end">
              We Value Your Trust <br /> And Security
            </h2>
            <div className="flex justify-end">
              <p className="mt-6 text-2xl text-white/80 max-w-xl font-family:poppins font-weight:400 text-end">
                Our Mission Is To Make Finance More Accessible, Transparent, And
                Secure For Everyone.
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 text-lg font-medium text-black rounded-full 
                           bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 
                           transition shadow-lg"
              >
                Get Started
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-lg">
                  <Image src="/arrow.png" alt="arrow" width={20} height={20} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TrustSection;

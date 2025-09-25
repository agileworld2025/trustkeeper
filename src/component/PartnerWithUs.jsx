import Image from "next/image";

const PartnerWithUs = () => {
  return (
    <>
      {/* trutestimonials section*/}
      <section className="bg-[#0F1417] py-20">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col  md:flex-row items-end justify-between gap-12">
          {/* Left Side */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h4 className=" md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
              Trusted By Many
            </h4>
            <p className="text-white text-2xl font-poppins mb-10">
              Our Mission Is To Make Finance More Accessible, Transparent, And
              Secure For Everyone.
            </p>

            {/* Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-cyan-400 text-white rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <span className="font-semibold">View More</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-black">
                →
              </span>
            </a>
          </div>

          {/* Right Side - Testimonials */}
          <div className="w-full md:w-2/3 grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
              <Image
                src="/quote.png"
                alt="quote"
                width={50}
                height={50}
                className="mb-4"
              />
              <p className="text-gray-300 mb-6">
                Design Monks offers producers a cost-effective selling tool.
                Having the ability to post prices that you want on an exchange
                visible.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/trustedusers.png"
                  alt="User profile"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/stars.png"
                      alt="rating"
                      width={80}
                      height={20}
                    />
                  </div>
                  <p className="font-semibold text-white font-family:poppins font-weight:500">
                    Thomas Magnum
                  </p>
                  <p className="text-sm text-gray-400 font-family:poppins font-weight:400">
                    Barellon NSW
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
              <Image
                src="/quote.png"
                alt="quote"
                width={50}
                height={50}
                className="mb-4"
              />
              <p className="text-gray-300 mb-6">
                Design Monks offers producers a cost-effective selling tool.
                Having the ability to post prices that you want on an exchange
                visible.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/trustedusers.png"
                  alt="User profile"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/stars.png"
                      alt="rating"
                      width={80}
                      height={20}
                    />
                  </div>
                  <p className="font-semibold text-white font-family:poppins font-weight:500">
                    Thomas Magnum
                  </p>
                  <p className="text-sm text-gray-400 font-family:poppins font-weight:400">
                    Barellon NSW
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* partner with us section*/}
      <section className="bg-[#0F1417] py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          {/* Left Side - Image */}
          <div className="relative flex justify-center">
            <Image
              src="/partner-tech.png"
              alt="Partner With Us Illustration"
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Right Side - Text */}
          <div className="flex items-center justify-center flex-col md:text-left">
            <h2 className="lg:text-8xl font-serif font-bold text-white mb-6">
              Partner With Us
            </h2>
            <p className="text-white text-2xl font-poppins mb-10">
              Our Mission Is To Make Finance More Accessible,
              <br /> Transparent, And Secure For Everyone.
            </p>

            {/* Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-cyan-400 text-white rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <span className="font-semibold">View More</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-black">
                <Image
                  src="/arrow.png"
                  alt="Arrow Up Right"
                  width={18}
                  height={18}
                />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default PartnerWithUs;

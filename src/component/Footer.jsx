import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* FAQs Section */}
      {/* Responsive: Reduced height, padding, and font size on mobile */}
      <div className="bg-[rgba(0,31,41,1)] py-10 md:h-[158px] md:py-5 flex items-center justify-center">
        <div>
          <Link
            href="/faqs"
            // Responsive: Smaller font and icon on mobile, scales up on md screens
            className="inline-flex items-center gap-2 text-white text-2xl md:text-4xl font-semibold hover:opacity-80 transition-opacity duration-300"
          >
            FAQs
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white w-8 h-8 md:w-[46px] md:h-[46px]"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0F1417]">
        {/* Responsive: Adjusted padding for smaller screens */}
        <div className="px-5 py-10 md:py-16 max-w-6xl mx-auto">
          {/* Logo and App Store Buttons */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center gap-8">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <div className="">
                  {/* Image size is kept constant as it's manageable on mobile */}
                  <Image
                    src="/trustkeeper.png"
                    alt="TrustKeeper"
                    width={88}
                    height={90}
                  />
                </div>
                <div className="flex items-center">
                  {/* Responsive: Reduced font size for mobile */}
                  <span className="text-4xl md:text-7xl font-poppins font-medium text-[rgba(0,230,245,1)] tracking-wider">
                    Trust
                  </span>
                  <h1 className="text-4xl md:text-7xl font-poppins font-medium text-white tracking-wider">
                    Keeper
                  </h1>
                </div>
              </div>

              {/* App Store Buttons (flex-wrap makes this section naturally responsive) */}
              <div className="flex gap-4 flex-wrap justify-center">
                <Link
                  href="#"
                  className="block hover:transform hover:-translate-y-0.5 hover:opacity-90 transition-all duration-300"
                >
                  <div>
                    <Image
                      src="/appstore.png"
                      alt="Google Play"
                      width={150}
                      height={150}
                    />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="block hover:transform hover:-translate-y-0.5 hover:opacity-90 transition-all duration-300"
                >
                  <div>
                    <Image
                      src="/playstore.png"
                      alt="Google Play"
                      width={150}
                      height={150}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-10">
            {/* Responsive: Reduced gap on mobile for better wrapping */}
            <div className="flex justify-center gap-x-6 gap-y-4 md:gap-10 mb-5 flex-wrap text-[rgba(149,149,149,1)] text-[16px]">
              <Link
                href="/personal-loan"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Personal Loan
              </Link>
              <Link
                href="/one-card"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                One Card
              </Link>
              <Link
                href="/savings"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Savings
              </Link>
              <Link
                href="/checking"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Checking
              </Link>
              <Link
                href="/contact"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/help"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Help
              </Link>
              <Link
                href="/support"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Support
              </Link>
            </div>
            <div className="flex justify-center gap-x-6 gap-y-4 md:gap-10 flex-wrap text-[rgba(149,149,149,1)] text-[16px]">
              <Link
                href="/personal-loan"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Personal Loan
              </Link>
              <Link
                href="/one-card"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                One Card
              </Link>
              <Link
                href="/savings"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Savings
              </Link>
              <Link
                href="/checking"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Checking
              </Link>
              <Link
                href="/contact"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/help"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Help
              </Link>
              <Link
                href="/support"
                className=" hover:text-cyan-400 transition-colors duration-300"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-5 mb-8">
            <Link
              href="#"
              className="w-11 h-11 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-11 h-11 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-11 h-11 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="white"
              >
                <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="w-11 h-11 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>

          {/* Feedback Section */}
          <div className="text-center mb-8 text-sm text-[rgba(254,254,254,1)] font-poppins">
            <span className=" mr-2">Send Your Feedback :</span>
            <Link
              href="mailto:mocedargpu@tcatnoc"
              className=" hover:opacity-80 transition-opacity duration-300"
            >
              mocedargpu@tcatnoc
            </Link>
          </div>

          {/* Footer Links */}
          {/* Responsive: Stacks vertically on mobile, hides separators */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 mb-5 flex-wrap text-[rgba(154,154,154,1)] text-[16px] font-poppins ">
            <Link
              href="/privacy-policy"
              className=" hover:text-cyan-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            {/* Responsive: Separator hidden on mobile */}
            <span className="text-gray-600 hidden md:inline">|</span>
            <Link
              href="/terms-conditions"
              className=" hover:text-cyan-400 transition-colors duration-300"
            >
              Terms & Condition
            </Link>
            <span className="text-gray-600 hidden md:inline">|</span>
            <Link
              href="/cookie-notice"
              className=" hover:text-cyan-400 transition-colors duration-300"
            >
              Cookie Notice
            </Link>
            <span className="text-gray-600 hidden md:inline">|</span>
            <Link
              href="/copyright-policy"
              className=" hover:text-cyan-400 transition-colors duration-300"
            >
              Copyright Policy
            </Link>
            <span className="text-gray-600 hidden md:inline">|</span>
            <Link
              href="/data-policy"
              className=" hover:text-cyan-400 transition-colors duration-300"
            >
              Data Policy
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-[rgba(154,154,154,1)] text-[16px] font-poppins">
            © 2025 Design Monks. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

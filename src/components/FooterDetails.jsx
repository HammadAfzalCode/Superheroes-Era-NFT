import React from "react";

const FooterDetails = () => {
  return (
    <footer className=" text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-8">
          <div className="lg:flex-1 lg:max-w-md mb-6 lg:mb-0">
            <h3 className="text-2xl font-bold uppercase mb-4">
              Don't Miss Out
            </h3>
            <p className="text-sm mb-6">
              Sign up for the latest beauty news, product samples, and coupons
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 p-2 min-w-0"
              />
              <button className="bg-[#ECD200] hover:bg-yellow-600 text-black p-2 uppercase">
                Sign Up
              </button>
            </form>
          </div>

          <div className="text-center lg:text-right lg:flex-1 lg:max-w-md">
            <img
              src="src\assets\Yellow.png"
              className="object-cover h-auto max-w-56 lg:h-auto"
            />
            <div className="flex mt-4 items-center justify-center lg:justify-end gap-12 mb-6">
              <img
                src="src\assets\twitter-new-2023-x-logo-white-background-vector_1017-45422.avif"
                alt="X Logo"
                className="h-8 w-8 xs:hidden sm:block"
              />
              <img
                src="src\assets\636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
                alt="X Logo"
                className="h-8 w-8 xs:hidden sm:block"
              />
            </div>

            <nav className="text-sm uppercase flex gap-4 justify-center lg:justify-start">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                Digital Collectibles
              </a>
              <a href="#" className="hover:text-gray-300">
                Join the League
              </a>
              <a href="#" className="hover:text-gray-300">
                World
              </a>
              <a href="#" className="hover:text-gray-300">
                Gazette
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-700 py-4">
          <div className="flex flex-wrap items-center justify-between">
            <span className="text-xs">
              &copy; All Rights reserved - Superheroine Era.
            </span>
            <div className="flex gap-4 mt-4 sm:mt-0 text-xs">
              <a href="#" className="hover:text-gray-300">
                Terms & Agreements
              </a>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300">
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDetails;

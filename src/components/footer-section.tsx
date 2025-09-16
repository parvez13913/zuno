const FooterSection = () => {
  return (
    <footer className="relative bg-[#1f3634] text-white min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-16 bg-white rounded-b-[100px]"></div>

      <div className="relative py-24">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 -top-[100%]">
          <h2 className="text-[30rem] font-bold text-[#dbff97] select-none">
            zuno
          </h2>
        </div>

        <div className="z-10 max-w-6xl mx-auto px-8 mt-32">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold">zuno</div>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Zuno
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Learn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Follow us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Newsletter</h3>
              <div className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-4 py-2 bg-transparent border border-gray-600 rounded-l-md focus:outline-none focus:border-lime-400 text-white placeholder-gray-400"
                  />
                  <button className="px-4 py-2 bg-lime-400 text-slate-800 rounded-r-md hover:bg-lime-300 transition-colors">
                    →
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  We only share your information in accordance with our privacy
                  policy.
                </p>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <p className="mt-8 text-xs">
              Nullam quis risus eget urna mollis ornare vel eu leo. Integer
              posuere erat a ante venenatis dapibus posuere velit aliquet. Duis
              mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra
              augue.. © Zuno 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;

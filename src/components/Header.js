// Store Your Memories Forever
//Keep special memories or letters for you and your loved ones
//Memories store your data on the blockchain using IPFS
//Features: Store Images and texts
//Coming soon : Remind me - write a letter to your future self
/* eslint-disable */

import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <div>
      <section class="pb-8">
        <nav class="flex justify-between items-center py-6 px-4 xl:ml-44">
          <a class="text-lg font-semibold" href="#!">
            <img class="h-12" src={logo} alt="" width="auto" />
          </a>
        </nav>
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <span class="font-semibold text-xs pl-2 text-gray-800 px-3 py-px rounded-full bg-green-400 ">
                Memories store your data on the blockchain using IPFS
              </span>
              <h2 class="mt-6 mb-4 lg:mb-6 text-4xl lg:text-7xl font-semibold">
                Store Your Memories Forever.
              </h2>
              <div class="max-w-lg mb-6 lg:mb-12">
                <p class="text-xl text-gray-500">
                  Keep special memories or letters for you and your loved ones.
                </p>
              </div>
              <div class="flex flex-wrap">
                <a
                  class="inline-block cursor-pointer px-16 py-4 mb-3 mr-4 text-lg font-medium leading-normal bg-green-400 hover:bg-green-500 text-white rounded transition duration-200"
                  onClick={(e) => {
                    let hero = document.getElementById("hero");
                    e.preventDefault(); // Stop Page Reloading
                    hero && hero.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </a>
                <a
                  class="inline-block cursor-pointer px-6 py-4 mb-3 text-sm font-medium leading-normal hover:text-gray-700 rounded border"
                  onClick={(e) => {
                    let hero2 = document.getElementById("hero2");
                    e.preventDefault(); // Stop Page Reloading
                    hero2 && hero2.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
            <div class="relative w-full md:w-1/2 px-4">
              <img
                class="hidden lg:block lg:absolute top-0 right-0 z-10 lg:mt-28"
                src="https://shuffle.dev/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
                alt=""
              />
              <img
                class="relative"
                src="https://shuffle.dev/zeus-assets/images/z-picture.png"
                alt=""
              />
              <img
                class="hidden lg:block lg:absolute bottom-0 lg:left-0 lg:ml-6 lg:mb-20"
                src="https://shuffle.dev/zeus-assets/icons/dots/blue-dot-left-bars.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CalvemLogo from "../Icons/logo-calvem.svg?react";

export default function Experience() {
  // GSAP Animation -------------------------->
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
   const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".ex-box", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".ex-box",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      }
    });
  });
  return (
    <>
      <div className="font-josefin p-2">
        <section className="max-w-7xl m-auto py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="ex-box text-[#56c1a8] font-semibold uppercase tracking-wide sm:text-base text-sm">
                Experience
              </p>
              <h2 className="ex-box sm:text-4xl text-2xl font-bold mt-2 mb-4 text-black dark:text-white">
                My <span className="text-[#56c1a8]">Professional</span> Journey
              </h2>
              <p className="ex-box dark:text-white mb-6 sm:text-base text-sm">
                A quick look at my professional background and work experiences.
              </p>

              <div className="max-w-4xl mx-auto space-y-6">
                <div className="ex-box dark:bg-[#141c2b] dark:text-white rounded-2xl p-6 flex items-start gap-4 shadow-lg dark:shadow-[#88ffe563] ">
                  {/* Step Number */}
                  <div className="text-teal-400 font-bold text-sm">1</div>

                  {/* Content */}
                  <div>
                    <div className="flex sm:flex-row flex-col sm:items-center gap-3 mb-2">
                      <img
                        className="w-20"
                        src="./images/cd-logo.png"
                        alt="logo..."
                      />
                      <div>
                        <h3 className="sm:text-xl text-lg font-semibold">
                          CollegeDekho.com
                        </h3>
                        <span className="text-[#56c1a8]">Jan 2025 - Jul 2025</span>
                      </div>
                    </div>
                    <p className="dark:text-white text-sm leading-relaxed">
                      Intren as a Front-end Developer (HTML, CSS, JS)
                    </p>
                  </div>
                </div>
                <div className="ex-box dark:bg-[#141c2b] dark:text-white rounded-2xl p-6 flex items-start gap-4 shadow-lg dark:shadow-[#88ffe563]">
                  {/* Step Number */}
                  <div className="text-teal-400 font-bold text-sm">2</div>

                  {/* Content */}
                  <div>
                    <div className="flex sm:flex-row flex-col sm:items-center gap-3 mb-2">
                      <CalvemLogo className="dark:text-white w-10" />
                      <div>
                        <h3 className="sm:text-xl text-lg font-semibold">
                          Calvem Energy Pvt. Ltd.
                        </h3>
                        <span className="text-[#56c1a8]">Apr 2023 - Apr 2024</span>
                      </div>
                    </div>
                    <p className="dark:text-white text-sm leading-relaxed">
                      Intren as a Testing Engineer in electronics field.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="justify-center md:flex hidden">
              <img
                src="./images/experience-img.png" // replace with your image
                alt="Education"
                className="rounded-lg object-cover w-80"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

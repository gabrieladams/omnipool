import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { useRef } from "react";

const faq = {
  question: "What are the company’s main products?",
  answer:
    "McGinley Orthopedics engineers “must-buy” surgical tools to eliminate the manual process and replace them with state of the art technology. Our two primary products are the IntelliSense® orthopedic drill and the Lever Action Plate System®. Each of these FDA-cleared products are currently in-market and represent the first-to-market product in an expansive future product line. ",
};

function HomeSectionTen() {
  const [clickedFaqId, setClickedFaqId] = useState(1);
  //   const faqAnswerElem = useRef();

  //   const [maxHeight, setMaxHeight] = useState(null);

  //   useEffect(() => {
  //     console.log(faqAnswerElem);
  //   });

  return (
    <section className="space-y section-ten-bg-img  bg-img overlay relative text-white after:bg-gradient-to-tr after:from-primary-theme-color after:to-primary-theme-color/80">
      <div className="site-container relative z-10">
        <h1 className="section-title mb-12">Frequently asked questions</h1>

        <div className="rounded-[4px] border border-sec-theme-color">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div
                key={item}
                className="border-b border-sec-theme-color last:border-none"
              >
                <div
                  onClick={() => {
                    if (clickedFaqId === item) {
                      setClickedFaqId(null);
                    } else {
                      setClickedFaqId(item);
                    }
                  }}
                  className="z-10 flex cursor-pointer items-center border-b border-sec-theme-color p-4"
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform duration-100 ease-linear ${
                      clickedFaqId === item ? "rotate-180" : "rotate-0"
                    }`}
                  />

                  <h5 className="ml-4 text-[16px]">{faq.question}</h5>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-150 ease-linear ${
                    clickedFaqId === item ? "max-h-auto" : " max-h-0"
                  }`}
                >
                  <p className="px-12 py-4 text-white/80">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeSectionTen;

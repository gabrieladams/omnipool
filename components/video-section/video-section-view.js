// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";

function VideoSectionView() {
  //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="space-b relative">
      {/* <div className="section-two-bg-img relative h-[180px] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-site-primary-bg-color/90 after:content-[''] sm:h-[270px] lg:h-[340px]"></div> */}

      {/* -top-[44px] xl:-top-[256px] absolute  left-0 w-full */}

      {/* width="640"
              height="400" */}
      <div className="_container">
        <div>
          <div className="relative">
            {/* <div style="padding:62.5% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/762085273?h=e01caaa8c6"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div> */}
            <iframe
              src="https://player.vimeo.com/video/762085273?h=e01caaa8c6"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-[30vh] w-full rounded-t-[4px] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[608px]"
            ></iframe>
            {/* <iframe
              src="https://www.youtube.com/embed/bFBIrkzy_gM"
              title="Dope Tech: The Hottest Laptop Design!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-[30vh] w-full rounded-t-[4px] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[608px]"
            ></iframe> */}

            {/* <div
              className={`section-two-video-overlay-bg-img absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat ${
                isVideoPlaying ? "opacity-0" : "opacity-100"
              }`}
            ></div> */}

            {/* <button
              onClick={() => setIsVideoPlaying(true)}
              className={`absolute top-1/2 left-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-white text-center ${
                isVideoPlaying ? "opacity-0" : "opacity-100"
              } `}
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="text-[48px] text-white"
              />
            </button> */}
          </div>
          {/* #1a1544 */}
          <div className="rounded-b-[4px] p-2 text-center md:p-4">
            <h2 className="mb-2 text-[20px] text-highlight-color md:text-[24px] lg:text-[28px]">
              Philip Anthony Anglade
            </h2>

            <p className="font-bold uppercase text-white">Omnipool brief</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSectionView;

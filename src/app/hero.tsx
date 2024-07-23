"use client";

import { Typography } from "@material-tailwind/react";
import { Motion, spring } from "react-motion";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted>
        <source src="/image/track.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1, { stiffness: 30, damping: 20 }) }}>
            {style => (
              <Typography
                variant="h1"
                color="white"
                className="md:max-w-full lg:max-w-3xl"
                style={style}
              >
                出会いを大切にともに進歩を
              </Typography>
            )}
          </Motion>
          <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1, { stiffness: 30, damping: 20 }) }}>
            {style => (
              <Typography
                variant="lead"
                color="white"
                className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
                style={style}
              >
                ~ClockWise Systemは、人との出会いを大切に
                テクノロジーを提供する企業です~
              </Typography>
            )}
          </Motion>
        </div>
      </div>
    </div>
  );
}
export default Hero;

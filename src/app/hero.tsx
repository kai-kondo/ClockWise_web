"use client";

import { Typography } from "@material-tailwind/react";
import { Motion, spring } from "react-motion";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/image/track.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Motion
            defaultStyle={{ opacity: 0 }}
            style={{
              opacity: spring(1, { stiffness: 30, damping: 20, delay: 1000 }),
            }}
          >
            {(style: { opacity: number }) => ( // 型を明示的に指定
              <Typography
                {...({} as any)}
                variant="h1"
                color="white"
                className="md:max-w-full lg:max-w-3xl"
                style={style}
              >
                出会いを大切にともに進歩を
              </Typography>
            )}
          </Motion>
          <Motion
            defaultStyle={{ opacity: 0 }}
            style={{ opacity: spring(1, { stiffness: 30, damping: 20 }) }}
          >
            {(style: { opacity: number }) => ( // 型を明示的に指定
              <Typography
                {...({} as any)}
                variant="lead"
                color="white"
                className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
                style={style}
              >
                ClockWise Systemはお客様を大切に社員も大切にをモットーに
                <br></br>
                世の中にテクノロジーを提供する企業です
              </Typography>
            )}
          </Motion>
        </div>
      </div>
    </div>
  );
}
export default Hero;

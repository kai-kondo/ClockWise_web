"use client";
import Image from "next/image";
import React from "react";
import { Typography } from "@material-tailwind/react";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto text-center mb-8 mt-48">
        <Typography variant="h2" color="blue-gray">
          ClockWise Systemについて
        </Typography>
      </div>

      <div
        className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
        style={{
          backgroundImage: "url(/image/3470026_m.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left bg-white bg-opacity-75">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            究極の<span className="dark:text-violet-600">現場思考</span>{" "}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            私たちは経験豊富なメンバーによって構成されており、他社では難しい現場のお客様視点でシステム開発や精密板金加工機械向けのソフトウェア開発を行っています。
            <br className="hidden md:inline lg:hidden" />
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

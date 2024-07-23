"use client";
import Image from "next/image";
import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

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
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Business
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        - 事業内容 -
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <Image
            width={768}
            height={500}
            src="/image/logo7.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="システム開発事業">
                軽貨物配送業に特化した業務管理システム「ケイラクラウド」を開発・運用
              </Option>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={KeyIcon} title="機械向けソフトウェア開発事業">
                精密板金加工の工作機械向けカスタマイズソフトウェア開発・運用
              </Option>
            </div>
          </div>
          <Image
            width={768}
            height={500}
            src="/image/3470026_m.jpg"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

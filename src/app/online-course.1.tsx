"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "ドライバーシフト管理の効率化",
    description:
      "システムを使用しドライバーから希望シフトを提出事業主はその状況を元に各ドライバーのシフトを調整できる",
  },
  {
    icon: AcademicCapIcon,
    title: "出退勤管理の効率化",
    description:
      "出退勤状況が一目でわかるダッシュボード出退勤情報をリアルタイムで管理画面に反映ドライバーは1タップで勤怠管理",
  },
  {
    icon: CheckBadgeIcon,
    title: "精算業務の効率化",
    description:
      "ドライバーへの支払い金額確認・ドライバーからの請求をボタンひとつで簡単操作",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8 bg-blue-gray-50">
      <div className="container mx-auto text-center mb-24">
        <Typography variant="h2" color="blue-gray">
          サービス
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/hero.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <div className="flex items-center mb-4">
            <Typography variant="h2" color="blue-gray" className="mr-2">
              ケイラクラウド
            </Typography>
            <Image width={50} height={32} src="/image/kraku.png" alt="icon" />
          </div>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            ケイラクラウドとは軽貨物配送業に特化した業務管理システムです。
            <br></br>
            軽貨物配送事業者の
            業務を効率化及びドライバーの業務も効率化して軽貨物配送業に関わる全員の経営をラクにします。
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;

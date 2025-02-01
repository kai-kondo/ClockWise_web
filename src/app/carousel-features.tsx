"use client";

import Image from "next/image";
import React from "react";
import {
  Typography as MTTypography,
  Carousel as MTCarousel,
} from "@material-tailwind/react";

const Typography = MTTypography as React.ComponentType<any>;
const Carousel = MTCarousel as React.ComponentType<any>;

export function CarouselFeatures() {
  return (
    <section className="px-6 pt-20 pb-16 bg-blue-800">
      <div className="text-center mb-12">
        <Typography variant="h2" className="text-white text-4xl font-bold">
          経営者ご挨拶
        </Typography>
        <Typography variant="paragraph" className="mt-2 text-white text-lg">
          最高の満足度の商品を提供するために
        </Typography>
      </div>
      <div className="container mx-auto bg-blue-700 rounded-xl shadow-lg p-10 lg:p-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Typography variant="paragraph" className="text-white text-lg">
              <strong className="text-xl">
                ~ 出会いを大切にともに進歩を ~
              </strong>
              <br />
              <br />
              工作機械メーカーを経て、ものづくり業界でのお客様の要望を満たすには
              ソフトウェアの開発が必要であると感じ、ClockWise
              Systemを創業しました。
              <br />
              現在は精密板金加工向けソフトウェア開発と並行して、
              軽貨物配送業向けの業務管理システム「ケイラクラウド」の開発・運用を行っています。
              <br />
              <br />
              「お客様に最高の満足度の商品を提供する」という理念のもと、
              ソフトウェアとテクノロジーの力でよりクリエイティブで豊かな働き方の提案をしていきます。
            </Typography>
            <Typography variant="medium" className="mt-6 text-white font-bold">
              島崎 法隆{" "}
              <span className="font-normal text-blue-100">
                代表取締役 @ ClockWise System.inc
              </span>
            </Typography>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              width={200}
              height={200}
              src="/image/CEO.png"
              alt="CEO"
              className="shadow-lg object-cover w-48 h-48 md:w-64 md:h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselFeatures;

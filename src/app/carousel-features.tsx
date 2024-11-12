"use client";

import Image from "next/image";
import React from "react";
import { Typography, Carousel } from "@material-tailwind/react";

export function CarouselFeatures() {
  return (
    <section className="px-8 pt-40 pb-20">
      <div className="flex mb-16 flex-col items-center">
        {/* 型アサーションを追加してエラーを回避 */}
        <Typography
          variant="h2"
          className="text-center mb-2"
          color="blue-gray"
          {...({} as any)}
        >
          経営者ご挨拶
        </Typography>
        <Typography
          variant="lead"
          className="mb-3 w-full text-center font-normal !text-gray-500 lg:w-10/12"
          {...({} as any)}
        >
          Discover what our students have to say about our course!
        </Typography>
      </div>
      <div className="container mx-auto !rounded-lg bg-[url('/image/Background.png')] bg-center py-10 lg:px-16">
        <Carousel
          {...({} as any)}
          transition={{ duration: 1 }}
          nextArrow={() => <></>}
          prevArrow={() => <></>}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-16 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20">
            <div className="col-span-3 flex flex-col items-start justify-center">
              <Typography
                {...({} as any)}
                variant="lead"
                color="white"
                className="mb-5 text-xl font-normal "
              >
                <strong>~出会いを大切にともに進歩を~ </strong>
                <br></br>
                <br></br>
                工作機械メーカを経て、ものづくり業界でのお客様の要望を満たすにはソフトウェアの開発が必要であると感じClockWiseSystemを創業しました。
                <br></br>
                現在は精密板金加工向けソフトウェア開発と並行して軽貨物配送業向けの業務管理システム「ケイラクラウド」を開発・運用を行っています。
                <br></br>
                <br></br>
                「お客様に最高の満足度の商品を提供する」という理念を元、ソフトウェアとテクノロジーの力で邁進しよりクリエイティブで豊かな働き方の提案をしていきたいと考えております。
              </Typography>
              <Typography
                {...({} as any)}
                variant="small"
                color="white"
                className="font-medium uppercase"
              >
                島崎 法隆{" "}
                <span className="font-normal opacity-60">
                  代表取締役 @ ClockWise System.inc
                </span>
              </Typography>
            </div>
            <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
              <Image
                width={256}
                height={256}
                src="/image/ceo4.png"
                alt="testimonial image"
                className="h-full w-2/5 object-contain md:!w-2/3"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default CarouselFeatures;

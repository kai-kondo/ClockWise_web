"use client";
import Image from "next/image";
import React from "react";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-blue-500"></div>
          </div>
          <motion.div
            className="flex flex-col text-center w-full mb-20"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              事業内容
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              ClockWiseSystemで取り組んでいる3つの事業内容をご紹介
            </p>
          </motion.div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <motion.div
            className="p-4 md:w-1/3 sm:mb-0 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/image/logo7.png"
                width={1203}
                height={503}
              />
            </div>
            <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
              運送業向けWebアプリケーション開発
            </h2>
            <p className="text-base leading-relaxed mt-2">
              軽貨物配送業に特化した業務管理Webアプリケーションを開発・運用
            </p>
            <a className="text-blue-500 inline-flex items-center mt-3">
              詳細はこちら
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="p-4 md:w-1/3 sm:mb-0 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/image/3470026_m.jpg"
                width={1204}
                height={504}
              />
            </div>
            <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
              精密板金加工向けアプリケーション開発
            </h2>
            <p className="text-base leading-relaxed mt-2">
              精密板金加工の工作機械向けにソフトウェアをカスタマイズして開発・運用
            </p>
          </motion.div>

          <motion.div
            className="p-4 md:w-1/3 sm:mb-0 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/image/teacher.jpg"
                width={1205}
                height={505}
              />
            </div>
            <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
              企業向け新人研修のプログラミング講師
            </h2>
            <p className="text-base leading-relaxed mt-2">
              企業向けに新人社員を対象としたプログラミング研修の講師を行なっています。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

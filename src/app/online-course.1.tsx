"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // framer-motionをインポート

export function OnlineCourse() {
  return (
    <section className="text-gray-600 body-font">
      {/* セクション 1 */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, y: -50 }} // 初期状態
          whileInView={{ opacity: 1, y: 0 }} // ビューポート内でアニメーション
          transition={{ duration: 0.8 }} // アニメーションの持続時間
          viewport={{ once: true }} // 一度だけアニメーションを実行
        >
          <motion.h1
            className="title-font sm:text-5xl text-4xl mb-4 font-bold text-white bg-blue-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2 }} // カーソルが来たときに文字を大きく
          >
            ABOUT US
            <br className="hidden lg:inline-block" />
            私たちについて
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }} // カーソルが来たときに少し文字を大きく
          >
            私どもは、一般的なデスクトップアプリケーションとWebアプリケーションの両方を開発し
            <br className="hidden lg:inline-block" />
            それに加え、企業向け新人研修の講師役を行っている会社です。
          </motion.p>
        </motion.div>

        {/* 右横に画像を追加 */}
        <motion.div
          className="lg:w-1/2 w-full md:pl-16 flex justify-center"
          initial={{ opacity: 0, x: 50 }} // 初期状態で右からスライド
          whileInView={{ opacity: 1, x: 0 }} // ビューに入ったときに透明度を1、位置を元に戻す
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
          }} // 両方のトランジションを統合
          viewport={{ once: true }}
        >
          <Image
            src="/image/aboutus.png"
            alt="About Us"
            width={900} // 画像の幅を指定
            height={900} // 画像の高さを指定
            className="object-cover object-center rounded-lg"
          />
        </motion.div>
      </div>

      {/* セクション 2 */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            軽貨物配送業向け業務管理サービス
            <br className="hidden lg:inline-block" />
            <strong className="text-blue-600">ケイラクラウド</strong>
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            軽貨物配送業の企業様とタイアップしながら、自社開発した「ケイラクラウド」を展開しています。
            <br className="hidden lg:inline-block" />
            ケイラクラウド」を導入すると...
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <strong className="font-bold text-lg">
              〇ドライバーのシフトをラクラク作成
            </strong>
            <br className="hidden lg:inline-block" />
            <strong className="font-bold text-lg">
              〇ドライバーからの請求・お客様への請求をラクラク管理
            </strong>
            <br className="hidden lg:inline-block" />
            <strong className="font-bold text-lg">
              〇売上・原価の状況が⼀⽬で分かる
            </strong>
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            俗に運送業界で言われているところの
            <strong className="font-bold text-lg">「ラスト１マイル」</strong>
            で戦っているお客様へ、「ケイラクラウド」を使って頂くことで、高収益に結び付けることを目指しています。
          </motion.p>
          <div className="flex justify-center">
            <motion.a
              href="https://www.kraku.jp/" // 外部サイトのURL
              target="_blank" // 新しいタブで開く
              rel="noopener noreferrer" // セキュリティのために追加
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              whileHover={{
                scale: 1.1, // ホバー時に拡大
                transition: { duration: 0.3 }, // アニメーションの速さ
              }}
            >
              詳細はこちら
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/image/hero3.png"
            width={720}
            height={600}
          />
        </motion.div>
      </div>

      {/* セクション 3 */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/image/30408460_s.jpg" // 画像のソースを指定
            width={720} // 幅を指定
            height={600} // 高さを指定
          />
        </motion.div>
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            精密板金加工向け
            <br className="hidden lg:inline-block" />
            アプリケーション開発
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            金属加工の精密板金加工においても、今やAi機能が搭載された、コンピューター制御の工作機械が主流となっています。
            そこで、機械を効率良く稼働させるため、標準機能のソフトウェアに加え、カスタマイズ機能の
            アプリケーションソフトが必要不可欠です。
            弊社のメンバーは、長年精密板金加工のソフトウェア開発に携わっており、現場での経験が豊富ですので、
            安心してお任せください。
          </motion.p>

          <div className="flex justify-center">
            <motion.button
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              whileHover={{
                scale: 1.1, // ホバー時に1.1倍に拡大
                transition: { duration: 0.3 }, // アニメーションの速さ
              }}
            >
              詳細はこちら
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* セクション 4 */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            企業向け新人研修講師
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            弊社社員のスキルアップ、情報リテラシーも高めるためにも、新人研修で、WebプログラミングやIT関連の
            講師を務めて、日々アップデートしていこうと、昨年より実施しています。
            企業の受講生は新人がメインですので、いまどきのZ世代の考え方、行動、感性も肌で感じて、同時に世代間
            ギャップも乗り越えて、社会のお役に立てればと考えています。
          </motion.p>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/image/teacher.jpg"
            width={720}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default OnlineCourse;

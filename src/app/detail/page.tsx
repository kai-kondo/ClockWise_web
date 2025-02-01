// src/app/components/ProductSection.tsx

import React from "react";
import Image from "next/image";

interface ProductItemProps {
  title: string;
  descriptions: string[];
  imageSrc: string; // PNG画像のパスを受け取る
}

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  descriptions,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col items-center p-4">
      <Image
        src={imageSrc}
        alt={title}
        width={32}
        height={32}
        className="w-8 h-8 dark:text-violet-600"
      />
      <h3 className="my-3 text-3xl font-semibold">{title}</h3>
      <div className="space-y-1 leading-tight">
        {descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
};

const ProductSection: React.FC = () => {
  const productDetails = [
    {
      title: "Product 1",
      descriptions: [
        "Similique quas ea veniam",
        "Tempore quasi porro",
        "Blanditiis aut mollitia ex",
      ],
      imageSrc: "/image/seisan.png",
    },
    {
      title: "Product 2",
      descriptions: [
        "Similique quas ea veniam",
        "Tempore quasi porro",
        "Blanditiis aut mollitia ex",
      ],
      imageSrc: "/images/product2.png", // 画像のパス
    },
    {
      title: "Product 3",
      descriptions: [
        "Similique quas ea veniam",
        "Tempore quasi porro",
        "Blanditiis aut mollitia ex",
      ],
      imageSrc: "/images/product3.png", // 画像のパス
    },
    {
      title: "Product 4",
      descriptions: [
        "Similique quas ea veniam",
        "Tempore quasi porro",
        "Blanditiis aut mollitia ex",
      ],
      imageSrc: "/images/product4.png", // 画像のパス
    },
    {
      title: "Product 5",
      descriptions: [
        "Similique quas ea veniam",
        "Tempore quasi porro",
        "Blanditiis aut mollitia ex",
      ],
      imageSrc: "/images/product5.png", // 画像のパス
    },
  ];

  return (
    <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">工作機械向けソフトウェア開発</h2>
        <p className="dark:text-gray-600">
          工作機械向けCAD/CAMをベースに、生産の自動化、操作性や機能性を向上させるためのアプリケーションや
          各種工作機械(切断、穴開け、曲げ等)の稼働率向上、特殊加工をサポートする、自動プログラミングソフトを開発・ご提供しています。
        </p>
      </div>

      {/* 上部2つのプロダクトを中央寄せで、間隔を広げる */}
      <div className="container mx-auto flex justify-center gap-20">
        {productDetails.slice(0, 2).map((product, index) => (
          <ProductItem
            key={index}
            title={product.title}
            descriptions={product.descriptions}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>

      {/* 下部3つのプロダクト */}
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {productDetails.slice(2).map((product, index) => (
          <ProductItem
            key={index}
            title={product.title}
            descriptions={product.descriptions}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

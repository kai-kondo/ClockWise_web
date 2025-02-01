// src/app/detail/page.tsx

import React from "react";

const DetailPage: React.FC = () => {
  return (
    <div className="container mx-auto px-5 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">開発内容の詳細</h1>
      <p className="mb-8 leading-relaxed">
        こちらは精密板金加工向けアプリケーションの詳細説明です。AI機能を搭載したコンピューター制御の工作機械の活用方法や、カスタマイズ機能のソフトウェアの開発について説明しています。
        さらに、私たちのチームがどのように現場での経験を活かして開発を進めているかをご紹介します。
      </p>
      {/* 追加の詳細情報などをここに記載 */}
    </div>
  );
};

export default DetailPage;

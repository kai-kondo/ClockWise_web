import React from "react";

const companyInfo = {
  companyName: "株式会社ClockWise System",
  contact: {
    tel: "",
  },
  established: "2013年5月",
  ceo: "島崎 法隆",
  address: "〒252-0025 神奈川県座間市四ツ谷 213-5",
  access: "JR相模線 入谷駅より徒歩10分",
};

const CompanyInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">会社概要</h2>
      <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
        <tbody>
          <tr className="border-b">
            <th className="px-6 py-4 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              社名
            </th>
            <td className="px-6 py-4 text-sm text-gray-900">
              {companyInfo.companyName}
            </td>
          </tr>
          <tr className="border-b">
            <th className="px-6 py-4 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              連絡先
            </th>
            <td className="px-6 py-4 text-sm text-gray-900">
              <br />
              TEL {companyInfo.contact.tel}
            </td>
          </tr>
          <tr className="border-b">
            <th className="px-6 py-4 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              設立
            </th>
            <td className="px-6 py-4 text-sm text-gray-900">
              {companyInfo.established}
            </td>
          </tr>
          <tr className="border-b">
            <th className="px-6 py-4 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              代表取締役
            </th>
            <td className="px-6 py-4 text-sm text-gray-900">
              {companyInfo.ceo}
            </td>
          </tr>
          <tr className="border-b">
            <th className="px-6 py-4 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              所在地
            </th>
            <td className="px-6 py-4 text-sm text-gray-900">
              {companyInfo.address}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-4 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              アクセス
            </th>
            <td className="px-6 py-4 text-sm text-gray-900">
              {companyInfo.access}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyInfo;

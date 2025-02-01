import React from "react";
import { Mail, MapPin, User, Calendar, Building2 } from "lucide-react";

const companyInfo = {
  companyName: "株式会社ClockWise System",
  contact: {
    mail: "shimazaki@clockwisesystem.com",
  },
  established: "2013年5月",
  ceo: "島崎 法隆",
  address: "〒252-0025 神奈川県座間市四ツ谷 213-5",
};

const CompanyInfo: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        会社概要
      </h2>
      <div className="grid gap-6">
        <div className="flex items-center gap-4 p-4 border-b">
          <Building2 className="text-gray-600" size={24} />
          <div>
            <p className="text-gray-500 text-sm">社名</p>
            <p className="text-lg font-medium">{companyInfo.companyName}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 border-b">
          <Mail className="text-gray-600" size={24} />
          <div>
            <p className="text-gray-500 text-sm">連絡先</p>
            <p className="text-lg font-medium">{companyInfo.contact.mail}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 border-b">
          <Calendar className="text-gray-600" size={24} />
          <div>
            <p className="text-gray-500 text-sm">設立</p>
            <p className="text-lg font-medium">{companyInfo.established}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 border-b">
          <User className="text-gray-600" size={24} />
          <div>
            <p className="text-gray-500 text-sm">代表取締役</p>
            <p className="text-lg font-medium">{companyInfo.ceo}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4">
          <MapPin className="text-gray-600" size={24} />
          <div>
            <p className="text-gray-500 text-sm">所在地</p>
            <p className="text-lg font-medium">{companyInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

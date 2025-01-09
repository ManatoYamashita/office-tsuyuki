"use client";

import { Building, Users, Calendar, Globe, MapPin, User } from 'lucide-react'
import Stakeholders from "@/app/_components/Stakeholders";
import Image from 'next/image';

const logos = [
  { id: 1, src: "/images/stakeholders/belca.webp", alt: "公益社団法人 ロングライフビル推進協会(BELCA)" },
  { id: 2, src: "/images/stakeholders/bridgestone.webp", alt: "株式会社 ブリヂストン" },
  { id: 3, src: "/images/stakeholders/denkisetsubi.webp", alt: "一般社団法人 電気設備学会" },
  { id: 4, src: "/images/stakeholders/ja-bme.webp", alt: "一般社団法人 日本電設工業会" },
  { id: 5, src: "/images/stakeholders/jeca.webp", alt: "社団法人建築設備技術者協会" },
  { id: 6, src: "/images/stakeholders/taisei.webp", alt: "株式会社 大成建設" },
];

interface CompanyInfoProps {
  name: string
  logo: string
  foundedYear: number
  employees: number
  website: string
  ceo: string
  address: string
}

export default function CompanyInfo({
  name,
  logo,
  foundedYear,
  employees,
  website,
  ceo,
  address
}: CompanyInfoProps) {
  const profileItems = [
    {
      icon: <Calendar className="h-5 w-5 text-gray-600" />,
      label: '設立年',
      value: `${foundedYear}年`
    },
    {
      icon: <Users className="h-5 w-5 text-gray-600" />,
      label: '従業員数',
      value: `${employees}名`
    },
    {
      icon: <User className="h-5 w-5 text-gray-600" />,
      label: '代表者',
      value: ceo
    },
    {
      icon: <MapPin className="h-5 w-5 text-gray-600" />,
      label: '所在地',
      value: address
    },
    {
      icon: <Globe className="h-5 w-5 text-gray-600" />,
      label: 'ウェブサイト',
      value: (
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:underline"
        >
          {website}
        </a>
      )
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
        <div className="relative w-full lg:w-1/2 lg:h-[500px] h-[350px]">
          <Image
            src="/images/officetsuyuki.webp"
            alt={name}
            fill
            className="object-cover lg:rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={70}
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold lg:mt-0 px-6">{name}</h1>
          
          <div className="bg-white sm:rounded-lg shadow-md p-6">
            <ul className="divide-y divide-gray-200">
              {profileItems.map((item, index) => (
                <li 
                  key={index} 
                  className="py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-base text-gray-900 mt-1">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-2">
        <Stakeholders logos={logos} />
      </div>
    </div>
  )
}

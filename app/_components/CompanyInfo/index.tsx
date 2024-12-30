import Image from 'next/image'
import { Building, Users, Calendar, Globe, MapPin, User } from 'lucide-react'
import HeaderCard from '../HeaderCard'

interface CompanyInfoProps {
  name: string
  logo: string
  foundedYear: number
  employees: number
  description: string
  website: string
  ceo: string
  address: string
}

export default function CompanyInfo({
  name,
  logo,
  foundedYear,
  employees,
  description,
  website,
  ceo,
  address
}: CompanyInfoProps) {
  return (
    <div className="w-full py-8 relative">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:h-full">
        <HeaderCard />
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
              {website}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-600" />
              <span>設立年: {foundedYear}年</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-600" />
              <span>従業員数: {employees}名</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-gray-600" />
              <span>代表者: {ceo}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-gray-600 mt-1" />
              <span>所在地: {address}</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">事業内容</h2>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

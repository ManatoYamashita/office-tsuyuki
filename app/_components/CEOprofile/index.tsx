import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function ProfileComponent() {
  return (
    <div className="container mx-auto px-4 py-12 bg-background text-foreground min-h-screen">
      <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            {/* 動画部分 */}
            <video
              title="露木博視イメージ動画"
              playsInline
              muted
              autoPlay
              loop
              poster="/images/tsuyuki-hiromi-poster.webp"
              className="w-full h-full object-cover rounded-lg"
            >
              <source src="/images/tsuyuki-video.webm" type="video/webm" />
            </video>
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-white text-4xl md:text-4xl font-bold">露木博視</h2>
              <p className="text-white text-sm md:text-base mb-2">
                Tsuyuki Hiromi
              </p>
              <Badge variant="outline" className="text-white font-semibold px-4 py-2">
                株式会社オフィス露木 代表取締役
              </Badge>
            </div>
          </div>
          <div className="space-y-4 md:w-1/2">
            {/* 画像部分 */}
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/tsuyuki-hiromi.webp"
                alt="露木博視"
                width={300}
                height={200}
                className="rounded-lg object-cover object-top w-full h-40"
              />
              <Image
                src="/images/mt-fuji.webp"
                alt="富士山"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-40"
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">経歴 & 資格</h3>
            <ul className="space-y-2">
              {[
                "武蔵工業大学建築学科卒（現東京都市大学）",
                "一級建築士",
                "CASBEE元審査員、現建築、戸建及び不動産評価員",
                "認定ファシリティマネージャー（CFMJ）資格者",
                "第二種情報処理技術者",
                "空気調和衛生工学会会員",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Badge variant="outline" className="w-2 h-2 p-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="w-full mt-4">
              <a href="mailto:tsuyuki@pom.jp">メールを送る</a>
            </Button>
          </div>

          <div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">SNS</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/hiromi.tsuyuki.5" target="_blank" rel="noopener noreferrer">
                  <Facebook size={24} />
                </Link>
                <Link href="https://example2.com" target="_blank" rel="noopener noreferrer">
                  <Globe size={24} />
                </Link>
                <Link href="https://example3.com" target="_blank" rel="noopener noreferrer">
                  <Globe size={24} />
                </Link>
              </div>
            </div>
          </div>
          </div>
      </CardContent>
      </Card>
    </div>
  )
}

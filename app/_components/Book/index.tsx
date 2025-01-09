import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface BookProps {
  imageUrl: string
  title: string
  author: string
  description: string
  price: number
  publisher: string
  isbn: string
  releaseDate: string
  link: string
}

export default function Book({
  imageUrl,
  title,
  author,
  description,
  price,
  publisher,
  isbn,
  releaseDate,
  link,
}: BookProps) {
  return (
    <Link href={link} aria-label={title}>

        <Card className="max-w-2xl mx-auto ">
        <div className="md:flex">
            <div className="md:flex-shrink-0">
            <Image
                src={imageUrl}
                alt={`${title}の表紙`}
                width={200}
                height={300}
                className="w-full h-64 md:h-full md:w-48 object-cover object-top"
                quality={80}
            />
            </div>
            <div className="p-8">
            <CardContent>
                <h2 className="block mt-1 text-lg leading-tight text-primary font-bold">{title}</h2>
                <p className="mt-2 text-muted-foreground">著者: {author}</p>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                <div className="mt-4">
                <Badge variant="secondary" className="mr-2">
                    価格: ¥{price.toLocaleString()}(定価)
                </Badge>
                <Badge variant="outline">出版社: {publisher}</Badge>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start mt-4">
                <p className="text-sm text-muted-foreground">ISBN: {isbn}</p>
                <p className="text-sm text-muted-foreground">発売日: {releaseDate}</p>
            </CardFooter>
            </div>
        </div>
        </Card>
    </Link>
  )
}

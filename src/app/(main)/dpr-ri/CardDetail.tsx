/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IzedrDYnfSL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"

type Card  = {
  name : string
  namaPartai : string
  jenisKelamin : string
  umur : number
  pasFoto :string
  agama :string
}

export default function CardDetail({name, namaPartai,umur, jenisKelamin,pasFoto,agama}:Card) {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12">
            <Image
              alt="Employee"
              className="rounded-full"
              height="64"
              src={pasFoto}
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
          </div>
          <div className="grid gap-1.5">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{namaPartai}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5">
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <div className="font-medium">Nama </div>
          <div>{name}</div>
          <div className="font-medium">Nama partai</div>
          <div>{namaPartai}</div>
          <div className="font-medium">Jenis Kelamin</div>
          <div>{jenisKelamin}</div>
          <div className="font-medium">Umur</div>
          <div>{umur}</div>
          <div className="font-medium">Agama</div>
          <div>{agama}</div>
          <div className="font-medium">Address</div>
          <div>1234 Elm Street, Toronto, ON</div>
        </dl>
      </CardContent>
    </Card>
  )
}


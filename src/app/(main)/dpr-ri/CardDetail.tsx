/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IzedrDYnfSL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"

type Card  = {
  name : string
  namaPartai : string
  jenisKelamin : string
  umur : number
  pasFoto :string
  agama :string
  riwayatPekerjaan : string[] | null
  pekerjaan : string
}

export default function CardDetail({name, namaPartai,umur, jenisKelamin,pasFoto,agama,riwayatPekerjaan, pekerjaan}:Card) {
  return (
    <Card className="w-full ">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12">
            <Image
              alt="Employee"
              className="rounded-full"
              height={60}
              src={pasFoto}
              width={70}
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
          <div className="font-medium">Pekerjaan</div>
          <div>{pekerjaan}</div>
          <div className="font-medium">Riwayat Pekerjaan</div>

          <div>{riwayatPekerjaan} </div>
        
        </dl>
      </CardContent>
    </Card>
  )
}


"use client";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import useSWR from "swr";

import Header from "@/app/components/Header";
import { useRouter } from "next/navigation";

const fecther = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const router = useRouter()

  const { data, error } = useSWR(
    "https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/list",
    fecther
  );

  if (!data) return <h1>...Loading</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div>
    <Header/>
      {/* <input
          type="text"
          placeholder="Cari Dapil"
          value={search}
          onChange={(e) => {
            searchParams.set("q", e.target.value);
          }}
        /> */}

     
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="border shadow-sm rounded-lg">
          <Table>
            <TableHeader className="bg-blue-400">
              <TableRow>
                <TableHead className="w-[100px] text-black dark:text-white ">No</TableHead>
                <TableHead className="min-w-[150px] text-black dark:text-white ">Dapil</TableHead>
                <TableHead className="min-w-[100px] text-black dark:text-white ">Detail</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data.map((list: any) => (
                <TableRow key={list.id} onClick={()=> router.push(`/dprd-kabkot/list/${list.id}`)} className="cursor-pointer" >
                  <TableCell className="">{list.id}</TableCell>
                  <TableCell>{list.namaDapil}</TableCell>
                  <TableCell>
                    {" "}
                    <Link href={`/dprd-kabkot/list/${list.id}`}>
                      <Badge variant="outline">
                        <FaLink />
                      </Badge>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}

"use client";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Page {
  params: {
    id: number;
  };
}
export default function Page({ params }: Page) {
  const { id } = params;
  const { data, error } = useSWR(
    `https://caleg.zakiego.com/api/dpr-ri/dapil/${id}`,
    fetcher
  );
  if (!data) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-8 pt-4">
        {data.data.map((item: any) => (
          <div className="flex flex-col items-center" key={item.id}>
            <Image
              src={item.pasFoto}
              alt={item.nama}
              className="mb-4 rounded-lg"
              width={300}
              height={400}
            />
            <div className="text-center">
              <div className="font-semibold">{item.nama}</div>
              <div>{item.namaDapil}</div>
              <div>{item.namaPartai}</div>
              <Link href={`/dpr-ri/calon/${item.id}`}>{item.id}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

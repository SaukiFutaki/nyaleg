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
    `https://caleg.zakiego.com/api/dpd/dapil/${id}`,
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
              src="https://placehold.co/400x400/png"
              alt={item.nama}
              className="mb-4 rounded-lg"
              width={300}
              height={400}
            />
            <div className="text-center">
              <div className="font-semibold">{item.nama}</div>
              <div>{item.jenisKelamin}</div>
              <div>{item.namaDapil}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

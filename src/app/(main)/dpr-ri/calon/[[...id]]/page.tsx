  "use client"

  import useSWR from 'swr'
import CardDetail from '../../CardDetail'
import Header from "@/app/components/Header";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Loading from "@/app/loading";

  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  interface Page {
    params: {
      id: string[]  
    }
  }
  export default function Page({params}: Page){
    const {id} = params

    
    const {data, error} = useSWR(`https://caleg.zakiego.com/api/dpr-ri/calon/${id.join("/")}`, fetcher)
    if(!data) return <Loading/>
    if(error) return <div>{error.message}</div>
 
    return(
      <div>
        <Header />
        <div className='hidden sm:hidden lg:pt-8 pr-4 lg:block '>
     
     
        {data.data.map((list :any)=>(
        <div key={list.id}>
          <CardDetail 
            name={list.nama} 
            namaPartai={list.namaPartai} 
            jenisKelamin={list.jenisKelamin} 
            umur={list.usia} 
            pasFoto={list.pasFoto} 
            agama={list.agama} 
            pekerjaan={list.pekerjaan}
            riwayatPekerjaan={list.riwayatPekerjaan?.map((item:any) => (
              <Table key={list}>
            
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Perusahaan</TableHead>
                  <TableHead>Posisi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{item.namaPerusahaanLembaga}</TableCell>
                  <TableCell>{item.jabatan}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          
            ))}
          />
        </div>
      ))}
         </div>
      </div>
    )
  }
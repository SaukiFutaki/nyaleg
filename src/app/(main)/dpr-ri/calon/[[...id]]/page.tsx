  "use client"

  import useSWR from 'swr'
import CardDetail from '../../CardDetail'
import Header from "@/app/components/Header";


  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  interface Page {
    params: {
      id: string[]  
    }
  }
  export default function Page({params}: Page){
    const {id} = params

    
    const {data, error} = useSWR(`https://caleg.zakiego.com/api/dpr-ri/calon/${id.join("/")}`, fetcher)
    if(!data) return <div>Loading...</div>
    if(error) return <div>{error.message}</div>
 
    return(
      <div>
        <Header/>
        <p>{data.data.map((list :any)=>(
          <div key={list.id}>
          <CardDetail name={list.nama} namaPartai={list.namaPartai} jenisKelamin={list.jenisKelamin} umur={list.usia} pasFoto={list.pasFoto} agama={list.agama}/>
          </div>
        ))}</p>
      </div>
    )
  }
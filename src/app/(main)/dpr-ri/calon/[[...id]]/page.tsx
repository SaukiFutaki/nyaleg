"use client"
import useSWR from 'swr'


const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Page {
  params: {
    id: string
  }
}
export default function Page({params}: Page){

  const {id} = params
  
  const {data, error} = useSWR(`https://caleg.zakiego.com/api/dpr-ri/calon/${id}}`, fetcher)
  if(!data) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>
  console.log(data)
  return(
    <div>
      <h1>Page{id}</h1>

      <p>Page DPD</p>
    </div>
  )
}
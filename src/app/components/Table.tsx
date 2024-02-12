import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FaLink } from "react-icons/fa";

interface TableDataProps {
  id: number | string;
  namaDapil: string;
  href: number | string;
  path: string;
}

export default function TableData({
  id,
  namaDapil,
  href,
  path,
}: TableDataProps) {
  return (
    <div>
 
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 ">
        <div className="border shadow-sm rounded-lg">
        
            <Table>

              <TableRow>
                <TableCell className="">{id}</TableCell>
                <TableCell>{namaDapil}</TableCell>
                <TableCell>
                  {" "}
                  <Link href={`/${path}/list/${href}`}>
                    <Badge variant="outline">
                      <FaLink />
                    </Badge>
                  </Link>
                </TableCell>
              </TableRow>
            </Table>
          
        
        </div>
      </main>
    </div>
  );
}

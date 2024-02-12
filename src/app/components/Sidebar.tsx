"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaAngry } from "react-icons/fa"
import { FcDepartment, FcHome } from "react-icons/fc";



export default function SideBar() {
  const pathname = usePathname();
 
  return (
    <div className="flex flex-col gap-2 ">
    <div className="flex h-[60px] items-center px-6 border-b dark:bg-gray-800/40 bg-gray-100/40 ">
      <Link className="flex items-center gap-2 font-semibold" href="/">
        <FaAngry className="h-6 w-6" />

        <span className="">Nyalegggggggggggggg</span>
        
      </Link>
    </div>
    <div className="flex-1 ">
      <nav className="grid items-start px-4 text-sm font-medium">
      <Link className={` ${pathname === '/' ? 'flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50' : 'py-1 flex items-center gap-2 transition-all '}`} href="/">
          <FcHome className="h-4 w-4"/>
            Home
          </Link>
        <Link
         className={`${pathname === '/dpd' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : "py-1  flex items-center gap-2 transition-all "}`}
         href="/dpd"
        >
          <FcDepartment className="h-4 w-4" />
          DPD
          
        </Link>
        <Link
            className={`${pathname === '/dpr-ri' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : "py-1 flex items-center gap-2 transition-all "}`}
          href="/dpr-ri"
        >
          <FcDepartment className="h-4 w-4" />
          DPR RI
        </Link>
        <Link
         className={`${pathname === '/dprd-prov' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : "py-1 flex items-center gap-2 transition-all "}`}
          href="/dprd-prov"
        >
          <FcDepartment className="h-4 w-4" />
          DPRD PROVINSI
        </Link>
        <Link
        className={`${pathname === '/dprd-kabkot' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : "py-1 flex items-center gap-2 transition-all "}`}
          href="/dprd-kabkot"
        >
          <FcDepartment className="h-4 w-4" />
          DPRD Kab/Kota
        </Link>
      
      </nav>
    </div>
  </div>

  );
}

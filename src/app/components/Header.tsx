import {ToggleMode} from './ToggleMode'
export default function Header(){
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40"> 
    <div className="absolute right-6">

    <ToggleMode/>
    </div>

    </header>
  )
}
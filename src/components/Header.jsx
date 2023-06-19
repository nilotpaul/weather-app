import { SiGithub } from "react-icons/si"
import Link from "next/link"

const Header = () => {
  return (
<>
    <div className="
     flex
     flex-row
     items-center
     bg-gray-500
     justify-center
     m-auto
     bg-neutral-950
     text-white
    ">
      <div className="
       flex
       flex-row
       items-center
       justify-between
       w-[90%]
      ">
        <div className="
         flex
         flex-row
         items-center
         py-[9.4px]
        ">
          <Link className="flex items-center justify-start" href="/"><h2 className="font-[600] text-blue-400 text-xl">Weather</h2><h2 className="font-[600] text-[#164E63] text-xl">App</h2></Link>
        </div >
        <div className="
         flex
         flex-row
         items-center
         gap-x-8
         mr-6
        ">
          <Link href="https://github.com/nilotpaul"><ul className="border-0 rounded-full"><SiGithub className="border-0 h-7 w-7 hover:scale-[1.13] rounded-full transiton-all duration-[300ms]" /></ul></Link>
        </div>
      </div>
    </div>   
 </>   
  
  )
}

export default Header
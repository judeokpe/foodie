'use client'
import {  CloudSnowIcon, Menu, XCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const NavLink = [
    {Label:'Home', url:'/' },
    {label: 'Menu', url:'/menu'},
    {label:'Contact', url:'/contact'},
    {label:'About Us', url:'/about'},
    
  ]
  


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
   <div className="">
        <div className="cursor-pointer">
            <Menu onClick={()=>setIsOpen(true)}/>
        </div>
        {isOpen && (
             <div className="absolute top-0 w-full left-0 flex h-full  flex-col  items-center  bg-black text-yellow-700 py-20 text-2xl  ">
             <div className="">
                 <XCircle onClick={()=>setIsOpen(false)} color="white" className="absolute top-4 right-3 cursor-pointer"/>
             {NavLink.map((link)=>{
                 return(
                     <div className="" key={link.url}>
                     <Link href={link.url}  className=" hover:underline flex gap-4 flex-col">
                         {link.label}
                     </Link>
                     </div>
                 )
             })}
             </div>
         </div>
        )}
       
   </div>
  )
}

export default MobileMenu

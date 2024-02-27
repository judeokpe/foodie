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
        <div className="cursor-pointer ">
            <Menu onClick={()=>setIsOpen(true)}/>
        </div>
        {isOpen && (
             <div className="absolute z-999 top-0 bg-black w-full flex flex-col px-40 py-10 text-yellow-700 left-0 mx-auto right-10 h-screen">
             <div className="">
                 <XCircle onClick={()=>setIsOpen(false)} color="white" className="absolute top-4 right-3 cursor-pointer"/>
             {NavLink.map((link)=>{
                 return(
                     <div className="" key={link.url}>
                     <Link href={link.url}  className=" hover:underline flex gap-4 flex-col mb-4">
                         {link.label}
                     </Link>
                     
                     </div>
                 )
             })}
              <Link href='/book' className="border rounded-md bg-white border-yellow-700 hover:border-white hover:bg-yellow-700 hover:text-white p-2" >
        Book a Table
      </Link>
             </div>
         </div>
        )}
       
   </div>
  )
}

export default MobileMenu

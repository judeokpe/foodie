import Link from "next/link"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import MobileMenu from "../MobileMenu"
import { BiBasket, BiCart } from "react-icons/bi"

const NavLink = [
  {Label:'Home', url:'/' },
  {label: 'Menu', url:'/menu'},
  {label:'Contact', url:'/contact'},
  {label:'About Us', url:'/about'},
  
]


const NavBar = () => {
  const user = true;
  return (
    <div className="md:px-20 bg-black w-full border-b shadow-md md:py-4 py-4 fixed top-0 z-50 flex items-center justify-between px-4 ">
      <div className="">
        <Link href='/' className="text-yellow-700 md:text-3xl text-2xl">Foodie</Link>
      </div>

      <div className=" border-[1px] md:flex md:text-xl rounded-full px-4 items-center justify-center gap-3 hidden">
      {NavLink.map((link)=>{
        return(
          <Link className=" hover:text-yellow-700 " href={link.url} key={link.url}>
          {link.label}
        </Link>
        )
      })}
      <Link href='/book' className="hover:text-yellow-700  text-sm rounded-full border-x-[1px] px-4 border-yellow-700 p-1" >
        Book a Table
      </Link>
      </div>
      <div className="flex items-center gap-2 md:text-3xl">
     

       {!user ? 
            <Link className="md:text-xl" href={'/sign-in'}>
            <Button className="md:text-xl " variant={"ghost"}>Sign In</Button>
            </Link> : <Link className="md:text-xl "  href={'/sign-in'}>
            <Button className="md:text-xl " variant={"secondary"}>Log Out</Button>
            </Link>
       }
      
       <Link href={'/cart'} className="relative">
        <BiCart className="text-white hover:text-yellow-700" size={30}/>
        <span className=" text-sm absolute -top-2 left-4 bg-red-500  rounded-full text-center px-1">3</span>
       </Link>
      </div>

      <div className="md:hidden block">
       <MobileMenu  />
      </div>
      
    </div>
  )
}

export default NavBar

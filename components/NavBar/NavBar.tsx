import Link from "next/link"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import MobileMenu from "../MobileMenu"

const NavLink = [
  {Label:'Home', url:'/' },
  {label: 'Menu', url:'/menu'},
  {label:'Contact', url:'/contact'},
  {label:'About Us', url:'/about'},
  
]


const NavBar = () => {
  return (
    <div className="md:px-20 w-full border-b shadow-md md:py-4 py-4 fixed top-0 z-50 flex items-center justify-between px-4 ">
      <div className="">
        <Link href='/' className="text-yellow-700 md:text-3xl text-2xl">Foodie</Link>
      </div>

      <div className="md:flex md:text-xl items-center justify-center gap-3 hidden">
      {NavLink.map((link)=>{
        return(
          <Link className=" " href={link.url} key={link.url}>
          {link.label}
        </Link>
        )
      })}
      <Link href='/book' className="text-sm border  border-yellow-700 p-1" >
        Book a Table
      </Link>
      </div>
      <div className="flex items-center gap-2 md:text-3xl">
       <Link className="md:text-xl" href={'/sign-in'}>
       <Button className="md:text-xl " variant={"ghost"}>Sign In</Button>
       </Link> 
       <Link href={'/sign-up'}>
       <Button className="md:text-xl" variant={"secondary"}>Sign Up</Button>
       </Link>
      </div>

      <div className="md:hidden block">
       <MobileMenu  />
      </div>
      
    </div>
  )
}

export default NavBar

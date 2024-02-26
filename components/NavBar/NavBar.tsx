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
    <nav className="border-b shadow-md md:p-4 p-2 flex items-center justify-between">
      <div className="">
        <Link href='/' className="text-yellow-700 text-2xl">Foodie</Link>
      </div>

      <div className="md:flex items-center justify-center gap-3 hidden">
      {NavLink.map((link)=>{
        return(
          <Link className=" " href={link.url} key={link.url}>
          {link.label}
        </Link>
        )
      })}
      <Link href='/book' className="border border-yellow-700 p-1" >
        Book a Table
      </Link>
      </div>
      <div className="flex items-center gap-2">
       <Link href={'/sign-in'}>
       <Button variant={"ghost"}>Sign In</Button>
       </Link> 
       <Link href={'/sign-up'}>
       <Button variant={"secondary"}>Sign Up</Button>
       </Link>
      </div>

      <div className="md:hidden block">
       <MobileMenu  />
      </div>
      
    </nav>
  )
}

export default NavBar

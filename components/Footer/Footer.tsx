import Link from "next/link"
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi"
import { FaTwitter } from "react-icons/fa6"
import { GiBirdTwitter } from "react-icons/gi"

const Footer = () => {
  return (
    <section className=" bg-black border-t border-yellow-500">
    <div className=" p-4 md:px-20 flex items-center justify-between">
      <div className="">
      <h1 className="underline  text-yellow-500">Menu</h1>
        <Link href={'/menu'}>
          
          <h3>Eba</h3>
          <h3>Semo</h3>
          <h3>Rice</h3>
          <h3>Sphaghetti</h3>
          <h3>Ewedu</h3>

        </Link>
      </div>
      <div className="">
        <h2>Connect with Us on:</h2>
        <div className="flex flex-col gap-2 items-center justify-center ">
        <Link href={'/'} className="flex items-center justify-center gap-4"><BiLogoFacebook size={28} className=""/> <span>Facebook</span></Link>
        <Link href={'/'} className="flex items- px-2 justify-center gap-4"><FaTwitter size={28} /><span>Twitter</span></Link>
        <Link href={'/'} className="flex items-center justify-center gap-4"><BiLogoInstagram size={28}/> <span>Instagram</span></Link>
   
        </div>
        
      </div>
    </div>
    <div className="flex justify-between items-center bg-white text-gray-700 py-2 px-10">
      <p>Copywrite Foodie  &copy; 2024</p>
      <Link href={'/'}>Privacy</Link>
    </div>
    </section>
  )
}

export default Footer

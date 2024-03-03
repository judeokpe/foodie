import Image from "next/image"
import { Card, CardContent, CardDescription } from "./ui/card";



const awards = [
  {
    imgUrl: '/assets/award01.png',
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: '/assets/award02.png',
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: "/assets/award03.png",
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: '/assets/award05.png',
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const SpecialMenu = () => {
  return (
    <div>
     <div className="flex items-center justify-center gap-4 mt-6">
        <Image src={'/assets/spoon.png'} alt="spoon" height={50} width={50} />
        <p id="menu" className="text-2xl md:4xl">Special Menu</p>
        <Image src={'/assets/spoon.png'} alt="spoon" height={50} width={50}/>
     </div>
     <div className=" mt-10 flex md:flex-row flex-col items-center justify-between px-4 md:px-20">
      Menu
     </div>
    </div>
  )
}

export default SpecialMenu

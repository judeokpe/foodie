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

const FoodAwards = () => {
  return (
    <div>
     <div className="flex items-center justify-center gap-4 mt-6">
        <Image src={'/assets/spoon.png'} alt="spoon" height={50} width={50} />
        <p id="menu" className="text-2xl md:4xl">Awards</p>
        <Image src={'/assets/spoon.png'} alt="spoon" height={50} width={50}/>
     </div>
     <div className=" mt-10 flex md:flex-row flex-col items-center justify-between px-4 md:px-20">
      {awards.map((item)=>{
        return(
          <div key={item.imgUrl} className="gap-4 mt-4 text-yellow-700 flex flex-col items-center justify-center">
            
             
                <Image 
                src={item.imgUrl}
                height={200}
                width={200}  alt=""  className="flex"/>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
               
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default FoodAwards

import Image from "next/image"


const FoodMenu = () => {
  return (
    <div>
     <div className="flex items-center justify-center gap-4 mt-6">
        <Image src={'/assets/spoon.png'} alt="spoon" height={50} width={50} />
        <p id="menu" className="text-2xl md:4xl"> Special Menu</p>
        <Image src={'/assets/spoon.png'} alt="spoon" height={50} width={50}/>
     </div>
    </div>
  )
}

export default FoodMenu

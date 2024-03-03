'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Food = [
    {
        label: 'Pizza',
        id: 1,
        imageurl: '/food/food1.jpg',
        description: 'Italian Pizza with sauces',
        price: '20'
    },
    {
        id: 2,
        label: 'Burgar',
        imageurl: '/food/food2.jpg',
        price: '30',
        description: 'Italian Pizza with sauces'

    },
    {
        id: 3,
        label: 'Spaghetti',
        imageurl: '/food/food3.jpg',
        price: '33',
        description: 'Italian Pizza with sauces'
    },
    {
        id: 4,
        label: 'RIce',
        imageurl: '/food/food4.jpg',
        description: 'Italian Pizza with sauces',
        price: '50'
    },
    {
        id: 5,
        label: 'Eba',
        imageurl: '/food/food5.jpg',
        description: 'Italian Pizza with sauces',
        price: '18',

    },
    {
        id: 6,
        label: 'Fufu',
        imageurl: '/food/food6.jpg',
        description: 'Italian Pizza with sauces',
        price: '10'
    },
    {
        id: 7,
        label: 'Calamor',
        imageurl: '/food/food7.jpg',
        description: 'Italian Pizza with sauces',
        price: '23'
    },
    {
        id: 8,
        label: 'Sharwama',
        imageurl: '/food/food8.jpg',
        description: 'Italian Pizza with sauces',
        price: '25'
    },
    {
        id: 9,
        label: 'Chicken',
        imageurl: '/food/food9.jpg',
        description: 'Italian Pizza with sauces',
        price: '28'
    },
    {
        id: 10,
        label: 'Pizza',
        imageurl: '/food/food0.jpg',
        description: 'Italian Pizza with sauces',
        price: '22'
    },

]
const Featured = () => {
    const router = useRouter()
    return ( 
       <>
       <div className="text-3xl text-center text-yellow-500 px-4 md:px-20">- Our Special Menu -</div>
     
        <div className="overflow-x-scroll w-screen flex ">
            
            {Food.map((item)=>
                (
                 
                   
                    <div className="w-max  bg-white m-1 px-4 py-2" >
                        <div className="w-[30vw] h-[50vh]">
                        <div className="relative h-[30vh] w-full bg-black">
                            <Link href="/product/${id}" >
                        <Image alt="" src={item.imageurl} fill className="object-cover" />
                        </Link>
                        </div>
                       <div className="text-black">
                        <div className="">
                       <h1>{item.label}</h1>
                        <p>{item.description}</p>
                       
                        </div>
                        <div className="">
                        <h2 className="mt-2 text-rose-700">${item.price}</h2>

                            <button onClick={()=>router.push('/')} className="bg-yellow-700 p-2 w-full text-white mt-2">Add to cart</button>
                           
                        </div>
                       </div>
                       
                       </div>
                    </div>
                )
            )}
        </div>
        </>
    
     );
}
 
export default Featured;
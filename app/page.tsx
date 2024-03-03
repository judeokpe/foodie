import Hero from "@/components/Hero";
import Menu from "@/components/Awards";
import Image from "next/image";
import FoodAwards from "@/components/Awards";

import SpecialMenu from "@/components/SpecialMenu";
import FoodMenu from "@/components/food-menu";
import Featured from "@/components/Featured";



export default function Home() {
  return (
   <div className=" -z-50 overflow-x-hidden">
  < Hero/>
  <FoodAwards />

  <Featured />
  <FoodMenu />

   </div>
  );
}

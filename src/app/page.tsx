// import Image from "next/image";
import Languages from "@/component/Languages";
import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import Currency from "@/component/Currency"
import Journey from "@/component/JourneyPlanner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Journey />
      <div className="book">
        <Currency />
        <Languages />
      </div>
    </div>
  )
}

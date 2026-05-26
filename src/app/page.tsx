// import Image from "next/image";
// import HeroSection from "@/components/sections/HeroSection";
import HeroSlider from "@/components/sections/HeroSlider";
import LatestUpdate from "@/components/sections/LatestUpdate";
import AboutUs from "@/components/sections/AboutUs";
import StatsSection from "@/components/sections/StatsSection";
import AcademicPrograms from "@/components/sections/AcademicPrograms";
import Placements from "@/components/sections/Placements";
import CompanySlider from "@/components/sections/CompanySlider";
import GallerySec from "@/components/sections/GallerySec";
import NewsAndEvents from "@/components/sections/NewsAndEvents";
import Internationalization from "@/components/sections/Internationalization";




export default function Home() {
  return (
    <div>
      {/* <h1>Page</h1> */}
      {/* <HeroSection/> */}
      <HeroSlider/>
      <LatestUpdate/>
      <AboutUs/>
      <StatsSection />
      <AcademicPrograms />
      <Placements/>
      <CompanySlider/>
      <GallerySec/>
      <Internationalization/>
      <NewsAndEvents/>      
    </div>
  );
}

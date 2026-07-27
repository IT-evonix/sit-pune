// import Image from "next/image";
// import HeroSection from "@/components/sections/HeroSection";
import HeroSlider from "@/components/sections/HeroSlider";
import LatestUpdate from "@/components/sections/LatestUpdate";
import AboutUs from "@/components/sections/AboutUs";
import StatsSection from "@/components/sections/StatsSection";
import AcademicPrograms from "@/components/sections/AcademicPrograms";
// import AcademicPrograms2 from "@/components/sections/AcademicPrograms2";
import Placements from "@/components/sections/Placements";
import CompanySlider from "@/components/sections/CompanySlider";
// import GallerySec from "@/components/sections/GallerySec";
import GallerysecNew from "@/components/sections/GallerysecNew";
// import GallerysecOption from "@/components/sections/GallerysecOption";
import NewsAndEvents from "@/components/sections/NewsAndEvents";
import Internationalization from "@/components/sections/Internationalization";




export default function Home() {
  return (
    <div>
      {/* <HeroSection/> */}
      <HeroSlider/>
      {/* <Herobannervideo/> */}
      <LatestUpdate/>
      <AboutUs/>
      <StatsSection />
      <AcademicPrograms />
      {/* <AcademicPrograms2 /> */}
      <Placements/>
      <CompanySlider/>
      {/* <GallerySec/> */}
      <GallerysecNew/>
      {/* <GallerysecOption/> */}
      <Internationalization/>
      <NewsAndEvents/>      
    </div>
  );
}

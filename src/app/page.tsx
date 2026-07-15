// import Image from "next/image";
// import HeroSection from "@/components/sections/HeroSection";
import HeroSlider from "@/components/sections/HeroSlider";
import LatestUpdate from "@/components/sections/LatestUpdate";
import AboutUs from "@/components/sections/AboutUs";
import StatsSection from "@/components/sections/StatsSection";
import AcademicPrograms from "@/components/sections/AcademicPrograms";
import Placements from "@/components/sections/Placements";
import CompanySlider from "@/components/sections/CompanySlider";
// import GallerySec from "@/components/sections/GallerySec";
import GallerySec from "@/components/sections/GallerysecNew";
import NewsAndEvents from "@/components/sections/NewsAndEvents";
import Internationalization from "@/components/sections/Internationalization";
import GallerysecNew from "@/components/sections/GallerysecNew";
// import GallerysecOption from "@/components/sections/GallerysecOption";
// import AcademicPrograms2 from "@/components/sections/AcademicPrograms2";
// import Herobannervideo from "@/components/sections/Herobannervideo";

export default function Home() {
  return (
    <div>
      {/* <HeroSection/> */}
      <HeroSlider />
      {/* <Herobannervideo/> */}
      <LatestUpdate />
      <AboutUs />
      <StatsSection />
      <AcademicPrograms />
      {/* <AcademicPrograms2 /> */}
      <Placements />
      <CompanySlider />
      {/* <GallerySec/> */}
      <GallerysecNew/>
      {/* <GallerysecOption/> */}
      <Internationalization />
      <NewsAndEvents />
    </div>
  );
}

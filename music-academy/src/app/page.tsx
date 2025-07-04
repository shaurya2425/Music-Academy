import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/FeaturedWebinars";
import Instructors from "@/components/Instructors";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>    
      <Instructors/>    

    </div>
  );
}

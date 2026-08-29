import Hero from "@/components/Hero";
import Upcommingevents from "@/components/Upcommingevents";
import Videosection from "@/components/Videosection";
import MemberReviews from "@/components/MemberReviews";
import BeforeDonate from "@/components/BeforeDonate";
import Logos from "@/components/logos";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero />
     <Upcommingevents />
     <Videosection />
      <MemberReviews />
      <BeforeDonate />
      <Logos />
    </div>
  );
}

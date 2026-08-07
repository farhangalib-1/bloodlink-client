import Hero from "@/components/Hero";
import Upcommingevents from "@/components/Upcommingevents";
import Videosection from "@/components/Videosection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero />
     <Upcommingevents />
     <Videosection />
    </div>
  );
}

// no 'use client'
import Hero from "@/app/components/HeroSection/Hero";
import RoadmapSection from "@/app/components/RoadMap/Roadmap";
import JoinWhitelist from "./JoinWhitelist/JoinWhitelist";

export default function Page() {
  return (
    <>
      <Hero />
      <JoinWhitelist/>
      <RoadmapSection />
    </>
  );
}

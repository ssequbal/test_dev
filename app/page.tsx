import Image from "next/image";
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials";
import { winners } from "@/data";
import WinnerSlider from "@/components/ui/images";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Introduction from "@/components/Introduction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Analytics></Analytics>
        <SpeedInsights></SpeedInsights>
        <Hero/>
        <Navbar></Navbar>
        <Introduction></Introduction>
        <Testimonials></Testimonials>
        <div className='items-center fade-in scroll-offset ' id='winners'>
        <TextGenerateEffect   className='text-4xl items-center text-center' words='Celebrating Winners & Awards'></TextGenerateEffect>
        
          {winners.map((winner) => (
            <WinnerSlider key={winner.id} winner={winner} />
          ))}
        </div>
        <Footer></Footer>
      </div>
    </main>
  );
}

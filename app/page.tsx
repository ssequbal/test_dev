import Image from "next/image";
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials";
import { winners } from "@/data";
import WinnerSlider from "@/components/ui/images";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
        <Introduction></Introduction>
        <Testimonials></Testimonials>
        <TextGenerateEffect   className='text-4xl' words='Celebrating Winners & Awards'></TextGenerateEffect>
        <div className='items-center fade-in'>
          {winners.map((winner) => (
            <WinnerSlider key={winner.id} winner={winner} />
          ))}
        </div>
      </div>
    </main>
  );
}

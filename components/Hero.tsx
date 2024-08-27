import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton  from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa';
import { FloatingNav } from './ui/FloatingNav';
import Grid from './ui/Grid';


const Hero = () => {
  return (
    <div className=" ">
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md-top-20 hscreen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-30 left-80 h-[80vh] w-[50vw]' fill='blue'/>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">

            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>              

            </div>
            <div className='flex justify-center relative  z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-xenter text-blue-100 max-w-80'>
                         
                    </h2>
                    <br/>  
                      <TextGenerateEffect className='text-center' words='Welcome to Venture Camp'></TextGenerateEffect>
                      <img src="/logo.png" width={200} alt="Venture Camp" />
                    <br></br>
                    <p className='justify-center text-center'> At Venture Camp, we believe that every child has the potential to be a future entrepreneur. Our summer camp is designed to ignite creativity, inspire innovation, and teach essential business skills in a fun and engaging environment. Over the course of our program, your child will learn how to turn their ideas into reality, develop teamwork and leadership skills, and gain the confidence to think like an entrepreneur.</p>
                    <br/>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScIGgqEJYA-3HypgIse1bjzKy01dMOnzoICdR3dj7MzgOAWcA/viewform'>
                    <MagicButton title='Register Now' position='right' icon={<FaLocationArrow/>}></MagicButton>
                    </a>
                    <br></br>
                    <TextGenerateEffect className='' words='First Draft Summer 2024'></TextGenerateEffect>
                    <FloatingNav navItems={[{name: 'string', link: 'string', icon: <FaLocationArrow/>}]}></FloatingNav>
                    <Grid></Grid> 
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
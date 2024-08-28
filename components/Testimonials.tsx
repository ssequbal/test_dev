import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { InfiniteMovingCards } from './ui/infinitemovingcards'
import { testimonials } from '@/data'

function Testimonials() {
  return (
    <div className='flex flex-col justify-center relative  z-10 py-20'>
        <TextGenerateEffect className='text-4xl'  words='Kind Words from Our Community'></TextGenerateEffect>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col items-center relative overflow-hidden'>
            <InfiniteMovingCards items={testimonials} direction='right' speed='slow'></InfiniteMovingCards>
        </div>
    </div>
  )
}

export default Testimonials

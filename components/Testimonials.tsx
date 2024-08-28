import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { InfiniteMovingCards } from './ui/infinitemovingcards'
import { testimonials } from '@/data'

function Testimonials() {
  return (
    <div className='flex flex-col justify-center relative  py-20'>
        <TextGenerateEffect className='text-4xl'  words='Kind Words from Our Community'></TextGenerateEffect>
        <div className=' rounded-md flex flex-col items-center relative '>
            <InfiniteMovingCards items={testimonials} direction='left' speed='slow'></InfiniteMovingCards>
        </div>
    </div>
  )
}

export default Testimonials

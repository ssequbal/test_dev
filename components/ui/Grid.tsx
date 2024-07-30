import React from 'react'
import { BentoGrid } from './BentoGrid'
import { BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
//    <section id="about">
//     </section>
    <BentoGrid>
        {gridItems.map(({id,title,className,description,imgClassName,titleClassName,spareImg,img})=>(
            <BentoGridItem 
            id={id}
            key={id}
            title={title}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            description={description}/>
        ))}
    </BentoGrid>
   
  )
}

export default Grid
import { PropsWithChildren } from "react"

export const HeroOrbit=({children ,size,rotation }:PropsWithChildren<{size:number; rotation:number;}>)=>{
    return(
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='border border-green-500 size-[800px]' style={{
        transform:`rotate(${rotation}deg)`,
        height:`($(size)px)`,
        width:`$(size)px`,
      }}> {/**the outerbox animation is wrapped under another div so it would not collide with another */}
      <div className='border border-red-500 inline-flex'> 
        {children}
      </div>
      </div>
      </div>
    )
}
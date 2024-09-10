import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
export const HeroSection = () => {
  return (
    <div className='py-[90px]  md:py-48 lg:py-48  relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 -z-50 h-screen opacity-5'style={{backgroundImage:`url(${grainImage.src})`,top:'0'}}></div>
      <div  className='size-[620px] hero-ring'></div>
      <div  className='size-[820px] hero-ring'></div>
      <div  className='size-[1020px] hero-ring'></div>
      <div  className='size-[1220px] hero-ring '></div>
      <HeroOrbit size={800} rotation={45}>
        <StarIcon className='size-28 text-emerald-300' />
      </HeroOrbit>
      <div className="container mx-auto">
        <div className='flex flex-col items-center overflow-hidden'>
          <Image src={memojiImage} className='w-[100px]' alt='person peeking from behind the laptop' />
          <div className='bg-gray-950 border border-gray-700 px-4 py-[8px] inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 w-2.5 h-2.5 rounded-full'></div>
            <div className='text-sm font-medium'> Available for new projects</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide font-light'>
            Building exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional, high-performance web applications. Let&apos;s discuss your next project.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='w-4 h-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>✌️</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div> 
  );
};

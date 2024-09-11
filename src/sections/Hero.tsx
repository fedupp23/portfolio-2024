import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
export const HeroSection = () => {
  return (
    <div className='py-[90px]  md:py-48 lg:py-48  relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 -z-50 h-screen opacity-5'style={{backgroundImage:`url(${grainImage.src})`,top:'0'}}></div>
      <div  className='size-[620px] hero-ring'></div>
      <div  className='size-[820px] hero-ring'></div>
      <div  className='size-[1020px] hero-ring'></div>
      <div  className='size-[1220px] hero-ring '></div>
      {/* <div  className='size-[1440px] hero-ring '></div> */}
      {/* <div  className='size-[1600px] hero-ring '></div> */}
      <HeroOrbit size={910} rotation={-32}>
        <StarIcon className='size-[100px] text-emerald-300' />
      </HeroOrbit>
      <HeroOrbit size={950} rotation={15}>
        <StarIcon className='size-12 text-emerald-300' />
      </HeroOrbit>
      <HeroOrbit size={910} rotation={140}>
        <StarIcon className='size-8 text-emerald-300' />
      </HeroOrbit>
      <HeroOrbit size={810} rotation={-130}>
        <SparkleIcon className='size-8 text-emerald-300' />
      </HeroOrbit>
      <HeroOrbit size={640} rotation={48}>
        <SparkleIcon className='size-5 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit size={990} rotation={179}>
        <SparkleIcon className='size-16 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={110}>
        <div className='size-3 rounded-full bg-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit size={620} rotation={-12}>
        <div className='size-2 rounded-full bg-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit size={850} rotation={45}>
        <div className='size-2 rounded-full bg-emerald-300/20' />
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

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/coding.gif';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-1 flex items-center py-0'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-5 gap-8'>
        <div className='col-span-3'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
          I like to resolve design problems, create smart user interface and 
          imagine useful interaction, developing rich web experiences.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full col-span-2 h-auto m-auto  rounded-xl flex items-center justify-center p-1 ease-in duration-300'>
          <Image src={AboutImg}  className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

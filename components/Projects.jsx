import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/shop.png';
import cryptoImg from '../public/assets/projects/youtube.png'
import netflixImg from '../public/assets/projects/newsapp.png'
import twitchImg from '../public/assets/projects/imbd.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Fakeshop'
            backgroundImg={propertyImg}
            projectUrl='/fakeshop'
            tech='React JS'
          />
          <ProjectItem
            title='Youtube Clone'
            backgroundImg={cryptoImg}
            projectUrl='/youtube'
            tech='React JS'

          />
          <ProjectItem
            title='News App'
            backgroundImg={netflixImg}
            projectUrl='/news-app'
            tech='Next JS'

          />
          <ProjectItem
            title='IMBD Clone'
            backgroundImg={twitchImg}
            projectUrl='/imbd'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

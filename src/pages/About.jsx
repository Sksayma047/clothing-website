import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}alt="" />
        <div className='flex flex-col gap-6 text-gray-600 justify-center md:w-2/4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni minus quos reiciendis harum magnam eius sed. Beatae, dignissimos sed. Perspiciatis consectetur maxime, labore libero repellat cumque dolorum commodi laudantium?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nam quis! Et explicabo consectetur totam, sint fuga numquam rem repellat optio corporis nisi! Ad, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, impedit.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quae qui iure laudantium nesciunt, cupiditate neque nam dignissimos accusamus quos laboriosam magnam doloremque soluta dicta harum beatae enim eius quis.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima impedit ratione maiores sapiente nostrum, numquam ducimus magnam aperiam, facere molestiae asperiores eligendi labore placeat. Placeat illo doloremque numquam et!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime delectus incidunt praesentium nemo nesciunt repellat et ullam, est eum distinctio reprehenderit omnis odit explicabo corrupti ab corporis esse soluta?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service</b>
        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima impedit ratione maiores sapiente nostrum, numquam ducimus magnam aperiam, facere molestiae asperiores eligendi labore placeat. Placeat illo doloremque numquam et!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About

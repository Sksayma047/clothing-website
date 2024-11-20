// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div >
//       <div className='text-center  text-2xl pt-10 border-t'>
//         <Title text1={'CONTACT'} text2={'US'}/>
//       </div>
//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img  className='w-full md:max-w-[480px]'  src={assets.contact_img} alt="" />
//         <div className='flex flex-col justify-center items-center gap-6'>
//         <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//         <p className=' text-gray-500  '>54564 Willms Station <br /> Suite 350, Washington, USA </p>
//         <p className='text-gray-500'>Tel: (415) 555-0234 <br /> Email: admin@moonlight.com</p>
//         <p className='font-semibold text-xl text-gray-600'>Careers at moonlight</p>
//         <p className=' text-gray-500  '>Learn more about our teams and job openings. </p>
//         <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>
//       <NewsletterBox/>
//     </div>
//   )
// }

// export default Contact





import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="px-2 sm:px-6 lg:px-10">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col items-center md:flex-row gap-10 mb-28">
        <img
          className="w-full max-w-xs sm:max-w-md md:max-w-lg"
          src={assets.contact_img}
          alt="Contact"
        />
        <div className="flex flex-col justify-center items-center gap-6 text-center md:items-start md:text-left">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54564 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0234 <br /> Email: admin@moonlight.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Careers at Moonlight</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact















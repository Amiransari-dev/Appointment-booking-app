import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 hover:bg-gray-100 rounded hover:text-black transition-all duration-300 text-gray-600 cursor-pointer px-1 py-1'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>226028 Indra Canal Fiazabad Road <br />  Lucknow, India </p>
          <p className=' text-gray-500'>Tel: +91-757-195-3107, <br /> Email:appointix@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT Appointix</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact

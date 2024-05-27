import React from 'react'
import imageSady from '../assets/images/job.png'
const About = () => {
  const info = [
    {text : "Years of Experience", count: "02"},
    {text : "Projects Completed", count: "27"},
    {text : "Companies Worked", count: "01"},
  ]
  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My Introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
        <div className='p-2'>
          <div className='text-gray-300 my-3'>
            <p className='text-justify leading-7 max-w-lg mx-auto'>
            I am a seasoned full-stack web developer with a wealth of experience and a proven track record of success. With over 2 years in the industry, I have completed 27 projects, working collaboratively with top-tier companies. My commitment to excellence is unwavering, and I approach each new challenge with passion and enthusiasm. Armed with strong analytical skills and expertise across various domains, I am well-equipped to help you achieve your project objectives. I am confident that our collaboration will deliver mutually beneficial results.
            </p>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-7 mt-10'>
              {info.map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                    {item.count}<span className='text-cyan-600'>+</span>
                  </h3>
                  <span className='md:text-base text-xs'>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="./src/assets/cv.pdf" download>
                <button className='btn-primary'>Download Cv</button>
              </a>
            </div>
          </div>
        </div>


          <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
              <img src={imageSady} alt="sady_ns" className='w-full object-cover bg-cyan-600 rounded-xl' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
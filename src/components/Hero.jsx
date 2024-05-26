import React from 'react'
import SadyNs from '../assets/images/SadyNs.png'
const Hero = () => {
  const media =[
    {
      id: 1,
      name: "Github",
      icon: "logo-github",
      link: "https://github.com/sadi98"
    },
    {
      id: 2,
      name: "Linkedin",
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/sadyns/"
    },
    {
      id: 3,
      name: "Instagram",
      icon: "logo-instagram",
      link: "https://www.instagram.com/sady_ns/"
    },
    {
      id: 4,
      name: "WhatsApp",
      icon: "logo-whatsapp",
      link: "https://wa.me/6281288130098"
    },
  ];
  return (
    <section id='home' 
      className='min-h-screen flex py-10 md:flex-row flex-col items-center'
      >
      <div className='flex-1 flex items-center justify-center h-full'>
        <img src={SadyNs} alt="myprofile" className='md:w-11/12 h-full object-cover' />
      </div>
      <div className="flex-1">
        <div className='md:text-left text-center'>
          <h1 className='md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-5xl text-4xl'>
              Hello
              <br />
            </span>
            My Name is <span>Sadi Nur Sholeihin</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-400'>Fullstack Developer</h4>
          <button className='btn-primary mt-8'>Contact Me</button>
          <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
            {
              media.map((item) => (
                <div key={item} className='text-gray-400 hover:text-white cursor-pointer'>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className='hover:text-white'>
                    <ion-icon name={item.icon}></ion-icon>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
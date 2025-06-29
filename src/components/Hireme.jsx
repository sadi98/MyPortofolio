import React from 'react'
import myFoto from '../assets/images/sadynurs.png'
const Hireme = () => {
  const phoneNumber = '6281288130098';
  const message = `
  Do you want any work from me?
  I am available to help you with your projects. Whether you need assistance with development, design, or any other tasks, I am here to provide the support you need. Let's collaborate and bring your ideas to life!
  `;

  const handleWhatsAppRedirect = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };
  return (
    <section id="hireme" className="py-10 text-white px-3">
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          Hire <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Do you have a project ?</p>
      </div>
      <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
      <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I am available to help you with your projects. Whether you need assistance with development, design, or any other tasks, I am here to provide the support you need. Let's collaborate and bring your ideas to life!
          </p>
          <button className="btn-primary mt-10" onClick={handleWhatsAppRedirect}>
            Say Hello
          </button>
        </div>
        <img
          src={myFoto}
          alt="sady nur sholeihin"
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  )
}

export default Hireme
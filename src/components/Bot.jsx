import React from 'react';

const Bot = () => {
  const phoneNumber = '081288130098';
  const message = `
    Hi Sadi Nur Sholeihin!
    I just visited your website and I'm really impressed with your work. I would love to discuss how we can collaborate on some exciting projects. Let's connect and explore the possibilities!
  `;

  const handleWhatsAppRedirect = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div
      onClick={handleWhatsAppRedirect}
      className='fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce'
    >
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    </div>
  );
};

export default Bot;

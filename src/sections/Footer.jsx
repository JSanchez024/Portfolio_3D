import React from 'react';

export const Footer = () => {


  return (
    <section className='c-space p-5 border-t border-black flex flex-wrap justify-between'>
        <div className='text-white flex text-medium font-bold'>
            <p className='pb-2'>Joaquin Sanchez Suazo &nbsp;</p>
            <p>&nbsp;|&nbsp;</p>
            <p className='pb-2'>&copy; {new Date().getFullYear()} Jsanchezs</p>
            
        </div>
        <div className='flex gap-3 self-center justify-center items-center'>
            <div className='social-icon'>
                <img src="/assets/github.svg" alt="Github" />
            </div>
            <div className='social-icon'>
                <img src="/assets/linkedin.png" alt="Linkedin" />
            </div>
        </div>

        <p className='font-semibold text-white'>&nbsp;joaquin.sanchez.suazo@gmail.com</p>
    </section>
  )
}
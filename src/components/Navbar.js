/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar() {
  return (
    <>
      <header>
        <div className='md:container px-8'>
          <nav className='flex justify-between items-center h-[96px]'>
            <div className='brand'>
              <div className='wrapper-image md:w-[207px] md:h-[50px] w-[150px] h-[36px]'>
                <img
                  src='./images/elemes-logo.svg'
                  alt='brand'
                  className='w-full'
                />
              </div>
            </div>
            <div className='navigation w-[38%] hidden md:block'>
              <ul
                className='flex flex-end gap-7 justify-evenly items-center text-[#757575] font-medium
              '>
                <li>
                  <a
                    href='#'
                    rel='noreferrer noopener'
                    className='hover:text-black transition duration-500 ease-in-out'>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    rel='noreferrer noopener'
                    className='hover:text-black transition duration-500 ease-in-out'>
                    About
                  </a>
                </li>
                <li className='relative'>
                  <p className='absolute -top-5 -right-3 px-3 py-1 bg-red-500 text-white text-[8px] rounded-xl'>
                    HOT
                  </p>
                  <a
                    href='#'
                    rel='noreferrer noopener'
                    className='hover:text-black transition duration-500 ease-in-out'>
                    Promotions
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    rel='noreferrer noopener'
                    className='hover:text-black transition duration-500 ease-in-out'>
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    rel='noreferrer noopener'
                    className='hover:text-black transition duration-500 ease-in-out'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className='button-group'>
              <a
                href='#'
                rel='noreferrer noopener'
                className='hover:text-[#757575] transition duration-300 ease-in-out text-black font-medium md:inline-block hidden'>
                Masuk
              </a>
              <button className='w-[147px] h-[42px] py-2 px-4 bg-dark-green-500 text-white rounded-3xl ml-0 md:ml-5 hover:bg-[#6f9321] text-sm transition duration-500 ease-in-out'>
                Daftar Sekarang
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

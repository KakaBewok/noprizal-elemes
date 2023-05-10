/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <section>
      <div className='px-8 md:container mt-[150px] '>
        <div className='h-[359] py-[74px] px-[22px] flex-row justify-between md:flex hidden'>
          <div className='address w-[335px]'>
            <img src='./images/elemes-logo.svg' alt='brand' />
            <p className='text-[14px] font-medium leading-[20px] text-[#757575] mt-[21px]'>
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
            <div className='w-full flex flex-wrap gap-3 mt-[31px]'>
              <img
                src='/images/icons/email.png'
                alt='email'
                className='w-[19px] h-[19px]'
              />
              <img
                src='/images/icons/tlp.png'
                alt='telpon'
                className='w-[19px] h-[19px]'
              />
              <img
                src='/images/icons/ig.png'
                alt='instagram'
                className='w-[19px] h-[19px]'
              />
            </div>
          </div>
          <div className='categories flex flex-col gap-5 w-[102px]'>
            <h4 className='font-medium text-[18px] leading-[24px]'>
              Categories
            </h4>
            <ul className='flex flex-col gap-3 text-[14px] font-normal leading-[16px]'>
              <li>
                <a href='#'>Cupcake</a>
              </li>
              <li>
                <a href='#'>Pizza</a>
              </li>
              <li>
                <a href='#'>Kebab</a>
              </li>
              <li>
                <a href='#'>Salmon</a>
              </li>
              <li>
                <a href='#'>Doughnut</a>
              </li>
            </ul>
          </div>
          <div className='aboutus flex flex-col gap-5 w-[102px]'>
            <h4 className='font-medium text-[18px] leading-[24px]'>About Us</h4>
            <ul className='flex flex-col gap-3 text-[14px] font-normal leading-[16px]'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#'>Report Problem</a>
              </li>
            </ul>
          </div>
          <div className='newsletter flex flex-col gap-5 w-[245px]'>
            <h4 className='font-medium text-[18px] leading-[24px]'>
              Newsletter
            </h4>
            <ul className='flex flex-col gap-5 text-[14px] font-normal leading-[16px]'>
              <li>
                Get now free 50% discount for alll products on your first order
              </li>
              <li>
                <div className='flex relative '>
                  <button className='rounded-l-md inline-flex  items-center px-3 border-t border-l border-b  border-gray-300 shadow-sm text-sm bg-dark-green-500 text-white'>
                    SEND
                  </button>
                  <input
                    type='text'
                    id='email-with-icon'
                    className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    name='email'
                    placeholder='Your email'
                  />
                </div>
              </li>
              <li className='flex flex-row gap-2'>
                <img
                  src='/images/icons/email.png'
                  alt='email'
                  className='w-[19px] h-[19px]'
                />
                <span className='font-medium text-[14px] leading-[24px]'>
                  elemesid@gmail.com
                </span>
              </li>
              <li className='flex flex-row gap-2'>
                <img
                  src='/images/icons/tlp.png'
                  alt='telpon'
                  className='w-[19px] h-[19px]'
                />
                <span className='font-medium text-[14px] leading-[24px]'>
                  0888 1111 2222
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-row justify-between mb-7 w-full md:hidden'>
          <div className='text-center'>
            <button class='flex items-center px-3 py-2 rounded text-gray-500 border-gray-500 hover:text-gray-700 hover:border-gray-700 w-[39px] h-[39px]'>
              <svg
                class='w-4 h-4 fill-current'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 7h20v2H0V10zm0 7h20v2H0v-2z' />
              </svg>
            </button>
            <p className='font-medium text-[14px] leading-[24px]'>Home</p>
          </div>
          <div className='text-center'>
            <button class='flex items-center px-3 py-2 rounded text-gray-500 border-gray-500 hover:text-gray-700 hover:border-gray-700 w-[39px] h-[39px]'>
              <svg
                class='w-4 h-4 fill-current'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 7h20v2H0V10zm0 7h20v2H0v-2z' />
              </svg>
            </button>
            <p className='font-medium text-[14px] leading-[24px]'>Promotions</p>
          </div>
          <div className='text-center'>
            <button class='flex items-center px-3 py-2 rounded text-gray-500 border-gray-500 hover:text-gray-700 hover:border-gray-700 w-[39px] h-[39px]'>
              <svg
                class='w-4 h-4 fill-current'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 7h20v2H0V10zm0 7h20v2H0v-2z' />
              </svg>
            </button>
            <p className='font-medium text-[14px] leading-[24px]'>Other</p>
          </div>
        </div>

        <p className='my-3 text-center text-[12px] leading-[16px] font-medium text-[#757575] md:block hidden'>
          © 2021 Elemes id. All rights reserved
        </p>
      </div>
    </section>
  );
}

export default Footer;

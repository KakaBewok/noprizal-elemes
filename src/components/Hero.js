/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Hero() {
  return (
    <>
      <section className='hero mt-[45px] md:mt-[90px]'>
        <div className='px-8 md:container flex flex-row justify-between items-center'>
          <div className='content w-[482px] h-[287]'>
            <h1 className='font-medium text-dark-green-500 text-[48px] md:text-[64px] leading-[64px] mb-8'>
              Good Food Us
              <br />
              Good Mood
            </h1>
            <div className='hero-image'>
              <div className='wrapper-image md:w-[412px] md:h-[415px] w-[199px] h-[200px] md:hidden mt-16 mb-24'>
                <img
                  src='./images/hero-image.png'
                  className='w-full'
                  alt='Hero'
                />
                <div className='top-menu w-[292px] h-[93px] shadow-lg bg-white bg-opacity-80 rounded-md relative bottom-14 -right-14 flex flex-row p-6 items-center'>
                  <div className='image-wrapper h-[53px] w-[53px]'>
                    <img
                      src='./images/top-menu.png'
                      alt='Top Menu'
                      className='w-full'
                    />
                  </div>
                  <div className='content ml-[19px] flex flex-col gap-1'>
                    <h3 className='text-[14px]  font-semibold'>
                      Green Salad Tomato
                    </h3>
                    <p className='text-[12px]  font-normal text-[#757575]'>
                      Tomato
                    </p>
                    <div className='flex flex-row gap-2 mt-1'>
                      <img
                        src='./images/star-fill.png'
                        alt='star'
                        className='w-[13px] h-[13px]'
                      />
                      <img
                        src='./images/star-fill.png'
                        alt='star'
                        className='w-[13px] h-[13px]'
                      />
                      <img
                        src='./images/star-fill.png'
                        alt='star'
                        className='w-[13px] h-[13px]'
                      />
                      <img
                        src='./images/star-fill.png'
                        alt='star'
                        className='w-[13px] h-[13px]'
                      />
                      <img
                        src='./images/star.png'
                        alt='star'
                        className='w-[13px] h-[13px]'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className='font-normal text-[18px] leading-[29px] text-[#757575] mb-[32px]'>
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
            <div className='button-group '>
              <button className='py-2 px-4 bg-dark-green-500 text-white rounded-3xl  hover:bg-[#6f9321] text-sm transition duration-500 ease-in-out'>
                Daftar Sekarang
              </button>
              <a
                href='#'
                rel='noreferrer noopener'
                className='hover:text-[#757575] transition duration-300 ease-in-out text-black font-medium ml-5'>
                About Us
              </a>
            </div>
          </div>
          <div className='hero-image'>
            <div className='wrapper-image md:w-[412px] md:h-[415px] w-[199px] h-[200px] hidden md:block'>
              <img
                src='./images/hero-image.png'
                className='w-full'
                alt='Hero'
              />
              <div className='top-menu w-[292px] h-[93px] shadow-lg bg-white bg-opacity-80 rounded-md relative bottom-14 right-32 flex flex-row p-6 items-center'>
                <div className='image-wrapper h-[53px] w-[53px]'>
                  <img
                    src='./images/top-menu.png'
                    alt='Top Menu'
                    className='w-full'
                  />
                </div>
                <div className='content ml-[19px] flex flex-col gap-1'>
                  <h3 className='text-[14px]  font-semibold'>
                    Green Salad Tomato
                  </h3>
                  <p className='text-[12px]  font-normal text-[#757575]'>
                    Tomato
                  </p>
                  <div className='flex flex-row gap-2 mt-1'>
                    <img
                      src='./images/star-fill.png'
                      alt='star'
                      className='w-[13px] h-[13px]'
                    />
                    <img
                      src='./images/star-fill.png'
                      alt='star'
                      className='w-[13px] h-[13px]'
                    />
                    <img
                      src='./images/star-fill.png'
                      alt='star'
                      className='w-[13px] h-[13px]'
                    />
                    <img
                      src='./images/star-fill.png'
                      alt='star'
                      className='w-[13px] h-[13px]'
                    />
                    <img
                      src='./images/star.png'
                      alt='star'
                      className='w-[13px] h-[13px]'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

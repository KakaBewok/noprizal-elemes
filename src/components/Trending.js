import React from "react";
import trending from "../data/trending";

function Trending() {
  return (
    <>
      <section>
        <div className='px-8 md:container'>
          <div className='title mt-[75px]'>
            <h2 className='text-[#333333] font-medium text-[24px] md:text-[38px] leading-[30px] md:leading-[50px]'>
              Browser Our Trending
              <br />
              <span className='text-dark-green-500'>Receipt</span>
            </h2>
          </div>
          <div
            className='cards mt-[43px] w-full flex flex-row flex-wrap gap-5
          '>
            {trending.map((data) => {
              const { name, bgColor, imgUrl, category } = data;
              return (
                <div
                  className={`${bgColor} w-full md:w-[257px] h-[304px] rounded-md shadow-md flex flex-col justify-center items-start hover:opacity-70 transition-all duration-300 cursor-pointer `}>
                  <div className='content-wrapper  ml-5'>
                    <div className='h-[118px] w-[120px]'>
                      <img
                        src={imgUrl}
                        alt={name}
                        className='w-full rounded-md'
                      />
                    </div>
                    <h4 className='text-[23px] font-semibold text-[#333333] mt-[1rem] leading-[50px] '>
                      {name}
                    </h4>
                    <p className='text-[18px] font-medium leading-[21px] text-dark-green-500'>
                      {category}
                    </p>

                    <div className='flex flex-row gap-2 mt-3'>
                      <img
                        src='./images/star-fill.png'
                        alt='star'
                        className='w-[12px] h-[12px]'
                      />
                      <img
                        src='./images/star-fill.png'
                        alt='star'
                        className='w-[12px] h-[12px]'
                      />
                      <img
                        src='./images/star-fill.png'
                        alt='star'
                        className='w-[12px] h-[12px]'
                      />
                      <img
                        src='./images/star-fill.png'
                        alt='star'
                        className='w-[12px] h-[12px]'
                      />
                      <img
                        src='./images/star.png'
                        alt='star'
                        className='w-[12px] h-[12px]'
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='md:flex justify-center items-center mt-[3rem] hidden'>
            <button
              type='button'
              className='w-[160px] h-[50px] bg-dark-green-500 rounded-3xl text-white text-[1rem]'>
              All Receipt
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trending;

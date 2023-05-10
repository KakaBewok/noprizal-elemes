import React from "react";
import category from "../data/category";

function Category() {
  return (
    <>
      <section>
        <div className='px-8 md:container'>
          <div className='title mt-[75px]'>
            <h2 className='text-[#333333] font-medium text-[24px] md:text-[38px] leading-[30px] md:leading-[50px]'>
              Browser Our Category
              <br />
              <span className='text-dark-green-500'>Receipt</span>
            </h2>
          </div>
          <div
            className='cards h-[215px] mt-[43px] w-full flex flex-row flex-nowrap gap-3 overflow-x-hidden scrollbar-hide
          '>
            {category.map((data) => {
              const { name, bgColor, imgUrl, stock } = data;
              return (
                <div
                  className={`${bgColor} w-[230px] h-[175px] rounded-md shadow-md flex flex-col justify-center items-center hover:opacity-70 hover:h-[195px] transition-all duration-300 cursor-pointer flex-shrink-0 flex-grow-0`}>
                  <img src={imgUrl} alt={name} className='w-[52px] h-[47px]' />
                  <h4 className='text-[1rem] font-medium text-[#333333] mt-[1rem] '>
                    {name}
                  </h4>
                  <p className='text-[14px] font-normal leading-[16px] text-[#333333]'>
                    {stock}
                  </p>
                </div>
              );
            })}
          </div>
          <div className='md:flex justify-end ml-auto mt-[20px] hidden'>
            <button type='button' className='mr-2'>
              <img
                src='/images/icons/prev.png'
                alt='previous'
                className='w-[113px] h-[50px]'
              />
            </button>
            <button type='button'>
              <img
                src='/images/icons/next.png'
                alt='next'
                className='w-[113px] h-[50px]'
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;

import React from "react";

function Footer() {
  return (
    <section>
      <div className='container'>
        <div className='h-[359] py-[74px] px-[62px]'>
          <div className='address w-[335px]'>
            <img src='./images/elemes-logo.svg' alt='brand' />
            <p className='text-[14px] font-medium leading-[20px] text-[#757575] mt-[21px]'>
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
            <div className='w-full flex flex-wrap gap-3 mt-[21px]'>
              <img
                src='/images/icons/email.png'
                alt='email'
                className='bg-dark-green-500'
              />
              <img src='/images/icons/tlp.png' alt='telpon' />
              <img src='/images/icons/ig.png' alt='instagram' />
            </div>
          </div>
          <div className='categories'>category</div>
          <div className='aboutus'>aboutus</div>
          <div className='newsletter'>newsletter</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

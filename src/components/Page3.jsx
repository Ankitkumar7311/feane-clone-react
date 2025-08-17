import React from 'react'
import imagee from '../assets/footer-img.png'

const Page3 = () => {
  return <>
  
  <section className='h-[100vh] w-[100vw] bg-[#222831] mt-[90px] flex text-white'>

    <img src={imagee} alt="" className='h-[44rem] w-[32rem] m-[80px]  pl-[3rem] pt-30 ' />
    
  <section className=' text-xl  bottom-[300px] left-[11%] mt-[22rem] '>
        <h1 className='dance text-[3rem]  text-base/20  text-white '> We Are Feane </h1>

        <p className='text-[16px] text-base/6' > There are many variations of passages of Lorem Ipsum available, but the <br />
         majority have suffered alteration in some form, by injected humour, or <br />
          randomised words which don't look even slightly believable. If you are  <br /> going to use a passage of Lorem Ipsum, you need to be sure there isn't <br />
           anything embarrassing hidden in the middle of text. All.</p>
       
          <button className="mt-[17px] bg-yellow-400 text-white px-3 py-2 rounded-full
               font-semibold hover:bg-yellow-500 transition">
                 Order Online
              </button>
      </section>

  </section>

  
  </>
}

export default Page3

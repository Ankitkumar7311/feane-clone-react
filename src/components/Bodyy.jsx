// import React from 'react'
// import burger from '../assets/feane-logo.jpg'

// const Bodyy = () => {
//   return <>

//     <main className='h-[100vh] w-[100vw] '>
//       <img src={burger} alt="" className=' z-1 h-[90%] w-full' />

//       <section className='text-white text-xl absolute top-[37%] left-[11%] '>
//         <h1 className='dance text-[3rem] bg-white-100 text-base/20 '>Fast Food Restaurant </h1>

//         <p className='text-[14px] text-base/7' > Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad  <br />
//           mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, <br />
//           labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
       
//           <button className="mt-[14px] bg-yellow-400 text-white px-3 py-2 rounded-full
//                font-semibold hover:bg-yellow-500 transition">
//                  Order Online
//               </button>
//       </section>
//     </main>

//   </>
// }

// export default Bodyy

import React, { useEffect } from 'react'
import burger from '../assets/feane-logo.jpg'
import { gsap } from "gsap";

const Bodyy = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

   
    tl.fromTo(".hero-title",
      { x: -400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 ,stagger: 0.9 }
    )
  
    .fromTo(".hero-para",
     
      { y: -400, opacity: 0,  duration:2 },
      { y: 0, opacity: 1, duration: 2, stagger: 0.9 , rotate:360 },
      "-=0.5"  
    )
  
    .fromTo(".hero-btn",
    { x: -1500 },
    { x: 0, opacity: 1, duration: 1 ,stagger: 0.9 },
      { scale: 1.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.5, ease: "back.out(1.7)" , stagger: 0.9 },
      "-=0.3"
    );
  }, []);

  return <>
    <main className='h-[100vh] w-[100vw] '>
      <img src={burger} alt="" className='z-1 h-[90%] w-full' />

      <section className='text-white text-xl absolute top-[37%] left-[11%] '>
        <h1 className='hero-title dance text-[3rem] bg-white-100 text-base/20'>
          Fast Food Restaurant
        </h1>

        <p className='hero-para text-[14px] text-base/7'>
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad  <br />
          mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, <br />
          i want to add animation in h1 and para with button and do some animation with your own side but no need to change code <br />
          labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
        </p>

        <button className="hero-btn mt-[14px] bg-yellow-400 text-white px-3 py-2 rounded-full
               font-semibold hover:bg-yellow-500 transition">
          Order Online
        </button>
      </section>
    </main>
  </>
}

export default Bodyy


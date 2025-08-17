import React from 'react'

const Form = () => {
    return <>

        <section className=' ml-30 mt-40'>
            <h1 className='dance text-[3rem] bg-white-100 text-base/20 '>Fast Food Restaurant </h1> <br /><br />
            <input type="text" placeholder='&nbsp; &nbsp;Your Name' className='   border-1 h-14 w-150 rounded-[10px]'/>  <br /><br />
            <input type="text" placeholder='&nbsp; &nbsp;Phone Number' className='border-1 h-14 w-150 rounded-[10px]'/>   <br /><br />
            <input type="text" placeholder='&nbsp; &nbsp;Your Email' className='  border-1 h-14 w-150 rounded-[10px] '/>    <br /><br />
            <input type="text" placeholder='&nbsp; &nbsp;How many persons?' className='border-1 h-14 w-150 rounded-[10px] '/>    <br /><br />
            <input type="date"  className='border-1 h-14 w-150 rounded-[10px] '/>
         <br /><br />   <button className="mt-[17px] bg-yellow-400 text-white px-5 py-3 rounded-full
               font-semibold hover:bg-yellow-500 transition">
                 Order Online
              </button>
  <br /><br /><br /><br />
        </section>

    </>
}

export default Form

import React, { useState } from 'react'

const ReedemloyaltyPoints = () => {

    const vendors = ["customer 1", "customer 2", "customer 3"]
    return (
        <div>

            <div className='p-[5%]'>

                <h1 style={{ textAlign: 'center', fontWeight: 'bold' }} className='py-6'>Reedem Loyalty Points</h1>
                <div className='flex justify-around'>
                    {/* <div style={{ display: 'flex', justifyContent: 'space-evenly' ,textAlign:'center', marginTop:'40px',alignItems:'center' }}> */}

                    <div className='pl-[5vh]'>

                        <label htmlform="vendor" className=''>Customer:</label>
                        <select id="vendor" className='w-[40vh] border-2 p-2 border-black  ml-3 '>
                            {vendors.map((vendor) => (
                                <option key={vendor} value={vendor}>{vendor}</option>
                            ))}
                        </select>
                    </div>


                    <div className='flex justify-center pl-4' >
                        {/* <label htmlform="userId" className='px-3'>Customer Name:</label>
                        <input type="text" id="userId" placeholder='Customer name' className='border-2 p-2 border-black ' /> */}
                        <label htmlFor="customer" className='px-4 justify-center align-center pt-2'>Customer Name:</label>
                        <form className="flex items-center justify-between">

                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-white border border-gray-950 text-black-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-black-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Customer" required />
                            </div>
                            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLineCap="round" strokeLineJoin="round" strokeLineWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="w-full flex justify-between text-center  py-9 px-[23vh]">
                    <div>

                        <label htmlform="city" className='px-3'>city:</label>
                        <input type="text" id="city" className='border-2  p-2 border-black ' placeholder='pick from customer table' />
                    </div>
                    <div>

                        <label htmlform="country" className='px-3'>Country:</label>
                        <input type="text" id="country" className='border-2  p-2 border-black ' placeholder='pick from customer table' />
                    </div>
                </div>
                <div className="w-full flex justify-between text-center py-7 px-[17vh]">
                    <div>

                        <label htmlform="city" className='px-3'>Telephone:</label>
                        <input type="text" id="city" className='border-2  p-2 border-black ' placeholder='pick from customer table' />
                    </div>
                    <div className='pr-[7vh]'>
                        <label htmlform="country" className='px-3'>Email:</label>
                        <input type="text" id="country" className='border-2  p-2 border-black ' placeholder='pick from customer table' />
                    </div>
                </div>
                <div className="w-full flex justify-between text-center py-7 px-[17vh]">
                    <div>

                        <label htmlform="city" className='px-3'>Total Point:</label>
                        <input type="text" id="city" className='border-2  p-2 border-black ' placeholder='pick from customer table' />
                    </div>
                    <div className='pr-[7vh]'>
                        <label htmlform="country" className='px-3'>Reedem:</label>
                        <input type="text" id="country" className='border-2  p-2 border-black ' placeholder='pick from customer table' />
                    </div>
                </div>
                <div className="w-full flex justify-between text-center py-7 px-[17vh]">
                    <div>

                        <label htmlform="city" className='px-3'>Reference:</label>
                        <input type="text" id="city" className='border-2  p-2 border-black ' placeholder='pick from customer table' />
                    </div>
                    <div className='pr-[7vh]'>

                        <label htmlform="country" className='px-3'>Description:</label>
                        <input type="text" id="country" className='border-2  p-2 border-black ' placeholder='pick from customer table' />
                    </div>
                </div>

                {/* <div className=' w-full mb-9'>
                    <div className='w-full py-4 flex justify-around'>

                        <div className='w-[40%]'>
                            <label htmlform="telephone" className='px-3'>Telephone:</label>
                            <input type="text" id="Telephone" className='border-2  p-2 border-black ' placeholder='pick from customer table' />
                        </div>
                        <div>
                            <label htmlform="poNumber" className='px-3'>Email:</label>
                            <input type="text" id="poNumber" className='border-2 p-2 border-black ' placeholder='pick from customer table' />
                        </div>
                    </div>
                    <div className='w-full flex justify-around'>
                        <div className='w-[40%]'>


                            <label htmlform="totalPoint" className='px-3'>Total Points:</label>
                            <input type="text" id="totalPoint" className='border-2  p-2 border-black ' placeholder='calculted from loyalty' />
                        </div>
                        <div>
                            <label htmlform="reedemed" className='px-3'>Reedemed:</label>
                            <input type="text" id="reedemed" className='border-2 p-2 border-black ' placeholder='reedemed' />
                        </div>
                    </div>
                </div> */}
                {/* <div className=' flex flex-col  align-center w-full '> */}

            </div>
        </div>
    )
}

export default ReedemloyaltyPoints
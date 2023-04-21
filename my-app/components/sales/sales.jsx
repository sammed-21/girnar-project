import React, { useState } from 'react'

const Sales = () => {
    const [rows, setRows] = useState([{ title: '', paxName: '', desc1: '', desc2: '', purchaseCost: '', sellPrice: '' }])
    // Function for adding a new row
    const vendors = ["customer 1 ", "customer 2", "customer 3"]
    const handleAddRow = () => {
        setRows([...rows, { title: '', paxName: '', desc1: '', desc2: '', purchaseCost: '', sellPrice: '' }]);
    }
    // Function for deleting a row
    const handleDeleteRow = (index) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    }
    return (


        <div className='p-[5%]'>

            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }} className='pb-5'>Sales</h1>
            <div className='flex justify-evenly'>
                {/* <div style={{ display: 'flex', justifyContent: 'space-evenly' ,textAlign:'center', marginTop:'40px',alignItems:'center' }}> */}
                <div >
                    <label htmlFor="poNumber" className='px-3'>PO Number:</label>
                    <input type="text" id="poNumber" readOnly={true} placeholder='PO_NUMBER' className='border-2 p-2 border-black ' />
                </div>

                <div>
                    <label htmlFor="poDate" className='px-3'>PO Date:</label>
                    <input type="date" id="poDate" className='border-2 p-2 border-black ' />
                </div>
                <div>
                    <label htmlFor="userId" className='px-3'>User ID:</label>
                    <input type="text" id="userId" readOnly={true} placeholder='USER_ID' className='border-2 p-2 border-black ' />
                </div>
            </div>

            <div className="w-full flex justify-between text-center py-7 px-[23vh]">
                <div className=''>

                    <label htmlFor="vendor" className=''>Customer:</label>
                    <select id="vendor" className='w-[40vh] border-2 p-2 border-black  ml-3 '>
                        {vendors.map((vendor) => (
                            <option key={vendor} value={vendor}>{vendor}</option>
                        ))}
                    </select>
                </div>

                <div className=''>
                    <label htmlFor="poNumber" className='px-3 '>Sales Catagory:</label>
                    <select id="vendor" className='w-[40vh] border-2 p-2 border-black   '>
                        {vendors.map((vendor) => (
                            <option key={vendor} value={vendor}>{vendor}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className=' w-full mb-9'>
                <div className='w-full py-4 flex justify-evenly'>

                    <div className='w-[40%]'>
                        <label htmlFor="poNumber" className='px-3'>Description:</label>
                        <input type="text" id="poNumber" readOnly={true} className='border-2 w-[40vh] p-2 border-black ' placeholder='Description' />
                    </div>
                    <div>
                        <label htmlFor="poNumber" className='px-3'>message:</label>
                        <input type="text" id="poNumber" readOnly={true} className='border-2 w-[40vh] p-2 border-black ' placeholder='Remarks' />
                    </div>
                </div>
                <div className='w-full px-[18vh] flex justify-around'>
                    <div className='w-[40%]'>


                        <label htmlFor="poNumber" className='px-3'>PO Amount:</label>
                        <input type="text" id="poNumber" readOnly={true} className='border-2  p-2 border-black ' placeholder='PO Amount' />
                    </div>
                    <div>
                        <label htmlFor="poNumber" className='px-3'>Discount:</label>
                        <input type="text" id="poNumber" className='border-2 p-2 border-black ' />
                    </div>
                    <div>

                        <label htmlFor="poNumber" className='px-3'>VAT amount:</label>
                        <input type="text" id="poNumber" className='border-2 p-2 border-black ' />
                    </div>
                </div>
            </div>
            <div className='w-[100%]'>
                <div className='flex justify-end   '>

                    <label htmlFor="poNumber" className='px-3'>Total Invoice Amount:</label>
                    <input type="text" id="poNumber" className='border-2 w-[35%] p-2 border-black ' />
                </div>
            </div>
            {/* <div className=' flex flex-col  align-center w-full '> */}
            <div className=' '>

                <table className='w-full'>
                    <thead>
                        <tr className='w-full'>
                            <th style={{ width: '10%' }}></th>
                            <th style={{ width: '15%' }}>Pax Name:</th>
                            <th style={{ width: '16%' }}>Description 1:</th>
                            <th style={{ width: '13%' }}>Description 2:</th>
                            <th style={{ width: '17%' }}>Purchase Cost:</th>
                            <th style={{ width: '40%' }}>Sell Price:</th>
                        </tr>
                    </thead>
                </table>


                {rows.map((row, index) => (
                    <div key={index} className='flex my-3 justify-center space-x-7'  >
                        {/* <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}

                        <div className='flex flex-col text-center'>
                            {/* <label htmlFor={`paxName_${index}`}>Pax Name:</label> */}
                            <input type="text" id={`paxName_${index}`} className='border-2 border-black ' value={row.paxName} onChange={(e) => {
                                const newRows = [...rows];
                                newRows[index].paxName = e.target.value;
                                setRows(newRows);
                            }} />
                        </div>
                        <div className='flex flex-col text-center'>
                            {/* <label htmlFor={`desc1_${index}`}>Description 1:</label> */}
                            <input type="text" id={`desc1_${index}`} className='border-2 border-black ' value={row.desc1} onChange={(e) => {
                                const newRows = [...rows];
                                newRows[index].desc1 = e.target.value;
                                setRows(newRows);
                            }} />
                        </div>
                        <div className='flex flex-col text-center'>
                            {/* <label htmlFor={`desc2_${index}`}>Description 2:</label> */}
                            <input type="text" id={`desc2_${index}`} className='border-2 border-black ' value={row.desc2} onChange={(e) => {
                                const newRows = [...rows];
                                newRows[index].desc2 = e.target.value;
                                setRows(newRows);
                            }} />
                        </div>
                        <div className='flex flex-col text-center'>
                            {/* <label htmlFor={`desc2_${index}`}>Purchase Cost:</label> */}
                            <input type="text" id={`desc2_${index}`} className='border-2 border-black ' value={row.purchaseCost} onChange={(e) => {
                                const newRows = [...rows];
                                newRows[index].purchaseCost = e.target.value;
                                setRows(newRows);
                            }} />
                        </div>
                        <div className='flex flex-col text-center'>
                            {/* <label htmlFor={`desc2_${index}`}>Sell Price:</label> */}
                            <input type="text" id={`desc2_${index}`} className='border-2 border-black ' value={row.sellPrice} onChange={(e) => {
                                const newRows = [...rows];
                                newRows[index].sellPrice = e.target.value;
                                setRows(newRows);
                            }} />
                        </div>
                        <button
                            onClick={() => handleDeleteRow(row.id)}
                            className="bg-red-600 rounded-md mb-4 px-4 h-10 "
                        >
                            Delete
                        </button>
                    </div>


                ))

                }


            </div>
            <div className=''>


                <button type='submit' onClick={handleAddRow} className='bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Add</button>

                {/* <button onClick={handleDeleteRow} className='bg-red-500 mx-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md'>Delete</button> */}
            </div>
            <div className='flex justify-center'>

                <button className='bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Save</button>
                {/* <button className='bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Print PO</button> */}
                <button className='bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Print Invoice</button>
            </div>
        </div >


    )
}

export default Sales


import React, { useState } from 'react'
const PurchaseOrderForm =()=> {
  // Hardcoded values for vendor dropdown options
  const vendors = ['Vendor A', 'Vendor B', 'Vendor C']
  // State for tracking rows
  const [rows, setRows] = useState([{ title: '', paxName: '', desc1: '', desc2: '', purchaseCost: '', sellPrice: '' }])
  // Function for adding a new row
  const handleAddRow = () => {
    setRows([...rows, { title: '', paxName: '', desc1: '', desc2: '', purchaseCost: '', sellPrice: '' }]);
  }
  // Function for deleting a row
  const handleDeleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  }
  return (~
    <>

    
      <div className='p-[5%] '>

      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }} className='pb-5'>Purchase Order</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between',textAlign:'center', marginTop:'40px',alignItems:'center' }}>
        <div>
          <label htmlFor="poNumber" className='px-3'>PO Number:</label>
          <input type="text" id="poNumber" className='border-2 p-2 border-black rounded-md'/>
        </div>
        <div>
          <label htmlFor="poDate" className='px-3'>PO Date:</label>
          <input type="date" id="poDate" className='border-2 p-2 border-black rounded-md'/>
        </div>
        <div>
          <label htmlFor="userId" className='px-3'>User ID:</label>
          <input type="text" id="userId" className='border-2 p-2 border-black rounded-md'/>
        </div>
      </div>
      <div className='py-[4%]'>
        <label htmlFor="vendor">Vendor:</label>
        <select id="vendor" className='border-2  border-black rounded-md'>
          {vendors.map((vendor) => (
            <option key={vendor} value={vendor}>{vendor}</option>
            ))}
        </select>
        </div>
        
        <div className=' flex flex-col align-center justify-center'>
       
          
      {rows.map((row, index) => (
        <div key={index} className='flex space-x-7'  >
        {/* <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}

          <div className='flex flex-col text-center'>
            <label htmlFor={`paxName_${index}`}>Pax Name:</label>
            <input type="text" id={`paxName_${index}`} className='border-2 border-black rounded-md' value={row.paxName} onChange={(e) => {
              const newRows = [...rows];
              newRows[index].paxName = e.target.value;
              setRows(newRows);
            }} />
          </div>
          <div className='flex flex-col text-center'>
            <label htmlFor={`desc1_${index}`}>Description 1:</label>
            <input type="text" id={`desc1_${index}`} className='border-2 border-black rounded-md' value={row.desc1} onChange={(e) => {
              const newRows = [...rows];
              newRows[index].desc1 = e.target.value;
              setRows(newRows);
            }} />
          </div>
          <div className='flex flex-col text-center'>
            <label htmlFor={`desc2_${index}`}>Description 2:</label>
            <input type="text" id={`desc2_${index}`} className='border-2 border-black rounded-md' value={row.desc2} onChange={(e) => {
              const newRows = [...rows];
              newRows[index].desc2 = e.target.value;
              setRows(newRows);
            }} />
          </div>
          <div className='flex flex-col text-center'> 
            <label htmlFor={`desc2_${index}`}>Purchase Cost:</label>
            <input type="text" id={`desc2_${index}`} className='border-2 border-black rounded-md' value={row.purchaseCost} onChange={(e) => {
              const newRows = [...rows];
              newRows[index].purchaseCost = e.target.value;
              setRows(newRows);
            }} />
          </div>
          <div className='flex flex-col text-center'>
            <label htmlFor={`desc2_${index}`}>Sell Price:</label>
            <input type="text" id={`desc2_${index}`} className='border-2 border-black rounded-md' value={row.sellPrice} onChange={(e) => {
              const newRows = [...rows];
              newRows[index].sellPrice = e.target.value;
              setRows(newRows);
            }} />
          </div>
        </div>
         
         ))
         
        }
          <div className='flex  flex-row  space-x-4  text-center justify-around'>
        <button type='submit' onClick={handleAddRow} className="btn btn-md btn-primary mr-1 text-black">Add</button>

            <button onClick={handleDeleteRow} className='btn btn-sm btn-danger btn-delete-user '>Delete</button>
          </div>
 
        </div>
      </div>
      
      {/* {rows.map((ro, index) => {
        <div className='flex flex-col p-[20%]'><li key={index}>{ro.title}</li><li key={index}>{ro.paxName}</li><li key={index}>{ro.desc1}</li><li key={index}>{ro.desc2}</li><li key={index}>{ro.sellPrice}</li></div>
      })} */}
         </>)
}
 export default PurchaseOrderForm

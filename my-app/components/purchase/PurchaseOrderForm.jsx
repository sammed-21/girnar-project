

// import React, { useState } from 'react'
// const PurchaseOrderForm =()=> {
//   // Hardcoded values for vendor dropdown options
//   const vendors = ['Vendor A', 'Vendor B', 'Vendor C']
//   // State for tracking rows
//   const [rows, setRows] = useState([{ title: '', paxName: '', desc1: '', desc2: '', purchaseCost: '', sellPrice: '' }])
//   // Function for adding a new row
//   const handleAddRow = () => {
//     setRows([...rows, { title: '', paxName: '', desc1: '', desc2: '', purchaseCost: '', sellPrice: '' }]);
//   }
//   // Function for deleting a row
//   const handleDeleteRow = (index) => {
//     const newRows = [...rows];
//     newRows.splice(index, 1);
//     setRows(newRows);
//   }
//   return (
//     <>

    
//       <div className='p-[5%] flex flex-col '>

//       <h1 style={{ textAlign: 'center', fontWeight: 'bold' }} className='pb-5'>Purchase Order</h1>
//       <div className='flex justify-around '>
//       {/* <div style={{ display: 'flex', justifyContent: 'space-evenly' ,textAlign:'center', marginTop:'40px',alignItems:'center' }}> */}
//         <div>
//           <label htmlFor="poNumber" className='px-3'>PO Number:</label>
//           <input type="text" id="poNumber" className='border-2 p-2 border-black '/>
//         </div>
//         <div>
//           <label htmlFor="poDate" className='px-3'>PO Date:</label>
//           <input type="date" id="poDate" className='border-2 p-2 border-black '/>
//         </div>
//         <div>
//           <label htmlFor="userId" className='px-3'>User ID:</label>
//           <input type="text" id="userId" className='border-2 p-2 border-black '/>
//         </div>
//       </div>
//       <div className='py-[4%]'>
//         <label htmlFor="vendor">Vendor:</label>
//         <select id="vendor" className='border-2  border-black '>
//           {vendors.map((vendor) => (
//             <option key={vendor} value={vendor}>{vendor}</option>
//             ))}
//         </select>
//         </div>
        
//         <div className='flex flex-col'>
//           <div className='w-full py-4 flex justify-around'>

//           <div >
//           <label htmlFor="poNumber" className='px-3'>PO Number:</label>
//           <input type="text" id="poNumber" className='border-2 p-2 border-black '/>
//             </div>
//             <div>
//           <label htmlFor="poNumber" className='px-3'>PO Number:</label>
//           <input type="text" id="poNumber" className='border-2 p-2 border-black '/>
//             </div>
//           </div>
//           <div className='w-full flex justify-around'>
//           <div>

            
//           <label htmlFor="poNumber" className='px-3'>PO Number:</label>
//           <input type="text" id="poNumber" className='border-2 p-2 border-black '/>
//             </div>
//             <div>
//           <label htmlFor="poNumber" className='px-3'>PO Number:</label>
//           <input type="text" id="poNumber" className='border-2 p-2 border-black '/>
//           </div>
//         </div>
//        </div>
//         <div className=' flex flex-col align-center justify-center'>
          
//       {rows.map((row, index) => (
//         <div key={index} className='flex space-x-7'  >
//         {/* <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}

//           <div className='flex flex-col text-center'>
//             <label htmlFor={`paxName_${index}`}>Pax Name:</label>
//             <input type="text" id={`paxName_${index}`} className='border-2 border-black ' value={row.paxName} onChange={(e) => {
//               const newRows = [...rows];
//               newRows[index].paxName = e.target.value;
//               setRows(newRows);
//             }} />
//           </div>
//           <div className='flex flex-col text-center'>
//             <label htmlFor={`desc1_${index}`}>Description 1:</label>
//             <input type="text" id={`desc1_${index}`} className='border-2 border-black ' value={row.desc1} onChange={(e) => {
//               const newRows = [...rows];
//               newRows[index].desc1 = e.target.value;
//               setRows(newRows);
//             }} />
//           </div>
//           <div className='flex flex-col text-center'>
//             <label htmlFor={`desc2_${index}`}>Description 2:</label>
//             <input type="text" id={`desc2_${index}`} className='border-2 border-black ' value={row.desc2} onChange={(e) => {
//               const newRows = [...rows];
//               newRows[index].desc2 = e.target.value;
//               setRows(newRows);
//             }} />
//           </div>
//           <div className='flex flex-col text-center'> 
//             <label htmlFor={`desc2_${index}`}>Purchase Cost:</label>
//             <input type="text" id={`desc2_${index}`} className='border-2 border-black ' value={row.purchaseCost} onChange={(e) => {
//               const newRows = [...rows];
//               newRows[index].purchaseCost = e.target.value;
//               setRows(newRows);
//             }} />
//           </div>
//           <div className='flex flex-col text-center'>
//             <label htmlFor={`desc2_${index}`}>Sell Price:</label>
//             <input type="text" id={`desc2_${index}`} className='border-2 border-black ' value={row.sellPrice} onChange={(e) => {
//               const newRows = [...rows];
//               newRows[index].sellPrice = e.target.value;
//               setRows(newRows);
//             }} />
//           </div>
//         </div>
         
//          ))
         
//         }
//           <div className='flex flex-end w-full justify-end'>
//         <button type='submit' onClick={handleAddRow} className="btn btn-md btn-primary mr-1 text-black">Add</button>

//             <button onClick={handleDeleteRow} className='btn btn-sm btn-danger btn-delete-user '>Delete</button>
//           </div>
 
//         </div>
//       </div>
      
//       {/* {rows.map((ro, index) => {
//         <div className='flex flex-col p-[20%]'><li key={index}>{ro.title}</li><li key={index}>{ro.paxName}</li><li key={index}>{ro.desc1}</li><li key={index}>{ro.desc2}</li><li key={index}>{ro.sellPrice}</li></div>
//       })} */}
//          </>)
// }
//  export default PurchaseOrderForm




import React, { useState } from 'react'
const PurchaseOrderForm = () => {
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
  return (
    <>

    
      <div className='p-[5%]'>

        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }} className='pb-5'>Purchase Order</h1>
        <div className='flex justify-evenly'>
          {/* <div style={{ display: 'flex', justifyContent: 'space-evenly' ,textAlign:'center', marginTop:'40px',alignItems:'center' }}> */}
          <div>
            <label htmlFor="poNumber" className='px-3'>PO Number:</label>
            <input type="text" id="poNumber" readonly="readonly" placeholder='PO_NUMBER' className='border-2 p-2 border-black ' />
          </div>
          <div>
            <label htmlFor="poDate" className='px-3'>PO Date:</label>
            <input type="date" id="poDate" className='border-2 p-2 border-black ' />
          </div>
          <div>
            <label htmlFor="userId" className='px-3'>User ID:</label>
            <input type="text" id="userId" readonly="readonly" placeholder='USER_ID' className='border-2 p-2 border-black ' />
          </div>
        </div>
        <div className="w-full flex justify-start text-center py-7 px-[23vh]">
          <label htmlFor="vendor" className=''>Vendor:</label>
          <select id="vendor" className=' border-2 p-2 border-black  ml-3 '>
            {vendors.map((vendor) => (
              <option key={vendor} value={vendor}>{vendor}</option>
            ))}
          </select>
        </div>
        
        <div className=' w-full mb-9'>
          <div className='w-full py-4 flex justify-around'>

            <div className='w-[40%]'>
              <label htmlFor="poNumber" className='px-3'>Description:</label>
              <input type="text" id="poNumber" className='border-2  p-2 border-black ' />
            </div>
            <div>
              <label htmlFor="poNumber" className='px-3'>Remarks:</label>
              <input type="text" id="poNumber" className='border-2 p-2 border-black ' />
            </div>
          </div>
          <div className='w-full flex justify-around'>
            <div className='w-[40%]'>

            
              <label htmlFor="poNumber" className='px-3'>PO Amount:</label>
              <input type="text" id="poNumber" className='border-2  p-2 border-black ' />
            </div>
            <div>
              <label htmlFor="poNumber" className='px-3'>Sell Total:</label>
              <input type="text" id="poNumber" className='border-2 p-2 border-black ' />
            </div>
          </div>
        </div>
        {/* <div className=' flex flex-col  align-center w-full '> */}
        <div className=' '>
          {/* <label htmlFor={`paxName_${index}`}>Pax Name:</label>
           <label htmlFor={`desc1_${index}`}>Description 1:</label> 
          <label htmlFor={`desc2_${index}`}>Description 2:</label>  
           <label htmlFor={`desc2_${index}`}>Purchase Cost:</label> 
           <label htmlFor={`desc2_${index}`}>Sell Price:</label> */}
          <table className='w-full'>
            <thead>
              <tr className='w-full'>
                <th style={{width:'10%'}}></th>
                <th style={{width:'15%'}}>Pax Name:</th>
                <th style={{width:'16%'}}>Description 1:</th>
                <th style={{width:'13%'}}>Description 2:</th>
                <th style={{width:'17%'}}>Purchase Cost:</th>
                <th style={{width:'40%'}}>Sell Price:</th>
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
        <button className='bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Print PO</button>
        <button className='bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Create Invoice</button>
        </div>
      </div >
    </>
  )
}
    
      
//  
// export default PurchaseOrderForm

// import { useState } from "react";

// function PurchaseOrderForm() {
//   const [rows, setRows] = useState([{ id: 1 }]);
//   const addRow = () => {
//     const newRow = { id: rows.length + 1 };
//     setRows([...rows, newRow]);
//   };
//   const deleteRow = (id) => {
//     const updatedRows = rows.filter((row) => row.id !== id);
//     setRows(updatedRows);
//   };
//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id} className="flex items-center my-2">
//           <input
//             type="text"
//             placeholder="Input 1"
//             className="w-1/5 px-3 py-2 border rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Input 2"
//             className="w-1/5 ml-2 px-3 py-2 border rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Input 3"
//             className="w-1/5 ml-2 px-3 py-2 border rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Input 4"
//             className="w-1/5 ml-2 px-3 py-2 border rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Input 5"
//             className="w-1/5 ml-2 px-3 py-2 border rounded-md"
//           />
//           <button
//             onClick={() => deleteRow(row.id)}
//             className="ml-2 px-3 py-2 bg-red-500 text-white rounded-md"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//       <button
//         onClick={addRow}
//         className="my-2 px-3 py-2 bg-blue-500 text-white rounded-md"
//       >
//         Add
//       </button>
//     </div>
//   );
// }

export default PurchaseOrderForm;
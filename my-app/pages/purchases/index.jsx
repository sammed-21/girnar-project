import { useState, useEffect } from 'react';

import { Link } from 'components/Link'
import { userService } from 'services/user.service'

export default Index;

function Index() {

  const [users, setUsers] = useState();
  useEffect(() => {
    userService.getAll().then(x => setUsers(x));

  }, []);




  function deleteUser(id) {
    setUsers(users.map(x => {
      if (x.id === id) {
        x.isDeleting = true;

      }
      return x;
    }));
    userService.delete(id).then(() => {
      setUsers(users => users.filter(x => x.id !== id));
    })
  }

  return (
    <div>
      <h1 className="flex justify-center m-[10vh] text-xl">purchase</h1>
      <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "10vh" }}>

        <Link href="/purchases/add" className="flex btn btn-sm btn-success mb-2">Add PO</Link>
      </div>


      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-[20%]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="simple-search" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        </div>
        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLineCap="round" strokeLineJoin="round" strokeLineWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th style={{ width: '20%' }}></th>
            <th style={{ width: '20%' }}>id</th>
            <th style={{ width: '20%' }}>Name</th>
            <th style={{ width: '20%' }}>Telephone</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user =>
            <tr key={user.id}>
              <td>
                {/* <td style={{ whiteSpace: 'nowrap' }}> */}
                <Link href={`/users/edit/${user.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className='btn btn-sm btn-danger btn-delete-user' disabled={user.isDeleting}>
                  {user.isDeleting
                    ? <span className="spinner-border spinner-border-sm"></span>
                    : <span>Delete</span>}
                </button>
                <button className='btn btn-sm btn-success ml-1'>View</button>
              </td>


              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.telephone}</td>
              {/* <td>234525</td>
                            <td>sharath</td>
                            <td>1234567890</td> */}

            </tr>)

          }

          {!users &&
            <tr>
              <td colSpan="4" className='text-center'>
                <div className='spinner-border spinner-border-lg align-center'></div>
              </td>
            </tr>}
          {users && !users.length &&
            <tr>
              <td conSpan="4" className='text-center'>
                <div className='p-2'> No Users To Displays</div>
              </td>
            </tr>}
        </tbody>
      </table>
    </div>
  )



}
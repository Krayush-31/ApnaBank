import React, { useEffect, useState } from 'react';


const FetchData= () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://reqres.in/api/users?page=2").then((result) => {

      result.json().then((resp) => {

        console.warn("result", resp)
        setData(resp.data);

      })
    })

  }, [])

  console.warn("good", data);

  return (

    <div className='flex flex-col h-full w-full bg-white items-center'>
 
  <table className="min-w-52 mt-10 border-collapse bg-white">
    <thead>
      <tr className="bg-gray-200 text-gray-600">
        <th className="py-2 px-2 border-b">ID</th>
        <th className="py-2 px-2 border-b">EMAIL</th>
        <th className="py-2 px-2 border-b">F-NAME</th>
        <th className="py-2 px-2 border-b">L-NAME</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, key) => (
        <tr key={key} className="hover:bg-gray-100 cursor-pointer">
          <td className="py-2 px-2 border-b">{item.id}</td>
          <td className="py-2 px-2 border-b">{item.email}</td>
          <td className="py-2 px-2 border-b">{item.first_name}</td>
          <td className="py-2 px-2 border-b">{item.last_name}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};
export default FetchData;
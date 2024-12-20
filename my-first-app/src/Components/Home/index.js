


import React from 'react';
import { useNavigate} from "react-router-dom";
import t4 from './t4.png';


const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 bg-blue-100 flex items-center justify-center">


        <img src={t4} alt="000" />
      </div>
      <div className="flex-1 bg-blue-100 flex flex-col justify-center">
        <h1 className='font-bold text-left text-black text-2xl md:text-5xl mt-10 md:mt-32  underline font-serif items-center justify-center' >WELCOME TO THE WEB</h1>



        <div className='w-full flex flex-col justify-around'>

          <div className='w-full flex flex-col mt-10'>
            <h1 className='text-2xl font-semibold  ml-10'> LOGIN TO GO THE DASHBOARD</h1>
          </div>
          <div className='w-full flex items-center justify-center mb-20'>
            <button className='ml-6 mt-5 bg-transparent hover:bg-blue-500
             text-blue-700 font-semibold hover:text-white py-2 px-4 border
              border-blue-500 hover:border-transparent rounded' onClick={() => navigate("/login")}> LOGIN AS A USER </button>

<button className='ml-6 mt-5 bg-transparent hover:bg-blue-500
             text-blue-700 font-semibold hover:text-white py-2 px-4 border
              border-blue-500 hover:border-transparent rounded' onClick={() => navigate("/admin")}> LOGIN AS A ADMIN</button>
              
              
          </div>
          
        </div>



        <div className='w-full flex flex-col justify-around mb-40'>

          <div className='w-full flex flex-col mt-10'>
            <h1 className='text-2xl font-semibold  ml-10'>DON&lsquo;T HAVE A ACCOUNT</h1>
          </div>
          <div className='w-full flex items-center justify-center mb-20'>
            <button className='ml-10 mt-5 bg-transparent hover:bg-blue-500
             text-blue-700 font-semibold hover:text-white py-2 px-4 border
              border-blue-500 hover:border-transparent rounded' onClick={() => navigate("/SignUp")}>SIGN-UP</button>
          </div>
        </div>

      </div>

    </div>
  )
};

export default Home; 

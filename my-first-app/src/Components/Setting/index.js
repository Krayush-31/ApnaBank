import React from 'react';
import Footer from '../Footer';


const Setting = () => {

    const  editProfile= () =>{

      alert('GOING TO PROFILE PAGE');



    }    
    
    return (
      <div className='flex flex-col h-full w-full bg-blue-100 p-5'>
      <h2 className='text-3xl font-bold text-center text-blue-500 mb-5'>SETTINGS</h2>

      <div className='flex flex-col items-center'>
        
        <div className='border-2 border-white rounded-lg p-4 mb-4 w-full max-w-md bg-blue-500 shadow-lg'>
          <h3 className='text-xl text-white font-semibold mb-2'>Profile Settings</h3>
          <p className='text-white'>Change your profile information.</p>
          <button className='mt-2 px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100 ' onClick={editProfile}>Edit Profile</button>
        </div>

        <div className='border-2 border-white rounded-lg p-4 mb-4 w-full max-w-md bg-blue-500 shadow-lg'>
          <h3 className='text-xl text-white font-semibold mb-2'>Privacy Settings</h3>
          <p className='text-white'>Manage your privacy preferences.</p>
          <button className='mt-2 px-4 py-2 bg-white text-blue-500 rounded  hover:bg-blue-100'>Change Privacy</button>
        </div>

        <div className='border-2 border-white rounded-lg p-4 mb-4 w-full max-w-md bg-blue-500 shadow-lg'>
          <h3 className='text-xl text-white font-semibold mb-2'>Notification Settings</h3>
          <p className='text-white'>Customize your notification preferences.</p>
          <button className='mt-2 px-4 py-2 bg-white text-blue-500 rounded  hover:bg-blue-100'>Edit Notifications</button>
        </div>

        <div className='border-2 border-white rounded-lg p-4 mb-4 w-full max-w-md bg-blue-500 shadow-lg'>
          <h3 className='text-xl text-white font-semibold mb-2 '>Account Settings</h3>
          <p className='text-white'>Manage your account details.</p>
          <button className='mt-2 px-4 py-2 bg-white text-blue-500 rounded  hover:bg-blue-100'>Change Account</button>
        </div>
      </div>

      <Footer />
    </div>
 
    );
};
export default Setting;
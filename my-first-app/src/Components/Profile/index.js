import React from 'react';
import CustomCard from '../CustomCard';
import D1 from '../Data/D1.json';
import c1 from '../Profile/c1.png';
import Footer from '../Footer';


const Profile = () => {

 

return (

  <div className="relative h-screen w-full bg-gradient-to-t from-blue-500 to-blue-300 flex flex-col items-center">
  
  <p className='absolute top-10  text-2xl md:text-5xl  underline text-center w-full font-bold  -ml-5 md:ml-20'>
    {D1.Pheading}
  </p>



   
     <div className=" flex justify-center w-full mt-40  md:ml-32">
        <CustomCard name={D1.name} link="#" imageUrl={c1} AccountNo={D1.accnumber} ifsc={D1.ifsc} debit={D1.atm } dob={D1['D-O-B']}/>

      </div> 


       <Footer /> 

</div>


    
  )
}

export default Profile;

import React from 'react'; 
import PropTypes from 'prop-types';



const CustomCard = ({name,imageUrl,AccountNo,ifsc,debit,dob}) => {


  
  return (

    <div className="bg-white border-2 border-black rounded-lg shadow dark:bg-gray-800
    cursor-pointer dark:border-gray-700 w-64 md:min-w-max h-[25rem] md:h-96 flex">
 
    <img className="rounded-l-lg w-60  mt-20 h-56 ml-28 hidden md:block" src={imageUrl} alt="Card" />
  
  <div className="p-2 flex flex-col justify-between"> 
  
      <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline -mt-2 md:mt-20">{name}</h5>

     

    <div className="flex flex-col mb-2">

  <div className="flex items-center mb-1"> 
    <p className="font-bold text-black">ACCOUNT NO:</p>
    <p className="font-normal text-gray-700 dark:text-gray-400 ml-5">{AccountNo}</p>
  </div>

  <div className="flex items-center mb-1">
    <p className="font-bold text-black">IFSC CODE:</p>
    <p className="font-normal text-gray-700 dark:text-gray-400 ml-11">{ifsc}</p>
  </div>

  <div className="flex items-center mb-1">
    <p className="font-bold text-black">DEBIT CARD:</p>
    <p className="font-normal text-gray-700 dark:text-gray-400 ml-8">{debit}</p>
  </div>

  <div className="flex items-center mb-1">
    <p className="font-bold text-black">D.O.B:</p>
    <p className="font-normal text-gray-700 dark:text-gray-400 ml-24">{dob}</p>
  </div>

  <div className="flex items-center mb-1">
    <p className="font-bold text-black">ADDRESS:</p>
    <p className="font-normal text-gray-700 dark:text-gray-400 ml-14">Reflex Solution, Gurgaon</p>
  </div>

  <div className="flex items-center mb-1">
    <p className="font-bold text-black">HOME BRANCH:</p>
    <p className="font-normal text-gray-700 dark:text-gray-400 ml-14">Gurgaon</p>
  </div>

  <div className="flex justify-end items-center mt-auto ml-0 md:ml-64">
    <p className="font-bold underline text-black text-2xl md:text-4xl font-dancing ">APNA BANK OF INDIA</p>
  </div>
</div>

</div>
</div>

  );
};


CustomCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  AccountNo:PropTypes.string.isRequired,
  ifsc:PropTypes.string.isRequired,
  debit:PropTypes.number.isRequired,
  dob:PropTypes.string.isRequired,
};
export default CustomCard;
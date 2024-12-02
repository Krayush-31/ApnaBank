import React  from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { useSelector } from 'react-redux';


const Shop = () => {
    const dispatch = useDispatch(); 
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
    const amount = useSelector(state => state.amount)

  return (
    <div className="flex flex-col items-center justify-center mt-40 ml-80">
   <p className='md:text-xl'> CHOOSE TO DEPOSIT OR WITHDRAW </p>
    <div className="flex space-x-8 mb-4">
        <div className="flex flex-col items-center">
            <span className="text-lg mb-2">Deposit</span>
            <button 
                className="bg-blue-600 hover:bg-blue-900 text-white py-2 px-4 rounded w-24 md:w-40" 
                onClick={(e) =>{ e.stopPropagation(); depositMoney(100);}}
            >
                Deposit
            </button>
        </div>

        <div className="flex flex-col items-center">
            <span className="text-lg mb-2">Withdraw</span>
            <button 
                className="bg-red-400 hover:bg-red-600 text-white py-2 px-4 rounded  w-24 md:w-40" 
                onClick={(e) =>{ e.stopPropagation(); withdrawMoney(100);}}
            >
                Withdraw
            </button>
        </div>
    </div>

   
    <div className="text-lg block md:hidden">
        Account Balance: ${amount}
    </div>
</div>
  );
};

export default Shop;


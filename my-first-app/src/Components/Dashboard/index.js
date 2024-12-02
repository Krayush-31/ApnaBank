import React from 'react';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className="flex h-screen">
    <Outlet />
    </div>
  )
};

export default Dashboard; 

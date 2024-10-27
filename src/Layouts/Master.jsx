import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Sidebar from "../components/shaired/Sidebar/Sidebar"; // Ensure this path is correct

const Master = () => {
    return (
        <div>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='content'>
                    <Outlet /> {/* Use self-closing tag */}
                </div>
            </div>
        </div>
    );
};

export default Master;

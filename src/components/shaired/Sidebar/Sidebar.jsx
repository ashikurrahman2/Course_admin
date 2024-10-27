import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/add-new-item">Add Nav-Item</Link> 
            <Link to="/add-new-item">Show Nav-Item</Link> 
            <Link to="/add-new-item">Update Nav-Item</Link>
            <Link to="/add-new-item">Delete Nav-Item</Link>  {/* Updated with a valid route */}
            {/* You can add more navigation items here */}
        </div>
    );
};

export default Sidebar;

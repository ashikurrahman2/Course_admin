import React, { useEffect, useState } from 'react';

const NavItem = () => {
    const [navItems, setNavItems] = useState([]);

    // Function to add a new nav item
    const addNavItem = (item) => {
        const updatedNavItems = [...navItems, item];
        setNavItems(updatedNavItems);
        localStorage.setItem('navItems', JSON.stringify(updatedNavItems)); // Store in localStorage
    };

    // Function to retrieve nav items from localStorage
    const getNavItems = () => {
        const storedItems = localStorage.getItem('navItems');
        if (storedItems) {
            setNavItems(JSON.parse(storedItems)); // Parse and set the state
        }
    };
    useEffect(() => {
        getNavItems(); // Retrieve nav items when the component mounts
    }, []);

    return (
        <div>
            <h2>Navigation Items</h2>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={() => addNavItem(`Nav Item ${navItems.length + 1}`)}>
                Add New Nav Item
            </button>
        </div>
    );
};

export default NavItem;

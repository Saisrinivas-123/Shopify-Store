import React from 'react';
//@ts-ignore
import { Link } from 'react-router-dom';
import './InlineNavbar.css';

const navItems = [
    { to: '/mobile', label: 'Mobiles', image: 'https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-14-Pro-Deep-Purple-frontimage' },
    { to: '/fashion', label: 'Fashion', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { to: '/electronics', label: 'Electronics', image: 'https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=' },
    { to: '/furniture', label: 'Home & Furniture', image: 'https://www.woodenstreet.com/images/furniture/deal-1.jpg?v1' },
    { to: '/appliances', label: 'Home Appliances', image: 'https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM=' },
    { to: '/beauty', label: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60' },
    { to: '/toys', label: 'Toys', image: 'https://media.istockphoto.com/id/687165852/photo/toys.webp?b=1&s=170667a&w=0&k=20&c=aECJBVRGL3jNtrbiHOTMq1-5rSv3xeNUpZywEZYwvX4=' },
];

const InlineNavbar = () => {
    return (
        <div className="inline-navbar">
            {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="nav-item">
                    <img src={item.image} alt={item.label} />
                    <span>{item.label}</span>
                </Link>
            ))}
        </div>
    );
}

export default InlineNavbar;

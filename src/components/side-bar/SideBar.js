import React, { useState } from 'react'
import { FaHome, FaFire, FaHistory, FaClock, FaThumbsUp, FaChevronDown, FaBars } from "react-icons/fa";
import { BsClipboard2Heart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './SideBar.css'


function SideBar({ isCollapsed, toggleSidebar }) {
    const [activeItem, setActiveItem] = useState("viewProfile");


    const navigate = useNavigate();

    const handleNavigation = () => {
        window.location.href = "https://www.google.com/maps/@17.5391504,78.3831301,17z?entry=ttu";
    };

    const handleClick = () => {
        window.location.href = 'http://127.0.0.1:7000';
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
        navigate(`/userdashboard/${item}`);
    };


    return (
        <div className="side-menu-container">
            <div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
                <ul className="menu-items">

                    <li className="menu-item" onClick={toggleSidebar}>
                        <FaBars className="menu-icon" />
                        {!isCollapsed&& <span className="menu-text">Toggle</span>}
                    </li>

                    <li
                        className={`menu-item ${activeItem === "/" ? "active" : ""}`}
                        onClick={() => handleItemClick("")}
                    >
                        <FaHome className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">View Profile</span>}
                    </li>

                    <li
                        className={`menu-item ${activeItem === "cart" ? "active" : ""}`}
                        onClick={() => handleItemClick("cart")}
                    >
                        <FaFire className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Cart</span>}
                    </li>

                    <li
                        className={`menu-item ${activeItem === "products" ? "active" : ""}`}
                        onClick={() => handleItemClick("products")}
                    >
                        <BsClipboard2Heart className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">view products</span>}
                    </li>


                    <li
                        className={`menu-item ${activeItem === "helpCenter" ? "active" : ""}`}
                        onClick={() => handleNavigation()}
                    >
                        <FaHistory className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">location</span>}
                    </li>
                    <li
                        className={`menu-item ${activeItem === "faqs" ? "active" : ""}`}
                        onClick={() => handleItemClick("faqs")}
                    >
                        <FaClock className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">FAQs</span>}
                    </li>
                    <li
                        className={`menu-item ${activeItem === "chart" ? "active" : ""}`}
                        onClick={() => handleItemClick("chart")}
                    >
                        <FaThumbsUp className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">chart</span>}
                    </li>
                    <li
                        className={`menu-item ${activeItem === "aboutUs" ? "active" : ""}`}
                        onClick={() => handleClick()}
                    >
                        <FaChevronDown className="menu-icon" />
                        {!isCollapsed&& <span className="menu-text">Forest Fire</span>}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar

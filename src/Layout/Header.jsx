import { useState } from 'react';
import Button from "./HeaderCartButton.jsx";

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="ecommerce">E-commerce</h1>
                <ul id="after_title">
                    <li><a href="/">Home</a></li>
                    <li><a href="">Link</a></li>
                    <li className="dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <a href="#">Dropdown <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -5 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        {dropdownOpen && (
                            <ul className="menu_slide">
                                <li><a href="#">Laptop</a> </li>
                                <li><a href="#">Tablet</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <Button/>
        </nav>
    );
}
export default Header;

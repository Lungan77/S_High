'use client'

import Link from "next/link"
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const iconButtonStyle = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '10px',
};


function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header bg-gray-900 text-white ">
      <div className='container head_b'>
        <div className="logo">
          <Link href='#'>
            <Image
              src='https://cdn-icons-png.flaticon.com/128/3074/3074058.png'
              width={40}
              height={40}
              className="bg-gray-300"
            />
          </Link>
        </div>

        <nav className="nav_display">
          <ul>
            <li><Link href='#'>Home</Link><span>|</span></li>
            <li><Link href='#'>About</Link><span>|</span></li>
            <li><Link href='#'>Blogs</Link><span>|</span></li>
            <li><Link href='#'>Contacts</Link><span>|</span></li>
          </ul>
        </nav>

        <button onClick={toggleNav} style={iconButtonStyle} className="icon_display">
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {
          isNavOpen && (
            <nav className="s_nav">
              <ul>
                <li><Link href='#'>Home</Link></li>
                <li><Link href='#'>About</Link></li>
                <li><Link href='#'>Blogs</Link></li>
                <li><Link href='#'>Contacts</Link></li>
              </ul>
            </nav>
          )
        }
      </div>
    </div>
  )
}

export default Nav
import React from "react";
import '../App.css'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 bg-[#152a64]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to={'/'}
            >
              <span className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white brand-logo">LU?AK()DING</span>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-tight px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md cursor-pointer uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  HTML
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md cursor-pointer uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  CSS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md cursor-pointer uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  JAVASCRIPT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

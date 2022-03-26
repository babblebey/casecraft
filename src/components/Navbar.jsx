import { useState } from "react";
import logo from '../img/logo.svg';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => !toggleMenu ? setToggleMenu(true) : setToggleMenu(false);

    return ( 
        <div className="z-40 relative">
            <nav className="w-full max-w-[1700px] mx-auto flex p-5 md:px-10 lg:px-32 items-center justify-between">

                {/* Logo */}
                <div className="items-center">
                    <img src={logo} alt="CaseCraft" />
                </div>

                {/* Menu */}
                <div className="flex items-center justify-around">
                    { !toggleMenu && (
                        <ul className="list-none hidden md:flex">
                            {['Tutorials', 'Download', 'Features', 'FAQs'].map((item, index) => (
                                <li key={index} className="font-semibold italic text-primary-100 text-[13px] px-3 cursor-pointer">
                                    { item }
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className={` ${ toggleMenu && 'bg-[#E1E2EB]' } rounded-full p-4 cursor-pointer`} onClick={handleToggle}>
                        { !toggleMenu ? (
                            <svg className="h-4" xmlns="http://www.w3.org/2000/svg" width="24.171" height="18" viewBox="0 0 24.171 18">
                                <g id="Hamb" transform="translate(0.998 1)">
                                    <path id="Line_3" data-name="Line 3" d="M15192.767,13475.64h-13.014" transform="translate(-15179.751 -13459.64)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Line_3-2" data-name="Line 3" d="M15192.767,13475.64h-13.014" transform="translate(-15171.253 -13475.64)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Line_2" data-name="Line 2" d="M15201.429,13475.64h-21.673" transform="translate(-15179.256 -13467.64)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </g>
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="18.154" height="18.155" viewBox="0 0 18.154 18.155">
                                <g id="Hamb" transform="translate(-2.26 1.078)">
                                    <path id="Line_2" data-name="Line 2" d="M15201.429,13475.64h-21.673" transform="translate(-1201.318 -20262.088) rotate(45)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    <path id="Line_2-2" data-name="Line 2" d="M15201.429,13475.64h-21.673" transform="translate(-20258.75 1220.655) rotate(-45)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </g>
                            </svg>
                        ) }
                    </div>
                </div>

            </nav>
            
            {/* Mobile Menu Dropdown */}
            { toggleMenu && (
                <div className={`flex justify-center items-center h-fit md:h-[300px] mx-auto w-full px-4 py-6 md:p-0 rounded-bl-[40px] md:rounded-bl-[80px] rounded-br-[40px] md:rounded-br-[80px] absolute bg-[#F6F6F9] drop-shadow-xl animate-slide-in transition ease-out duration-900`}>
                    <ul className="flex list-none flex-col">
                        {['Tutorials', 'Download', 'Features', 'FAQs'].map((item, index) => (
                            <li key={index} className="flex justify-between items-center font-bold italic text-primary-300 text-15 md:text-[23px] px-3 my-2 cursor-pointer">
                                { item }
                                <span className="ml-[100px]">
                                    <svg className="w-7 md:w-auto" xmlns="http://www.w3.org/2000/svg" width="58.817" height="17.908" viewBox="0 0 58.817 17.908">
                                        <path id="Path_15871" data-name="Path 15871" d="M2097.957-7883.161h56.817l-9.584-15.532" transform="translate(-2096.957 7900.069)" fill="none" stroke="#c9c7d2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    </svg>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
 
export default Navbar;
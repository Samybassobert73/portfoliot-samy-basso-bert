import React from 'react'
import { ThemeContext } from '../../context/themeContext';
import { AuthContext } from '../../context/userContext';
import { FaSun, FaMoon} from "react-icons/fa";

function Navbar() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const { state } = React.useContext(AuthContext);
  const profilePictureUrl = state?.currentUser?.photoURL
  return (
    <div className='fixed top-0 left-0 right-0 flex items-center p-8 shadow-md w-full dark:bg-gray-700 bg-white dark:text-white z-20'>
        <a className="" href="">Home</a> 
        <div className="ml-auto flex items-center">
            {profilePictureUrl?<img src={state?.currentUser?.photoURL} alt="" className='rounded-full w-12 h-12'/>: null}
            <span className="transition duration-500 ease-in-out rounded-full p-4">
            
                {theme === 'dark' ? (
                    <FaSun
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                ) : (
                        <FaMoon
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                        />
                    )}
            </span> 
            <a className="p-4 text-white bg-blue-500 rounded-md ml-2 " href="">Contact</a> 
        </div>
      </div>
  )
}

export default Navbar
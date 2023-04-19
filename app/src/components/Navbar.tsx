import React from 'react'
import { ThemeContext } from '../context/themeContext';
import { FaSun, FaMoon} from "react-icons/fa";
function Navbar() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  
  return (
    <div className='fixed flex items-center p-8 shadow-md w-full dark:bg-gray-700 bg-white dark:text-white z-20'>
        <a className="" href="">Home</a> 
        <div className="ml-auto flex">
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
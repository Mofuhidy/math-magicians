import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: '/', name: 'Home' },
    { path: 'Calc', name: 'Calculator' },
    { path: '/Quote', name: 'Quote' },
  ];

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex justify-between px-5 items-center h-16 mb-8 bg-amber-50 shadow-sm ${
      isMenuOpen ? ' z-10' : ''
    }`}
    >
      <h1 className="text-3xl font-extrabold">
        Math
        <span className="ml-2 text-[#ffb579]">Magicians</span>
      </h1>
      <div className="sm:hidden">
        <button
          type="button"
          className="text-dark font-semibold"
          onClick={handleMenu}
        >
          {
              !isMenuOpen
                ? (<FiMenu className="h-8 w-8 " />)
                : (<MdClose className="text-[#ffb579] h-8 w-8 " />)
            }
        </button>
      </div>

      <ul className={`flex ${
        isMenuOpen ? 'h-screen flex flex-col items-center z-50 justify-center gap-8 pb-80 absolute top-16 left-0 right-0 bg-amber-50 bg-opacity-60 backdrop-blur-sm ' : 'hidden'
      } sm:flex sm:justify-around sm:items-center`}
      >
        {

          isMenuOpen ? links.map((link) => (
            <li key={link.name} className=" mx-2">
              <NavLink
                className="text-dark font-semibold aria-[current=page]:text-[#ffb579]
               hover:underline underline-offset-8 hover:text-[#ffb579]"
                to={link.path}
                onClick={handleMenu}
              >
                {link.name}
              </NavLink>
            </li>
          )) : links.map((link) => (
            <li key={link.name} className=" mx-2">
              <NavLink
                className="text-dark font-semibold aria-[current=page]:text-[#ffb579]
               hover:underline underline-offset-8 hover:text-[#ffb579]"
                to={link.path}
              >
                {link.name}

              </NavLink>
            </li>
          ))
       }
      </ul>
    </nav>
  );
}
export default NavBar;

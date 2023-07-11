import { NavLink } from 'react-router-dom';

function NavBar() {
  const links = [
    { path: '/', name: 'Home' },
    { path: 'Calc', name: 'Calculator' },
    { path: '/Quote', name: 'Quote' },
  ];

  return (
    <nav className=" flex justify-between px-5 items-center h-16 mb-8  bg-amber-50 shadow-sm">
      <h1 className=" text-3xl font-extrabold">
        Math
        <span className="ml-2 text-[#ffb579]">Magicians</span>
      </h1>
      <ul className="flex justify-around">
        {
        links.map((link) => (
          <li key={link.name} className=" mx-2">
            <NavLink className="text-dark font-semibold aria-[current=page]:text-[#ffb579] hover:underline underline-offset-8 hover:text-[#ffb579]" to={link.path}>{link.name}</NavLink>
          </li>
        ))
       }
      </ul>
    </nav>
  );
}
export default NavBar;

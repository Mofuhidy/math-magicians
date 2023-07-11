import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout() {
  return (
    <div className=" w-screen h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;

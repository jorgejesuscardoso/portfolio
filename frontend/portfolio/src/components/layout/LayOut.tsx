import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBarAsideLeft from '../NavBar/NavBarAsideLeft';
import MainHeader from '../header/Header';

const LayOut = () => {
  return (
    <div>
      <Outlet />
      <MainHeader />
      <NavBarAsideLeft />
      <Footer />
    </div>
  );
}

export default LayOut;
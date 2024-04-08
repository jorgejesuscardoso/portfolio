import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBarAsideLeft from '../NavBar/NavBarAsideLeft';

const LayOut = () => {
  return (
    <div>
      <Outlet />
      <NavBarAsideLeft />
      <Footer />
    </div>
  );
}

export default LayOut;
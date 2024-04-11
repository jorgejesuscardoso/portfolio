import { Link } from 'react-router-dom';
import { NavBarContainerSimple, NavBarContainerSimpleFooter } from './style';

type NavSimpleProps = {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
  icoAlt: string;
  setIcoAlt: React.Dispatch<React.SetStateAction<string>>;
  setIsActiveConfig: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveConfig?: boolean;
}

const NavSimple = ({
  toggleNav,
  setToggleNav,
  icoAlt,
  setIcoAlt,
  setIsActiveConfig,
  isActiveConfig = false,
}: NavSimpleProps) => {
  return(
    <NavBarContainerSimple
        className={ toggleNav ? 'hiden' : 'show' }        
      >
        <ul
          onMouseLeave={() => {
            setIcoAlt('');
          }}
        >
          <li
            onMouseOver={() => setIcoAlt('Home')}
          >
            <Link to="/">
              <img src="ico_home.png" alt="Home Ico" />
              { icoAlt === 'Home' ?
                <span>Home</span>
                : null
                }
            </Link>
          </li>
          <li
            onMouseOver={() => setIcoAlt('Projects')}
          >
            <Link to="/projects">
              <img src="ico_project.png" alt="Project Ico" />
              { icoAlt === 'Projects' ?
                <span>Projects</span>
                : null}
            </Link>
          </li>
          <li
            onMouseOver={() => setIcoAlt('Contact')}
          >
            <Link to="/contact">
              <img src="ico_contact.png" alt="Contact Ico" />
              { icoAlt === 'Contact' ?
                <span>Contact</span>
                : null}
            </Link>
          </li>
          <li
            onMouseOver={() => setIcoAlt('About')}
          >
            <Link to="/about">
              <img src="ico_about.png" alt="About Ico" />
              { icoAlt === 'About' ?
                <span>About</span>
                : null}
            </Link>
          </li>
          <li
            onClick={() => setToggleNav(!toggleNav)}
            onMouseOver={() => setIcoAlt('Show')}
          >
            <img src="next.png" alt="" />
            { icoAlt === 'Show' ?
              <span>Abrir</span>
              : null} 
          </li>
        </ul> 
        <NavBarContainerSimpleFooter
        >
          <img 
            src="config.png"
            alt=""
            onClick={() => setIsActiveConfig(!isActiveConfig)}
          />
        </NavBarContainerSimpleFooter>
      </NavBarContainerSimple>
  )};

export default NavSimple;
import { Link } from 'react-router-dom';
import { 
  LogoContainer,
  NavAsideLeft,
  NavBarConfig,
  NavBarContainer,
  NavBarContainerSimple,
  NavBarContainerSimpleFooter,
  NavSearchContainer,
} from './style';
import { useState } from 'react';

const NavBarAsideLeft = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [icoAlt, setIcoAlt] = useState('')

  return (
    <>      
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
          ><Link to="/">
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
              : null}</Link>
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
        <NavBarContainerSimpleFooter>
          <img src="config.png" alt="" />
        </NavBarContainerSimpleFooter>
      </NavBarContainerSimple>
      
      <NavBarContainer
        className={ toggleNav ? 'show' : 'hiden' } 
      >
        <LogoContainer>
          <img src="logo3.png" alt="" />
        </LogoContainer>
        <NavSearchContainer>
          <input
            type="text"
            placeholder="Search.."
          />
          <button
            type='submit'
          >
            <img src="ico_search.png" alt="" />
          </button>
        </NavSearchContainer>
        <NavAsideLeft>
          <ul>
            <li>
              <img src="ico_home.png" alt="" />
              <Link to="/home">Home</Link>
            </li>
            <li>
              <img src="ico_project.png" alt="" />
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <img src="ico_contact.png" alt="" />
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <img src="ico_about.png" alt="" />
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={() => setToggleNav(!toggleNav)}
            >        
             <img src="prev.png" alt="" />
              <span>Fechar</span>
            </li>
          </ul>
        </NavAsideLeft>
        <NavBarConfig>
          <img src="config.png" alt="Configurações" />
        </NavBarConfig>
        <NavBarContainerSimpleFooter>
          <p>Developed by: <a href="">Jorge de Jesus Cardoso</a></p>
        </NavBarContainerSimpleFooter>
      </NavBarContainer>
    </>
  );
}

export default NavBarAsideLeft;
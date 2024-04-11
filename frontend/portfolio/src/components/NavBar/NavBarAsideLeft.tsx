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
import React, { useEffect, useState } from 'react';
import Config from '../config/Config';

const NavBarAsideLeft = () => {
  const ref = React.useRef<HTMLDivElement>(null)

  const ref2 = React.useRef<HTMLDivElement>(null)
  const [toggleNav, setToggleNav] = useState(false);
  const [icoAlt, setIcoAlt] = useState('')
  const [isActiveConfig, setIsActiveConfig] = useState(false);
  const [callInMainNav, setCallInMainNav] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleNav(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [ref]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref2.current && !ref2.current.contains(event.target)) {
        setIsActiveConfig(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [ref2]);

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
        <NavBarContainerSimpleFooter
        >
          <img 
            src="config.png"
            alt=""
            onClick={() => setIsActiveConfig(!isActiveConfig)}
          />
        </NavBarContainerSimpleFooter>
      </NavBarContainerSimple>
      
      <NavBarContainer
        className={ toggleNav ? 'show' : 'hiden' }
        ref={ref}
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
              <Link to="/">Home</Link>
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
          <img 
            src="config.png"
            alt="Configurações" 
            onClick={() => {
              setIsActiveConfig(!isActiveConfig);
              setCallInMainNav(!callInMainNav);
            }}
          />
        </NavBarConfig>
        <NavBarContainerSimpleFooter>
          <p>Developed by: <a href="">Jorge de Jesus Cardoso</a></p>
        </NavBarContainerSimpleFooter>
      </NavBarContainer>
      { isActiveConfig &&
        <div 
          ref={ref2}          
        >
          <Config />
        </div>
      }
    </>
  );
}

export default NavBarAsideLeft;
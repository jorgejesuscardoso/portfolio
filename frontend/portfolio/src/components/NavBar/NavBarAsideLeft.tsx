/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { 
  LogoContainer,
  NavAsideLeft,
  NavBarConfig,
  NavBarContainer,
  NavBarContainerSimpleFooter,
  NavSearchContainer,
} from './style';
import React, { useEffect, useState } from 'react';
import Config from '../config/Config';
import NavSimple from './NavSimple';

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
        setCallInMainNav(false);
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
      <NavSimple
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
        icoAlt={icoAlt}
        setIcoAlt={setIcoAlt}
        setIsActiveConfig={setIsActiveConfig}
      />
      
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
              <Link to="/">
                <img src="ico_home.png" alt="" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <img src="ico_project.png" alt="" />
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <img src="ico_contact.png" alt="" />
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src="ico_about.png" alt="" />
                About
              </Link>
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
              setCallInMainNav(true);
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
          <Config
            CallInMainMenu={callInMainNav}
          />
        </div>
      }
    </>
  );
}

export default NavBarAsideLeft;
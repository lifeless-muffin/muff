import Link from 'next/link';
import IconRenderer from '../../elements/icons/IconRenderer';
import headerData from '../../../constants/header.json';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';


type NavbarProps = {
  isMobile: boolean, 
  navbarState: boolean,
  setNavbarState: any,
}

type NavbarLinkProps = {
  to: string,
  text: string,
  currentPath: string
}

const NavbarLinkElement = ({to, text, currentPath}: NavbarLinkProps) => (
  <Link className="w-fit h-fit" href={to}>  
    <a target="_blank">
      <div className={`navbar-link${currentPath === to ? ' navbar-link-active' : ''}`}>
        <span className="navbar-link-text">
          {text}
        </span>
      </div>
    </a>
  </Link>
)

const NavbarSection = (NavbarProps: any) => {
  
  const router = useRouter();
  const currentPath = router.pathname;

  const renderList = () => {
    return (
      <ul className="navbar-links-list list-none">
        {headerData['navbar-list'].map((listItem, index) => {
          return (
            <li key={index} className="navbar-list-item">
              <NavbarLinkElement 
                to={listItem.to}
                text={listItem.text}
                currentPath={currentPath}
              />
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="navbar">
      {renderList()}
    </div>
  )
}

const LogoSection = (props: any) => {
  return (
    <div className="header-logo">
      <a className="header-logo-link" href='/'>
        <IconRenderer
          iconSource={props.isMobile ? `/assets/mobile-logo.svg` : '/assets/logo.svg'}
          iconAlt="Portfolio Site Logo"
          iconSize={{width: 'auto', height: props.isMobile ? '26px' : '34px'}}
        />
      </a>
    </div>
  )
}

const Header = (props: any) => {
  
  const [isMobile, setIsMobile] = useState(false)
  const [navbarState, setNavbarState] 
    = useState(false)

  function handlePageResize (props: any) {
    let innerWidth = props.innerWidth
    if (innerWidth < 656) {
      setNavbarState(false)
      setIsMobile(true)
    } else setIsMobile(false)
  }

  useEffect(() => {
    handlePageResize(window)
    window.addEventListener('resize', ({target}) => {handlePageResize(target)})
    return () => window.removeEventListener('resize', ({target}) => {handlePageResize(target)})
  }, [])
  
  return (
    <header className="header-module">
      <div className="header-topbar"></div>
      <div className="header-module-content">
        <Header.LogoSection
          isMobile={isMobile}>
          <LogoSection />
        </Header.LogoSection>

        <Header.NavbarSection 
          navbarState={navbarState}
          setNavbarState={setNavbarState}
          isMobile={isMobile}>
          <NavbarSection />
        </Header.NavbarSection>  
      </div>
    </header>
  );
}

Header.NavbarSection = NavbarSection;
Header.LogoSection = LogoSection;

export {LogoSection}
export default Header;
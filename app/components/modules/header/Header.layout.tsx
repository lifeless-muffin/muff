import Link from 'next/link';
import IconRenderer from '../../elements/icons/IconRenderer';
import headerData from '../../../constants/header.json';

type NavbarProps = {
  to: string,
  text: string,
  currentPage: string
}

const NavbarLinkElement = ({to, text, currentPage}: NavbarProps) => (
  <Link className="w-fit h-fit" href={to}>  
    <div className={`navbar-link${text.toLowerCase() === currentPage ? 'navbar-link-active' : ''}`}>
      <span className="navbar-link-text">
        {text}
      </span>
    </div>
  </Link>
)

const NavbarSection = (props: any) => (
  <div className="navbar">
    <ul className="navbar-links-list list-none">
      {headerData['navbar-list'].map((listItem, index) => {
        return (
          <li className="navbar-list-item">
            <NavbarLinkElement
              key={index} 
              to={listItem.to}
              text={listItem.text}
              currentPage={props.currentPage}
            />
          </li>
        )
      })}
    </ul>
  </div>
)

const LogoSection = (props: any) => (
  <div className="header-logo">
    <a className="header-logo-link" href='/'>
      <IconRenderer
        iconSource="/assets/logo.svg"
        iconAlt="Portfolio Site Logo"
        iconSize={{width: 'auto', height: '34px'}}
      />
    </a>
  </div>
)

const Header = (props: any) => (
  <header className="header-module">
    <div className="header-topbar"></div>
    <div className="header-module-content">
      <Header.LogoSection>
        <LogoSection />
      </Header.LogoSection>

      <Header.NavbarSection currentPage={props.currentPage}>
        <NavbarSection />
      </Header.NavbarSection>  
    </div>
  </header>
);

Header.NavbarSection = NavbarSection;
Header.LogoSection = LogoSection;
export default Header;
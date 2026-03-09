import SocialList from "./SocialList";
import MenuList from "./MenuList";
import logo from "../../src/assets/IMG/travel-svgrepo-com.svg";
const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <!-- <h1>DEMO TRAVEL PAGE</h1> */}
      <div className="navbar-flex">
        <img src={logo} alt="" className="logo" />
        <ul className="main-menu-list">
          <MenuList />
        </ul>
        <ul className="social-menu-list">
          <SocialList />
        </ul>
        {/* // <!-- Mobile Menu --> */}
        <div className="mobile-menu">
          <div className="mobile-menu-toggle">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="mobile-menu-items">
            <ul className="mobile-menu-list">
              <MenuList />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

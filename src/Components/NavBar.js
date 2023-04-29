import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
 

const NavBar = () => {
  return (
    <>
         <header className="header"> 
          
      <NavLink to="/">
        <h1 className="header__title">Titulo</h1>
      
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/category/1" className="header__link link">categoria 1</NavLink>
        <NavLink to="/category/2" className="header__link link">categoria 2</NavLink>
        <NavLink to="/category/3" className="header__link link">categoria 3</NavLink>
        <NavLink to="/cart" className="header__link link"><CartWidget/></NavLink>
      </nav>
    </header>
          </>
  );
};
      


export default NavBar;

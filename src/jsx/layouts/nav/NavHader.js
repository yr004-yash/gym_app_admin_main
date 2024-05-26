import React  from "react";
import { useDispatch , useSelector } from 'react-redux';

/// React router dom
import { Link } from "react-router-dom";

/// images
import logo from "../../../images/logo.png";
import logoText from "../../../images/logo-text.png";

import { navtoggle } from "../../../store/actions/AuthActions";

const NavHader = () => {
   // const [toggle, setToggle] = useState(false);
   const dispatch = useDispatch();
   const sideMenu = useSelector(state => state.sideMenu);
   const handleToogle = () => {
      dispatch(navtoggle());
    };
   return (
      <div className="nav-header">
         <Link to="/" className="brand-logo">
            <img className="logo-abbr" src={logo} alt="" />
            <img className="logo-compact" src={logoText} alt="" />
            <img className="brand-title" src={logoText} alt="" />
         </Link>

         <div className="nav-control" onClick={() => handleToogle()}>
            <div className={`hamburger ${sideMenu ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;

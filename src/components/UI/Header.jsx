// // import { NavLink } from "react-router-dom";
// // import React from "react";
// // import './Header.css';


// // export const Header = () => {
// //     return <header>
// //         <div className="header">
// //             <div className="logo">
// //                 <h1><NavLink to="/">WorldAtla</NavLink></h1>
// //             </div>
// //             <div className="menu">
// //                 <ul>
// //                     <li><NavLink to="/">Home</NavLink></li>
// //                     <li><NavLink to="/about">About</NavLink></li>
// //                     <li><NavLink to="/contact">Contact</NavLink></li>
// //                     <li><NavLink to="/country">Country</NavLink></li>
// //                 </ul>
// //             </div>
// //         </div>
// //     </header>;
// // }

// import { NavLink } from "react-router-dom";
// import React, { useState } from "react";
// import './Header.css';

// export const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header>
//       <div className="header">
//         <div className="logo">
//           <h1><NavLink to="/">WorldAtla</NavLink></h1>
//         </div>
//         <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//           ☰
//         </div>
//         <div className="menu">
//           <ul className={menuOpen ? "show" : ""}>
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/about">About</NavLink></li>
//             <li><NavLink to="/contact">Contact</NavLink></li>
//             <li><NavLink to="/country">Country</NavLink></li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import './Header.css'; 

export const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

 
  const closeMenu = () => {
    setMenuOpen(false);
  };

  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        
        <NavLink to="/" onClick={closeMenu}>WorldAtla</NavLink>
      </div>

      
      <nav className="menu">
       
        <ul className={menuOpen ? "show" : ""}>
         
          <li onClick={closeMenu}><NavLink to="/">Home</NavLink></li>
          <li onClick={closeMenu}><NavLink to="/about">About</NavLink></li>
          <li onClick={closeMenu}><NavLink to="/contact">Contact</NavLink></li>
          <li onClick={closeMenu}><NavLink to="/country">Country</NavLink></li>
        </ul>
      </nav>

      
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
     return (
         <div>
             <Link to="/about"> About me</Link>
             <Link to="/portfolio"> Portfolio</Link>
             <Link to="/contact"> Contact</Link>
         </div>
     );
};

export default Navbar;

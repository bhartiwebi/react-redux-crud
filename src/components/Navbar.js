import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to="/" className="navbar-brand ml-5 text-right">
        <p style={{marginLeft: "80%"}}>react app</p>

        {/* <Link to="/add" className="ml-5 text-right">
        
        Add Contact
        </Link> */}


{/* <Link to="/" className="navbar-brand ml-5 text-right">
        <div className="text-right">
          <p style={{ marginLeft: "435%" }}>react-redux app</p>
        </div>

       
      </Link> */}

      </Link>
    </nav>
  );
};

export default Navbar;


  
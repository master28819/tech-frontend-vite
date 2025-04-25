// src/NavBar.jsx
import React from "react";
import { useState } from "react";

const NavBar = () => {

  const [loginUser, setLoginUser] = useState(true);
  const [mode, setMode] = useState("dark");

  return (
    <nav className={"navbar navbar-expand-lg " + ( mode === "dark" ? "bg-grey" : "bg-light" ) }>
      <div className="container-fluid">
        <a className="navbar-brand logo-text" href="/">Tech2<span>xplore</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link p-0 fw-bolder" href="/about"><span className={ "fs-6 " + ( mode === "dark" ? "text-light" : "text-dark" ) }>About Us</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 fw-bolder" href="/bloggers"><span className={ "fs-6 " + ( mode === "dark" ? "text-light" : "text-dark" ) }>Bloggers</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 fw-bolder" href="/posts"><span className={ "fs-6 " + ( mode === "dark" ? "text-light" : "text-dark" ) }>Posts</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 fw-bolder" href="/trendings"><span className={ "fs-6 " + ( mode === "dark" ? "text-light" : "text-dark" ) }>Trendings</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 fw-bolder" href="/mass-filter"><span className={ "fs-6 " + ( mode === "dark" ? "text-light" : "text-dark" ) }>Filter</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 fw-bolder" href="/entity"><span className={ "fs-6 " + ( mode === "dark" ? "text-light" : "text-dark" ) }>Entity</span></a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {
              loginUser === false ?
                <>
                  <li className="nav-item ">
                    <a className="nav-link p-0 fw-bolder " href="/register"><i className="bi bi-person-plus"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0 fw-bolder" href="/login"><i className="bi bi-box-arrow-in-right"></i></a>
                  </li>
                </> :
                <>
                  <li className="nav-item">
                    <a className="nav-link p-0 fw-bolder" href="/create_post"><i className="bi bi-pencil-square"></i> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0 fw-bolder" href="/myposts"><i className="bi bi-file-earmark-person"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0 fw-bolder" href="/profile"><i className="bi bi-person"></i> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0 fw-bolder" href="/logout"><i className="bi bi-box-arrow-right"></i></a>
                  </li>
                </>
            }
            
            <li className="nav-item">
              <button className="nav-link p-0 fw-bolder" onClick={ () => { setMode( mode === "dark" ? "light" : "dark" ) } }><i className={"bi " + ( mode === "dark" ? "bi-moon-stars-fill" :  "bi-sun-fill"  ) }></i></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

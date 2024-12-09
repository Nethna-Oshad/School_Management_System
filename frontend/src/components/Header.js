 import React from "react";

 function Header(){

    return(
         <nav Class="navbar navbar-expand-lg bg-body-tertiary">
  <div Class="container-fluid">
    <a Class="navbar-brand" href="www.google.com">Navbar</a>
    <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span Class="navbar-toggler-icon"></span>
    </button>
    <div Class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div Class="navbar-nav">
        <a Class="nav-link active" aria-current="page" href="www.google.com">Home</a>
        <a Class="nav-link" href="www.google.com">Create Student</a>
        <a Class="nav-link" href="www.google.com">Log</a>
      </div>
    </div>
  </div>
</nav>
    )
 }


export default Header;
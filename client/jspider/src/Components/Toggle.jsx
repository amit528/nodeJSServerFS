import { Link } from "react-router-dom";

function Toggle() {
    const openNav = () =>{
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    const closeNav = () =>{
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
  return (
    <>
       <div id="mySidenav" className="sidenav">
        <span className="closebtn" onClick={closeNav}>&times;</span>
        <Link onClick={closeNav} to="/">Home</Link>
        <Link onClick={closeNav} to="/courses">Course Details</Link>
        <Link onClick={closeNav} to="/students">Student Details</Link>
        <Link onClick={closeNav} to="/trainers">Trainer Details</Link>
      </div>

<span onClick={openNav}>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
</span>

    <div id="main">
     
    </div> 
    </>
  );
}

export default Toggle;
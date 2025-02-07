import { NavLink } from "react-router-dom";

const Header=()=>{
return(
    <header className="bg-light py-2">
        <div className="container">
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className='navbar-brand' to="/">ScholarSync</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <NavLink className="nav-link" to="/students">Students</NavLink>
        <NavLink className="nav-link" to="/classes">Classes</NavLink>
        <NavLink className="nav-link" to="/school">School</NavLink>
      
       
       
      </ul>
      
    </div>
  </div>
</nav>
</div>

    </header>
)
}
export default Header;
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <div className="topbar">
        <span>UAN: 0300-0000000</span>
        <span>info@technest.com</span>
      </div>
      <nav className="navbar">
        <NavLink to="/" className="logo">TechNest</NavLink>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/branches">Branches</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="nav-buttons">
          <NavLink to="/login" className="btn btn-outline">Login</NavLink>
          <NavLink to="/signup" className="btn btn-orange">Enroll Now</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

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
          {user ? (
            <>
              <span className="user-name">Hi, {user.name}</span>
              <button onClick={handleLogout} className="btn btn-outline logout-btn">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-outline">Login</NavLink>
              <NavLink to="/signup" className="btn btn-orange">Enroll Now</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
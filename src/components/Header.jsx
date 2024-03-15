import {NavLink} from 'react-router-dom'

const Header = () => (
  <header className="bg-dark text-light">
    <div className="container py-3">
  <h1 className="display-2">Firebnb</h1>
    <nav>
      <ul  className="nav">
        <li  className="nav-item"><NavLink to="/" className="nav-link">Overview</NavLink></li>
        <li  className="nav-item"><NavLink to="/stays" className="nav-link">Stays</NavLink></li>
        <li  className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
      </ul>
      </nav>
    </div>
  </header>
)
  


  export default Header;
  
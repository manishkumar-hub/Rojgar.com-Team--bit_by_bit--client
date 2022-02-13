import './navbarStyle.css';
import { useNavigate, NavLink } from 'react-router-dom'
import Cookies from 'js-cookie'

function Navbar(user) {

  let navigate = useNavigate();
   
    console.log(`inside nav: ${user.name}`);
    const handleLogout= ()=>{
      Cookies.remove('ID');
      navigate("/");
    }
    return (
      <>
        <nav className='navbar navbar-expand-lg navbar-light '>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              Rojgar.Com
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav '>
                <li className='nav-item'>
                  <NavLink to='/' activeClassName='active'>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/about' activeClassName=''>
                    About
                  </NavLink>
                  {/* <a className="nav-link" href="#">About </a> */}
                </li>
                <li className='nav-item'>
                  <NavLink to='/about' activeClassName=''>
                    Contact
                  </NavLink>
                  {/* <a className="nav-link" href="#">Contact</a> */}
                </li>
                <li className='nav-item'>
                  
                  <NavLink to='/about' activeClassName=''>
                    {user.name}
                  </NavLink>
                  
                
                </li>
                <li className='nav-item'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary '
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}

export default Navbar;



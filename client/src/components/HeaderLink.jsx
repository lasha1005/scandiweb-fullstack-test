import { NavLink, useLocation } from 'react-router'

function HeaderLink({path, children}) {
  const location = useLocation();
  const isActive = location.pathname === path;
<<<<<<< HEAD
  
=======
>>>>>>> 1b9c6610d93571d318f9f118fd36874f4f99b291
  return (
    <NavLink 
        to={path}
        className={({isActive}) => 
            `uppercase font-raleway text-sm sm:text-base ${isActive ? 'font-bold text-green-500 border-b-2 border-green-500' : "text-gray-700"}`
        }
        data-testid={isActive ? "active-category-link" : "category-link"}
        >
          {children}
    </NavLink>
  )
}

export default HeaderLink

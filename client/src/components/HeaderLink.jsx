import { NavLink, useLocation } from 'react-router-dom'

function HeaderLink({path, children}) {
  const location = useLocation();
  const isActive = location.pathname === path;
  
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

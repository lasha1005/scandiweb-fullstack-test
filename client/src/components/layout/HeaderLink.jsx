import { NavLink, useLocation } from 'react-router-dom'

function HeaderLink({path, children}) {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <NavLink 
        to={path}
        className={({isActive}) => 
          `uppercase font-raleway text-sm sm:text-base
          ${isActive 
            ? 'font-semibold text-primary border-b-2 border-primary' 
            :"text-secondary hover:text-primary"}
        `}
        data-testid={isActive ? "active-category-link" : "category-link"}
        >
          {children}
    </NavLink>
  )
}

export default HeaderLink

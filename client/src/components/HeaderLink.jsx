import { NavLink } from 'react-router'

function HeaderLink({path, children}) {
  return (
    <NavLink 
        to={path}
        className={({isActive}) => 
            `uppercase font-raleway text-sm sm:text-base ${isActive ? 'font-bold text-green-500 border-b-2 border-green-500' : "text-gray-700"}`
        }
        >
        {({ isActive }) => (
          <span data-testid={isActive ? "active-category-link" : "category-link"}>
            {children}
          </span>
        )}
    </NavLink>
  )
}

export default HeaderLink

import logo from "../../assets/Group.png"
import cartLogo from "../../assets/Cart.png"
import Cart from '../Cart'
import { useCart } from "../../context/CartContext";
import HeaderLink from './HeaderLink'

function Header() {
  const { getCartItemCount, cartVisible, toggleCart, loading } = useCart()

  return (
    
    <header>
      <nav className='
        fixed top-0 left-0 right-0 z-30 bg-white 
        px-3 py-2 sm:px-12 sm:py-4 md:px-20 shadow flex items-center
      '>
        <div className='flex-1 flex gap-4 sm:gap-6 justify-start'>
          <HeaderLink path="/category/all">All</HeaderLink>
          <HeaderLink path="/category/clothes">Clothes</HeaderLink>
          <HeaderLink path="/category/tech">Tech</HeaderLink>
        </div>
        <div className='flex-1 flex justify-center'>
            <img src={logo} alt="logo" className='h-8'/>
        </div>
        <div className='flex flex-1 justify-end'>
          <button 
            className='relative cursor-pointer' 
            onClick={() => toggleCart(false)} 
            data-testid='cart-btn'
          >
            <img 
              src={cartLogo} 
              alt="Cart" 
              className='h-6' 
            />
            {getCartItemCount() > 0 && (
              <span 
                className='
                absolute -top-2 -right-2 bg-secondary text-white
                font-roboto font-bold text-center text-sm
                rounded-full w-5 h-5 object-contain'
              >{getCartItemCount()}
              </span>
            )}
          </button>
          {cartVisible && (
            <Cart cartVisible={cartVisible} />
          )}
        </div>
      </nav>
      {cartVisible && 
        <div 
          className='fixed inset-0 bg-black opacity-30 z-10' 
          onClick={() => !loading && toggleCart(false)}
        ></div>
      }
      <div className="h-15 sm:h-20" />
    </header>
  )
}

export default Header

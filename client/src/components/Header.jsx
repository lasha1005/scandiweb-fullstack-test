import { useState } from 'react'
import logo from "../assets/Group.png"
import cartLogo from "../assets/Cart.png"
import Cart from './Cart'
import { useCart } from "../context/CartContext";
import HeaderLink from './HeaderLink'

function Nav() {
  const [cartVisible, setCartVisible] = useState(false)
  const {getCartItemCount} = useCart()

  function toggleCart() {
    setCartVisible(!cartVisible)
  }

  return (
    <header>
      <nav className='
        fixed top-0 left-0 right-0 z-30 bg-white 
        px-3 py-2 sm:px-8 sm:py-4 shadow flex items-center
      '>
        <div className='flex-1 flex gap-4 sm:gap-6 justify-start'>
          <HeaderLink path="/all">Products</HeaderLink>
          <HeaderLink path="/clothes">Clothes</HeaderLink>
          <HeaderLink path="/tech">Tech</HeaderLink>
        </div>
        <div className='flex-1 flex justify-center'>
            <img src={logo} alt="logo" className='h-8'/>
        </div>
        <div className='flex flex-1 justify-end'>
          <button className='relative cursor-pointer' onClick={toggleCart} data-testid='cart-btn'>
            <img src={cartLogo} alt="Cart" className='h-6' />
            {getCartItemCount() > 0 && (
              <span className='
              absolute -top-2 -right-2 bg-secondary text-white
              text-xs text-center rounded-full w-[20px] h-[20px] flex items-center justify-center
              '>{getCartItemCount()}
              </span>
            )}
          </button>
          {cartVisible && (
            <Cart cartVisible={cartVisible} />
          )}
        </div>
      </nav>
      {cartVisible && <div className='fixed inset-0 bg-black opacity-30 z-10' onClick={toggleCart}></div>}
      <div className="h-15 sm:h-20" />
    </header>
  )
}

export default Nav

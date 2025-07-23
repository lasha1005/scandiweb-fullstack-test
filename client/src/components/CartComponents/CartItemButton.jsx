function CartItemButton({ loading, item, children,  updateQuantity}) {
  return (
    <button  
        data-testid='cart-item-amount-increase' 
        className="border w-6 h-6 cursor-pointer text-center text-secondary font-raleway" 
        onClick={() => !loading && updateQuantity(item)}
    >
        {children}
    </button>
  )
}

export default CartItemButton

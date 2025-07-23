import { useCart } from "../context/CartContext";
import CartItemCard from "./CartComponents/CartItemCard";
import Button from "./Button";

function Cart({cartVisible}) {
  const { 
    cart, 
    getCartItemCount, 
    addToCart, 
    removeFromCart, 
    handleOrder,
    loading
  } = useCart();

  const itemCount = getCartItemCount();
  
  return (
    <>
      {cartVisible && (
        <div 
          className="
            fixed bottom-0 left-0 right-0 mx-auto sm:absolute 
            sm:right-20 sm:left-auto sm:top-16 sm:bottom-auto z-40
            min-w-[90vw] max-w-[98vw] sm:min-w-[325px] sm:max-w-[400px] max-h-[80vh] sm:max-h-[600px]
            bg-white shadow-2xl p-4 overflow-y-auto"
          data-testid='cart-overlay'>
          <h4 className="font-raleway font-medium mb-5 text-secondary">
            <span className="font-bold">My bag </span> 
            {itemCount} {itemCount > 1 ? "items" : "item"}
          </h4>
          <CartItemCard cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} loading={loading} />
          <div className="flex justify-between pt-4">
            <h4 className="font-roboto font-medium text-secondary">
              Total
            </h4>
            <h4 data-testid='cart-total' className="font-raleway font-bold text-secondary">
              ${cart.reduce((total, item) => total + (item.price.amount * item.quantity), 0).toFixed(2)}
            </h4>
          </div>
          <Button 
            handleOrder={handleOrder}
            isDisabled={cart.length <= 0}
            customStyles={"text-sm mt-4 py-3"}
          >
            {loading ? "Loading..." : "PLACE ORDER"}
          </Button>
        </div>
      )}
    </>
  )
}

export default Cart

import { useCart } from "../context/CartContext";
import Attribute from "./Attribute"

function Cart({cartVisible}) {
  const { 
    cart, 
    getCartItemCount, 
    addToCart, 
    removeFromCart, 
    handleOrder 
  } = useCart();

  const itemCount = getCartItemCount();
  
  return (
    <>
      {cartVisible && (
        <div 
          className="
            fixed bottom-0 left-0 right-0 mx-auto sm:absolute sm:right-20 sm:left-auto sm:top-16 sm:bottom-auto z-40
            min-w-[90vw] max-w-[98vw] sm:min-w-[325px] sm:max-w-[400px] max-h-[80vh] sm:max-h-[600px]
            bg-white shadow-2xl p-4 overflow-y-auto"
          data-testid='cart-overlay'>
          <h4 className="font-raleway mb-5">
            <span className="font-bold">My bag </span> 
            {itemCount} {itemCount > 1 ? "items" : "item"}
          </h4>
          {cart && cart.map((item, index) => (
            <div key={index} className="flex justify-between gap-3 mb-10">
              <div className="flex justify-between w-[200px]">
                <div className="max-w-[150px]">
                  <h5 className="font-raleway text-secondary font-light text-lg">{item.brand} {item.name}</h5>
                  <p className="font-raleway text-secondary font-medium">{item.price.symbol}{item.price.amount}</p>
                  <Attribute 
                    attributes={item.attributes} 
                    selectedAttr={item.selectedAttributes} 
                    isCartAttribute={true}
                  />
                </div>
                <div className="flex flex-col items-center justify-between gap-2">
                  <button  
                    data-testid='cart-item-amount-increase' 
                    className="border px-2 cursor-pointer" 
                    onClick={() => addToCart(item)}
                    >+</button>
                  <p data-testid='cart-item-amount'>{item.quantity}</p>
                  <button  
                    data-testid='cart-item-amount-decrease' 
                    className="border px-2 cursor-pointer" 
                    onClick={() => removeFromCart(item)}
                    >-</button>
                </div>
              </div>
              <div className="w-[100px]">
                <img 
                  className="h-full  w-[100px] object-contain" 
                  src={item.gallery[0].image_url} 
                  alt={item.name} 
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between pt-4">
            <h4 className="font-raleway font-medium">Total</h4>
            <h4 data-testid='cart-total' className="font-raleway font-bold">
              ${cart.reduce((total, item) => total + (item.price.amount * item.quantity), 0).toFixed(2)}
            </h4>
          </div>
          <button className="
            w-full mt-4 bg-primary text-white py-3 cursor-pointer
          disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
          " 
          onClick={handleOrder} 
          disabled={cart.length <= 0}
          >
            PLACE ORDER
          </button>
        </div>
      )}
    </>
  )
}

export default Cart
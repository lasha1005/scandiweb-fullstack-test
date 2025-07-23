import Attribute from "../Attribute"
import CartItemButton from "./CartItemButton"

function CartItemCard({ cart, addToCart, removeFromCart, loading }) {
  return (
    cart && cart.map((item, index) => (
        <div key={index} className="flex justify-between gap-3 mb-10">
            <div className="flex justify-between w-[200px] flex-2">
                <div className="flex flex-col">
                    <h5 className="font-raleway text-secondary font-light text-lg mb-2">
                        {item.brand} {item.name}
                    </h5>
                    <p className="font-raleway text-secondary mb-auto">
                        {item.price.symbol}{item.price.amount}
                    </p>
                    <Attribute 
                        attributes={item.attributes} 
                        selectedAttr={item.selectedAttributes} 
                        isCartAttribute={true}
                    />
                </div>
                <div className="flex flex-col items-center justify-between gap-2">
                    <CartItemButton loading={loading} item={item} updateQuantity={addToCart}>
                        +
                    </CartItemButton>
                    <p data-testid='cart-item-amount' className="font-raleway text-secondary">
                        {item.quantity}
                    </p>
                    <CartItemButton loading={loading} item={item} updateQuantity={removeFromCart}>
                        -
                    </CartItemButton>
                </div>
            </div>
            <div className="flex-1">
                <img 
                    className="h-full object-contain" 
                    src={item.gallery[0]?.image_url} 
                    alt={item.name} 
                />
            </div>
        </div>
        ))
  )
}


export default CartItemCard

import { createContext, useContext, useState } from 'react'
import {useMutation} from "@apollo/client"
import { PLACE_ORDER } from '../graphql/mutations/PLACE_ORDER'

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const [createOrder] = useMutation(PLACE_ORDER)

    function isSameAttributes(attr1, attr2) {
        if (!Array.isArray(attr1) || !Array.isArray(attr2)) return false;
        if (attr1.length !== attr2.length) return false;
        return attr1.every(a1 => 
            attr2.some(a2 => a1.name === a2.name && a1.value === a2.value)
        )  
    };

    function addToCart(item) {
        const existingIndex = cart.findIndex(product => 
            product.id === item.id && isSameAttributes(product.selectedAttributes, item.selectedAttributes)
        )
        if (existingIndex !== -1) {
            setCart(prevCart => 
                prevCart.map((product, index) => 
                index === existingIndex ? {...product, quantity: product.quantity  + 1 } : product)
            )
        } else {
            setCart(prevCart => [...prevCart, {...item, quantity: 1}])
        }
    } 

    function removeFromCart(item) {
        setCart(prevCart => {
            return prevCart.map(product => {
                if(product.id ===  item.id && isSameAttributes(product.selectedAttributes, item.selectedAttributes)) {
                    if(product.quantity > 1) {
                        return {...product,  quantity: product.quantity - 1}
                    }
                    return null
                    
                }
                return product
            }).filter(Boolean)
        })
    }

    async function handleOrder() {

        try {
            const response = await createOrder({variables: {
                order : {
                    products: cart.map(item=> ({id: item.id, quantity: item.quantity, selectedAttributes:item.selectedAttributes}))
                }
            }})
            const {result, success} = response.data.createOrder;
            if(success) {
                alert(result);
                setCart([]);
            }else {
                alert("Order failed. Result: " + result);
            }
        }catch (error) {
            console.error("Order failed: ", error);
        }
    }

    function getCartItemCount() {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemCount, handleOrder}} >
            {children}
        </CartContext.Provider>
    )
}
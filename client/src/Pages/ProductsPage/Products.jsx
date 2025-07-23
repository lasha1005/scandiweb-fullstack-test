import { useQuery } from '@apollo/client'
import { useCart } from "../../context/CartContext";
import { GET_PRODUCTS } from '../../graphql/queries/GET_PRODUCTS'
import ProductCard from './components/ProductCard';

function Products({ categoryName }) {
  const {
    data: {
      Category: {
        products = []
      } = {} 
    } = {}, 
    loading
  } = useQuery(GET_PRODUCTS, {variables : { name: categoryName.toLowerCase() }});

  const { addToCart, toggleCart } = useCart();

  function quickShop(e, product) {
    e.stopPropagation();
    e.preventDefault();
    let selectedAttr = []
    
    product.attributes.forEach((attrArray) => {
      if(attrArray.items.length > 0) {
        selectedAttr.push({name:attrArray.name, value:attrArray.items[0].display_value})
      }
    });
      
    const cartItem = { 
        ...product,
        selectedAttributes: selectedAttr,
        quantity: 1,
    }
    addToCart(cartItem);
    toggleCart(true);
  }

  if(loading) {
    return <div className='py-6 px-2 sm:py-12 sm:px-6 md:px-20'>
      <h1 className='font-raleway font-semibold text-xl sm:text-3xl mb-4 sm:mb-10'>Loading...</h1>
    </div>
  }

  return (
    <div className='py-6 px-2 sm:py-12 sm:px-6 md:px-20'>
      <h1 className='font-raleway text-xl sm:text-[42px] mb-4 sm:mb-10'>{ categoryName }</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8'>
        <ProductCard products={products} quickShop={quickShop}/>
      </div>
    </div>
  )
}

export default Products

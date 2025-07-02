import { useQuery } from '@apollo/client'
import CartLogo from "../assets/Empty Cart.svg"
import { Link } from 'react-router-dom'
import { useCart } from "../context/CartContext";
import { GET_PRODUCTS } from '../graphql/queries/GET_PRODUCTS'
import { toKebabCase } from '../utils/kebabCase';

function Products({ categoryName }) {
  const {
    data: {
      Category: {
        products = []
      } = {} 
    } = {}, 
    loading
  } = useQuery(GET_PRODUCTS, {variables : {name: categoryName}});

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

  const productsElement = products && products.map((product) => {
    return (
        <Link 
          data-testid={`product-${toKebabCase(product.name)}`}
          to={`/${product.id}`} 
          key={product.id} 
          className='group relative flex flex-col justify-start p-2 sm:p-[10px] bg-white hover:shadow-2xl transition'>
          <div className='relative h-full'>
            <img src={product.gallery[0].image_url} alt="" className='h-full w-full object-contain'/>
            {!product.in_stock && (
              <div 
                className='
                  absolute top-0 bottom-0 left-0 right-0 
                  flex justify-center items-center
                  bg-black/10
                '>
                  <p className='text-[#8D8F9A] text-2xl font-raleway text-center'>OUT OF STOCK</p>
              </div>
            )}
            {product.in_stock && (
              <button 
                className='hidden group-hover:flex absolute bottom-3 right-3 z-10 bg-primary w-10 h-10 sm:w-12 sm:h-12 rounded-full items-center justify-center transition'
                onClick={(e) => quickShop(e, product)}>
                <img src={CartLogo} alt="cart-icon" />
              </button>
            )}
          </div>
          <p className='m-0 font-raleway font-light text-base sm:text-lg text-secondary truncate'>{product.name}</p>
          <p className='m-0 font-raleway text-secondary text-base sm:text-lg'>{product.price.symbol}{product.price.amount}</p>
        </Link>
    )
  });

  if(loading) {
    return <div className='py-6 px-2 sm:py-12 sm:px-6 md:px-20'>
      <h1 className='font-raleway font-semibold text-xl sm:text-3xl mb-4 sm:mb-10'>Products...</h1>
    </div>
  }

  return (
    <div className='py-6 px-2 sm:py-12 sm:px-6 md:px-20'>
      <h1 className='font-raleway font-semibold text-xl sm:text-3xl mb-4 sm:mb-10'>Products</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8'>
        {productsElement}
      </div>
    </div>
  )
}

export default Products

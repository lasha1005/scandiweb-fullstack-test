import { Link } from 'react-router-dom'
import CartLogo from "../../../assets/Empty Cart.svg"
import { toKebabCase } from '../../../utils/kebabCase'

function ProductCard({ products, quickShop}) {
  return (
    products && products.map(product => (
        <Link 
            data-testid={`product-${toKebabCase(product.name)}`}
            to={`/product/${product.id}`} 
            key={product.id} 
            className="
                group relative flex flex-col justify-start p-2 
                sm:p-[10px] bg-white hover:shadow-2xl transition
            ">
            <div className='relative h-full'>
                <img 
                    src={product.gallery[0].image_url} 
                    alt="product-image" 
                    className="h-full w-full object-contain"
                />
                {!product.in_stock && (
                    <div 
                        className="
                            absolute top-0 bottom-0 left-0 right-0 
                            flex justify-center items-center
                            bg-black/10
                        "
                    >
                            <p className="text-[#8D8F9A] text-2xl font-raleway text-center">
                                OUT OF STOCK
                            </p>
                    </div>
                )}
                {product.in_stock && (
                    <button 
                        className="
                            hidden group-hover:flex absolute bottom-3 right-3 z-5 bg-primary 
                            w-10 h-10 sm:w-12 sm:h-12 rounded-full items-center justify-center transition cursor-pointer
                        "
                        onClick={(e) => quickShop(e, product)}
                        aria-label={`quick shop ${product.name}`}
                    >
                        <img src={CartLogo} alt="cart-icon" />
                    </button>
                )}
            </div>
            <p className="m-0 font-raleway font-light text-base sm:text-lg text-secondary truncate">
                {product.name}
            </p>
            <p className="m-0 font-raleway text-secondary text-base sm:text-lg">
                {product.price.symbol}{product.price.amount}
            </p>
        </Link>
    ))  
)
}



export default ProductCard

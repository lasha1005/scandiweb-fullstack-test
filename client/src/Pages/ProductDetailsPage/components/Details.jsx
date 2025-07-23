import parse from 'html-react-parser';
import Attribute from "../../../components/Attribute";
import Button from '../../../components/Button';

function Details({ productData, selectedAttr, addAttribute, handleAddToCart }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
        <h1 className="
            font-raleway font-semibold text-lg uppercase mb-2  
            sm:text-2xl md:text-3xl sm:mb-5"
        >
            {productData.name}
        </h1>
        <div className="flex flex-col gap-3 mb-2 md:gap-6 md:mb-5">
            <Attribute 
                attributes={productData.attributes} 
                selectedAttr={selectedAttr} 
                addAttribute={addAttribute}
            />
        </div>
        <h3 className="
            font-raleway font-bold text-base 
            sm:text-lg uppercase mb-2 sm:mb-3
        ">
            Price:
        </h3>
        <h2 className="font-raleway font-bold text-lg sm:text-2xl uppercase mb-3 sm:mb-5">
            {productData.price.symbol} {productData.price.amount}
        </h2>
        <Button
            dataTestId={"add-to-cart"}
            customStyles={"p-3 sm:p-4 mb-6 sm:mb-10"}
            handleOrder={handleAddToCart}
            isDisabled={!productData.in_stock ||
                Object.keys(selectedAttr).length < 
                productData.attributes.length
            }
        >
            ADD TO CART
        </Button>
        <div 
            data-testid="product-description" 
            className="
                w-full font-roboto max-w-none max-h-[250px] 
                sm:max-h-[300px] md:max-h-[500px] overflow-y-auto mb-5 prose"
            >
            {parse(productData.description)}
        </div>
    </div>
  )
}
  


export default Details

import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import { useCart } from "../context/CartContext";
import Attribute from "../components/Attribute";
import { GET_PRODUCT } from "../graphql/queries/GET_PRODUCT";

function ProductDetails() {
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedAttr, setSelectedAttr] = useState([]);
    const params = useParams();
    const {data: {Product} = {}, loading} = useQuery(GET_PRODUCT, {variables: {id: params.id}});

    const {  addToCart, toggleCart } = useCart();

    function switchImage(direction, index) {
        if(index >= 0) {
            setCurrentImage(index)
        }
        if(direction === "forward") {
            setCurrentImage(prevImage => prevImage === Product.gallery.length - 1 ? 0 : prevImage + 1);
        }else if (direction === "back") {
            setCurrentImage(prevImage => prevImage === 0  ? Product.gallery.length - 1 : prevImage - 1);
        }
    }

    function addAttribute(name, value) {
        setSelectedAttr(prevAttr => {
            const filtered = prevAttr.filter(attr => attr.name !== name)
            return [...filtered, {name, value}]
        });
    }

    function handleAddToCart() {
        if(!Product) return;
        const requiredAttrs = Object.keys(Product.attributes || {});
        const selectedCount = Object.keys(selectedAttr).length;
        if(selectedCount < requiredAttrs.length) {
            alert("Please select all attributes before adding to cart");
            return
        }
        
        const cartItem = {
            ...Product,
            selectedAttributes: selectedAttr,
            quantity: 1,
        }
        addToCart(cartItem);
        toggleCart(true);
    }

    if(loading) {
        return <div className='py-6 px-2 sm:py-12 sm:px-6 md:px-20'>
            <h1 className='font-raleway font-semibold text-xl sm:text-3xl mb-4 sm:mb-10'>Products...</h1>
        </div>
    }

    return (
        <>
            {
                Product && (
                    <div className="flex flex-col md:flex-row h-auto md:h-screen justify-center items-center md:items-center gap-4 md:gap-10 px-2 sm:px-6 md:px-20">
                        <div className="flex flex-row md:flex-col gap-2 md:gap-5 mb-4 md:mb-0" data-testid="product-gallery">
                            {Product.gallery.map(({image_url}, index) => (
                                <img 
                                    src={image_url} 
                                    alt="product_image" 
                                    key={index}
                                    className="w-12 h-12 sm:w-20 sm:h-20 cursor-pointer object-contain" 
                                    onClick={() =>switchImage(null, index)}/>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 w-full">
                            <div className="relative flex-1 flex justify-center w-full">
                                <img 
                                    src={Product.gallery[currentImage].image_url} 
                                    alt="product-image" 
                                    className="max-w-full max-h-[220px] sm:max-h-[400px] md:max-h-[600px] object-contain rounded"
                                />
                                {Product.gallery.length > 1 ? (
                                    <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2">
                                        <button 
                                            className="
                                                    bg-black opacity-75 w-7 h-7 flex justify-center items-center text-white cursor-pointer
                                                "
                                            onClick={()=>switchImage("back")}
                                            >{"<"}</button>
                                        <button 
                                            className="
                                                bg-black opacity-75 w-7 h-7 flex justify-center items-center text-white cursor-pointer
                                            "
                                            onClick={()=>switchImage("forward")}
                                            >{">"}</button>
                                    </div>
                                ): ""}
                            </div>
                            <div className="flex-1 min-w-0 w-full">
                                <h1 className="font-raleway font-semibold text-lg sm:text-2xl md:text-3xl uppercase mb-2 sm:mb-5">{Product.name}</h1>
                                <Attribute 
                                    attributes={Product.attributes} 
                                    selectedAttr={selectedAttr} 
                                    addAttribute={addAttribute}
                                />
                                <h3 className="font-raleway font-bold text-base sm:text-lg uppercase mb-2 sm:mb-5">Price:</h3>
                                <h2 className="font-raleway font-bold text-lg sm:text-2xl uppercase mb-3 sm:mb-5">
                                    {Product.price.symbol} {Product.price.amount}
                                </h2>
                                <button 
                                    data-testid="add-to-cart" 
                                    className="
                                        w-full p-3 sm:p-4 bg-primary cursor-pointer mb-6 sm:mb-10 font-raleway text-white
                                        disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
                                    " 
                                    onClick={handleAddToCart}
                                    disabled={!Product.in_stock || Object.keys(selectedAttr).length < Product.attributes.length}
                                    >
                                    ADD TO CART
                                </button>
                                <div data-testid="product-description" className="max-h-[150px] sm:max-h-[300px] md:max-h-[500px] overflow-y-auto mb-5">
                                    {parse(Product.description)}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
  )
}

export default ProductDetails

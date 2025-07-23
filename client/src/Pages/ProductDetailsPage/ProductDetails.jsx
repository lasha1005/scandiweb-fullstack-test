import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { GET_PRODUCT } from "../../graphql/queries/GET_PRODUCT";
import Gallery from "./components/Gallery";
import Details from "./components/Details";
import ErrorPage from "../ErrorPage";

function ProductDetails() {
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedAttr, setSelectedAttr] = useState([]);
    const params = useParams();
    const {
        data: 
            {Product: productData} = {},
            loading,
            error
    } = useQuery(GET_PRODUCT, {variables: {id: params.id}});

    if(error) {
        return <ErrorPage message={error.message}/>
    }

    const {  addToCart, toggleCart } = useCart();

    function switchImage(direction, index) {
        if(index >= 0) {
            setCurrentImage(index)
        }
        if(direction === "forward") {
            setCurrentImage(prevImage => prevImage === productData.gallery.length - 1 ? 0 : prevImage + 1);
        }else if (direction === "back") {
            setCurrentImage(prevImage => prevImage === 0  ? productData.gallery.length - 1 : prevImage - 1);
        }
    }

    function addAttribute(name, value) {
        setSelectedAttr(prevAttr => {
            const filtered = prevAttr.filter(attr => attr.name !== name)
            return [...filtered, {name, value}]
        });
    }

    function handleAddToCart() {
        if(!productData) return;
        const requiredAttrs = Object.keys(productData.attributes || {});
        const selectedCount = Object.keys(selectedAttr).length;
        if(selectedCount < requiredAttrs.length) {
            alert("Please select all attributes before adding to cart");
            return
        }
        
        const cartItem = {
            ...productData,
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
        <>
            {
                productData && (
                    <div className="
                        w-full flex flex-col pt-5 h-auto items-center gap-4 px-2
                        md:flex-row md:justify-center md:items-start md:gap-20 
                        sm:px-6 md:px-20"
                    >
                        <Gallery 
                            gallery={productData.gallery} 
                            switchImage={switchImage} 
                            currentImage={currentImage}
                        />
                        <Details 
                            productData={productData} 
                            selectedAttr={selectedAttr} 
                            addAttribute={addAttribute} 
                            handleAddToCart={handleAddToCart} 
                        />
                    </div>
                )
            }
        </>
  )
}

export default ProductDetails

function Gallery({ gallery, switchImage, currentImage }) {
  return (
    <div className="
        relative flex-1 flex flex-col 
        md:flex-row justify-center w-full overflow-hidden"
    >
        <div 
            className="flex flex-row  justify-between mr-3 md:flex-col md:gap-5 mb-4 md:mb-0" 
            data-testid="product-gallery"
        >
            {gallery.map(({image_url}, index) => (
                <img 
                    src={image_url} 
                    alt="product_image" 
                    key={index}
                    className="
                        w-12 h-12 sm:w-[80px] sm:h-[80px] 
                        cursor-pointer object-contain overflow-hidden
                    " 
                    onClick={() =>switchImage(null, index)}
                />
            ))}
        </div>
        <div className="relative overflow-hidden w-full h-full flex justify-center items-center">
            <img 
                src={gallery[currentImage].image_url} 
                alt="product-image" 
                className="
                    max-w-full h-[220px] sm:h-[400px] 
                    md:h-[600px] object-contain rounded overflow-hidden
                "
            />
            {gallery.length > 1 ? (
                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2">
                    <button 
                        className="
                                bg-black opacity-75 w-7 h-7 flex justify-center 
                                items-center text-white cursor-pointer
                            "
                        onClick={()=>switchImage("back")}
                        >{"<"}</button>
                    <button 
                        className="
                            bg-black opacity-75 w-7 h-7 flex 
                            justify-center items-center text-white cursor-pointer
                        "
                        onClick={()=>switchImage("forward")}
                        >{">"}</button>
                </div>
            ): ""}
        </div>
    </div>
  )
}


export default Gallery

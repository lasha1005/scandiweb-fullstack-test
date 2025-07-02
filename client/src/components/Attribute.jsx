import { toKebabCase } from "../utils/kebabCase"

function Attribute({attributes, selectedAttr, addAttribute, isCartAttribute}) {
  return (
    <>
        {attributes?.map((options, index)=> (
            <div key={index} data-testid={`product-attribute-${toKebabCase(options.name)}`}>
                <h4 
                  className={`font-raleway 
                    ${isCartAttribute ?  
                    "font-normal text-sm text-secondary": 
                    "font-bold text-lg uppercase"
                    } mb-1`}
                  >
                    {options.name}:
                  </h4>
                <div className="flex gap-2 mb-3">
                    {options.items?.map((opt)=> {
                        const isColor = opt.type === "swatch"
                        const isSelected = 
                          selectedAttr && 
                          selectedAttr.find((item) => 
                            item.name === options.name && 
                            item.value === opt.display_value
                          );
                        return (
                           <button 
                              key={opt.value} 
                              data-testid={
                                isCartAttribute ? 
                                `cart-item-attribute-${toKebabCase(options.name)}-${opt.display_value}${isSelected ? "-selected":""}` 
                                : `product-attribute-${toKebabCase(options.name)}-${opt.display_value}`
                              }
                              className={[
                                "border box-border text-center transition w-15 h-15",
                                isCartAttribute
                                  ? isColor
                                    ? "p-[1px] max-w-5 max-h-5"
                                    : "max-w-10 max-h-10 text-xs"
                                  : "p-[4px]",
                                isSelected
                                  ? "bg-black text-white"
                                  : "bg-white text-black",
                                isColor && isSelected
                                  ? "border-2 border-primary bg-white"
                                  : isColor
                                  ? "border-0"
                                  : "",
                              ]
                                .filter(Boolean)
                                .join(" ")
                              }
                              title={isColor ? opt.display_value : ""}
                              onClick={
                                addAttribute ? ()=> addAttribute(options.name, opt.display_value)
                                : undefined}
                              >
                              {isColor ? (
                                <div 
                                  className={`w-full h-full ${
                                    opt.display_value === "White" ? "border" : ""
                                  }`} 
                                style={{ backgroundColor: opt.value }}
                                />
                              ) : (
                                opt.value || opt.display_value
                              )}
                          </button>
                        );
                    })}
                </div>
            </div>
        ))}
    </>
  )
}

export default Attribute

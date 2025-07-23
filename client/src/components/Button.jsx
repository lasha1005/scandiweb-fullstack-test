function Button({handleOrder, isDisabled, children, dataTestId, customStyles}) {
  return (
    <button 
        data-testid={dataTestId}
        className={`
        w-full ${customStyles} bg-primary text-white cursor-pointer
        font-raleway font-semibold  
        disabled:text-gray-500 disabled:cursor-not-allowed
        disabled:bg-gray-300 
        `}
        onClick={handleOrder} 
        disabled={isDisabled}
    >
        {children}
    </button>
  )
}


export default Button
'use client';

import { useAppContext } from '@/contexts/AppContextProvider';

export default function AddToShoppingCartButton({ cartitem }: any) {
  
  const eCommerceModel = useAppContext().eCommerceModel;

  function handleClick() {      
    
    eCommerceModel.AddOneItemToShoppingCart(cartitem, 1);
    eCommerceModel.setIsShoppingCartPopupVisible(true);
  }



  return (
    <>
      <button onClick={handleClick}     
        className="text-sm font-semibold xl:text-base text-heading flex relative underline"> 
          Add To Cart
      </button>     
    </>


  )
}
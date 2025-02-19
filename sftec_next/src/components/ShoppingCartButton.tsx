'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import ShoppingCartPopup from '@/components/ShoppingCartPopup';
import { useAppContext } from '@/contexts/AppContextProvider';

export default function ShoppingCartButton() {
  
  const eCommerceModel = useAppContext().eCommerceModel;



  // useEffect(() => {
  //   eCommerceModel.GetCurrentUserShoppingCartData();
  // }, []);

  function handleClick() {  
    eCommerceModel.setIsShoppingCartPopupVisible(true);

  }

  function handleClose() {
    eCommerceModel.setIsShoppingCartPopupVisible(false);
  }



  return (
    <>
      <button onClick={handleClick}
        title="Shopping Cart"
        className="hidden lg:flex text-sm font-semibold xl:text-base text-heading flex relative underline"
        aria-label="cart-button"
      >
        <Image
          alt="SFTec"
          src="/img/cart2.jpg"
          width={28}
          height={28}
        />
        <div
          className="py-1 pl-1.5"
          style={{ fontSize: "15px" }}
        >
          CART
          <span className="opacity-75">({eCommerceModel.shoppingCartObj?.itemList?.length || 0})</span>
        </div>
      </button>

      <button onClick={handleClick}
        title="Shopping Cart"
        className="flex lg:hidden text-sm font-semibold xl:text-base text-heading flex relative underline"
        aria-label="cart-button"
      >
        <Image
          alt="SFTec"
          src="/img/cart2.jpg"
          width={24}
          height={24}
        />        
      </button>

      {eCommerceModel.isShoppingCartPopupVisible && (
        
         
        <ShoppingCartPopup onClose={handleClose} />
      
        
      )}
    </>


  )
}
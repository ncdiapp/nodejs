'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import ShoppingCartPopup from './ShoppingCartPopup';
import { useAppContext } from '../contexts/AppContext';

export default function ShoppingCartButton() {
  //const [cartItemCount, setCartItemCount] = useState(0);
  //const [isShoppingCartPopupVisible, setIsShoppingCartPopupVisible] = useState(false);

  const {
    shoppingCartObj,
    isShoppingCartPopupVisible,
    setIsShoppingCartPopupVisible } = useAppContext().eCommerceModel;




  const { prepareGuestClientShoppingCartData } = useAppContext();

  useEffect(() => {
    prepareGuestClientShoppingCartData();
  }, []);

  function handleClick() {
    //setCartItemCount(cartItemCount + 1);
    setIsShoppingCartPopupVisible(true);

  }

  function handleClose() {
    setIsShoppingCartPopupVisible(false);
  }



  return (
    <>
      <button onClick={handleClick}
        title="Shopping Cart"
        className="text-sm font-semibold xl:text-base text-heading flex relative"
        aria-label="cart-button"
      >
        <Image
          alt="SFTec"
          src="/cart2.jpg"
          width={32}
          height={32}
        />
        <div
          className="py-1 pl-1.5"
          style={{ fontSize: "15px" }}
        >
          CART
          <span className="opacity-75">({shoppingCartObj?.itemList?.length || 0})</span>
        </div>
      </button>
      {isShoppingCartPopupVisible && (
        <ShoppingCartPopup onClose={handleClose} />
      )}
    </>


  )
}
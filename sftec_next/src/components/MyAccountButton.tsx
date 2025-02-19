'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import LoginForm from './LoginForm'
import AccountDetailForm from './AccountDetailForm';
import { useAppContext } from '@/contexts/AppContextProvider';
import Link from "next/link";
import { Logout, GetExternalUserContext } from "@/services/mgtdataservice";
import { useRouter } from 'next/navigation';

export default function MyAccountButton() {

  const router = useRouter();
  const appContext = useAppContext();

  const {
    userSession,
    setUserSession,
    isLoginPopupVisible,
    setIsLoginPopupVisible,
    isAccountDetailPopupVisible,
    setIsAccountDetailPopupVisible,
    isNeedToExecuteLogoffCallback,
    setIsNeedToExecuteLogoffCallback,
    logoff
    //GetCurrentUserShoppingCartData,
  } = appContext.userAccountModel;

  const { currentDistributor } = appContext.eCommerceModel;

  useEffect(() => {
    if (isNeedToExecuteLogoffCallback) {
      //console.log("useEffect isNeedToExecuteLogoffCallback: " + isNeedToExecuteLogoffCallback);

      afterLogoffCallBack();

      setIsNeedToExecuteLogoffCallback(false);
    }
  }, [userSession, isNeedToExecuteLogoffCallback]);

  const afterLogoffCallBack = function () {
    //GetCurrentUserShoppingCartData(
    //  function () {
    router.push(`/?distributorid=${currentDistributor?.param_distributorCodeId || ''}`);
    //  }
    //);
  }

  function handleClick() {
    setIsLoginPopupVisible(true);
  }

  function handleClose() {
    setIsLoginPopupVisible(false);
  }

  function handleOpenAccountDetail() {
    setIsAccountDetailPopupVisible(true);
  }

  function handleAccountDetailClose() {
    setIsAccountDetailPopupVisible(false);
  }


  return (
    <>
      {
        !userSession.isLoggedIn && (
          <>
            <button onClick={handleClick}
              title="My Account"
              className="hidden lg:flex text-sm font-semibold xl:text-base text-heading flex relative underline"
              aria-label="cart-button"
            >
              <Image
                alt="SFTec"
                src="/img/user2.jpg"
                width={28}
                height={28}
              />
              <div
                className="py-1 pl-1.5"
                style={{ fontSize: "15px" }}
              >
                MY ACCOUNT
              </div>
            </button>

            <button onClick={handleClick}
              title="My Account"
              className="flex lg:hidden text-sm font-semibold xl:text-base text-heading flex relative underline"
              aria-label="cart-button"
            >
              <Image
                alt="SFTec"
                src="/img/user2.jpg"
                width={24}
                height={24}
              />
            </button>
          </>

        )
      }
      {
        userSession.isLoggedIn && (
          <div className="group relative">
            <button
              className="hidden lg:flex text-sm font-semibold xl:text-base text-heading flex relative"
              title="My Account">
              <Image
                alt="SFTec"
                src="/img/user2.jpg"
                width={28}
                height={28}
              />
              <div
                className="py-1 pl-1.5 flex"
                style={{ fontSize: "15px" }}
              >

                MY ACCOUNT
              </div>
            </button>
            <button
              className="flex lg:hidden text-sm font-semibold xl:text-base text-heading flex relative"
              title="My Account">
              <Image
                alt="SFTec"
                src="/img/user2.jpg"
                width={24}
                height={24}
              />              
            </button>

            <div className="bottom-10 lg:bottom-[unset] mr-2 pt-1 pb-2 px-5 absolute z-50 bg-gray-50 opacity-0 group-hover:visible subMenu shadow-header left-0 w-48 group-hover:opacity-100 text-black">
              <div className="py-2 text-sm mx-auto w-full flex">
                <div className="pt-3 pr-2">
                  <Image
                    alt="SFTec"
                    src="/img/user2.jpg"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <div className="font-semibold">
                    My Account
                  </div>
                  <div className="flex-shrink-0 pt-1 text-body text-xs md:text-sm">
                    {userSession.DisplayName}
                  </div>
                </div>
              </div>
              <div className="w-full px-4">
                <div className="border-b border-gray-300 w-full"></div>
              </div>
              <ul className="py-2 text-sm text-body">
                <li className="group relative py-2 cursor-pointer">
                  <Link href={`/myorders/?distributorid=${currentDistributor?.param_distributorCodeId || ''}`}
                    className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300">
                    <span style={{ paddingLeft: '10px' }}>Orders</span>
                  </Link>
                </li>
                <li className="group relative py-2 cursor-pointer" onClick={handleOpenAccountDetail}>
                  <div
                    className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300">
                    <span style={{ paddingLeft: '10px' }}>Account Details</span>
                  </div>
                </li>
                <li className="group relative py-2 cursor-pointer" onClick={logoff}>
                  <a className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300">
                    <span style={{ paddingLeft: '10px' }}>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )

      }


      {isLoginPopupVisible && (
        <LoginForm onClose={handleClose} />
      )}

      {isAccountDetailPopupVisible && (
        <AccountDetailForm onClose={handleAccountDetailClose} />
      )}

    </>


  )
}
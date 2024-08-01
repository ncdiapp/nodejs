'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import MyAccountLogin from './MyAccountLogin'

import { useAppContext } from '../contexts/AppContext';
import Link from "next/link";
import { Logout, GetExternalUserContext } from "../services/mgtService";
import { useRouter } from 'next/navigation';

export default function MyAccountButton() {

  const router = useRouter();
  const appContext = useAppContext();
  const {
    userSession,
    setUserSession,
    SetDistributorByClientIpLocation,
    isLoginPopupVisible,
    setIsLoginPopupVisible,
  } = appContext.userSessionModel;


  const { GetCurrentUserShoppingCartData } = useAppContext().eCommerceModel;

  const [isNeedToExecuteLogoffCallback, setIsNeedToExecuteLogoffCallback] = useState(false);

  useEffect(() => {
    if (isNeedToExecuteLogoffCallback) {
      console.log("useEffect isNeedToExecuteLogoffCallback: " + isNeedToExecuteLogoffCallback);

      afterLogoffCallBack();

      setIsNeedToExecuteLogoffCallback(false);
    }
  }, [userSession, isNeedToExecuteLogoffCallback]);

  const afterLogoffCallBack = function () {
    GetCurrentUserShoppingCartData(
      function () {
        router.push('/');
      }
    );


  }

  function handleClick() {
    //setCartItemCount(cartItemCount + 1);
    setIsLoginPopupVisible(true);

  }

  function handleClose() {
    setIsLoginPopupVisible(false);
  }

  function handleLogoff() {
    if (userSession?.isLoggedIn && userSession?.SessionId) {
      Logout(userSession.SessionId).then(function () {
        //GetExternalUserContext().then(function (userContextData) {

        let userContextData: any = {};
        userContextData.isLoggedIn = false;
        //userContextData.SessionId = 
        setUserSession(userContextData);
        setIsNeedToExecuteLogoffCallback(true);




        //});

      });
    }
  }


  return (
    <>
      {
        !userSession.isLoggedIn && (
          <button onClick={handleClick}
            title="My Account"
            className="text-sm font-semibold xl:text-base text-heading flex relative"
            aria-label="cart-button"
          >
            <Image
              alt="SFTec"
              src="/user2.jpg"
              width={32}
              height={32}
            />
            <div
              className="py-1 pl-1.5"
              style={{ fontSize: "15px" }}
            >
              MY ACCOUNT
            </div>
          </button>
        )
      }
      {
        userSession.isLoggedIn && (
          <div className="group relative">
            <button
              className="text-sm font-semibold xl:text-base text-heading flex relative"
              title="My Account">
              <Image
                alt="SFTec"
                src="/user2.jpg"
                width={32}
                height={32}
              />
              <div
                className="py-1 pl-1.5"
                style={{ fontSize: "15px" }}
              >
                MY ACCOUNT
              </div>
            </button>

            <div className="pt-2 pb-5 absolute invisible bg-white opacity-0 group-hover:visible subMenu shadow-header ltr:right-0 rtl:right-0 group-hover:opacity-100">
              <div className="flex py-2 text-sm  xl:text-base text-heading leading-4 ltr:pr-4 rtl:pl-4 ltr:md:mr-6 rtl:md:ml-6 ltr:pl-2 rtl:pr-2">
                <div className="p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="20px"
                    viewBox="0 0 16.577 18.6"
                    className=""
                  >
                    <path
                      d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z"
                      transform="translate(7723.3 -2914.703)"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.6"
                      className=""
                    ></path>
                  </svg>
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
                  <Link href="./MyOrders"
                    className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="w-5 h-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="176"
                        cy="416"
                        r="16"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      ></circle>
                      <circle
                        cx="400"
                        cy="416"
                        r="16"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      ></circle>
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M48 80h64l48 272h256"
                      ></path>
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                      ></path>
                    </svg>
                    <span style={{ paddingLeft: '10px' }}>Orders</span>
                  </Link>
                </li>
                <li className="group relative py-2 cursor-pointer">
                  <Link href="./MyAccountDetails"
                    className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="w-5 h-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                      ></path>
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                      ></path>
                    </svg>
                    <span style={{ paddingLeft: '10px' }}>Account Details</span>
                  </Link>
                </li>
                <li className="group relative py-2 cursor-pointer" onClick={handleLogoff}>
                  <a className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="w-5 h-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"
                      ></path>
                    </svg>
                    <span style={{ paddingLeft: '10px' }}>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )

      }


      {isLoginPopupVisible && (
        <MyAccountLogin onClose={handleClose} />
      )}
    </>


  )
}
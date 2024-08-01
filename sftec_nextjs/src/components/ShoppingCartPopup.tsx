'use client';

import { useState } from 'react';
import Image from "next/image";
import { useAppContext } from '../contexts/AppContext';
import { getRegularImageUrlById, getCurrentDistributorId } from '../lib/utils';

// interface ShoppingCartPopupProps {
//     onClose: () => void;
// }

const ShoppingCartPopup = ({ onClose }: { onClose: any }) => {

    const appContext = useAppContext();
    const { userSession,
        setUserSession,
        SetDistributorByClientIpLocation,
        isLoginPopupVisible,
        setIsLoginPopupVisible } = appContext.userSessionModel;



    const [distributorCurrencyCode, setDistributorCurrencyCode] = useState('USD');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {
        shoppingCartObj,
        RemoveOneItemFromShoppingCart,
        ChangeShoppingCartItemQty,
        CalculateShoppingCartItemPrice,
        StartCheckout } = useAppContext().eCommerceModel;


    const closeAllModalPopup = () => {
        // Implement close modal logic
    };

    const SaveCurrentUserShoppingCartData = () => {
        // Implement save cart data logic
    };

    const openProductDetail = (productId: string) => {
        // Implement open product detail logic
    };





    const signInClicked = () => {
        // Implement sign in logic
    };

    return (
        <div className="rc-drawer rc-drawer-right rc-drawer-open" tabIndex={-1}>
            <div className="rc-drawer-mask"
                // onClick={() => { onClose(); SaveCurrentUserShoppingCartData(); }}
                onClick={onClose}
            ></div>
            <div tabIndex={0} aria-hidden="true" data-sentinel="start" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' }}></div>
            <div className="rc-drawer-content-wrapper" style={{ width: '378px', right: 0 }}>
                <div className="rc-drawer-content" aria-modal="true" role="dialog">
                    <div className="flex flex-col justify-between w-full h-full">
                        <div className="w-full flex justify-between items-center relative ltr:pl-5 ltr:md:pl-7 rtl:pr-5 rtl:md:pr-7 py-0.5 border-b border-gray-100">
                            <h2 className="m-0 text-xl font-bold md:text-2xl text-heading">
                                Shopping cart ({shoppingCartObj?.itemList?.length || 0})
                                {/* <span className='text-regular text-xs'>userSession: {JSON.stringify(userSession)}</span> */}
                            </h2>
                            <button
                                // onClick={() => { closeAllModalPopup(); SaveCurrentUserShoppingCartData(); }} 
                                onClick={onClose}
                                className="flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity md:px-6 lg:py-8 focus:outline-none hover:opacity-60" aria-label="close">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-black mt-1 md:mt-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                                </svg>
                            </button>
                        </div>
                        <div data-overlayscrollbars-initialize="" className="os-theme-thin flex-grow w-full cart-scrollbar" data-overlayscrollbars="host">
                            <div className="os-size-observer os-size-observer-appear">
                                <div className="os-size-observer-listener ltr"></div>
                            </div>
                            <div className="os-viewport" style={{ overflowY: 'scroll', marginRight: 0, marginBottom: 0, marginLeft: 0, top: 0, right: 'auto', left: 0, width: 'calc(100% + 0px)', padding: 0 }}>
                                <div className="w-full px-5 md:px-7">



                                    {shoppingCartObj?.itemList?.map((cartItemObj: any, index: number) => (
                                        <div key={index} className="group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-gray-100 relative last:border-b-0" title={cartItemObj.SkuNo} style={{ opacity: 1, transform: 'none', transformOrigin: '50% 50% 0px' }}>
                                            <div className="relative flex flex-shrink-0 w-24 h-24 overflow-hidden bg-gray-200 rounded-md cursor-pointer md:w-28 md:h-28 ltr:mr-4 rtl:ml-4">
                                                <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                                                    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                        {cartItemObj.DictOneToOneFields['Photo'] && (
                                                            <img alt="" aria-hidden="true" src={getRegularImageUrlById(cartItemObj.DictOneToOneFields['Photo'])} style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
                                                        )}
                                                    </span>
                                                    <img alt="" src={getRegularImageUrlById(cartItemObj.DictOneToOneFields['Photo'])} decoding="async" data-nimg="intrinsic" className="object-cover bg-gray-300" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                                </span>
                                                <div className="absolute top-0 flex items-center justify-center w-full h-full transition duration-200 ease-in-out bg-black ltr:left-0 rtl:right-0 bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30" role="button">
                                                    <svg onClick={() => RemoveOneItemFromShoppingCart(cartItemObj.SkuNo)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="relative text-2xl text-white transition duration-300 ease-in-out transform md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full overflow-hidden">
                                                <a className="truncate text-sm text-heading mb-1.5 -mt-1 hover:underline" onClick={() => openProductDetail(cartItemObj.DictOneToOneFields['ProductId'])}>
                                                    {cartItemObj.DictOneToOneFields['ProductName']}
                                                    {cartItemObj.DictOneToOneFields['ProductCode']}
                                                </a>
                                                <span className="text-sm text-gray-400 mb-2.5 cursor-pointer" onClick={() => openProductDetail(cartItemObj.DictOneToOneFields['ProductId'])}>
                                                    Price: {distributorCurrencyCode} ${cartItemObj.DictOneToOneFields['UnitPriceOnDistributorCurrency_30864'].toFixed(2) || 0.0}
                                                    {cartItemObj.DictOneToOneFields['PriceUnit'] && <span className="text-xs">/ {cartItemObj.DictOneToOneFields['PriceUnit']}</span>}
                                                </span>
                                                <div className="flex items-end justify-between">
                                                    <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 h-8 md:h-9 shadow-navigation bg-heading">
                                                        <button onClick={() => ChangeShoppingCartItemQty(cartItemObj.SkuNo, cartItemObj.SelectedQuantity - 1)} disabled={cartItemObj.SelectedQuantity <= 1} className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-9 text-white bg-heading hover:bg-gray-600">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="2px" viewBox="0 0 12 1.5">
                                                                <rect data-name="Rectangle 970" width="10px" height="2px" fill="currentColor"></rect>
                                                            </svg>
                                                        </button>
                                                        <input
                                                            type="number"
                                                            value={cartItemObj.SelectedQuantity}
                                                            onChange={(e) => ChangeShoppingCartItemQty(cartItemObj.SkuNo, parseInt(e.target.value))}
                                                            className="font-semibold appearance-none py-2 px-1 h-full text-center bg-transparent flex transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-sm text-white w-10 md:w-12 text-input"
                                                            min="1"
                                                            style={{ MozAppearance: 'textfield' }}
                                                        />
                                                        <button onClick={() => ChangeShoppingCartItemQty(cartItemObj.SkuNo, cartItemObj.SelectedQuantity + 1)} className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-9 text-white bg-heading hover:bg-gray-600">
                                                            <svg data-name="plus (2)" xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 12 12">
                                                                <g data-name="Group 5367">
                                                                    <path data-name="Path 17138" d="M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z" fill="currentColor"></path>
                                                                </g>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <span className="text-sm font-semibold leading-5 md:text-base text-heading">{distributorCurrencyCode} ${cartItemObj.subTotal}</span>
                                                </div>
                                                {cartItemObj.SelectedQuantity > cartItemObj.AvailableQty && (
                                                    <div className="text-gray-400 text-xs p-1">
                                                        You have exceeded the total available amount of {cartItemObj.AvailableQty || 0}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                            <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-auto-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                <div className="os-scrollbar-track">
                                    <div className="os-scrollbar-handle" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                            <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-auto-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                <div className="os-scrollbar-track">
                                    <div className="os-scrollbar-handle" style={{ height: '100%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col px-5 pt-2 pb-5 md:px-7 md:pb-7">
                            <a onClick={StartCheckout} className="w-full px-5 py-3 md:py-4 flex items-center justify-center rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 bg-heading hover:bg-gray-600" style={{ backgroundColor: '#54AC5B', cursor: 'pointer' }}>
                                <span className="w-full ltr:pr-5 rtl:pl-5 -mt-0.5 py-0.5">
                                    {shoppingCartObj?.itemList.length > 0 ? (
                                        <span>
                                            Process {isLoggedIn ? '' : 'Guest'} Checkout
                                        </span>
                                    ) : (
                                        <span>
                                            Your Cart Is Empty
                                        </span>
                                    )}
                                </span>
                                <span className="rtl:mr-auto ltr:ml-auto flex-shrink-0 -mt-0.5 py-0.5 flex">
                                    <span className="ltr:border-l rtl:border-r border-white ltr:pr-5 rtl:pl-5 py-0.5"></span>
                                    {distributorCurrencyCode} ${CalculateShoppingCartItemPrice()}
                                </span>
                            </a>
                            {!isLoggedIn && shoppingCartObj?.itemList.length > 0 && (
                                <div className="mt-5 mb-1 text-sm text-center sm:text-base text-body">
                                    <button type="button" onClick={signInClicked} className="text-sm font-bold underline sm:text-base text-heading hover:no-underline focus:outline-none">Or Sign In As Existing User</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div tabIndex={0} aria-hidden="true" data-sentinel="end" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' }}></div>
        </div>
    );
};

export default ShoppingCartPopup;
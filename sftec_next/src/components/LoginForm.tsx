'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { useAppContext } from '@/contexts/AppContextProvider';


const clientProfileTransactionId = 7489;


const LoginForm = ({ onClose }: { onClose: any }) => {

    const appContext = useAppContext(); 
    const { error, setError, isBusy, setIsBusy } = appContext;
    const [isSignUp, setIsSignUp] = useState<boolean>(false);   

    const { 
        userSession,
        setUserSession,    
        isLoginPopupVisible,
        setIsLoginPopupVisible,       
        isNeedToExecuteLoginCallback, 
        setIsNeedToExecuteLoginCallback,
        isNeedToExecuteLogoffCallback,
        setIsNeedToExecuteLogoffCallback,
        loginInfoDto, 
        setLoginInfoDto,
        isWaitingForEmailActivation, 
        setIsWaitingForEmailActivation,
        login,
        signUp

    } = appContext.userAccountModel;

    const {
        PrepareLoggedInClientShoppingCartData
    } = appContext?.eCommerceModel;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginInfoDto({ ...loginInfoDto, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setLoginInfoDto({ ...loginInfoDto, isShowPasswordText: !loginInfoDto.isShowPasswordText });
    };

    const afterLoginCallBack = function (needRedirect?: boolean) {
        closeAllModalPopup();
        closeMobileHeaderMenu();


        let partnerType = userSession.DomainId;

        if (partnerType) {


            process.env.CurrentUserSessionId = userSession.SessionId;
          

            if (PrepareLoggedInClientShoppingCartData) {
                PrepareLoggedInClientShoppingCartData();
            }           

        }

    }

    

    const closeAllModalPopup = () => {
        onClose();
    };

    const closeMobileHeaderMenu = () => {
        onClose();
    };

    useEffect(() => {
        if (isNeedToExecuteLoginCallback) {
            
            afterLoginCallBack(true);

            setIsNeedToExecuteLoginCallback(false);
        }
    }, [userSession, isNeedToExecuteLoginCallback]);



    return (
        <>
            {
                !isSignUp && (
                    <div className="text-black fixed inset-0 z-60">
                        <div className="absolute inset-0 bg-black opacity-25"
                            // onClick={() => { onClose(); SaveCurrentUserShoppingCartData(); }}
                            onClick={onClose}
                        ></div>
                        <div tabIndex={0} aria-hidden="true" data-sentinel="start" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' }}></div>

                        <div className="">
                            <div className="rc-drawer-content" aria-modal="true" role="dialog">
                                <div className="w-full md:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg"
                                    style={{ zIndex: 10000 }}>
                                    <button
                                        aria-label="Close panel"
                                        onClick={onClose}
                                        className="absolute z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md -top-3 md:-top-4 -right-3 rtl:-left-3 md:-right-4 rtl:md:-left-4"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            className="text-xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                                        </svg>
                                    </button>
                                    <div className="h-full overflow-y-auto rounded-lg" style={{ maxHeight: 'calc(100vh - 120px)' }}>
                                        <div className="w-full px-5 py-5 mx-auto overflow-hidden bg-white border border-gray-300 rounded-lg sm:w-96 md:w-[450px] sm:px-8">
                                            <div className="text-center mb-6 pt-2.5">                                                
                                                <p className="mt-2 mb-8 text-sm md:text-base text-body sm:mb-10 font-bold">
                                                    Login with your email
                                                </p>
                                            </div>
                                            <form className="flex flex-col justify-center" noValidate>
                                                <div className="flex flex-col space-y-3.5">
                                                    <div className="block">
                                                        <label htmlFor="email" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Email</label>
                                                        <input
                                                            value={loginInfoDto.userName}
                                                            onChange={handleInputChange}
                                                            autoFocus
                                                            id="email"
                                                            name="userName"
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                            autoComplete="off"
                                                           
                                                            aria-invalid="false"
                                                        />
                                                    </div>
                                                    <div className="block">
                                                        <label htmlFor="password" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Password</label>
                                                        <div className="relative">
                                                            <input
                                                                value={loginInfoDto.password}
                                                                onChange={handleInputChange}
                                                                id="password"
                                                                name="password"
                                                                type={loginInfoDto.isShowPasswordText ? 'text' : 'password'}
                                                                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border border-gray-500 text-input text-xs lg:text-sm font-body rounded-md placeholder-gray-600 transition duration-200 ease-in-out bg-white border border-gray-100 focus:outline-none focus:border-heading h-11 md:h-12"
                                                                autoComplete="off"
                                                                autoCapitalize="off"
                                                               
                                                            />
                                                            <label onClick={togglePasswordVisibility} htmlFor="password" className="absolute right-4 rtl:left-4 top-5 -mt-2 text-gray-500 cursor-pointer">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    className="w-6 h-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                    ></path>
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                    ></path>
                                                                </svg>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-center">

                                                    </div>
                                                    <div className="relative">
                                                        <button
                                                            onClick={login}
                                                            type="button"
                                                            data-variant="flat"
                                                            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                                        >
                                                            Login
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                            <div className="mt-5 mb-1 text-sm text-center sm:text-base text-body">Don&apos;t have any account?
                                                <button type="button" onClick={() => setIsSignUp(true)} 
                                                className="text-sm font-bold underline sm:text-base text-heading hover:no-underline focus:outline-none px-1"> 
                                                Register</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div tabIndex={0} aria-hidden="true" data-sentinel="end" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' }}></div>
                    </div>
                )

            }

            {
                isSignUp && (
                     <div className="text-black fixed inset-0 z-60">
                        <div className="absolute inset-0 bg-black opacity-25"
                            // onClick={() => { onClose(); SaveCurrentUserShoppingCartData(); }}
                            onClick={onClose}
                        ></div>
                        <div tabIndex={0} aria-hidden="true" data-sentinel="start" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' }}></div>

                        <div className="">
                            <div className="rc-drawer-content" aria-modal="true" role="dialog">
                                <div className="w-full md:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg"
                                    style={{ zIndex: 10000 }}>
                                    <button
                                        aria-label="Close panel"
                                        onClick={onClose}
                                        className="fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md -top-3 md:-top-4 -right-3 rtl:-left-3 md:-right-4 rtl:md:-left-4"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            className="text-xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                                        </svg>
                                    </button>
                                    <div className="h-full overflow-y-auto rounded-lg" style={{ maxHeight: 'calc(100vh - 120px)' }}>
                                        {
                                            !isWaitingForEmailActivation && (
                                                <div className="w-full px-5 py-5 mx-auto overflow-hidden bg-white border border-gray-300 rounded-lg sm:w-96 md:w-[450px] sm:px-8">
                                                    <div className="text-center mb-6 pt-2.5">                                                        
                                                        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10 font-bold">
                                                            Sign Up
                                                        </p>
                                                    </div>
                                                    <form className="flex flex-col justify-center" noValidate>
                                                        <div className="flex flex-col space-y-3.5">
                                                            <div className="block">
                                                                <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Full Name</label>
                                                                <input
                                                                    value={loginInfoDto.userName}
                                                                    onChange={handleInputChange}
                                                                    autoFocus
                                                                    id="userName"
                                                                    name="userName"
                                                                    type="text"
                                                                    placeholder=""
                                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                                    autoComplete="off"
                                                                   
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                            <div className="block">
                                                                <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Email</label>
                                                                <input
                                                                    value={loginInfoDto.email}
                                                                    onChange={handleInputChange}
                                                                    autoFocus
                                                                    id="email"
                                                                    name="email"
                                                                    type="text"
                                                                    placeholder=""
                                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                                    autoComplete="off"
                                                                   
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                            <div className="block">
                                                                <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Password</label>
                                                                <div className="relative">
                                                                    <input
                                                                        value={loginInfoDto.password}
                                                                        onChange={handleInputChange}
                                                                        id="password"
                                                                        name="password"
                                                                        type={loginInfoDto.isShowPasswordText ? 'text' : 'password'}
                                                                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border border-gray-500 text-input text-xs lg:text-sm font-body rounded-md placeholder-gray-600 transition duration-200 ease-in-out bg-white border border-gray-100 focus:outline-none focus:border-heading h-11 md:h-12"
                                                                        autoComplete="off"
                                                                        autoCapitalize="off"
                                                                       
                                                                    />
                                                                    <label onClick={togglePasswordVisibility} htmlFor="password" className="absolute right-4 rtl:left-4 top-5 -mt-2 text-gray-500 cursor-pointer">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                            className="w-6 h-6"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                            ></path>
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                            ></path>
                                                                        </svg>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center justify-center">

                                                            </div>
                                                            <div className="relative">
                                                                <button
                                                                    onClick={signUp}
                                                                    type="button"
                                                                    data-variant="flat"
                                                                    className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                                                >
                                                                    Register
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>

                                                    <div className="mt-5 mb-1 text-sm text-center sm:text-base text-body">Already have any account?
                                                        <button type="button" onClick={() => setIsSignUp(false)} className="text-sm font-bold underline sm:text-base text-heading hover:no-underline focus:outline-none px-1"> Login</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            isWaitingForEmailActivation && (
                                                <div className="w-full px-5 py-20 mx-auto overflow-hidden bg-white border border-gray-300 rounded-lg sm:w-96 md:w-450px sm:px-8">
                                                    <div className="w-full h-40 text-center">
                                                        <div className="text-3xl">Registration Successful</div>
                                                        <div className="text-md pt-2.5">Please check your email to activate your account.</div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div tabIndex={0} aria-hidden="true" data-sentinel="end" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' }}></div>
                    </div>
                )

            }
        </>


    );
};

export default LoginForm;
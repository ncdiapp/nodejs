'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { useAppContext } from '../contexts/AppContext';
import { getRegularImageUrlById, getCurrentDistributorId } from '../lib/utils';
import { ESiteLogin, ESiteUserRegistration } from "../services/mgtService";

const clientProfileTransactionId = 7489;
const customerUserType = 3;

const MyAccountLogin = ({ onClose }: { onClose: any }) => {

    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [isBusy, setIsBusy] = useState<boolean>(false);

    const appContext = useAppContext();


    const { userSession,
        setUserSession,
        SetDistributorByClientIpLocation,
        isLoginPopupVisible,
        setIsLoginPopupVisible } = appContext.userSessionModel;

    const {
        shoppingCartObj,
        setShoppingCartObj,
        isShoppingCartPopupVisible,
        setIsShoppingCartPopupVisible,
        GetCurrentUserShoppingCartData,
        SaveCurrentUserShoppingCartData } = useAppContext().eCommerceModel;

    const [loginInfoDto, setLoginInfoDto] = useState<any>({ userName: '', password: '', isShowPasswordText: false });
    const [isWaitingForEmailActivation, setIsWaitingForEmailActivation] = useState(false);
    const [isNeedToExecuteLoginCallback, setIsNeedToExecuteLoginCallback] = useState(false);



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginInfoDto({ ...loginInfoDto, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setLoginInfoDto({ ...loginInfoDto, isShowPasswordText: !loginInfoDto.isShowPasswordText });
    };

    const closeAllModalPopup = () => {
        onClose();
    };

    const closeMobileHeaderMenu = () => {
        onClose();
    };

    useEffect(() => {
        if (isNeedToExecuteLoginCallback) {
            console.log("useEffect isNeedToExecuteLoginCallback: " + isNeedToExecuteLoginCallback);

            afterLoginCallBack(true);

            setIsNeedToExecuteLoginCallback(false);
        }
    }, [userSession, isNeedToExecuteLoginCallback]);


    const prepareLoggedInClientShoppingCartData = function () {
        let guestShoppingCartObj = { ...shoppingCartObj } || {};
        let orgGuestCartItemList = guestShoppingCartObj.itemList || [];
        guestShoppingCartObj.itemList = [];
        // save guest shopping cart
        SaveCurrentUserShoppingCartData(function (savedCartObj?: any, savedFormData?: any) {

            // get logged in user shopping cart
            GetCurrentUserShoppingCartData(function (newCartObj?: any, newFormData?: any) {
                if (newCartObj) {
                    let needToUpdateShoppingCartObj: any = { ...newCartObj };
                    needToUpdateShoppingCartObj.DistributorId = needToUpdateShoppingCartObj.DistributorId || getCurrentDistributorId();

                    orgGuestCartItemList.map((guestCartItem: any) => {
                        if (guestCartItem.SkuNo && guestCartItem.SelectedQuantity && guestCartItem.SelectedQuantity > 0) {
                            let itemInLoggedInUserCart = false;
                            for (let i = 0; i < needToUpdateShoppingCartObj.itemList.length; i++) {
                                let currentCartItem = needToUpdateShoppingCartObj.itemList[i];
                                if (currentCartItem.SkuNo == guestCartItem.SkuNo) {
                                    currentCartItem.SelectedQuantity = guestCartItem.SelectedQuantity;
                                    itemInLoggedInUserCart = true;
                                    break;
                                }
                            }

                            if (!itemInLoggedInUserCart) {
                                needToUpdateShoppingCartObj.itemList.push(guestCartItem);
                            }
                        }
                    });


                    setShoppingCartObj(needToUpdateShoppingCartObj);

                    // // save logged in user merged shopping cart
                    // $scope.eCommerceModel.saveCurrentUserShoppingCartData(function () {
                    //     if ($scope.eCommerceModel.shoppingCartObj && $scope.eCommerceModel.shoppingCartObj.DistributorId) {
                    //         let distributorId = $scope.eCommerceModel.shoppingCartObj.DistributorId;
                    //         let clientIPCountryCode = $scope.eCommerceModel.shoppingCartObj.ClientIPCountryCode || '';
                    //         if (distributorId) {
                    //             $scope.changeDistributor(distributorId, clientIPCountryCode);
                    //         }
                    //     }
                    //     else {
                    //         setDistributorByClientIpLocation(function () {

                    //         }, function () {
                    //             $scope.goToDistributorSelectorPage();
                    //         });
                    //     }
                    // });
                }
            });

        });
    }

    const afterLoginCallBack = function (needRedirect?: boolean) {
        closeAllModalPopup();
        closeMobileHeaderMenu();


        let partnerType = userSession.DomainId;

        if (partnerType) {


            process.env.CurrentUserSessionId = userSession.SessionId;

            prepareLoggedInClientShoppingCartData();


            // if (needRedirect) {

            //     if (angular.ExternalCallingFrom == 'DesignPreview') {
            //         if (QS_RouteCode) {
            //             $scope.goToPageByRouteCode(QS_RouteCode, QS_RouteParamId, QS_RouteParam1, QS_RouteParam2);
            //         } else {
            //             $scope.goToHomePage();
            //         }
            //     } else {
            //         $scope.goToHomePage();
            //     }
            // }




        }

    }


    const prepareDataFromUserContext = function (userContextData: any, needRedirect: any) {
        loginInfoDto.linkExistMasterDBUserToEStore_token = null;
        if (userContextData) {
            if (userContextData.IsLoginFailed) {

                loginInfoDto.loginError = userContextData.LoginFailedErroMessage;

                let failType_UserNotLinkedToEStoreUserDB = 7;
                if (userContextData.LoginFailedType == failType_UserNotLinkedToEStoreUserDB && userContextData.TempToken) {
                    loginInfoDto.linkExistMasterDBUserToEStore_token = userContextData.TempToken;
                }
            } else {
                loginInfoDto.loginError = null;

                setUserSession((prevState: any) => {
                    return {
                        ...userContextData,
                        isLoggedIn: true,
                        publicMenus: null,
                        loginDateTime: new Date(),
                        currentUserProfileData: {
                            FullName: prevState.DisplayName || '',
                            Timezone: prevState.DocumentId || '',
                            ProfilePicture: prevState.DocumentId || null,
                        }
                    };
                });

                setIsNeedToExecuteLoginCallback(true);

                // $cookies.put('CurrentUserSessionId', userSession.SessionId);
                // console.log(angular.UserContext.SessionId);
                //**********
                //

                // if (!angular.dictAppSetupCodeAndValue) {
                //     adminSvc.RetrieveAllAppSetupDtoList(true).then(function (data) {
                //         angular.dictAppSetupCodeAndValue = {};
                //         var applicationSettingData = data;
                //         angular.forEach(applicationSettingData, function (aSetupDto) {
                //             angular.dictAppSetupCodeAndValue[aSetupDto.SetupCode] = aSetupDto.SetupValue;
                //         })
                //         $scope.dictAppSetupCodeAndValue = angular.dictAppSetupCodeAndValue;
                //     });
                // } else {
                //     $scope.dictAppSetupCodeAndValue = angular.dictAppSetupCodeAndValue;
                // }
                // languangeSvc.getClientScriptLangKeyValue().then(function (langKeyValueData) {
                //     angular.dictScriptLangKeyValue = langKeyValueData;
                // });

                // //let CultureInfoCode = appHelper.getUserWjCultureInfoCode() || 'en';
                // let CultureInfoCode = 'en';
                // //alert('CultureInfoCode: ' + CultureInfoCode);

                // $.ajax({
                //     url: domainAndApplicationpath + '/scripts1x/vendor/wijmo.culture.' + CultureInfoCode + '.js',
                //     dataType: 'script',
                //     success: function (scriptText) {

                //         wijmo.Control.invalidateAll();
                //     },
                // });
            }
        }
    }

    const authenticationuser = function (userName: any, password: any) {
        loginInfoDto.loginError = null;
        if (userName && password) {
            ESiteLogin(userName, password).then(function (userContextData) {
                prepareDataFromUserContext(userContextData, true);

            });
        }
    }

    const login = () => {
        authenticationuser(loginInfoDto.userName, loginInfoDto.password);
    };



    const signUp = () => {
        if (loginInfoDto.email && loginInfoDto.userName && loginInfoDto.password) {

            let userRegisterDto: any = {};
            userRegisterDto = {};
            userRegisterDto.RegisterFromEsiteId = process.env.SITE_ID;
            userRegisterDto.FirstName = '';
            userRegisterDto.LastName = '';
            userRegisterDto.UserName = loginInfoDto.userName;
            userRegisterDto.Email = loginInfoDto.email;
            userRegisterDto.LoginName = '';
            userRegisterDto.Password = loginInfoDto.password;
            userRegisterDto.Phone = '';
            userRegisterDto.IsActive = true;
            userRegisterDto.AppSecurityGroupMemberList = [];
            userRegisterDto.DictDeletedItemsIds = {};
            userRegisterDto.IsExternalUserSelfRegistration = true;
            userRegisterDto.DomainId = customerUserType;
            userRegisterDto.NewUserPartnerType = userRegisterDto.DomainId;
            userRegisterDto.IsNeedActivePartnerUserByEmail = true;
            userRegisterDto.PostEmailActivationRedirectUrl = window.location.origin;

            if (!isBusy) {

                setIsBusy(true);
                ESiteUserRegistration(userRegisterDto).then(function (data) {
                    setIsBusy(false);
                    if (data) {
                        if (data.Object && data.Object.IsWaitingForEmailActivation) {
                            setIsWaitingForEmailActivation(true);

                        } else if (data.ValidationResult && data.ValidationResult.LocalizedResult) {
                            alert(data.ValidationResult.LocalizedResult);
                        }


                    }
                });
            }
        }



    };

    return (
        <>
            {
                !isSignUp && (
                    <div className="rc-drawer rc-drawer-right rc-drawer-open" tabIndex={-1}>
                        <div className="rc-drawer-mask"
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
                                        className="fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md -top-3 md:-top-4 ltr:-right-3 rtl:-left-3 ltr:md:-right-4 rtl:md:-left-4"
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
                                                <div>
                                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: '95px', height: '43px', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative' }}>
                                                        <Image
                                                            alt="SFTec"
                                                            src="/logo.png"
                                                            width={100}
                                                            height={50}
                                                        />
                                                    </span>
                                                </div>
                                                <p className="mt-2 mb-8 text-sm md:text-base text-body sm:mb-10">
                                                    Login with your email &amp; password
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
                                                            spellCheck="false"
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
                                                                spellCheck="false"
                                                            />
                                                            <label onClick={togglePasswordVisibility} htmlFor="password" className="absolute ltr:right-4 rtl:left-4 top-5 -mt-2 text-gray-500 cursor-pointer">
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
                                                            className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-1.5"
                                                        >
                                                            Login
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                            <div className="mt-5 mb-1 text-sm text-center sm:text-base text-body">Don&apos;t have any account?
                                                <button type="button" onClick={() => setIsSignUp(true)} className="text-sm font-bold underline sm:text-base text-heading hover:no-underline focus:outline-none px-1"> Register</button>
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
                    <div className="rc-drawer rc-drawer-right rc-drawer-open" tabIndex={-1}>
                        <div className="rc-drawer-mask"
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
                                        className="fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md -top-3 md:-top-4 ltr:-right-3 rtl:-left-3 ltr:md:-right-4 rtl:md:-left-4"
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
                                                        <div>
                                                            <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: '95px', height: '43px', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative' }}>
                                                                <Image
                                                                    alt="SFTec"
                                                                    src="/logo.png"
                                                                    width={100}
                                                                    height={50}
                                                                />
                                                            </span>
                                                        </div>
                                                        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
                                                            By signing up, you agree to our
                                                            <a className="text-heading underline hover:no-underline focus:outline-none px-1">terms</a>
                                                            &amp;
                                                            <a className="text-heading underline hover:no-underline focus:outline-none px-1">policy</a>
                                                        </p>
                                                    </div>
                                                    <form className="flex flex-col justify-center" noValidate>
                                                        <div className="flex flex-col space-y-3.5">
                                                            <div className="block">
                                                                <label htmlFor="email" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Full Name</label>
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
                                                                    spellCheck="false"
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                            <div className="block">
                                                                <label htmlFor="email" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Email</label>
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
                                                                    spellCheck="false"
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
                                                                        spellCheck="false"
                                                                    />
                                                                    <label onClick={togglePasswordVisibility} htmlFor="password" className="absolute ltr:right-4 rtl:left-4 top-5 -mt-2 text-gray-500 cursor-pointer">
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
                                                                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-1.5"
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

export default MyAccountLogin;
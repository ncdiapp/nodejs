'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { useAppContext } from '@/contexts/AppContextProvider';


const clientProfileTransactionId = 7489;


const AccountDetailForm = ({ onClose }: { onClose: any }) => {

    const appContext = useAppContext();
    const { error, setError, isBusy, setIsBusy } = appContext;

    const {
        userSession,
        setUserSession,
        isLoginPopupVisible,
        setIsLoginPopupVisible,
        isAccountDetailPopupVisible,
        setIsAccountDetailPopupVisible,
        isNeedToExecuteLoginCallback,
        setIsNeedToExecuteLoginCallback,
        isNeedToExecuteLogoffCallback,
        setIsNeedToExecuteLogoffCallback,
        loginInfoDto,
        setLoginInfoDto,
        isWaitingForEmailActivation,
        setIsWaitingForEmailActivation,
        loadAccountDetailData,
        saveAccountDetailData,
        login,
        signUp

    } = appContext.userAccountModel;

    const [accountDetailDto, setAccountDetailDto] = useState<any>({});
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleInputChange_RootObj = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAccountDetailDto({ ...accountDetailDto, [name]: value });
    };

    const handleInputChange_SftClientUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAccountDetailDto((prevState: any) => ({
            ...prevState,
            SftClientUser: {
                ...prevState.SftClientUser,
                [name]: value
            }
        }));
    };

    const closeAllModalPopup = () => {
        onClose();
    };

    const closeMobileHeaderMenu = () => {
        onClose();
    };

    const loadAccountDetailDataFromServer = function () {
        loadAccountDetailData(function (userData: any) {
            if (userData) {
                setAccountDetailDto(userData);
            }
        });
    }

    useEffect(() => {
        loadAccountDetailDataFromServer();
    }, []);

    return (
        <>

            <div className="text-black fixed inset-0 z-60">
                <div className="absolute inset-0 bg-black opacity-25"
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
                                        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10 font-bold">
                                            Account Details
                                        </p>
                                    </div>
                                    <form className="flex flex-col justify-center" noValidate>
                                        <div className="flex flex-col space-y-3.5">
                                            {/* <div className="block">
                                                <label htmlFor="email" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Full Name</label>
                                                <input
                                                    value={accountDetailDto?.UserName}
                                                    onChange={handleInputChange_RootObj}
                                                    autoFocus
                                                    id="UserName"
                                                    name="UserName"
                                                    type="text"
                                                    placeholder=""
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                    autoComplete="off"
                                                   
                                                    aria-invalid="false"
                                                />
                                            </div>
                                            <div className="block">
                                                <label htmlFor="email" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Email</label>
                                                <input
                                                    value={accountDetailDto?.Email}
                                                    onChange={handleInputChange_RootObj}
                                                    autoFocus
                                                    id="Email"
                                                    name="Email"
                                                    type="text"
                                                    placeholder=""
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                    autoComplete="off"
                                                   
                                                    aria-invalid="false"
                                                />
                                            </div> */}

                                            <div className="flex flex-col space-y-4 sm:space-y-5">
                                                <div className="flex flex-col sm:flex-row sm:gap-x-3 space-y-4 sm:space-y-0">
                                                    <div className="w-full">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Full Name *</label>
                                                        <input
                                                            value={accountDetailDto?.UserName}
                                                            onChange={handleInputChange_RootObj}
                                                            id="UserName"
                                                            name="UserName"
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                            autoComplete="off"
                                                           
                                                            aria-invalid="false"
                                                        />

                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:gap-x-3 space-y-4 sm:space-y-0">
                                                    <div className="w-full sm:w-1/2">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Email *</label>
                                                        <input
                                                            value={accountDetailDto?.Email}
                                                            onChange={handleInputChange_RootObj}
                                                            id="Email"
                                                            name="Email"
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                            autoComplete="off"
                                                           
                                                            aria-invalid="false"
                                                        />

                                                    </div>
                                                    <div className="w-full sm:w-1/2">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Phone/Mobile</label>
                                                        <input
                                                            value={accountDetailDto?.SftClientUser?.Phone}
                                                            onChange={handleInputChange_SftClientUser}
                                                            id="Phone"
                                                            name="Phone"
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                            autoComplete="off"
                                                           
                                                            aria-invalid="false"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:gap-x-3 space-y-4 sm:space-y-0">
                                                    <div className="w-full">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Address</label>
                                                        <input
                                                            value={accountDetailDto?.SftClientUser?.Address}
                                                            onChange={handleInputChange_SftClientUser}
                                                            id="Address"
                                                            name="Address"
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                            autoComplete="off"
                                                           
                                                            aria-invalid="false"
                                                        />

                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:gap-x-3 space-y-4 sm:space-y-0">
                                                    <div className="w-full sm:w-1/2">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">City</label>
                                                        <input
                                                            value={accountDetailDto?.SftClientUser?.City}
                                                            onChange={handleInputChange_SftClientUser}
                                                            id="City"
                                                            name="City"
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                            autoComplete="off"
                                                           
                                                            aria-invalid="false"
                                                        />
                                                    </div>
                                                    <div className="w-full sm:w-1/2">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">State / Province</label>
                                                        <input
                                                            value={accountDetailDto?.SftClientUser?.State}
                                                            onChange={handleInputChange_SftClientUser}
                                                            id="State"
                                                            name="State"
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                            autoComplete="off"
                                                           
                                                            aria-invalid="false"
                                                        />                                                        
                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:gap-x-3 space-y-4 sm:space-y-0">
                                                    <div className="w-full sm:w-1/2">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Country</label>
                                                        <input
                                                            value={accountDetailDto?.SftClientUser?.Country}
                                                            onChange={handleInputChange_SftClientUser}
                                                            id="Country"
                                                            name="Country"
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                            autoComplete="off"
                                                           
                                                            aria-invalid="false"
                                                        />
                                                    </div>
                                                    <div className="w-full sm:w-1/2">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Post Code / Zip Code</label>
                                                        <input
                                                            value={accountDetailDto?.SftClientUser?.PostCode}
                                                            onChange={handleInputChange_SftClientUser}
                                                            id="PostCode"
                                                            name="PostCode"
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                            autoComplete="off"
                                                           
                                                            aria-invalid="false"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center">
                                                <span>{errorMessage}</span>
                                            </div>
                                            <div className="relative">
                                                <button
                                                    onClick={() => {
                                                        saveAccountDetailData(accountDetailDto, function () {

                                                            loadAccountDetailDataFromServer();

                                                            setErrorMessage('Save Successful.')
                                                            setTimeout(() => {
                                                                setErrorMessage('');
                                                            }, 3000);
                                                        })
                                                    }}
                                                    type="button"
                                                    data-variant="flat"
                                                    className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div tabIndex={0} aria-hidden="true" data-sentinel="end" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' }}></div>
            </div>

        </>


    );
};

export default AccountDetailForm;
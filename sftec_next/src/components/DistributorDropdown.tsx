"use client";

import { useState } from "react";
import DistributorSelectorPopup from "./DistributorSelectorPopup";
import { useAppContext } from "@/contexts/AppContextProvider";

const DistributorDropdown = () => {
    const appContext = useAppContext();
    const eCommerceModel = appContext.eCommerceModel;
    const { distributorListSorted, currentDistributor, changeDistributor, setDefaultDistributorByIp } = eCommerceModel;

    const [isOpen, setIsOpen] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);





    return (
        <div className="relative w-56 sm:w-60 lg:w-60 xl:w-96">
            {/* Button */}
            <button
                className="w-full border border-gray-300 text-[13px] xl:text-sm font-semibold py-2 px-3 text-left bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white focus:ring-offset-orange-300 focus:ring-offset-2 focus:border-indigo-500 cursor-pointer flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center overflow-hidden">
                    <i className="fas fa-map-marker-alt text-gray-600 mr-2"></i>
                    {currentDistributor ? (
                        <span className="truncate">
                            Distributor: {currentDistributor.Code}{" "}
                            {currentDistributor.City && `(${currentDistributor.City})`}
                        </span>
                    ) : (
                        <span className="text-red-500">Select A Distributor</span>
                    )}
                </div>
                <i className="fas fa-chevron-down text-gray-400"></i>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black opacity-25" onClick={() => setIsOpen(false)}></div>
                    <ul className="fixed z-30 top-20 right-6 bg-white shadow-lg rounded-md w-96 max-w-full max-h-[600px] overflow-auto ring-1 ring-black ring-opacity-5">
                        <li className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-xl font-bold">{currentDistributor?.Code}</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </li>

                        {/* Address */}
                        <li className="p-4 flex items-center border-b border-gray-200">
                            <i className="fas fa-map-marker-alt text-gray-500 text-lg mr-3"></i>
                            <div>
                                <p className="font-semibold">Address</p>
                                <p>{currentDistributor.Adress1}</p>
                                <p>{currentDistributor.City}, {currentDistributor.State}</p>
                                <p>{currentDistributor.Country}, {currentDistributor.PostCode}</p>
                            </div>
                        </li>

                        {/* Email */}
                        <li className="p-4 flex items-center border-b border-gray-200">
                            <i className="fas fa-envelope text-gray-500 text-lg mr-3"></i>
                            <div>
                                <h5 className="text-sm font-bold">Email</h5>
                                <p className="text-sm">{currentDistributor?.ContactFax || "N/A"}</p>
                            </div>
                        </li>

                        {/* Phone */}
                        <li className="p-4 flex items-center border-b border-gray-200">
                            <i className="fas fa-phone text-gray-500 text-lg mr-3"></i>
                            <div>
                                <h5 className="text-sm font-bold">Phone</h5>
                                <p className="text-sm">{currentDistributor?.ContactPhone || "N/A"}</p>
                            </div>
                        </li>

                        {/* Office Hours (if available) */}
                        {currentDistributor?.OfficeHour_30654 && (
                            <li className="p-4 flex items-center border-b border-gray-200">
                                <i className="fas fa-clock text-gray-500 text-lg mr-3"></i>
                                <div>
                                    <h5 className="text-sm font-bold">Office Hours</h5>
                                    <p className="text-sm whitespace-pre-line">
                                        {currentDistributor.OfficeHour_30654}
                                    </p>
                                </div>
                            </li>
                        )}

                        {/* Select Another Distributor */}
                        <li className="p-4 text-center">

                            <button
                                onClick={() => setPopupOpen(true)}
                                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                            >
                                Select A Different Distributor
                            </button>

                            {isPopupOpen && (
                                <DistributorSelectorPopup
                                    distributors={distributorListSorted}
                                    currentDistributorId={currentDistributor.AppBusinessPartnerID}
                                    onClose={() => setPopupOpen(false)}
                                    onSelectDistributor={(id) => {
                                        changeDistributor(id, true);
                                        setPopupOpen(false);
                                    }}
                                    onResetDistributorByIp={() => {
                                        setDefaultDistributorByIp();
                                        setPopupOpen(false);
                                    }}
                                />
                            )}

                        </li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default DistributorDropdown;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";



interface DistributorSelectorPopupProps {
    distributors: any;
    currentDistributorId: string;
    onClose: () => void;
    onSelectDistributor: (id: string) => void;
    onResetDistributorByIp: () => void;
}

const DistributorSelectorPopup: React.FC<DistributorSelectorPopupProps> = ({
    distributors,
    currentDistributorId,
    onClose,
    onSelectDistributor,
    onResetDistributorByIp,
}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-96 p-5 rounded-lg shadow-lg relative">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-xl font-bold">Select A Distributor</h2>
                    <button onClick={onClose} className="text-gray-500 hover:opacity-60">
                        <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                    </button>
                </div>

                <div className="underline cursor-pointer flex gap-2 group w-full h-auto justify-start items-center bg-white px-3 py-4 md:py-4 border-b border-gray-100 relative last:border-b-0"
                    onClick={() => onResetDistributorByIp()}>
                    <svg stroke="currentColor" fill="#404040" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                    </svg>
                    <div>
                        Set Distributor By Location
                    </div>
                </div>

                {/* Distributor List */}
                <div className="mt-4 h-[600px] overflow-y-auto text-left text-black">
                    {distributors.map((distributor: any) => (
                        <div
                            key={distributor.AppBusinessPartnerID}
                            className="p-4 border-b last:border-0 flex flex-col gap-5 text-sm"
                        >
                            <div className="font-bold">{distributor.Code}</div>

                            {/* Address */}
                            <div className="flex items-top gap-2">
                                <div className="p-2 w-10 h-10 text-center border border-gray-300 rounded">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" />
                                </div>
                                <div className="text-black text-left pl-5">
                                    <p className="font-semibold">Address</p>
                                    <p>{distributor.Adress1}</p>
                                    <p>{distributor.City}, {distributor.State}</p>
                                    <p>{distributor.Country}, {distributor.PostCode}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-top gap-2">
                                <div className="p-2 w-10 h-10 text-center border border-gray-300 rounded">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
                                </div>
                                <div className="text-black text-left pl-5">
                                    <p className="font-semibold">Email</p>
                                    <p>{distributor.ContactFax}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-top gap-2">
                                <div className="p-2 w-10 h-10 text-center border border-gray-300 rounded">
                                    <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
                                </div>
                                <div className="text-black text-left pl-5">
                                    <p className="font-semibold">Phone</p>
                                    <p>{distributor.ContactPhone}</p>
                                </div>
                            </div>


                            {/* Select Button */}
                            <div className="mt-2">
                                {distributor.AppBusinessPartnerID === currentDistributorId ? (
                                    <span className="text-sm text-gray-600">
                                        * Current Selected Distributor
                                    </span>
                                ) : (
                                    <button
                                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                                        onClick={() => onSelectDistributor(distributor.AppBusinessPartnerID)}
                                    >
                                        Select This Distributor
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DistributorSelectorPopup;

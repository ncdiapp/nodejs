"use client";
import { useState } from "react";
import { useAppContext } from '@/contexts/AppContextProvider';
import { callMgtGetApiByCode, callMgtPostApiByCode, ExecuteOneTransactionCommonadById } from '@/services/mgtdataservice';

const SendMessagePopup = ({ onClose, productid }: { onClose: any, productid: any }) => {

    const appContext = useAppContext();
    const eCommerceModel = appContext.eCommerceModel;

    const { currentDistributor } = eCommerceModel;

    const [formData, setFormData] = useState({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        messageBody: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (formData.clientName && formData.clientEmail && formData.messageBody) {

            let payloadData = {
                "ClientName": formData.clientName,
                "ClientEmail": formData.clientEmail,
                "ProductId": productid || null,
                "ProductName": '',
                "DitributorId": currentDistributor.AppBusinessPartnerID || null,
                "DitributorName": currentDistributor.Code || null,
                "ToEmail": currentDistributor.ContactFax,
                "Subject": 'Client Quote Request',
                "MessageBody": formData.messageBody,
                TransactionCommandId: 215681
            };


            const sendMessageAsync = async () => {
                try {
                    const apiResult = await callMgtPostApiByCode(process.env.NEXT_PUBLIC_APICODE_POST_CLIENT_MESSAGE, payloadData, {});

                    if (apiResult.success) {
                        setIsSent(true);
                        setTimeout(() => {
                            onClose();
                            setIsSent(false);
                        }, 3000);
                    }

                } catch (error: any) {

                } finally {

                }
            };

            sendMessageAsync();







          
        }
    };



    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 md:p-5 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-gray-200 text-center w-8 h-8 rounded-full hover:bg-gray-300">&times;</button>

                {isSent ? (
                    <div className="text-center text-2xl py-10">Message has been sent.</div>
                ) : (
                    <>
                        <div className="text-center mb-6">
                            <img src="/img/sftLogo2.jpg" alt="SFTec" className="mx-auto h-12" />
                            <p className="text-gray-700 mt-2">Send Message</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold">Your Name (Required)</label>
                                <input
                                    type="text"
                                    name="clientName"
                                    value={formData.clientName}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold">Email (Required)</label>
                                <input
                                    type="email"
                                    name="clientEmail"
                                    value={formData.clientEmail}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold">Phone</label>
                                <input
                                    type="text"
                                    name="clientPhone"
                                    value={formData.clientPhone}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold">Write your message (Required)</label>
                                <textarea
                                    name="messageBody"
                                    value={formData.messageBody}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded-md h-32"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-2 rounded-md text-white ${formData.clientName && formData.clientEmail && formData.messageBody
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-gray-400 cursor-not-allowed"
                                    }`}
                                disabled={!(formData.clientName && formData.clientEmail && formData.messageBody)}
                            >
                                Send
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default SendMessagePopup;

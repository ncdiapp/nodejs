"use client";
import React, { useState } from 'react';
import { ExecuteOneTransactionCommonadById } from "../services/mgtService";

const setDitributerByIpCommandId = 215602;
const shoppingCartTransactionId = 9798;
const orderTransactionId = 9799;
const shoppingCartCheckOutCommandId = 215598;

// export interface UserSession {
//     userSessionId: string | null;
//     userId: string | null;
//     userLanguageId: string | null;
//     distributorId: any | null;
//     isLoggedIn: boolean | false;
//     DomainId: any | null;
//     BusinessUserId: any | null;
//     loginDateTime: any | null;
//     currentUserProfileData: any | null;
// }


export const useUserSession = () => {

    const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);


    const [userSession, setUserSession] = useState<any>({});

    const SetDistributorByClientIpLocation = function (callbackFunc: any, failedCallbackFunc: any) {


        const fetchData = async () => {
            try {
                const data = await ExecuteOneTransactionCommonadById(setDitributerByIpCommandId, orderTransactionId);

                if (data && data.Object && data.Object.FormData) {
                    let distributorId = data.Object.FormData.DictOneToOneFields['DistributorId'] || null;
                    let clientIPCountryCode = data.Object.FormData.DictOneToOneFields['ClientIPCountryCode'] || '';

                    if (distributorId) {
                        setUserSession((prevState: any) => {
                            return { ...prevState, distributorId: distributorId, clientIPCountryCode: clientIPCountryCode };
                        });

                        if (callbackFunc) {
                            callbackFunc();
                        }

                    }
                    else {
                        if (failedCallbackFunc) {
                            failedCallbackFunc();
                        }
                    }
                }
                else {
                    if (failedCallbackFunc) {
                        failedCallbackFunc();
                    }
                }
            } catch (error: any) {

            } finally {

            }
        };
        fetchData();

    }



    return {
        userSession,
        setUserSession,
        SetDistributorByClientIpLocation,
        isLoginPopupVisible,
        setIsLoginPopupVisible
    };
};

// src/app/contexts/AppContext.tsx
"use client";
import React, { createContext, useContext, ReactNode } from 'react';
import { useUserSession } from './useUserSession';
import { useEcommerceModel } from './useEcommerceModel';



interface AppContextType {
    userSessionModel: any;
    eCommerceModel: any;
    //dialog: any;
    prepareGuestClientShoppingCartData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    //const { userSession, setUserSession, SetDistributorByClientIpLocation } = useUserSession();
    const userSessionModel = useUserSession();
    const eCommerceModel = useEcommerceModel(userSessionModel);

    const { userSession, setUserSession, SetDistributorByClientIpLocation } = userSessionModel;


    //const dialog = useDialog();
    const prepareGuestClientShoppingCartData = function () {
        if (!eCommerceModel.shoppingCartObj.isBusy && !eCommerceModel.shoppingCartFormData) {
            eCommerceModel.shoppingCartObj.isBusy = true;
            eCommerceModel.GetCurrentUserShoppingCartData(function () {
                if (eCommerceModel.shoppingCartObj && eCommerceModel.shoppingCartObj.DistributorId) {
                    eCommerceModel.shoppingCartObj.isBusy = false;
                    let distributorId = eCommerceModel.shoppingCartObj.DistributorId;
                    let clientIPCountryCode = eCommerceModel.shoppingCartObj.ClientIPCountryCode || '';
                    if (distributorId) {

                        setUserSession((prevState: any) => {
                            return { ...prevState, distributorId: distributorId, clientIPCountryCode: clientIPCountryCode };
                        });
                    }
                }
                else {
                    SetDistributorByClientIpLocation(function () {

                    }, function () {
                        //goToDistributorSelectorPage();
                    });

                    eCommerceModel.shoppingCartObj.isBusy = false;
                }
            });
        }
    }

    const contextValue: AppContextType = {
        userSessionModel,
        eCommerceModel,
        //dialog,
        prepareGuestClientShoppingCartData,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};



export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }



    return context;
};

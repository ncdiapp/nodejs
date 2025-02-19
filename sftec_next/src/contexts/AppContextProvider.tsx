"use client";
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { createDataService } from "@/services/dataservice";
import userAccountHelper from '@/helper/userAccountHelper';
import eCommerceHelper from '@/helper/ecommerceHelper';

const AppContext = createContext<any>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const dataService = createDataService();

    const [isBusy, setIsBusy] = useState<boolean>(false);
    const [error, setError] = useState({ message: "" });
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        if (error && error.message) {
            console.log("Error:\n" + error.message);
        }
    }, [error]);

    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString());

        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const initialAppContextData = function () {
        return {
            isBusy: isBusy,
            setIsBusy: setIsBusy,
            error: error,
            setError: setError,
            currentTime: currentTime,
        }
    }

    const appContextData: any = initialAppContextData();    

    if (process.env.NEXT_PUBLIC_ENABLE_FEATURE_USER_ACCOUNT_REGISTRATION == 'true') {
        appContextData.userAccountModel = userAccountHelper.useUserAccountModel(appContextData);
    }

    if (process.env.NEXT_PUBLIC_ENABLE_FEATURE_ECOMMERCE == 'true') {
        appContextData.eCommerceModel = eCommerceHelper.useECommerceModel(appContextData);
    }  

    /*** End of User Defined Code ***/

    return (
        <AppContext.Provider value={appContextData}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): any => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }

    return context;
};


/* 
        The AppContext can be accessed and shared by any client page or client component.

        Example of how to use AppContext: 
        
        File: components/ExampleUseAppContext.tsx
        
        "use client";
        import { useAppContext } from "@/contexts/AppContextProvider";

        export const ExampleUseAppContext = () => {
            const appContext = useAppContext();
            return (
                <div>
                    Current Time: {appContext.currentTime}
                </div>
            )
        }
*/

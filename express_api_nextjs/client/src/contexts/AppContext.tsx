// src/app/contexts/AppContext.tsx
"use client";
import React, { createContext, useContext, ReactNode, useState } from 'react';


interface AppContextType {
    cemeteryInfo: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const CEMETERY_ID = process.env.NEXT_PUBLIC_CEMETERY_ID
    const [cemetery, setCemetery] = useState<any>([]);
    const fetchCemeteryInfo = async () => {
        try {
            const res = await fetch(`/api/v1/cemeteryinfo/${CEMETERY_ID}`);
            const resData = await res.json();
            setCemetery(resData.cemetery);
        } catch (error) {
            console.error(error);
        }
    };


    fetchCemeteryInfo();


    const contextValue: AppContextType = {
        cemeteryInfo: cemetery,
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

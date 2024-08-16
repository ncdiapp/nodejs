// src/app/contexts/AppContext.tsx
"use client";
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { createDataService } from "../services/dataservice";

interface AppContextType {
    cemeteryInfo: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const dataService = createDataService();   
    const CEMETERY_ID = process.env.NEXT_PUBLIC_CEMETERY_ID
    const [cemetery, setCemetery] = useState<any>([]);
    const fetchCemeteryInfo = async () => {
        try {           
            const { success, data, error } = await dataService.getCurrentCemeteryInfo();
            if (success) {
                setCemetery(data);
            }
            else {
                console.error(error);                
            }      

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

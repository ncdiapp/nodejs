"use client";
import Link from "next/link";
import { useAppContext } from '@/contexts/AppContextProvider';

const HomeButton = ({ children }: { children: React.ReactNode }) => {

    const appContext = useAppContext();
    const eCommerceModel = appContext.eCommerceModel;

    const { currentDistributor } = eCommerceModel;


    return <>
        <Link href={`/?distributorid=${currentDistributor?.param_distributorCodeId || ''}`} 
            className="" title="Go to home page">
            {children}
        </Link>
    </>;
};

export default HomeButton;



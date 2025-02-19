"use client";
import Link from "next/link";
import { useAppContext } from '@/contexts/AppContextProvider';

const HeaderLogo = () => {

    const appContext = useAppContext();
    const eCommerceModel = appContext.eCommerceModel;

    const { currentDistributor } = eCommerceModel;


    return <>
        <Link href={`/?distributorid=${currentDistributor?.param_distributorCodeId || ''}`} 
            className="inline-flex focus:outline-none cursor-pointer" title="Go to home page" style={{ padding: '10px 20px' }}>
            <div className="w-28 h-14 lg:w-40 lg:h-20" style={{ boxSizing: 'border-box', overflow: 'hidden', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', top: '0px' }}>
                <img alt="SFTec" style={{ color: 'transparent', position: 'absolute', inset: '0', boxSizing: 'border-box', padding: '0', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} src="/img/sftLogo2.jpg" className="" />
            </div>
        </Link>
    </>;
};

export default HeaderLogo;



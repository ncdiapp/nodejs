'use client';
import MobileCategoryMenuPopup from '@/components/MobileCategoryMenuPopup';
import { useAppContext } from '@/contexts/AppContextProvider';


export default function MobileCategoryButton() {

    const eCommerceModel = useAppContext().eCommerceModel;

    function handleClick() {
        eCommerceModel.setIsMobileCatelogMenuPopupVisible(true);
    }

    function handleClose() {
        eCommerceModel.setIsMobileCatelogMenuPopupVisible(false);
    }

    
    return (
        <>
            <button onClick={handleClick}
                className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 25.567 18" className="">
                    <g transform="translate(-776 -462)" className="">
                        <rect id="Rectangle_941" data-name="Rectangle 941" width="12.749" height="2.499" rx="1.25" transform="translate(776 462)" fill="currentColor" className="">
                        </rect>
                        <rect id="Rectangle_942" data-name="Rectangle 942" width="25.567" height="2.499" rx="1.25" transform="translate(776 469.75)" fill="currentColor" className="">
                        </rect>
                        <rect id="Rectangle_943" data-name="Rectangle 943" width="17.972" height="2.499" rx="1.25" transform="translate(776 477.501)" fill="currentColor" className="">
                        </rect>
                    </g>
                </svg>
            </button>

            {eCommerceModel.isMobileCatelogMenuPopupVisible && (
                <MobileCategoryMenuPopup onClose={handleClose} />
            )}
        </>


    )
}
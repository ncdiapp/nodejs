import { callMgtGetApiByCode, RetrieveMassAppEntitiesLookupItem } from '@/services/mgtdataservice';
import ExampleUseAppContext from "@/components/ExampleUseAppContext";
import MyAccountButton from "@/components/MyAccountButton";
import ShoppingCartButton from "@/components/ShoppingCartButton";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropdownMenu';
import ProductSearchBox from './ProductSearchBox';
import DistributorDropdown from './DistributorDropdown';
import HeaderLogo from './HeaderLogo';





const Header = async () => {

    const isEnableUserAccount = process.env.NEXT_PUBLIC_ENABLE_FEATURE_USER_ACCOUNT_REGISTRATION == 'true';
    const isEnableECommerce = process.env.NEXT_PUBLIC_ENABLE_FEATURE_ECOMMERCE == 'true';

    let allCategoryList = [];
    {
        const apiResult = await callMgtGetApiByCode(process.env.NEXT_PUBLIC_APICODE_GET_CATEGORY_TREE_MENU, {}, { isUseCache: true });
        if (apiResult.success) {

            allCategoryList = apiResult.data?.[0]?.Children || []

            allCategoryList.forEach((node_lv1: any) => {
                node_lv1.LinkUrl = `/productlist/${node_lv1.TreeNodeDisplay}-${node_lv1.TreeNodeId}`;

                node_lv1?.Children.forEach((node_lv2: any) => {
                    node_lv2.LinkUrl = `/productlist/${node_lv1.TreeNodeDisplay}-${node_lv1.TreeNodeId}/${node_lv2.TreeNodeDisplay}-${node_lv2.TreeNodeId}`;

                    node_lv2?.Children.forEach((node_lv3: any) => {
                        node_lv3.LinkUrl = `/productlist/${node_lv1.TreeNodeDisplay}-${node_lv1.TreeNodeId}/${node_lv2.TreeNodeDisplay}-${node_lv2.TreeNodeId}/${node_lv3.TreeNodeDisplay}-${node_lv3.TreeNodeId}`;
                    });
                });

            });

        }
    }

    let topCategoryList = [];
    {
        const apiResult = await callMgtGetApiByCode('Sft_TopCategoryList', {}, { isUseCache: true });

        if (apiResult.success) {
            if (apiResult.data?.[0]?.Children) {
                topCategoryList = apiResult.data?.[0]?.Children;

                topCategoryList.forEach((node_lv1: any) => {
                    node_lv1?.Children.forEach((node_lv2: any) => {
                        if (node_lv2.TreeNodeId) {
                            const [cat1Id, cat2Id] = node_lv2.TreeNodeId.split("|");

                            if (cat1Id) {
                                if (cat2Id) {
                                    node_lv2.LinkUrl = `/productlist/${node_lv1.TreeNodeDisplay}-${cat1Id}/${node_lv2.TreeNodeDisplay}-${cat2Id}`;
                                }
                                else {
                                    node_lv2.LinkUrl = `/productlist/${node_lv2.TreeNodeDisplay}-${cat1Id}`;
                                }
                            }

                        }
                    });
                });
            }
        }
    }

    let brandList = [];
    {
        const apiResult = await RetrieveMassAppEntitiesLookupItem('SftBrand');

        if (apiResult.success && apiResult.data) {

            brandList = apiResult.data['SftBrand'] || [];

            brandList.forEach((lookupItemDto: any) => {
                lookupItemDto.TreeNodeDisplay = lookupItemDto.Display;
                lookupItemDto.LinkUrl = `/productlistbybrand/${lookupItemDto.Display}-${lookupItemDto.Id}`;

            });
        }
    }

    return (
        <div className="font-sans text-black text-base relative z-10 w-full lg:block">
            <div className="flex h-20 lg:h-[100px] relative w-full px-0 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font md:px-8 lg:px-6">
                <div className="flex items-center justify-center mx-auto max-w-[1920px] w-full h-full">
                    <HeaderLogo></HeaderLogo>
                    <div className="flex w-full relative hidden lg:flex md:ml-6 rtl:md:mr-6 xl:ml-10 rtl:xl:mr-10">

                        <ProductSearchBox />
                    </div>
                    <div className="flex-shrink-0 ml-auto rtl:mr-auto lg:mr-5 rtl:lg:ml-5 xl:mr-8 rtl:xl:ml-8 2xl:mr-10 rtl:2xl:ml-10">
                    </div>
                    <div className="items-center justify-end flex flex-shrink-0 gap-x-6 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10 ml-auto rtl:mr-auto">
                        {isEnableUserAccount && (
                            <div className="hidden lg:flex"> <MyAccountButton /></div>

                        )}
                        {isEnableECommerce && (
                            <>
                                <div className="hidden lg:flex"><ShoppingCartButton /></div>
                                <div className="pr-2 lg:pr-0"><DistributorDropdown /></div>

                            </>
                        )}


                    </div>
                </div>
            </div>
            <div className="headerMenu flex hidden lg:flex w-full relative uppercase 2xl:gap-x-3 h-15 pt-0.5" style={{ backgroundColor: '#54AC5B', paddingLeft: '100px', fontSize: '17px', letterSpacing: '1px', userSelect: 'none' }}>

                <DropdownMenu childMenuData={allCategoryList}>
                    <div className="relative inline-flex items-center px-3 py-2 text-white">
                        <FontAwesomeIcon icon={faBars} className="w-5 mr-3" />
                        All Categories
                        <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end" style={{ marginLeft: '5px' }}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="transition duration-300 ease-in-out transform group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                            </svg>
                        </span>
                    </div>
                </DropdownMenu>

                {
                    topCategoryList && topCategoryList.length > 0 && (
                        topCategoryList.map((topCategoryDto: any, index: any) => {
                            return (
                                <div className='hidden 2xl:block' key={index}>
                                    <DropdownMenu childMenuData={topCategoryDto.Children} key={topCategoryDto.GroupId}>
                                        <div className="relative inline-flex items-center px-3 py-2 text-white">
                                            {topCategoryDto.GroupName}
                                            <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end" style={{ marginLeft: '5px' }}>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="transition duration-300 ease-in-out transform group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </DropdownMenu>
                                </div>
                            );
                        })
                    )
                }

                <DropdownMenu childMenuData={brandList}>
                    <div className="relative inline-flex items-center px-3 py-2 text-white">
                        BRAND
                        <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end" style={{ marginLeft: '5px' }}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="transition duration-300 ease-in-out transform group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                            </svg>
                        </span>
                    </div>
                </DropdownMenu>

                <div className="menuItem group cursor-pointer py-2 hidden 2xl:block" style={{ marginRight: '30px' }}>
                    <a className="relative inline-flex items-center px-3 py-2 xl:px-4 text-white"
                        href='https://sftec.com/contact-us/'
                        target='_blank'>
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="w-full text-center h-10 bg-black">
                <div className="flex items-center justify-center mx-auto w-full text-white text-sm pt-2.5">
                    FIND MATERIALS IN YOUR
                    NEAREST STORE.
                </div>
            </div>
        </div>


    )

}

export default Header;
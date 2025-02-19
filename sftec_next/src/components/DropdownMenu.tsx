"use client";
import Link from "next/link";
import { useAppContext } from '@/contexts/AppContextProvider';

const DropdownMenu = ({ children, childMenuData }: { children: React.ReactNode; childMenuData: any[] }) => {

    const appContext = useAppContext();
    const eCommerceModel = appContext.eCommerceModel;

    const {currentDistributor} = eCommerceModel;

    const renderSubMenu = (nodes: any[], parentNodes?: any[]) => {
        return (
            <div className="dropdown-menu p-2 bg-gray-200">
                {
                    nodes.map((node:any, index:any) => {
                        const nodeList = [...parentNodes ?? [], node];
                        let urlSearchParam = "";


                        return (

                            <div className="dropdown-submenu" key={index}>
                                <Link
                                    href={`${node.LinkUrl || '/'}?distributorid=${currentDistributor?.param_distributorCodeId || ''}`}
                                    className="flex whitespace-nowrap text-sm py-3 text-heading font-regular px-4 xl:px-4 2xl:px-4 hover:text-heading hover:bg-gray-300 w-auto"
                                    style={{ width: "auto", whiteSpace: "nowrap" }}
                                >
                                    {node.TreeNodeDisplay}
                                    {node?.Children?.length > 0 && (
                                       
                                        <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="transition duration-300 ease-in-out transform -rotate-90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </span>
                                    )}
                                </Link>
                                {node?.Children?.length > 0 && renderSubMenu(node.Children, nodeList)}
                            </div>
                        )
                    })
                }
            </div>
        );
    };



    return <>

        <div className="menuItem relative group cursor-pointer py-2">


            {children}

            {childMenuData && childMenuData.length > 0 && (
                <div className="absolute bg-gray-200 megaMenu text-black" style={{ width: 'auto' }}>
                    <div className="p-4">
                        <div className="dropdown">
                            <div className="dropdown-menu">                               
                                {renderSubMenu(childMenuData)}
                            </div>
                        </div>
                    </div>
                </div>
            )}           
        </div>


    </>;
};

export default DropdownMenu;



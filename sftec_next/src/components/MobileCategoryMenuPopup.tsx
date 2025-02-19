'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { useAppContext } from '@/contexts/AppContextProvider';
import Link from 'next/link';

const MobileCategoryMenuPopup = ({ onClose }: { onClose: any }) => {

    const appContext = useAppContext();
    const eCommerceModel = appContext.eCommerceModel
    const { currentDistributor } = eCommerceModel;

    useEffect(() => {
        if (!eCommerceModel.mobileCategoryMenuData?.allCategoryList) {
            eCommerceModel.buildMobileCatelogMenuData();
        }
    }, []);




    return (
        <div className="fixed inset-0 text-black z-50">
            <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose}></div>

            <div className="absolute top-0 bottom-0 left-0 w-[320px] max-w-full bg-white" onClick={onClose}>
                <div className="w-full h-full">
                    <div className="flex flex-col justify-between w-full h-full">
                        <div className="w-full overflow-auto p-5 pt-6 pb-10">
                            <div className="w-full">
                                <div className="whitespace-nowrap py-3 text-heading font-semibold px-4 xl:px-6 2xl:px-8">
                                    ALL Categories
                                </div>
                                <div className="px-5 xl:px-8 2xl:px-10">
                                    {
                                        eCommerceModel.mobileCategoryMenuData?.allCategoryList?.map((node: any, index: any) => {
                                            return (
                                                <div className="" key={index}>
                                                    <Link href={`${node.LinkUrl || '/'}?distributorid=${currentDistributor?.param_distributorCodeId || ''}`}
                                                        className="block whitespace-nowrap text-sm text-heading py-3 px-5 xl:px-8 2xl:px-10">
                                                        {node.TreeNodeDisplay}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {
                                eCommerceModel.mobileCategoryMenuData?.topCategoryList?.map((node_lv1: any, index: any) => {
                                    return (
                                        <div className="w-full" key={index}>
                                            <div className="whitespace-nowrap py-3 text-heading font-semibold px-4 xl:px-6 2xl:px-8 ng-binding">
                                                {node_lv1.TreeNodeDisplay}
                                            </div>
                                            <div className="px-5 xl:px-8 2xl:px-10">
                                                {
                                                    node_lv1.Children?.map((node_lv2: any, index: any) => {
                                                        return (
                                                            <div key={index} className="">
                                                                <Link href={`${node_lv2.LinkUrl || '/'}?distributorid=${currentDistributor?.param_distributorCodeId || ''}`}
                                                                    className="block whitespace-nowrap text-sm py-3 text-heading px-5 xl:px-8 2xl:px-10 ng-binding" ng-mousedown="headerTopCatalogItemClicked(topCatalogItem)">
                                                                    {node_lv2.TreeNodeDisplay}
                                                                </Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }




                            <div className="w-full">
                                <div className="whitespace-nowrap py-3 text-heading font-semibold px-4 xl:px-6 2xl:px-8">
                                    Brand
                                </div>
                                <div className="px-5 xl:px-8 2xl:px-10">
                                    {
                                        eCommerceModel.mobileCategoryMenuData?.brandList?.map((node: any, index: any) => {
                                            return (
                                                <div className="" key={index}>
                                                    <Link href={`${node.LinkUrl || '/'}?distributorid=${currentDistributor?.param_distributorCodeId || ''}`}
                                                        className="block whitespace-nowrap text-sm text-heading py-3 px-5 xl:px-8 2xl:px-10">
                                                        {node.TreeNodeDisplay}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }                                   
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileCategoryMenuPopup;
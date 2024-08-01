// src/app/ProductList/page.tsx
//'use client'

import { useAppContext } from "../../contexts/AppContext";
import Layout from "../../components/Layout";
import Image from "next/image";
import {
    RetrieveSearchResult,
    GetMassEntitiesLookupItem,
} from "../../services/mgtService";
import {
    getRegularImageUrlById,
    getCurrentDistributorId,
} from "../../lib/utils";
import Link from "next/link";

const MyAccountDetails = async () => {   

    return (
        <Layout>
            <div className="w-full px-10 py-10">
                <h2 className="mb-6 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-8">Account Details</h2>

                <div className="w-full flex flex-col relative top-0 opacity-1">
                    <div className="w-full space-y-4">

                        



                    </div>
                </div>


            </div>
         
        </Layout>
    );
};

export default MyAccountDetails;

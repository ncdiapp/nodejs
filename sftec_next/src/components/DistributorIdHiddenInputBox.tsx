"use client";

import { useState } from "react";
import { useAppContext } from "@/contexts/AppContextProvider";

const DistributorIdHiddenInputBox = () => {
    const appContext = useAppContext();
    const eCommerceModel = appContext.eCommerceModel;
    const { currentDistributor } = eCommerceModel;

    return (        
        <input type="hidden" name="dataModel.responseData_SftGetOrderById.DistributorId" value={currentDistributor.AppBusinessPartnerID}/>
    );
};

export default DistributorIdHiddenInputBox;

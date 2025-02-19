"use server";
import { DataServiceResultDto } from "./dataservice";

const mgtBaseUrl = `${process.env.NEXT_PUBLIC_MGT_BASE_URL}`;
const mgtApiBaseUrl = `${process.env.NEXT_PUBLIC_MGT_BASE_URL}/webapi/DataIntegration`;
const ANONYMOUS_SESSION_ID = process.env.NEXT_PUBLIC_ANONYMOUS_USER_SESSION_ID;
const esiteId = process.env.NEXT_PUBLIC_SITE_ID;

export async function callMgtGetApiByCode(mgtApiCode: any, dictParamNameAndValue: object, options: any): Promise<DataServiceResultDto> {
    try {
        let apiUrl = `${mgtApiBaseUrl}/${mgtApiCode}?CurrentUserSessionId=${ANONYMOUS_SESSION_ID}`;

       // console.log('Api Url:' + apiUrl);

        if (dictParamNameAndValue) {
            const params = Object.entries(dictParamNameAndValue)
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join('&');

            if (params) {
                apiUrl += `&${params}`;
            }
        }

        let fetchOption = {};

        if (!(options && options.isUseCache)) {
            fetchOption = {
                cache: 'no-store',
            };
        }

        const response = await fetch(apiUrl, fetchOption);
        const resData = await response.json();
        return { success: true, data: resData || null };

    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to fetch data from mgt api ' + mgtApiCode + '.' };
    }
};

export async function callMgtPostApiByCode(mgtApiCode: any, payloadData: object, options: any): Promise<DataServiceResultDto> {
    try {
        let apiUrl = `${mgtApiBaseUrl}/${mgtApiCode}?CurrentUserSessionId=${ANONYMOUS_SESSION_ID}`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payloadData || {}),
        });

        const resData = await response.json();
        return { success: true, data: resData || null };

    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to post data to mgt api ' + mgtApiCode + '.' };
    }
};


export const ESiteLogin = async (userName: string, password: string): Promise<any> => {
    try {
        const authRizationValue = "Basic " + btoa(`${userName}:${password}`);

        const response = await fetch(`${mgtBaseUrl}/webapi/ExternalUserRegistration/ESiteLogin`, {
            method: 'GET',
            headers: {
                'Authorization': authRizationValue,
            },
            cache: 'no-store',
        });

        const resData = await response.json();
        return { success: true, data: resData || null };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to fetch data from mgt ESiteLogin.' };
    }
};

export const Logout = async (sessionId: any): Promise<any> => {
    try {
        const response = await fetch(`${mgtBaseUrl}/webapi/Home/Logout?sessionId=${sessionId}`, {
            cache: 'no-store',
        });

        const resData = await response.json();
        return { success: true, data: resData || null };
    } catch (error: any) {
        console.error(error);
        return { success: false, error: 'Failed to fetch data from mgt Logout.' };
    }
};

export const ESiteUserRegistration = async (userRegisterDto: any): Promise<any> => {
    try {
        let apiUrl = `${mgtBaseUrl}/webapi/ExternalUserRegistration/ESiteUserRegistration`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            
            body: JSON.stringify(userRegisterDto || {}),
        });

        const resData = await response.json();
        return { success: true, data: resData || null };

    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to post data to mgt ESiteUserRegistration.' };
    }    
};

export const RetrieveCurrentAppSecurityUserExDto = async (sessionid:any): Promise<any> => {
    try {
        const response = await fetch(`${mgtBaseUrl}/webapi/Administration/RetrieveCurrentAppSecurityUserExDto?CurrentUserSessionId=${sessionid}`, {
            cache: 'no-store',
        });

        const resData = await response.json();
        return { success: true, data: resData || null };
    } catch (error: any) {
        console.error(error);
        return { success: false, error: 'Failed to fetch data from mgt GetExternalUserContext.' };
    }    
};

export const GetExternalUserContext = async (): Promise<any> => {
    try {
        const response = await fetch(`${mgtBaseUrl}/webapi/ExternalUserRegistration/GetExternalUserContext`, {
            cache: 'no-store',
        });

        const resData = await response.json();
        return { success: true, data: resData || null };
    } catch (error: any) {
        console.error(error);
        return { success: false, error: 'Failed to fetch data from mgt GetExternalUserContext.' };
    }    
};



export const ExecuteOneTransactionCommonadById = async (commandId: any, transactionId: any, rootPrimaryKeyValue: any): Promise<any> => {
    try {
        const response = await fetch(`${mgtBaseUrl}/webapi/ExternalUserRegistration/ExecuteOneTransactionCommonadById?commandId=${commandId}&transactionId=${transactionId}&rootPrimaryKeyValue=${rootPrimaryKeyValue}`, {
            cache: 'no-store',
        });

        const resData = await response.json();

        if (resData && resData.IsSuccessful) {
            return { success: true, data: resData || null };
        }
        else{
            //console.log(JSON.stringify(resData.ValidationResult));
            return { success: true, data: resData || null };
        }

        
    } catch (error: any) {
        console.error(error);
        return { success: false, error: 'Failed to fetch data from mgt ExecuteOneTransactionCommonadById.' };
    }    
};

export const RetrieveMassAppEntitiesLookupItem = async (entityCodes: any): Promise<any> => {
    try {
        const response = await fetch(`${mgtBaseUrl}/webapi/ExternalUserRegistration/RetrieveMassAppEntitiesLookupItem?entityCodes=${entityCodes}`, {
            cache: 'no-store',
        });

        const resData = await response.json();

        if (resData && resData.IsSuccessful) {
            return { success: true, data: resData || null };
        }
        else{
            //JSON.stringify(resData.ValidationResult));
            return { success: true, data: resData || null };
        }

        
    } catch (error: any) {
        console.error(error);
        return { success: false, error: 'Failed to fetch data from mgt RetrieveMassAppEntitiesLookupItem.' };
    }    
};
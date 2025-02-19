import { callMgtGetApiByCode, callMgtPostApiByCode } from "./mgtdataservice";

const mgtBaseUrl = `${process.env.NEXT_PUBLIC_MGT_BASE_URL}`;
const mgtApiBaseUrl = `${process.env.NEXT_PUBLIC_MGT_BASE_URL}/webapi/DataIntegration`;
const ANONYMOUS_SESSION_ID = process.env.NEXT_PUBLIC_ANONYMOUS_USER_SESSION_ID;



export interface DataServiceResultDto {
    success: boolean;
    data?: any | null;
    error?: string;
}

export interface GetProfilesInputDto {
    name: string;
    isSearchAllCemetery?: boolean;
}



export interface IDataService {
    callMgtGetApiByCode(mgtApiCode: any, dictParamNameAndValue: object, options: any): Promise<DataServiceResultDto>;
    callMgtPostApiByCode(mgtApiCode: any, payloadData: object, options: any): Promise<DataServiceResultDto>;
}

export class MySQLDataService implements IDataService {
    async callMgtGetApiByCode(mgtApiCode: any, dictParamNameAndValue: object, options: any): Promise<DataServiceResultDto> {
        return { success: false, error: '"callMgtGetApiByName" is not implemented on MySQLDataService.' };
    };
    async callMgtPostApiByCode(mgtApiCode: any, payloadData: object, options: any): Promise<DataServiceResultDto> {
        return { success: false, error: '"callMgtGetApiByName" is not implemented on MySQLDataService.' };
    };  
}

export class MgtApiDataService implements IDataService {
    async callMgtGetApiByCode(mgtApiCode: any, dictParamNameAndValue: object, options: any): Promise<DataServiceResultDto> {
        return callMgtGetApiByCode(mgtApiCode, dictParamNameAndValue, options);
    };

    async callMgtPostApiByCode(mgtApiCode: any, payloadData: object, options: any): Promise<DataServiceResultDto> {
        return callMgtPostApiByCode(mgtApiCode, payloadData, options);
    };


}

export function createDataService(): IDataService {
    let condition = 1;

    if (condition === 1) {
        return new MgtApiDataService();
    } else {
        return new MySQLDataService();
    }
}

export function getMgtApiUrlByCode(mgtApiCode: any, dictParamNameAndValue:object) {
    let apiUrl = `${mgtApiBaseUrl}/${mgtApiCode}?CurrentUserSessionId=${ANONYMOUS_SESSION_ID}`;

    if (dictParamNameAndValue) {
        const params = Object.entries(dictParamNameAndValue)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
        if (params) {
            apiUrl += `&${params}`;
        }
    }

    return apiUrl;
}




const mgtApiBaseUrl = `${process.env.NEXT_PUBLIC_MGT_BASE_URL}/webapi/DataIntegration`;
const ANONYMOUS_SESSION_ID = process.env.NEXT_PUBLIC_ANONYMOUS_USER_SESSION_ID;
const CEMETERY_ID = process.env.NEXT_PUBLIC_CEMETERY_ID




export interface DataServiceResultDto {
    success: boolean;
    data?: any | null;
    error?: string;
}

export interface GetProfilesInputDto {
    name: string;
    isSearchAllCemetery?: boolean;
}



export interface DataService {
    getCurrentCemeteryInfo(): Promise<DataServiceResultDto>;
    getProfiles(input: GetProfilesInputDto): Promise<DataServiceResultDto>;
    getProfileDetails(id: string): Promise<DataServiceResultDto>;
}




export class MySQLDataService implements DataService {
    async getCurrentCemeteryInfo(): Promise<DataServiceResultDto> {
        try {

            const response = await fetch(`/api/v1/cemeteryinfo/${CEMETERY_ID}`);
            const resData = await response.json();
            return { success: true, data: resData.cemetery };
        } catch (error) {
            console.error(error);
            return { success: false, error: 'Failed to fetch profiles data' };
        }
    };
    async getProfiles(input: GetProfilesInputDto): Promise<DataServiceResultDto> {
        try {
            if (input.isSearchAllCemetery) {
                const response = await fetch(`/api/v1/profiles${input.name ? `?name=${input.name}` : ''}`);
                const resData = await response.json();
                return { success: true, data: resData.profiles };
            }
            else {
                const response = await fetch(`/api/v1/profilesbycemetery/${CEMETERY_ID}${input.name? `?name=${input.name}` : ''}`);
                const resData = await response.json();
                return { success: true, data: resData.profiles };
            }

        } catch (error) {
            console.error(error);
            return { success: false, error: 'Failed to fetch profiles data' };
        }
    };
    async getProfileDetails(id: string): Promise<DataServiceResultDto> {
        try {

            const response = await fetch(`/api/v1/profiles/${id}`);
            const resData = await response.json();
            return { success: true, data: resData.profile };

        } catch (error) {
            console.error(error);
            return { success: false, error: 'Failed to fetch profile data' };
        }
    }
}

export class MgtApiDataService implements DataService {
    async getCurrentCemeteryInfo(): Promise<DataServiceResultDto> {
        try {
            const response = await fetch(`${mgtApiBaseUrl}/GetCemeteries?CurrentUserSessionId=${ANONYMOUS_SESSION_ID}&cemetery_id=${CEMETERY_ID}`);
            const resData = await response.json();
            return { success: true, data: resData[0] || null };
        } catch (error) {
            console.error(error);
            return { success: false, error: 'Failed to fetch profiles data' };
        }
    };
    async getProfiles(input: GetProfilesInputDto): Promise<DataServiceResultDto> {
        try {
            if (input.name) {
                if (input.isSearchAllCemetery) {
                    const response = await fetch(`${mgtApiBaseUrl}/Profile_api?CurrentUserSessionId=${ANONYMOUS_SESSION_ID}&full_name=${input.name}`);
                    const resData = await response.json();
                    return { success: true, data: resData };
                }
                else {
                    const response = await fetch(`${mgtApiBaseUrl}/Profile_api?CurrentUserSessionId=${ANONYMOUS_SESSION_ID}&cemetery_num=${CEMETERY_ID}&full_name=${input.name}`);
                    const resData = await response.json();
                    return { success: true, data: resData };
                }
            }
            else {
                return { success: true, data: [] };
            }
        } catch (error) {
            console.error(error);
            return { success: false, error: 'Failed to fetch profiles data' };
        }
    };
    async getProfileDetails(id: string): Promise<DataServiceResultDto> {
        try {

            const response = await fetch(`${mgtApiBaseUrl}/Profile_api?CurrentUserSessionId=${ANONYMOUS_SESSION_ID}&decedent_id=${id}`);
            const resData = await response.json();
            return { success: true, data: resData[0] || null };

        } catch (error) {
            console.error(error);
            return { success: false, error: 'Failed to fetch profiles data' };
        }
    }
}

export function createDataService(): DataService {
    let condition = 1;

    if (condition === 1) {
        return new MgtApiDataService();
    } else {
        return new MySQLDataService();
    }
}
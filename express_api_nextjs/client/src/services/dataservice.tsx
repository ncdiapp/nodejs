export interface DataService {
    getProfiles(input: any): Promise<any>;
    //getProfileDetails(input: any): Promise<any>;
}

export class MySQLDataService implements DataService {
    async getProfiles(input: any): Promise<any> {
        try {
            const response = await fetch(`/api/v1/profiles${input.name ? `?name=${input.name}` : ''}`);
            const resData = await response.json();
            return { success: true, data: resData.profiles };
        } catch (error) {
            console.error(error);
            return { success: false, error: 'Failed to fetch profiles data' };
        }
    }
}

const mgtApiBaseUrl = `${process.env.NEXT_PUBLIC_MGT_BASE_URL}/webapi/DataIntegration`;
const ANONYMOUS_SESSION_ID = process.env.NEXT_PUBLIC_ANONYMOUS_USER_SESSION_ID;
//console.log(mgtApiBaseUrl);

export class MgtApiDataService implements DataService {
    async getProfiles(input: any): Promise<any> {
        try {    
            const response = await fetch(`${mgtApiBaseUrl}/Profile_api?CurrentUserSessionId=${ANONYMOUS_SESSION_ID}&first_name=${input.name}`);
            const resData = await response.json();
            return { success: true, data: resData };
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
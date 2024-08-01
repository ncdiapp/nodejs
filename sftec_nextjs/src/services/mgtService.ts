import axios from "axios";
// import { useAppContext } from "../contexts/AppContext";



const mgtBaseUrl = process.env.MGT_BASE_URL;
const siteId = process.env.SITE_ID;



export const openDB = async (storeName: string) => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open("appDB", 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id" });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const getFromCache = async (storeName: string, id: any) => {
  const db = await openDB(storeName);
  return new Promise<any>((resolve, reject) => {
    const transaction = db.transaction([storeName], "readonly");
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.get(id);

    request.onsuccess = () => {
      resolve(request.result?.data);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const saveToCache = async (storeName: string, id: any, data: any) => {
  const db = await openDB(storeName);
  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction([storeName], "readwrite");
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.put({ id, data });

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};



export const ESiteLogin = async (
  userName: string,
  password: string
): Promise<any> => {
  try {
    const authRizationValue = "Basic " + btoa(`${userName}:${password}`);

    const response = await axios.get(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/ESiteLogin`,
      {
        headers: {
          Authorization: authRizationValue,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
    //throw error;
  }
};

export const Logout = async (sessionId: any): Promise<any> => {
  try {
    const response = await axios.get(
      `${mgtBaseUrl}/webapi/Home/Logout?sessionId=${sessionId}`
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const ESiteUserRegistration = async (
  userRegisterDto: any
): Promise<any> => {
  try {
    const response = await axios.post(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/ESiteUserRegistration`,
      userRegisterDto,
      {
        headers: {
          ESiteId: userRegisterDto.RegisterFromEsiteId,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const GetExternalUserContext = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/GetExternalUserContext`
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const RetrieveSearchResult = async (searchDto: any): Promise<any> => {
  try {
    const isBrowser = typeof window !== "undefined";
    if (!isBrowser || (isBrowser && navigator.onLine)) {
      console.log("get data from api call");
    }
    else {
      console.log("get data from cache");
    }


    const response = await axios.post(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/RetrieveSearchResult`,
      searchDto,
      {
        headers: {
          CurrentUserSessionId: process.env.CurrentUserSessionId,
          "Cache-Control": "no-store",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const GetFormData = async (data: any): Promise<any> => {
  try {
    const storeName = "GetFormData";
    const cacheId = JSON.stringify(data);

    const isBrowser = typeof window !== "undefined";

    if (!isBrowser) {
      // server side call     

      const response = await axios.post(
        `${mgtBaseUrl}/webapi/ExternalUserRegistration/GetFormData`,
        data
      );

      return response.data;
    }
    else {
      // client side call
      if (navigator.onLine) {
        console.log("navigator is online, get data from api");

        const response = await axios.post(
          `${mgtBaseUrl}/webapi/ExternalUserRegistration/GetFormData`,
          data
        );

        await saveToCache(storeName, cacheId, response.data);
        return response.data;
      }
      else {
        console.log("navigator is offLine, get data from cache");

        // Retrieve from cache
        const cachedData = await getFromCache(storeName, cacheId);
        if (cachedData) {
          return cachedData;
        } else {
          throw new Error("No cached data available for the request.");
        }
      }
    }
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const GetNewFormData = async (
  transactionId: any,
  isConfigTestRun?: any
): Promise<any> => {
  try {
    const response = await axios.get(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/GetNewFormData?transactionId=${transactionId}&isConfigTestRun=${isConfigTestRun}`
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const SaveTransactionData = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/saveTransactionData`,
      data
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const ExecuteOneTransactionCommonadById = async (
  commandId: any,
  transactionId?: any,
  rootPrimaryKeyValue?: any,
  chlldUnitId?: any,
  childRowPkCombString?: any
): Promise<any> => {
  try {
    const response = await axios.get(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/ExecuteOneTransactionCommonadById?commandId=` +
      commandId +
      "&transactionId=" +
      transactionId +
      "&rootPrimaryKeyValue=" +
      rootPrimaryKeyValue +
      "&chlldUnitId=" +
      chlldUnitId +
      "&childRowPkCombString=" +
      childRowPkCombString
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const ExcuteTransactionCommonad = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/ExcuteTransactionCommonad`,
      data
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const CreateStripeCheckoutSession = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/CreateStripeCheckoutSession`,
      data
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export const GetMassEntitiesLookupItem = async (
  entityCodes: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `${mgtBaseUrl}/webapi/ExternalUserRegistration/RetrieveMassAppEntitiesLookupItem?entityCodes=${entityCodes}`
    );
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
  }
};

export interface UserTreeMenuResponse {
  // Define the shape of the response data here
  // For example:
  // items: { id: string; name: string; ... }[];
}

export async function RetrieveNoneMgtUserTreeMenu(
  siteMenuCategory: number
): Promise<UserTreeMenuResponse> {
  console.log("baseUrl: " + mgtBaseUrl);

  const response = await fetch(
    `${mgtBaseUrl}/webapi/ExternalUserRegistration/RetrieveNoneMgtUserTreeMenu?siteId=${siteId}&siteMenuCategory=${siteMenuCategory}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

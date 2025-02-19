
import PageMarkup from './pageMarkup';
import { createDataService } from '@/services/dataservice';
import { callMgtGetApiByCode, callMgtPostApiByCode, ExecuteOneTransactionCommonadById } from '@/services/mgtdataservice';
import appHelper from '@/helper/apphelper';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { copyFileSync } from 'node:fs';

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: "",
  robots: "index, follow",
  openGraph: {
    title: "",
    description: "",
    url: "",
    images: [],
  }
};

const ordersummary = async ({ params, searchParams }: any) => {

  const dataService = createDataService();
  const headersList = headers();



  const dataModel: { [key: string]: any } = appHelper.initializePageDataModel(params, searchParams, headersList);

  /* Start of Mgt Get Api Call */


  {

    const apiResult_SftGetOrderById = await dataService.callMgtGetApiByCode('SftGetOrderById', { 'id': dataModel.params.orderid_id, }, { isUseCache: false });
    if (apiResult_SftGetOrderById.success) {
      dataModel.responseData_SftGetOrderById = apiResult_SftGetOrderById.data || {};

     // console.log(JSON.stringify(dataModel.responseData_SftGetOrderById));
    }
  }

  /* End of Mgt Get Api Call */



  /* Start of Mgt Post Api Call */


  

  /* End of Mgt Post Api Call */





  /* Metadata Setting */

  /*** Start of metadata.title ***/
  metadata.title = `placeorder`;
  /*** End of metadata.title ***/

  /*** Start of metadata.description ***/
  metadata.description = `placeorder`;
  /*** End of metadata.description ***/

  /*** Start of metadata.keywords ***/
  metadata.keywords = `placeorder`;
  /*** End of metadata.keywords ***/

  metadata.openGraph = {
    title: metadata.title,
    description: metadata.description,
    images: [],
  };

  /*** Start of metadata.openGraph.url ***/
  metadata.openGraph.url = ``;
  /*** End of metadata.openGraph.url ***/


  return (
    <PageMarkup dataModel={dataModel} />
  );
}

export default ordersummary;


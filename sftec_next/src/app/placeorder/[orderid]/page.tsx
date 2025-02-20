
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

const placeorder = async ({ params, searchParams }: any) => {

  const dataService = createDataService();
  const headersList = headers();

  const orderTransactionId = process.env.NEXT_PUBLIC_ORDER_APPTRANSACTION__ID;
  const saveDraftOrderBeforePaymentCommandId = process.env.NEXT_PUBLIC_ORDER_APPTRANSACTION__SAVE_DRAFT_ORDER_BEFORE_PAYMENT_COMMANDID;


  const dataModel: { [key: string]: any } = appHelper.initializePageDataModel('placeorder', params, searchParams, headersList);
  
  /* Start of Mgt Get Api Call */


  {

    const apiResult_SftGetOrderById = await dataService.callMgtGetApiByCode('SftGetOrderById', { 'id': dataModel.params.orderid_id, }, { isUseCache: false });
    if (apiResult_SftGetOrderById.success) {
      dataModel.responseData_SftGetOrderById = apiResult_SftGetOrderById.data || {};

      // console.log(JSON.stringify(dataModel.responseData_SftGetOrderById));
    }
  }

  /* End of Mgt Get Api Call */

  {
    let payloadData = dataModel.responseData_SftGetOrderById;

    payloadData.TransactionCommandId = process.env.NEXT_PUBLIC_ORDER_APPTRANSACTION__CHECKOUT_PRELOAD_CALCULATION_COMMANDID;    

    const apiResult_SftGetOrderById = await callMgtPostApiByCode(process.env.NEXT_PUBLIC_APICODE_POST_ORDER, payloadData, {});

    if (apiResult_SftGetOrderById.success) {
      dataModel.responseData_SftGetOrderById = apiResult_SftGetOrderById.data || {};      
    }

  }


  /* Start of Mgt Post Api Call */


  {
    dataModel.SftSaveOrder = async function (formData: FormData) {
      "use server";
      let payloadData = dataModel.responseData_SftGetOrderById;

      let inputNamePrefix = 'dataModel.responseData_SftGetOrderById.';

      appHelper.preparePostApiPayloadData(payloadData, inputNamePrefix, formData);

      const apiResult_SftSaveOrder = await callMgtPostApiByCode(process.env.NEXT_PUBLIC_APICODE_POST_ORDER, payloadData, {});

      // if (dataModel.pageReferer) {
      //   redirect(dataModel.pageReferer);
      // }

      const apiResult_Command_SaveDrafOrderForPayment = await ExecuteOneTransactionCommonadById(saveDraftOrderBeforePaymentCommandId, orderTransactionId, dataModel.params.orderid_id);
      //console.log(JSON.stringify(apiResult_Command_SaveDrafOrderForPayment));
      if (apiResult_Command_SaveDrafOrderForPayment.success) {

        redirect(`/placeorder/${dataModel.params.orderid_id}`);

      }
    };
  }

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

export default placeorder;


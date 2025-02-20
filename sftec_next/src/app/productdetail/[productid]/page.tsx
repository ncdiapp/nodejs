
import PageMarkup from './pageMarkup';
import { createDataService } from '@/services/dataservice';
import { callMgtGetApiByCode, callMgtPostApiByCode } from '@/services/mgtdataservice';
import appHelper from '@/helper/apphelper';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';


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

const productdetail = async ({ params, searchParams }: any) => {

  const dataService = createDataService();
  const headersList = headers();    
  const dataModel: { [key: string]: any } = appHelper.initializePageDataModel('productdetail', params, searchParams, headersList);
 

  /* Start of Mgt Get Api Call */


  {
    
    const apiResult_GetAppForm9787_SFTProduct = await dataService.callMgtGetApiByCode('GetAppForm9787_SFTProduct', { 'id': dataModel.params.productid_id, }, { isUseCache: true });
    if (apiResult_GetAppForm9787_SFTProduct.success) {
      dataModel.responseData_GetAppForm9787_SFTProduct = apiResult_GetAppForm9787_SFTProduct.data || {};
    }
  }

  /* End of Mgt Get Api Call */



  /* Start of Mgt Post Api Call */




  /* End of Mgt Post Api Call */

  {
    let payloadData = dataModel.responseData_GetAppForm9787_SFTProduct;

    payloadData.TransactionCommandId = process.env.NEXT_PUBLIC_SFTPRODUCT_APPTRANSACTION__LOAD_DISTRIBUTOR_PRODUCT_INFO_COMMANDID;
    payloadData.DistributorId_30661 = searchParams.distributorid_id;

    const apiResult_GetAppForm9787_SFTProduct = await callMgtPostApiByCode(process.env.NEXT_PUBLIC_APICODE_POST_PRODUCT, payloadData, {});

    if (apiResult_GetAppForm9787_SFTProduct.success) {
      dataModel.responseData_GetAppForm9787_SFTProduct = apiResult_GetAppForm9787_SFTProduct.data || {};
    }

  }


  /* Metadata Setting */

  /*** Start of metadata.title ***/
  metadata.title = `SFTec Product Detail`;
  /*** End of metadata.title ***/

  /*** Start of metadata.description ***/
  metadata.description = `SFTec Product Detail, ${dataModel.params.productid_display}, ${dataModel.params.productid_id}, ${dataModel.responseData_GetAppForm9787_SFTProduct.ProductCode}`;
  /*** End of metadata.description ***/

  /*** Start of metadata.keywords ***/
  metadata.keywords = `SFTec Product Detail,
${dataModel.params.productid_display}, ${dataModel.params.productid_id}, 
${dataModel.responseData_GetAppForm9787_SFTProduct.ProductCode}, 
${dataModel.responseData_GetAppForm9787_SFTProduct.Description}`;
  /*** End of metadata.keywords ***/

  metadata.openGraph = {
    title: metadata.title,
    description: metadata.description,
    images: [],
  };

  /*** Start of metadata.openGraph.url ***/
  metadata.openGraph.url = ``;
  /*** End of metadata.openGraph.url ***/


  dataModel.cartItem = {
    skuNo: dataModel.responseData_GetAppForm9787_SFTProduct.ProductId,
    name: dataModel.responseData_GetAppForm9787_SFTProduct.ProductName,
    description: dataModel.responseData_GetAppForm9787_SFTProduct.Description,
    imgUrl: `${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetRegularImage.aspx?FileId=${dataModel.responseData_GetAppForm9787_SFTProduct.Photo}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`,
    price: dataModel.responseData_GetAppForm9787_SFTProduct.UnitPriceOnDistributorCurrency_30864 || 0,
    //availableQty: undefined,
    //selectedQuantity: 1,
    //subTotal: 0.0,
    itemInfo: null,
  }

  return (
    <PageMarkup dataModel={dataModel} />
  );
}

export default productdetail;


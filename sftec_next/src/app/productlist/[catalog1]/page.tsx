
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

const productlist = async({ params, searchParams }: any) => {

  const dataService = createDataService();
  const headersList = headers();    

  const dataModel: { [key: string]: any } = appHelper.initializePageDataModel('productlist', params, searchParams, headersList);


  /* Start of Mgt Get Api Call */
  {
    const apiResult_Sft_ProductSearch = await dataService.callMgtGetApiByCode('Sft_ProductSearch', { 'Catalog1': dataModel.params.catalog1_id, 'Catalog2': '', 'Catalog3': '', 'ProductType': '', 'DistributorId': dataModel.searchParams.distributorid_id, 'ProductName': '', 'Brand': '', 'Department': '', 'Type': '',  }, {isUseCache: true});
    if (apiResult_Sft_ProductSearch.success) {
      dataModel.responseData_Sft_ProductSearch = apiResult_Sft_ProductSearch.data || {};
    }
  }
  /* End of Mgt Get Api Call */



  /* Start of Mgt Post Api Call */

  /* End of Mgt Post Api Call */


  /* Metadata Setting */

  /*** Start of metadata.title ***/
  metadata.title = `SFTec Products`;
/*** End of metadata.title ***/

  /*** Start of metadata.description ***/
  metadata.description = `SFTec Products, ${dataModel.params.catalog1_display}`;
/*** End of metadata.description ***/

  /*** Start of metadata.keywords ***/
  metadata.keywords = `SFTec Products, ${dataModel.params.catalog1_display}`;
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

export default productlist;

    
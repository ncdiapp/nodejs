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

const Home = async ({ searchParams }: any) => {

  const dataService = createDataService();
  const headersList = headers();    

  const dataModel: { [key: string]: any } = appHelper.initializePageDataModel('Home', null, searchParams, headersList);

  /* Start of Mgt Get Api Call */



{
 
     const apiResult_Sft_Category1List = await dataService.callMgtGetApiByCode('Sft_Category1List', {  }, {isUseCache: true});
     
     if (apiResult_Sft_Category1List.success) {
       dataModel.responseData_Sft_Category1List = apiResult_Sft_Category1List.data || [];
      
       //console.log(dataModel.responseData_Sft_Category1List);
     }
}

/* End of Mgt Get Api Call */


  /* Start of Mgt Post Api Call */

  /* End of Mgt Post Api Call */

  /* Start of Mgt Post Api Call */

  /* End of Mgt Post Api Call */


  /* Metadata Setting */

  /*** Start of metadata.title ***/
  metadata.title = `Home`;
  /*** End of metadata.title ***/

  /*** Start of metadata.description ***/
  metadata.description = `Home`;
  /*** End of metadata.description ***/

  /*** Start of metadata.keywords ***/
  metadata.keywords = `Home`;
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
    <div>   
      <PageMarkup dataModel={dataModel} />
    </div>
  );
};

export default Home;
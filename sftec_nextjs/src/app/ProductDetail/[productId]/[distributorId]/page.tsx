
//import { useAppContext } from "../../../../contexts/AppContext";
import Layout from "../../../../components/Layout";
import Image from "next/image";
import {
    GetFormData,
    ExcuteTransactionCommonad,
    RetrieveSearchResult,
    GetMassEntitiesLookupItem,
} from "../../../../services/mgtService";
import { getRegularImageUrlById, getCurrentDistributorId } from '../../../../lib/utils';
import ProductAddToCartButton from "@/components/ProductAddToCartButton";



const ProductDetail = async ({ params }: { params: { productId: string, distributorId: string } }) => {


    const formDataPayload = { "transactionId": 9787, "rootPrimaryKeyValue": params.productId, "transGroupId": null, "autoExecuteCommandId": null };
    const productFormData = await GetFormData(formDataPayload);

    productFormData.DictOneToOneFields['DistributorId_30661'] = params.distributorId;
    productFormData.TransactionCommandId = 215611;
    const currentFormData = (await ExcuteTransactionCommonad(productFormData))?.Object?.FormData;

    return (
        <Layout>

            <div className="w-full px-4 lg:px-16" style={{ minHeight: '100vh' }}>
                <div className="pt-8">
                    <div className="flex items-center chawkbazarBreadcrumb">
                        <ol className="flex items-center w-full overflow-hidden"></ol>
                    </div>
                </div>
                <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
                    <div className="col-span-5 grid grid-cols-2 gap-2.5">
                        <div className="px-0 py-0 w-full col-span-2">
                            <div>
                                <div className={`slider Slider_iXXxNX1087`} style={{ height: 'auto' }}>
                                    {currentFormData.DictOneToOneFields['Photo'] && (
                                        <div className="col-span-2 transition duration-150 ease-in hover:opacity-90" style={{ height: '600px' }}>
                                            <img
                                                src={getRegularImageUrlById(currentFormData.DictOneToOneFields['Photo'])}
                                                alt={currentFormData.DictOneToOneFields['Photo']}
                                                className="object-cover w-full max-h-full"
                                            />
                                        </div>
                                    )}
                                    {/* {currentFormData.DictOneToOneFields['Photo2'] && (
                                        <div className="col-span-2 transition duration-150 ease-in hover:opacity-90" style={{ height: '600px' }}>
                                            <img
                                                src={getRegularImageUrlById(currentFormData.DictOneToOneFields['Photo2'])}
                                                alt={currentFormData.DictOneToOneFields['Photo2']}
                                                className="object-cover w-full max-h-full"
                                            />
                                        </div>
                                    )}
                                    {currentFormData.DictOneToOneFields['Photo3'] && (
                                        <div className="col-span-2 transition duration-150 ease-in hover:opacity-90" style={{ height: '600px' }}>
                                            <img
                                                src={getRegularImageUrlById(currentFormData.DictOneToOneFields['Photo3'])}
                                                alt={currentFormData.DictOneToOneFields['Photo3']}
                                                className="object-cover w-full max-h-full"
                                            />
                                        </div>
                                    )} */}
                                </div>
                            </div>
                        </div>
                        <div className="px-0 py-0 w-full col-span-2">
                            <div className="shadow-sm">
                                <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6">
                                    <h2 className="text-sm font-semibold leading-relaxed text-heading ltr:pr-2 rtl:pl-2 md:text-base lg:text-lg">
                                        Product Details
                                    </h2>
                                    <div className="relative flex items-center justify-center flex-shrink-0 w-4 h-4"></div>
                                </header>
                                <div style={{ opacity: 1, height: 'auto' }}>
                                    <div className="pb-6 md:pb-7 leading-7 text-sm text-gray-600">
                                        {currentFormData.DictOneToOneFields['Description']}
                                    </div>
                                </div>
                            </div>
                            {currentFormData.DictOneToOneFields['Other'] && (
                                <div>
                                    <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300">
                                        <h2 className="text-sm font-semibold leading-relaxed text-heading ltr:pr-2 rtl:pl-2 md:text-base lg:text-lg">
                                            Additional Information
                                        </h2>
                                        <div className="relative flex items-center justify-center flex-shrink-0 w-4 h-4"></div>
                                    </header>
                                    <div style={{ opacity: 1, height: 'auto' }}>
                                        <div className="pb-6 md:pb-7 leading-7 text-sm text-gray-600">
                                            {currentFormData.DictOneToOneFields['Other']}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-span-4 pt-8 lg:pt-0">
                        <div className="pb-7 mb-7 border-b border-gray-300">
                            <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                                {currentFormData.DictOneToOneFields['ProductName']}
                                {currentFormData.DictOneToOneFields['ProductCode']}
                            </h2>
                            {/* {currentFormData.DictOneToOneFields['Catalog1'] && (
                                    <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                                        {navigationScope.getDDLFieldDisplayTextValue(dataModel.dictFieldEntityDataSource['30546'].items, currentFormData.DictOneToOneFields['Catalog1'])}
                                    </p>
                                )}
                                {currentFormData.DictOneToOneFields['Catalog2'] && (
                                    <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                                        {navigationScope.getDDLFieldDisplayTextValue(dataModel.dictFieldEntityDataSource['30547'].items, currentFormData.DictOneToOneFields['Catalog2'])}
                                    </p>
                                )}
                                {currentFormData.DictOneToOneFields['Catalog3'] && (
                                    <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                                        {navigationScope.getDDLFieldDisplayTextValue(dataModel.dictFieldEntityDataSource['30548'].items, currentFormData.DictOneToOneFields['Catalog3'])}
                                    </p>
                                )}
                                {currentFormData.DictOneToOneFields['ProductType'] && (
                                    <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 pt-1 mb-2">
                                        {navigationScope.getDDLFieldDisplayTextValue(dataModel.dictFieldEntityDataSource['30549'].items, currentFormData.DictOneToOneFields['ProductType'])}
                                    </p>
                                )} */}
                            {
                                currentFormData.DictOneToOneFields['UnitPriceOnDistributorCurrency_30864'] && (
                                    <div className="flex items-center mt-8">

                                        {
                                            currentFormData.DictOneToOneFields['IsVisiblePrice_30951'] == 1 && (
                                                <div className="flex items-center">
                                                    <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:pl-2 ltr:2xl:pr-0 rtl:pl-0">
                                                        {/* {navigationScope.navDataModel.distributorCurrencyCode}  */}
                                                        ${currentFormData.DictOneToOneFields['UnitPriceOnDistributorCurrency_30864']?.toFixed(2)}
                                                    </div>
                                                    <span className="font-segoe text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl ltr:pl-2 rtl:pr-2">
                                                        / {currentFormData.DictOneToOneFields['PriceUnit']}
                                                    </span>
                                                </div>
                                            )
                                        }

                                        {
                                            currentFormData.DictOneToOneFields['IsVisiblePrice_30951'] != 1 && (
                                                <div className="flex items-center">
                                                    <div className="font-segoe text-sm md:text-base text-red-500">
                                                        Please contact distributor for unit price.
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>
                                )
                            }

                            {
                                currentFormData.DictOneToOneFields['IsOnline_30842'] !== null && (
                                    <div className="flex items-center mt-8 text-gray-600" style={{ columnGap: '20px' }}>
                                        <div className="text-sm ltr:pr-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 ltr:2xl:pr-0 rtl:pl-0">
                                            {currentFormData.DictOneToOneFields['AvailbleInventoryForSale_30660'] || 0} In Stock
                                        </div>
                                        <div className="text-sm ltr:pr-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 ltr:2xl:pr-0 rtl:pl-0">
                                            Deliver Option:
                                            {currentFormData.DictOneToOneFields['DeliveryOption_30663'] == 1 && 'Only pick up'}
                                            {currentFormData.DictOneToOneFields['DeliveryOption_30663'] == 2 && 'Only Delivery'}
                                            {currentFormData.DictOneToOneFields['DeliveryOption_30663'] == 3 && 'Delivery & pick up'}
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        {
                            (currentFormData.DictOneToOneFields['IsOnline_30842'] !== null
                                && currentFormData.DictOneToOneFields && !(currentFormData.DictOneToOneFields['UnitPriceOnDistributorCurrency_30864'] > 0
                                    && currentFormData.DictOneToOneFields['AvailbleInventoryForSale_30660'] > 0
                                    && currentFormData.DictOneToOneFields['IsPublished_30841'] == 1
                                    && currentFormData.DictOneToOneFields['IsOnline_30842'] == 1)) ? (
                                <div
                                    className="text-red-500 flex items-center gap-x-4 border-b border-gray-300 pt-1 py-8">
                                    This Product Is Currently Unavailable
                                </div>

                            ) : (
                                <div className="border-b border-gray-300 pb-6">
                                    <div className="mb-2">
                                        <div className="mb-2.5 md:mb-3.5 font-bold text-base">
                                            {/* <div className="text-body text-sm lg:text-base leading-6 lg:leading-8">
                                        {currentFormData.DictOneToOneFields['IsOnline_30842'] === 1 ? 'This product is available on Online shop' : 'This product is not available on Online shop'}
                                    </div> */}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-8 w-full">
                                        <ProductAddToCartButton product={currentFormData} />
                                    </div>
                                </div>
                            )
                        }

                        <div className="py-6">
                            <ul className="text-sm space-y-5 pb-1">
                                {
                                    (currentFormData.DictOneToOneFields['ProductCode']) && (
                                        <li>
                                            <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                                Product Code:
                                            </span>
                                            {currentFormData.DictOneToOneFields['ProductCode']}
                                        </li>)
                                }
                                {
                                    (currentFormData.DictOneToOneFields['ProductName']) && (
                                        <li>
                                            <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                                Product Name:
                                            </span>
                                            {currentFormData.DictOneToOneFields['ProductName']}
                                        </li>)
                                }
                                {
                                    (currentFormData.DictOneToOneFields['Brand']) && (
                                        <li>
                                            <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                                Brand:
                                            </span>
                                            {currentFormData.DictOneToOneFields['Brand']}
                                            {/* {getDDLFieldDisplayTextValue(dataModel.dictFieldEntityDataSource['30388'].items, currentFormData.DictOneToOneFields['Brand'])} */}
                                        </li>)
                                }
                                {
                                    (currentFormData.DictOneToOneFields['Width']) && (
                                        <li>
                                            <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                                {(currentFormData.DictCascadingFieldIdAndLabel['30390']) || 'Width'}:
                                            </span>
                                            {currentFormData.DictOneToOneFields['Width']}
                                        </li>)
                                }
                                {
                                    (currentFormData.DictOneToOneFields['Length']) && (
                                        <li>
                                            <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                                {(currentFormData.DictCascadingFieldIdAndLabel['30391']) || 'Length'}:
                                            </span>
                                            {currentFormData.DictOneToOneFields['Length']}
                                        </li>)
                                }

                                {/* <li ng-if="currentFormData.DictOneToOneFields['Diameter']">
                                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                        {{(currentFormData.DictCascadingFieldIdAndLabel['30392']) || 'Diameter'}}:
                                    </span>
                                    {currentFormData.DictOneToOneFields['Diameter']}
                                </li>
                                <li ng-if="currentFormData.DictOneToOneFields['PlateDiameter']">
                                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                        {{(currentFormData.DictCascadingFieldIdAndLabel['30393']) || 'PlateDiameter'}}:
                                    </span>
                                    {currentFormData.DictOneToOneFields['PlateDiameter']}
                                </li>
                                <li ng-if="currentFormData.DictOneToOneFields['Dimension']">
                                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                        {{(currentFormData.DictCascadingFieldIdAndLabel['30394']) || 'Dimension'}}:
                                    </span>
                                    {currentFormData.DictOneToOneFields['Dimension']}
                                </li>
                                <li ng-if="currentFormData.DictOneToOneFields['Space']">
                                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                        {{(currentFormData.DictCascadingFieldIdAndLabel['30395']) || 'Space'}}:
                                    </span>
                                    {currentFormData.DictOneToOneFields['Space']}
                                </li>
                                <li ng-if="currentFormData.DictOneToOneFields['Density']">
                                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                        {{(currentFormData.DictCascadingFieldIdAndLabel['30396']) || 'Density'}}:
                                    </span>
                                    {currentFormData.DictOneToOneFields['Density']}
                                </li>
                                <li ng-if="currentFormData.DictOneToOneFields['Color']">
                                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                        {{(currentFormData.DictCascadingFieldIdAndLabel['30397']) || 'Color'}}:
                                    </span>
                                    {currentFormData.DictOneToOneFields['Color']}
                                </li>
                                <li ng-if="currentFormData.DictOneToOneFields['CrossSectionArea']">
                                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                        {{(currentFormData.DictCascadingFieldIdAndLabel['30399']) || 'Cross Section Area'}}:
                                    </span>
                                    {currentFormData.DictOneToOneFields['CrossSectionArea']}
                                </li>
                                <li ng-if="currentFormData.DictOneToOneFields['Weight']">
                                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                        {{(currentFormData.DictCascadingFieldIdAndLabel['30398']) || 'Weight'}}:
                                    </span>
                                    {currentFormData.DictOneToOneFields['Weight']}
                                </li> */}

                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </Layout >
    );
}

export default ProductDetail

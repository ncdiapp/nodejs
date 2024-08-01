// src/app/ProductList/page.tsx
//'use client'


import { useAppContext } from "../../contexts/AppContext";
import Layout from "../../components/Layout";
import Image from "next/image";
import {
  RetrieveSearchResult,
  GetMassEntitiesLookupItem,
} from "../../services/mgtService";
import { getRegularImageUrlById, getCurrentDistributorId } from '../../lib/utils';
import Link from "next/link";


const ProductList = async ({
  searchParams,
}: {
  searchParams?: {
    distributorId?: number;
    catalog1?: number;
    catalog2?: number;
    catalog3?: number;
    catalog4?: number;
    productName?: number;
    brand?: number;
    department?: number;
    productMainType?: number;
  };
}) => {
  //const { distributorId, setDistributorId } = useAppContext().userSession;
  //setDistributorId('54321');

  const distributorId = Number(searchParams?.distributorId) || getCurrentDistributorId();
  const catalog1 = Number(searchParams?.catalog1) || null;
  const catalog2 = Number(searchParams?.catalog2) || null;
  const catalog3 = Number(searchParams?.catalog3) || null;
  const catalog4 = Number(searchParams?.catalog4) || null;
  const productName = searchParams?.productName || "";
  const brand = Number(searchParams?.brand) || null;
  const department = Number(searchParams?.department) || null;
  const productMainType = Number(searchParams?.productMainType) || null;

  const searchDto = {
    Criterias: [
      {
        SysTableFiledPath: "Catalog1",
        ControlType: 2,
        CriteriaType: 0,
        CriteriaSubType: null,
        RowIndex: 1,
        ColumnIndex: 1,
        Display: "Catalog1",
        CriteriaOperator: {
          OperatorType: 0,
          Display: "=",
          IsMultipleValuesAllowed: true,
          IsEditorRequired: true,
        },
        Values: catalog1 ? [catalog1] : [],
        ItemsSource: [],
        SupportedOperators: [],
        DependentCriteriaIds: null,
        SearcDCUID: 9743,
        IsReadOnly: false,
        IsVisible: true,
        OriginalDefaultValue: null,
        IsChangedAutoExecute: null,
        StartValueEntityField: "",
        EndValueEntityField: "",
        StartValueDataSetField: "",
        EmInternalCodeRegistration: null,
        EndValueDataSetField: "",
        IsAutoPopulate: false,
      },
      {
        SysTableFiledPath: "Catalog2",
        ControlType: 2,
        CriteriaType: 0,
        CriteriaSubType: null,
        RowIndex: 1,
        ColumnIndex: 2,
        Display: "Catalog2",
        CriteriaOperator: {
          OperatorType: 0,
          Display: "=",
          IsMultipleValuesAllowed: true,
          IsEditorRequired: true,
        },
        Values: catalog2 ? [catalog2] : [],
        ItemsSource: [],
        SupportedOperators: [],
        DependentCriteriaIds: null,
        SearcDCUID: 9744,
        IsReadOnly: false,
        IsVisible: true,
        OriginalDefaultValue: null,
        IsChangedAutoExecute: null,
        StartValueEntityField: "",
        EndValueEntityField: "",
        StartValueDataSetField: "",
        EmInternalCodeRegistration: null,
        EndValueDataSetField: "",
        IsAutoPopulate: false,
      },
      {
        SysTableFiledPath: "Catalog3",
        ControlType: 2,
        CriteriaType: 0,
        CriteriaSubType: null,
        RowIndex: 1,
        ColumnIndex: 3,
        Display: "Catalog3",
        CriteriaOperator: {
          OperatorType: 0,
          Display: "=",
          IsMultipleValuesAllowed: true,
          IsEditorRequired: true,
        },
        Values: catalog3 ? [catalog3] : [],
        ItemsSource: [],
        SupportedOperators: [],
        DependentCriteriaIds: null,
        SearcDCUID: 9745,
        IsReadOnly: false,
        IsVisible: true,
        OriginalDefaultValue: null,
        IsChangedAutoExecute: null,
        StartValueEntityField: "",
        EndValueEntityField: "",
        StartValueDataSetField: "",
        EmInternalCodeRegistration: null,
        EndValueDataSetField: "",
        IsAutoPopulate: false,
      },
      {
        SysTableFiledPath: "ProductType",
        ControlType: 2,
        CriteriaType: 0,
        CriteriaSubType: null,
        RowIndex: 2,
        ColumnIndex: 2,
        Display: "Catalog4",
        CriteriaOperator: {
          OperatorType: 0,
          Display: "=",
          IsMultipleValuesAllowed: true,
          IsEditorRequired: true,
        },
        Values: catalog4 ? [catalog4] : [],
        ItemsSource: [],
        SupportedOperators: [],
        DependentCriteriaIds: null,
        SearcDCUID: 9746,
        IsReadOnly: false,
        IsVisible: true,
        OriginalDefaultValue: null,
        IsChangedAutoExecute: null,
        StartValueEntityField: "",
        EndValueEntityField: "",
        StartValueDataSetField: "",
        EmInternalCodeRegistration: null,
        EndValueDataSetField: "",
        IsAutoPopulate: false,
      },
      {
        SysTableFiledPath: "DistributorId",
        IsAllowMultipleSelect: true,
        ControlType: 20,
        CriteriaType: 3,
        CriteriaSubType: null,
        RowIndex: 2,
        ColumnIndex: 1,
        Display: "DistributorId",
        CriteriaOperator: {
          OperatorType: 0,
          Display: "=",
          IsMultipleValuesAllowed: true,
          IsEditorRequired: true,
        },
        Values: distributorId ? [distributorId] : [],
        ItemsSource: [],
        SupportedOperators: [],
        DependentCriteriaIds: null,
        SearcDCUID: 9749,
        IsReadOnly: false,
        IsVisible: true,
        OriginalDefaultValue: null,
        IsChangedAutoExecute: null,
        StartValueEntityField: "",
        EndValueEntityField: "",
        StartValueDataSetField: "",
        EmInternalCodeRegistration: 9,
        EndValueDataSetField: "",
        IsAutoPopulate: false,
      },
      {
        SysTableFiledPath: "ProductName",
        IsAllowMultipleSelect: true,
        ControlType: 2,
        CriteriaType: 0,
        CriteriaSubType: null,
        RowIndex: 2,
        ColumnIndex: 3,
        Display: "Product Name",
        CriteriaOperator: {
          OperatorType: 7,
          Display: "Like",
          IsMultipleValuesAllowed: true,
          IsEditorRequired: true,
        },
        Values: productName ? [productName] : [],
        ItemsSource: [],
        SupportedOperators: [],
        DependentCriteriaIds: null,
        SearcDCUID: 9760,
        IsReadOnly: false,
        IsVisible: true,
        OriginalDefaultValue: null,
        IsChangedAutoExecute: null,
        StartValueEntityField: "",
        EndValueEntityField: "",
        StartValueDataSetField: "",
        EmInternalCodeRegistration: null,
        EndValueDataSetField: "",
        IsAutoPopulate: false,
      },
      {
        SysTableFiledPath: "Brand",
        IsAllowMultipleSelect: false,
        ControlType: 1,
        CriteriaType: 1,
        CriteriaSubType: null,
        RowIndex: 3,
        ColumnIndex: 1,
        Display: "Brand",
        CriteriaOperator: {
          OperatorType: 0,
          Display: "=",
          IsMultipleValuesAllowed: true,
          IsEditorRequired: true,
        },
        Values: brand ? [brand] : [],
        ItemsSource: [],
        SupportedOperators: [],
        DependentCriteriaIds: null,
        SearcDCUID: 9800,
        IsReadOnly: false,
        IsVisible: false,
        OriginalDefaultValue: null,
        IsChangedAutoExecute: null,
        StartValueEntityField: "",
        EndValueEntityField: "",
        StartValueDataSetField: "",
        EmInternalCodeRegistration: null,
        EndValueDataSetField: "",
        IsAutoPopulate: false,
      },
      {
        SysTableFiledPath: "Department",
        IsAllowMultipleSelect: false,
        ControlType: 1,
        CriteriaType: 1,
        CriteriaSubType: null,
        RowIndex: 3,
        ColumnIndex: 2,
        Display: "Department",
        CriteriaOperator: {
          OperatorType: 0,
          Display: "=",
          IsMultipleValuesAllowed: true,
          IsEditorRequired: true,
        },
        Values: department ? [department] : [],
        ItemsSource: [],
        SupportedOperators: [],
        DependentCriteriaIds: null,
        SearcDCUID: 9801,
        IsReadOnly: false,
        IsVisible: false,
        OriginalDefaultValue: null,
        IsChangedAutoExecute: null,
        StartValueEntityField: "",
        EndValueEntityField: "",
        StartValueDataSetField: "",
        EmInternalCodeRegistration: null,
        EndValueDataSetField: "",
        IsAutoPopulate: false,
      },
      {
        SysTableFiledPath: "Type",
        IsAllowMultipleSelect: false,
        ControlType: 1,
        CriteriaType: 1,
        CriteriaSubType: null,
        RowIndex: 3,
        ColumnIndex: 3,
        Display: "Main Type",
        CriteriaOperator: {
          OperatorType: 0,
          Display: "=",
          IsMultipleValuesAllowed: true,
          IsEditorRequired: true,
        },
        Values: productMainType ? [productMainType] : [],
        ItemsSource: [],
        SupportedOperators: [],
        DependentCriteriaIds: null,
        SearcDCUID: 9802,
        IsReadOnly: false,
        IsVisible: false,
        OriginalDefaultValue: null,
        IsChangedAutoExecute: null,
        StartValueEntityField: "",
        EndValueEntityField: "",
        StartValueDataSetField: "",
        EmInternalCodeRegistration: null,
        EndValueDataSetField: "",
        IsAutoPopulate: false,
      },
    ],
    CriteriasRowCount: 3,
    DefaultView: null,
    IsAutoExcute: true,
    IsChangedNeedTTriggerExecutionSearchCriteriaIds: [],
    IsChangedNeedToCascadingSearchCriteriaIds: [],
    CurrentCascadingTriggerSearchCriteriaId: null,
    IsHideAllToolsBar: null,
    IsShowSearchTitleLabel: true,
    CurrentMapPositionText: null,
    CurrentMapPositionLat: null,
    CurrentMapPositionLng: null,
    CurrentEsiteId: null,
    EsiteMenuCategoryId: null,
    DefaultAppProvideApiId: null,
    TopDataLimit: null,
    LinkToTransactions: [{ Id: 9787, Display: "SFT Product" }],
    LinkToCommands: [],
    Display: "SFT Catalog Tree Search - Card View",
    Id: 8598,
    BlqueryId: 8711,
    SearchType: 1,
    TechPackTypeId: 1,
    ReferenceViewDefinitionDto: {
      IsMassUpdate: false,
      Id: 8653,
      ViewType: 9,
      GroupByFieldList: [],
      Display: "SFT Catalog Tree Search - Card View",
      uiId: "pyyhjM6390",
    },
    DictFilterOptionLevelAndLookupList: null,
    DefaultMassUpdateView: null,
    LinkedSeachFormData: null,
  };
  const searchResult = await RetrieveSearchResult(searchDto);
  // const category1NodeList =
  //   categoryMenuData?.SearchResultRowList?.[0].Children || [];

  return (
    <Layout>
      <div className="w-full px-10 py-10">
        <div className="flex pt-8 pb-16 lg:pb-20">
          <div className="w-full">
            <div className="w-full">
              <div className="flex items-center mb-7" style={{ columnGap: '10px' }}>
                <h1 className="text-heading text-lg font-bold hidden lg:inline-flex pb-1">
                  Product List
                </h1>
                {searchResult?.SearchResultRowList && (
                  <div className="flex-shrink-0 text-body text-xs md:text-sm leading-4 ltr:pr-4 rtl:pl-4 ltr:md:mr-6 rtl:md:ml-6 ltr:pl-2 rtl:pr-2 hidden lg:block" style={{ paddingLeft: '20px' }}>
                    {searchResult?.SearchResultRowList.length || 0} items
                  </div>
                )}
                <div className="hidden lg:block" style={{ flex: '1 1 auto' }}></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                {searchResult?.SearchResultRowList && searchResult?.SearchResultRowList.map((aResultItem: any, index: number) => (
                  <Link key={index} href={`./ProductDetail/${aResultItem.DictViewColumnIDKeyValue['22599']}/${distributorId}`}>
                    <div key={index} className="h-[500px] group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white">
                      <div className="flex mb-3 md:mb-3.5 w-full h-[430px] relative">

                        <img
                          alt={`${aResultItem.DictViewColumnIDKeyValue['22601']} ${aResultItem.DictViewColumnIDKeyValue['22600']}`}
                          src={getRegularImageUrlById(aResultItem.DictViewColumnIDKeyValue['22616'])}
                          decoding="async"
                          className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
                          style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                        />
                        <noscript></noscript>

                        <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start"></div>
                      </div>
                      <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                        <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                          {aResultItem.DictViewColumnIDKeyValue['22601']}
                          {aResultItem.DictViewColumnIDKeyValue['22600']}
                        </h2>
                        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                          <span>{aResultItem.DictViewColumnIDKeyValue['22603']}</span>
                          <span>
                            {aResultItem.DictViewColumnIDKeyValue['22622'] ||
                              aResultItem.DictViewColumnIDKeyValue['22621'] ||
                              aResultItem.DictViewColumnIDKeyValue['22620'] ||
                              aResultItem.DictViewColumnIDKeyValue['22619'] ||
                              aResultItem.DictViewColumnIDKeyValue['22603']}
                          </span>
                        </p>
                        {aResultItem.DictViewColumnIDKeyValue['23223'] && (
                          <div className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5 text-heading">

                            {aResultItem.DictViewColumnIDKeyValue['23284'] === 'Yes' && (
                              <span className="inline-block false">
                                {aResultItem.DictViewColumnIDKeyValue['23223'] && (
                                  <>
                                    {/* {navigationScope.navDataModel.distributorCurrencyCode}  */}
                                    ${((aResultItem.DictViewColumnIDKeyValue['23223'] || 0) * 1.0).toFixed(2)}
                                  </>
                                )}
                                {aResultItem.DictViewColumnIDKeyValue['22615'] && (
                                  <span className="text-sm text-gray-400">/{aResultItem.DictViewColumnIDKeyValue['22615']}</span>
                                )}
                              </span>
                            )}

                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center pt-8 xl:pt-14">
                {!(searchResult?.SearchResultRowList && searchResult?.SearchResultRowList.length > 0) && (
                  <div>
                    <img
                      alt="No Product Found"
                      src="./noproductfound.jpg"
                      style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }}
                      className=""
                    />
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <div>Product List Content</div>
      <div>catalog1 : {catalog1}</div>
      <p>Current Distributor ID: {distributorId}</p>

      <pre>searchDto: {JSON.stringify(searchDto, null, 2)}</pre> 
      <pre>searchResultDto: {JSON.stringify(searchResult, null, 2)}</pre>*/}
    </Layout>
  );
};

export default ProductList;

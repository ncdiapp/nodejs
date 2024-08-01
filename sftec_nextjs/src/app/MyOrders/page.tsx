// src/app/ProductList/page.tsx
//'use client'

import { useAppContext } from "../../contexts/AppContext";
import Layout from "../../components/Layout";
import Image from "next/image";
import {
    RetrieveSearchResult,
    GetMassEntitiesLookupItem,
} from "../../services/mgtService";
import {
    getRegularImageUrlById,
    getCurrentDistributorId,
} from "../../lib/utils";
import Link from "next/link";

const MyOrders = async ({
    searchParams,
}: {
    searchParams?: {
        clientId?: number;
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

    // const distributorId =
    //     Number(searchParams?.distributorId) || getCurrentDistributorId();
    // const catalog1 = Number(searchParams?.catalog1) || null;
    // const catalog2 = Number(searchParams?.catalog2) || null;
    // const catalog3 = Number(searchParams?.catalog3) || null;
    // const catalog4 = Number(searchParams?.catalog4) || null;
    // const productName = searchParams?.productName || "";
    // const brand = Number(searchParams?.brand) || null;
    // const department = Number(searchParams?.department) || null;
    // const productMainType = Number(searchParams?.productMainType) || null;

    const searchDto = {
        Criterias: [
            {
                SysTableFiledPath: "OrderId",
                IsAllowMultipleSelect: true,
                ControlType: 2,
                CriteriaType: 0,
                CriteriaSubType: null,
                RowIndex: 1,
                ColumnIndex: 1,
                Display: "OrderId",
                CriteriaOperator: {
                    OperatorType: 0,
                    Display: "=",
                    IsMultipleValuesAllowed: true,
                    IsEditorRequired: true,
                },
                Values: [],
                ItemsSource: [],
                SupportedOperators: [],
                DependentCriteriaIds: null,
                SearcDCUID: 9747,
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
                SysTableFiledPath: "AppCreatedDate",
                IsAllowMultipleSelect: false,
                ControlType: 27,
                CriteriaType: 2,
                CriteriaSubType: null,
                RowIndex: 1,
                ColumnIndex: 2,
                Display: "Created Date",
                CriteriaOperator: {
                    OperatorType: 4,
                    Display: ">=",
                    IsMultipleValuesAllowed: true,
                    IsEditorRequired: true,
                },
                Values: [],
                ItemsSource: [],
                SupportedOperators: [],
                DependentCriteriaIds: null,
                SearcDCUID: 9748,
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
                SysTableFiledPath: "OrderStatus",
                IsAllowMultipleSelect: false,
                ControlType: 1,
                CriteriaType: 1,
                CriteriaSubType: null,
                RowIndex: 1,
                ColumnIndex: 3,
                Display: "Order Status",
                CriteriaOperator: {
                    OperatorType: 13,
                    Display: "<>",
                    IsMultipleValuesAllowed: true,
                    IsEditorRequired: true,
                },
                Values: [5],
                ItemsSource: [],
                SupportedOperators: [],
                DependentCriteriaIds: null,
                SearcDCUID: 9803,
                IsReadOnly: false,
                IsVisible: true,
                OriginalDefaultValue: "5",
                IsChangedAutoExecute: null,
                StartValueEntityField: "",
                EndValueEntityField: "",
                StartValueDataSetField: "",
                EmInternalCodeRegistration: null,
                EndValueDataSetField: "",
                IsAutoPopulate: false,
            },
        ],
        CriteriasRowCount: 1,
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
        LinkToTransactions: [{ Id: 9799, Display: "SFT Order" }],
        LinkToCommands: [],
        Display: "SFT Order",
        Id: 8599,
        BlqueryId: 8707,
        SearchType: 1,
        TechPackTypeId: 1,
        ReferenceViewDefinitionDto: {
            IsMassUpdate: false,
            Id: 8654,
            ViewType: 1,
            GroupByFieldList: [],
            Display: "SFT Order",
            uiId: "lInVgo6979",
        },
        DefaultMassUpdateView: null,
        LinkedSeachFormData: null,
    };
    const searchResult = await RetrieveSearchResult(searchDto);
    // const category1NodeList =
    //   categoryMenuData?.SearchResultRowList?.[0].Children || [];

    return (
        <Layout>
            <div className="w-full px-10 py-10">
                <h2 className="mb-6 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-8">Orders 1{process.env.CurrentUserSessionId}</h2>

                <div className="w-full flex flex-col relative top-0 opacity-1">
                    <div className="w-full space-y-4">

                        {searchResult?.SearchResultRowList &&
                            searchResult?.SearchResultRowList.map(
                                (resultRowDto: any, index: number) => (
                                    <ul key={index} className="flex px-4 pt-5 pb-6 space-y-5 text-sm font-semibold border border-gray-300 rounded-md text-heading">
                                        <li className="w-48 items-center justify-between">
                                            Order
                                            <div className="font-normal">
                                                <a className="underline hover:no-underline text-body">#{resultRowDto.DictViewColumnIDKeyValue['22638']}</a>
                                            </div>
                                        </li>
                                        <li className="w-48 items-center justify-between">
                                            Date
                                            <div className="font-normal">{resultRowDto.DictViewColumnIDKeyValue['22669']}</div>
                                        </li>
                                        <li className="w-48 items-center justify-between">
                                            Status
                                            <div className="font-normal">{resultRowDto.DictViewColumnIDKeyValue['22640']}</div>
                                        </li>
                                        <li className="w-48 items-center justify-between">
                                            Total
                                            <div className="font-normal"> ${resultRowDto.DictViewColumnIDKeyValue['22653']}</div>
                                        </li>
                                        <li className="w-48 items-center justify-between">

                                            <div className="font-normal">
                                                <a
                                                    className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600">view</a>
                                            </div>
                                        </li>
                                    </ul>
                                )
                            )
                        }



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

export default MyOrders;

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { debounce } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
//import { createDataService } from '@/services/dataservice';
import { callMgtGetApiByCode, callMgtPostApiByCode, ExecuteOneTransactionCommonadById, RetrieveMassAppEntitiesLookupItem } from '@/services/mgtdataservice';
//import Stripe from 'stripe';

/*** Begin Of Ecommerce Config Variables ***/

const _apiCode_GetShoppingCartData = process.env.NEXT_PUBLIC_APICODE_GET_SHOPPING_CART_DATA;
const _apiCode_SaveShoppingCartData = process.env.NEXT_PUBLIC_APICODE_POST_SHOPPING_CART;
const _apiCode_GetDistributors = process.env.NEXT_PUBLIC_APICODE_GET_DISTRIBUTORS;


const _apiCode_GetOrder = "";
const _apiCode_SaveOrder = "";

/*** End Of Ecommerce Config Variables ***/


const customerUserType = 3;
const supplierUserType = 4;


const getDefaultDistributorByIpCommandId = process.env.NEXT_PUBLIC_ORDER_APPTRANSACTION__SET_DISTRIBUTER_BY_IP_COMMANDID;
const orderTransactionId = process.env.NEXT_PUBLIC_ORDER_APPTRANSACTION__ID;
const shoppingCartCheckOutTransactionId = process.env.NEXT_PUBLIC_SHOPPING_CART_CHECKOUT_APPTRANSACTION__ID;
const shoppingCartCheckOutCommandId = process.env.NEXT_PUBLIC_SHOPPING_CART_CHECKOUT_APPTRANSACTION__CHECKOUT_COMMANDID;
const placeOrderAfterPaymentCommandId = process.env.NEXT_PUBLIC_ORDER_APPTRANSACTION__PLACE_ORDER_AFTER_PAYMENT_COMMANDID;

const eCommerceHelper = {

    useECommerceModel: function (appContext: any) {

        const router = useRouter();

     

        interface ShoppingCartObj {
            ShoppingCartId?: string;
            itemList: CartItem[];
            subTotal?: number;
            lastDraftOrderId?: number;
            distributorId?: any;

        }

        interface CartItem {
            skuNo: string;
            name: string;
            description: string;
            imgUrl: string;
            price: number;
            availableQty?: number;
            selectedQuantity: number;
            subTotal?: string;
            itemInfo: any;
            errorMessage: string;
            $$hashKey?: string;
        }

        const { error, setError, isBusy, setIsBusy } = appContext;
        const [shoppingCartId, setShoppingCartId] = useState<string | null>(null);
        const [shoppingCartObj, setShoppingCartObj] = useState<ShoppingCartObj>({ itemList: [] });
        const [distributorList, setDistributorList] = useState<Array<any>>([]);
        const [distributorListSorted, setDistributorListSorted] = useState<Array<any>>([]);
        const [currentDistributor, setCurrentDistributor] = useState<any>({});


        const [orderObj, setOrderObj] = useState<any>();



        const [isSendMessagePopupVisible, setIsSendMessagePopupVisible] = useState(false);
        const [isShoppingCartPopupVisible, setIsShoppingCartPopupVisible] = useState(false);
        const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
        const [isMobileCatelogMenuPopupVisible, setIsMobileCatelogMenuPopupVisible] = useState(false);

        const [mobileCategoryMenuData, setMobileCategoryMenuData] = useState<any>({});

        //let defaultDistributorId: any = null;
        //const [error, setError] = useState<any>({message: ""});




        const prepareNewShoppingCartObj = function () {
            let toReturn = {
                itemList: [],
                subTotal: 0.0,
            }

            return toReturn;
        }

        const updateOrderFormData = (newOrderFormData: any) => {
            setOrderObj((prevOrderObj: any) => ({
                ...prevOrderObj,
                orderFormData: newOrderFormData,
            }));
        };

        //const router = useRouter();

        const debouncedSaveShoppingCart = useCallback(
            debounce(() => {

                setShouldSave(true);
            }, 1000),
            []
        );


        const clearAllShoppingCartItems = function () {
            setShoppingCartObj((prevState: any) => {
                return { ...prevState, itemList: [], subTotal: 0.0 };
            });

            debouncedSaveShoppingCart();

        }

        const AddOneItemToShoppingCart = (cartItem: CartItem, qty: number) => {

            if (cartItem && cartItem.skuNo && qty > 0) {
                const productSku = cartItem.skuNo;
                const availableQty = cartItem.availableQty;

                setShoppingCartObj((prevState: any) => {
                    let isExistingCartItem = false;
                    const updatedItemList = prevState.itemList.map((item: any) => {
                        if (item.skuNo === productSku) {
                            isExistingCartItem = true;
                            return {
                                ...item,
                                name: cartItem.name,
                                description: cartItem.description,
                                imgUrl: cartItem.imgUrl,
                                selectedQuantity: item.selectedQuantity + qty,
                                price: cartItem.price,
                                itemInfo: null, //cartItem.itemInfo,
                                errorMessage: availableQty !== undefined && item.selectedQuantity + qty > availableQty ? 'Quantity exceeds available stock' : '',
                            };
                        }
                        return item;
                    });

                    if (!isExistingCartItem) {
                        const newItem = {
                            skuNo: productSku,
                            name: cartItem.name,
                            description: cartItem.description,
                            imgUrl: cartItem.imgUrl,
                            selectedQuantity: qty,
                            price: cartItem.price,
                            itemInfo: null, // cartItem.itemInfo,
                            errorMessage: availableQty !== undefined && qty > availableQty ? 'Quantity exceeds available stock' : '',
                        };
                        updatedItemList.push(newItem);
                    }

                    return { ...prevState, itemList: updatedItemList, subTotal: CalculateShoppingCartItemPrice(updatedItemList) };
                });


                debouncedSaveShoppingCart()
            }
        };


        const RemoveOneItemFromShoppingCart = (productSku: any) => {
            if (productSku) {

                setShoppingCartObj((prevState: any) => {
                    const updatedItemList = prevState.itemList.filter((item: any) => item.skuNo !== productSku);

                    return { ...prevState, itemList: updatedItemList, subTotal: CalculateShoppingCartItemPrice(updatedItemList) };
                });


                debouncedSaveShoppingCart()
            }
        };

        const ChangeShoppingCartItemQty = (productSku: any, qty: number) => {
            if (productSku && qty > 0) {
                setShoppingCartObj((prevState: any) => {
                    const updatedItemList = prevState.itemList.map((item: any) => {
                        if (item.skuNo === productSku) {
                            return {
                                ...item,
                                selectedQuantity: qty || item.selectedQuantity,
                            };
                        }
                        return item;
                    });

                    return { ...prevState, itemList: updatedItemList, subTotal: CalculateShoppingCartItemPrice(updatedItemList) };
                });

                debouncedSaveShoppingCart()
            }
        };

        const CalculateShoppingCartItemPrice = function (itemList: any) {
            let totalPrice = 0;

            if (itemList) {
                itemList.map((cartItemObj: any) => {
                    if (!cartItemObj.price || cartItemObj.price <= 0) {
                        cartItemObj.selectedQuantity = 0;
                    }

                    if (!cartItemObj.selectedQuantity || cartItemObj.selectedQuantity < 0) {
                        cartItemObj.selectedQuantity = 0;
                    }

                    cartItemObj.subTotal = 0;

                    if (cartItemObj.price && cartItemObj.selectedQuantity) {
                        cartItemObj.subTotal = (cartItemObj.price * cartItemObj.selectedQuantity).toFixed(2);
                        totalPrice += cartItemObj.price * cartItemObj.selectedQuantity;
                    }
                });
            }

            return totalPrice.toFixed(2);
        }

        const RecalculateShoppingCartSubTotalBeforeSave = function () {
            if (shoppingCartObj) {
                shoppingCartObj.subTotal = parseFloat(CalculateShoppingCartItemPrice(shoppingCartObj.itemList) ?? 0)
            }
        }

        const PrepareLoggedInClientShoppingCartData = function () {
            let guestShoppingCartObj = { ...shoppingCartObj };
            let orgGuestCartItemList = guestShoppingCartObj.itemList || [];
            guestShoppingCartObj.itemList = [];
            // save guest shopping cart
            SaveCurrentUserShoppingCartData(function (savedCartObj?: any, savedFormData?: any) {

                // get logged in user shopping cart
                GetCurrentUserShoppingCartData(function (newCartObj?: any, newFormData?: any) {
                    if (newCartObj) {
                        let needToUpdateShoppingCartObj: any = { ...newCartObj };

                        orgGuestCartItemList.map((guestCartItem: any) => {
                            if (guestCartItem.SkuNo && guestCartItem.SelectedQuantity && guestCartItem.SelectedQuantity > 0) {
                                let itemInLoggedInUserCart = false;
                                for (let i = 0; i < needToUpdateShoppingCartObj.itemList.length; i++) {
                                    let currentCartItem = needToUpdateShoppingCartObj.itemList[i];
                                    if (currentCartItem.SkuNo == guestCartItem.SkuNo) {
                                        currentCartItem.SelectedQuantity = guestCartItem.SelectedQuantity;
                                        itemInLoggedInUserCart = true;
                                        break;
                                    }
                                }

                                if (!itemInLoggedInUserCart) {
                                    needToUpdateShoppingCartObj.itemList.push(guestCartItem);
                                }
                            }
                        });




                        setShoppingCartObj(needToUpdateShoppingCartObj);
                    }
                });

            });
        }

        const InitEsiteShoppingCartUserKey = function () {

            let shoppingCartUserKey = null;

            let userSession = appContext?.userAccountModel?.userSession;

            if (userSession && userSession.isLoggedIn) {
                let partnerType = userSession.DomainId;
                let partnerId = userSession.BusinessUserId;

                if (partnerType == customerUserType && partnerId) {
                    shoppingCartUserKey = partnerId;
                }
            }

            if (!shoppingCartUserKey) {

                let _keyName = 'EsiteShoppingCartUserKey_' + process.env.NEXT_PUBLIC_SITE_ID;
                shoppingCartUserKey = localStorage.getItem(_keyName);

                if (!shoppingCartUserKey) {
                    shoppingCartUserKey = uuidv4();
                    localStorage.setItem(_keyName, shoppingCartUserKey);
                }
            }

            return shoppingCartUserKey;
        }

        const GetCurrentUserShoppingCartData = function (callbackFunc?: any) {
            if (!isBusy) {
                let shoppingCartUserKey = InitEsiteShoppingCartUserKey();

                if (_apiCode_GetShoppingCartData && shoppingCartUserKey) {
                    const fetchDataAsync = async () => {
                        setIsBusy(true);
                        try {

                            const apiResult = await callMgtGetApiByCode(_apiCode_GetShoppingCartData, { 'id': shoppingCartUserKey, }, { isUseCache: false });

                            if (apiResult.success) {
                                const shoppingCartData = apiResult.data || {};


                                if (shoppingCartData && shoppingCartData.ShoppingCartId) {
                                    setShoppingCartId(shoppingCartData.ShoppingCartId);
                                    let shoppingCartDetailJsonString = shoppingCartData.ShoppingCartDetail || '{}';

                                    let newShoppingCartObj = JSON.parse(shoppingCartDetailJsonString);

                                    // if (resetToDistributorId) {
                                    //     newShoppingCartObj.distributorId = resetToDistributorId;
                                    // }
                                    // // else {
                                    // //     if (!newShoppingCartObj.distributorId) {
                                    // //         newShoppingCartObj.distributorId = defaultDistributorId;
                                    // //     }
                                    // // }

                                    setShoppingCartObj(newShoppingCartObj);

                                    if (shoppingCartObj) {
                                        if (callbackFunc) {
                                            callbackFunc(newShoppingCartObj);
                                        }
                                    }
                                } else {
                                    setShoppingCartId(shoppingCartUserKey);

                                    const newCartObj: any = prepareNewShoppingCartObj();
                                    newCartObj.ShoppingCartId = shoppingCartUserKey;

                                    // if (resetToDistributorId) {
                                    //     newCartObj.distributorId = resetToDistributorId;
                                    // }
                                    // // else {
                                    // //     if (!newCartObj.distributorId) {
                                    // //         newCartObj.distributorId = defaultDistributorId;
                                    // //     }
                                    // // }

                                    setShoppingCartObj(newCartObj);

                                    if (shoppingCartObj) {
                                        if (callbackFunc) {
                                            callbackFunc(newCartObj);
                                        }
                                    }
                                }
                            }
                            else {

                            }

                        } catch (error: any) {
                            setError(error);
                        }

                        if (shoppingCartObj) {
                            setIsBusy(false);
                        }
                    };

                    fetchDataAsync();
                }
            }
        };


        const SaveCurrentUserShoppingCartData = function (callbackFunc?: any) {
            if (shoppingCartObj && shoppingCartId && !isBusy) {

                RecalculateShoppingCartSubTotalBeforeSave();

                shoppingCartObj.ShoppingCartId = shoppingCartId;
                const payloadData = {
                    ShoppingCartId: shoppingCartId,
                    ShoppingCartDetail: JSON.stringify(shoppingCartObj),
                };

                const saveDataAsync = async () => {
                    try {
                        const saveResult = await callMgtPostApiByCode(_apiCode_SaveShoppingCartData, payloadData, {});

                        if (saveResult) {
                            if (saveResult.success) {
                                GetCurrentUserShoppingCartData(callbackFunc);
                            }
                            else {
                                saveResult.error = saveResult.error || 'Failed To Save Current User Shopping Cart.';
                                setError({ message: saveResult.error });

                            }
                        }


                    } catch (error: any) {
                        setError(error);
                    } finally {

                    }
                };

                saveDataAsync();




            }

        }

        const [shouldSave, setShouldSave] = useState(false);

        useEffect(() => {
            if (!(distributorList?.length > 0)) {
                prepareDistributorList();
            }
        }, []);

        useEffect(() => {
            if (distributorList?.length > 0) {
                GetCurrentUserShoppingCartData();
            }
        }, [distributorList]);


        useEffect(() => {

            if (shoppingCartObj && shoppingCartObj.ShoppingCartId) {

                const currentUrl = new URL(window.location.href);
                let distributorIdFromUrl =currentUrl.searchParams.get('distributorid') || '';
                console.log('distributorIdFromUrl:' + distributorIdFromUrl);               

                if (distributorIdFromUrl?.indexOf("-") >= 0) {
                    distributorIdFromUrl = distributorIdFromUrl.substring(distributorIdFromUrl.lastIndexOf("-") + 1);
                }

                if (distributorIdFromUrl) {
                    changeDistributor(distributorIdFromUrl, false);

                    if (shoppingCartObj.distributorId != distributorIdFromUrl) {
                        setShoppingCartObj((prevState: any) => {
                            return { ...prevState, distributorId: distributorIdFromUrl };
                        });

                        debouncedSaveShoppingCart();
                    }
                }
                else {
                    if (!shoppingCartObj.distributorId) {
                        setDefaultDistributorByIp();
                    }
                    else {
                        if (!(currentDistributor?.AppBusinessPartnerID && currentDistributor.AppBusinessPartnerID == shoppingCartObj.distributorId)) {
                            changeDistributor(shoppingCartObj.distributorId, true);
                        }
                    }
                }

            }

            if (shouldSave) {

                SaveCurrentUserShoppingCartData();
                setShouldSave(false);
            }
        }, [shoppingCartObj, shouldSave]);



        useEffect(() => {
            if (currentDistributor && currentDistributor.Adress3) {
                resortDistributorList();
            }
        }, [currentDistributor]);


        const saveLastDraftOrderIdOnShoppingCart = function (lastDraftOrderId?: any) {

            shoppingCartObj.lastDraftOrderId = lastDraftOrderId || null;

            SaveCurrentUserShoppingCartData();
        }
        

        const generateOrderFromShoppingCart = function (callbackFunc?: any) {            

            const generateOrderAsync = async () => {
                setIsBusy(true);
                try {
                    const apiResult = await ExecuteOneTransactionCommonadById(shoppingCartCheckOutCommandId, shoppingCartCheckOutTransactionId, shoppingCartId);

                    if (apiResult.success && apiResult.data) {
                        const commandResult = apiResult.data;

                        if (commandResult && commandResult.Object && commandResult.Object.ChildCommandResultDtoList?.[0]?.TransactionRId) {
                            let orderId = commandResult.Object.ChildCommandResultDtoList?.[0]?.TransactionRId;
                            if (callbackFunc) {
                                callbackFunc(orderId);
                            }
                        }
                    }
                    else {

                    }

                } catch (error: any) {
                    setError(error);
                }

                if (shoppingCartObj) {
                    setIsBusy(false);
                }
            };

            generateOrderAsync();
        }



        const StartCheckout = function (callbackFunc: any) {
            if (shoppingCartCheckOutTransactionId && shoppingCartCheckOutCommandId && shoppingCartObj?.itemList?.length > 0) {
                generateOrderFromShoppingCart(function (orderId?: any) {
                    if (orderId) {
                        setIsShoppingCartPopupVisible(false);

                        router.push('/placeorder/' + orderId);

                        if (callbackFunc) {

                            callbackFunc(orderId);
                        }

                    }
                });

            }
        }

        const changeDistributor = function (distributorId: any, isNeedToRedirectUrl: boolean) {

            let distibutorObj = distributorList?.find((o:any) => o.AppBusinessPartnerID == distributorId);

            if (distibutorObj) {

                if (isNeedToRedirectUrl) {
                    const currentUrl = new URL(window.location.href);
                    currentUrl.searchParams.set('distributorid', distibutorObj.param_distributorCodeId);
                    window.location.href = currentUrl.toString();
                }
                else {
                    if (!(currentDistributor?.AppBusinessPartnerID && currentDistributor.AppBusinessPartnerID == distributorId)) {
                        setCurrentDistributor(distibutorObj);
                    }
                }
            }

        }




        const resortDistributorList = function () {
            if (distributorList && currentDistributor) {
                let sameCityDistributors: any[] = [];
                let sameProvinceDiffCityDistributors: any[] = [];
                let sameCountryDiffProvinceDistributors: any[] = [];
                let allOtherDistributors: any[] = [];

                distributorList.forEach((distributor) => {
                    const locationCode = distributor.Adress3;
                    const cityName = distributor.City;

                    if (locationCode) {
                        const countryCode = locationCode.substring(0, 1);

                        if (locationCode === currentDistributor.Adress3) {
                            if (cityName?.toLowerCase() === currentDistributor.City?.toLowerCase()) {
                                sameCityDistributors.push(distributor);
                            } else {
                                sameProvinceDiffCityDistributors.push(distributor);
                            }
                        } else if (countryCode === currentDistributor.Country) {
                            sameCountryDiffProvinceDistributors.push(distributor);
                        } else {
                            allOtherDistributors.push(distributor);
                        }
                    } else {
                        allOtherDistributors.push(distributor);
                    }
                });

                setDistributorListSorted([
                    ...sameCityDistributors,
                    ...sameProvinceDiffCityDistributors,
                    ...sameCountryDiffProvinceDistributors,
                    ...allOtherDistributors,
                ]);

            }

        }

        const setDefaultDistributorByIp = function () {
            const fetchDataAsync = async () => {
                try {
                    const apiResult = await ExecuteOneTransactionCommonadById(getDefaultDistributorByIpCommandId, orderTransactionId, '');

                    if (apiResult.success && apiResult.data) {
                        const commandResult = apiResult.data;


                        if (commandResult && commandResult.Object && commandResult.Object.FormData) {
                            let defaultDistributorId = commandResult.Object.FormData.DictOneToOneFields['DistributorId'] || process.env.NEXT_PUBLIC_DEFAULT_DISTRIBUTOR__ID;
                            let countryCodeByClientIP = commandResult.Object.FormData.DictOneToOneFields['ClientIPCountryCode'] || '';

                            if (defaultDistributorId) {

                                changeDistributor(defaultDistributorId, true);

                            }
                            else {

                            }
                        }
                        else {

                        }

                    }
                    else {

                    }
                } catch (error: any) {
                    setError(error);
                }
            };

            fetchDataAsync();
        }



        const prepareDistributorList = function () {
            if (_apiCode_GetDistributors) {
                const fetchDataAsync = async () => {
                    try {
                        const apiResult = await callMgtGetApiByCode(_apiCode_GetDistributors, {}, { isUseCache: true });

                        if (apiResult.success) {
                            const distributorsData = apiResult.data || [];
                            if (distributorsData) {

                                distributorsData.forEach((distributorDto: any) => {
                                    if (distributorDto.AppBusinessPartnerID) {
                                        distributorDto.param_distributorCodeId = `${(distributorDto.Code || '').replaceAll(' ', '-').replaceAll('#', '').replaceAll('/', '')}-${distributorDto.AppBusinessPartnerID}`;
                                    }
                                });

                                setDistributorList(distributorsData);
                            }

                        }
                        else {

                        }
                    } catch (error: any) {
                        setError(error);
                    }

                };

                fetchDataAsync();
            }

        }

        const completeOrderAfterPayment = function (orderId: any) {
            if (orderId && placeOrderAfterPaymentCommandId && orderTransactionId) {
                const fetchDataAsync = async () => {
                    try {
                        const apiResult = await ExecuteOneTransactionCommonadById(placeOrderAfterPaymentCommandId, orderTransactionId, orderId);

                        if (apiResult.success && apiResult.data) {
                            const commandResult = apiResult.data;


                            if (commandResult && commandResult.Object && commandResult.Object.FormData) {
                                clearAllShoppingCartItems();
                                router.push(`/ordersummary/${orderId}?distributorid=${currentDistributor?.param_distributorCodeId || ''}`);
                            }
                            else {

                            }

                        }
                        else {

                        }
                    } catch (error: any) {
                        setError(error);
                    }
                };

                fetchDataAsync();
            }

        }

        const buildMobileCatelogMenuData = function () {

            callMgtGetApiByCode(process.env.NEXT_PUBLIC_APICODE_GET_CATEGORY_TREE_MENU, {}, { isUseCache: true }).then(function (apiResult_Sft_CatalogTreeSearch) {
                callMgtGetApiByCode('Sft_TopCategoryList', {}, { isUseCache: true }).then(function (apiResult_Sft_TopCategoryList) {
                    RetrieveMassAppEntitiesLookupItem('SftBrand').then(function (apiResult_SftBrand) {

                        let allCategoryList = [];
                        let brandList = [];
                        let topCategoryList = [];

                        if (apiResult_Sft_CatalogTreeSearch.success) {

                            allCategoryList = apiResult_Sft_CatalogTreeSearch.data?.[0]?.Children || []

                            allCategoryList.forEach((node_lv1: any) => {
                                node_lv1.LinkUrl = `/productlist/${node_lv1.TreeNodeDisplay}-${node_lv1.TreeNodeId}`;

                                node_lv1?.Children.forEach((node_lv2: any) => {
                                    node_lv2.LinkUrl = `/productlist/${node_lv1.TreeNodeDisplay}-${node_lv1.TreeNodeId}/${node_lv2.TreeNodeDisplay}-${node_lv2.TreeNodeId}`;

                                    node_lv2?.Children.forEach((node_lv3: any) => {
                                        node_lv3.LinkUrl = `/productlist/${node_lv1.TreeNodeDisplay}-${node_lv1.TreeNodeId}/${node_lv2.TreeNodeDisplay}-${node_lv2.TreeNodeId}/${node_lv3.TreeNodeDisplay}-${node_lv3.TreeNodeId}`;
                                    });
                                });

                            });

                        }

                        if (apiResult_Sft_TopCategoryList.success) {
                            if (apiResult_Sft_TopCategoryList.data?.[0]?.Children) {
                                topCategoryList = apiResult_Sft_TopCategoryList.data?.[0]?.Children;

                                topCategoryList.forEach((node_lv1: any) => {
                                    node_lv1?.Children.forEach((node_lv2: any) => {
                                        if (node_lv2.TreeNodeId) {
                                            const [cat1Id, cat2Id] = node_lv2.TreeNodeId.split("|");

                                            if (cat1Id) {
                                                if (cat2Id) {
                                                    node_lv2.LinkUrl = `/productlist/${node_lv1.TreeNodeDisplay}-${cat1Id}/${node_lv2.TreeNodeDisplay}-${cat2Id}`;
                                                }
                                                else {
                                                    node_lv2.LinkUrl = `/productlist/${node_lv2.TreeNodeDisplay}-${cat1Id}`;
                                                }
                                            }

                                        }
                                    });
                                });
                            }
                        }

                        if (apiResult_SftBrand.success && apiResult_SftBrand.data) {

                            brandList = apiResult_SftBrand.data['SftBrand'] || [];

                            brandList.forEach((lookupItemDto: any) => {
                                lookupItemDto.TreeNodeDisplay = lookupItemDto.Display;
                                lookupItemDto.LinkUrl = `/productlistbybrand/${lookupItemDto.Display}-${lookupItemDto.Id}`;

                            });
                        }

                        setMobileCategoryMenuData({
                            allCategoryList: allCategoryList,
                            topCategoryList: topCategoryList,
                            brandList: brandList,
                        });
                    });
                });
            });
        }



        return {
            shoppingCartObj,
            setShoppingCartObj,
            orderObj,
            updateOrderFormData,
            AddOneItemToShoppingCart,
            RemoveOneItemFromShoppingCart,
            ChangeShoppingCartItemQty,
            CalculateShoppingCartItemPrice,
            GetCurrentUserShoppingCartData,
            SaveCurrentUserShoppingCartData,
            StartCheckout,
            isShoppingCartPopupVisible,
            setIsShoppingCartPopupVisible,
            //MakePaymentByStripe,
            isProcessingPayment,
            PrepareLoggedInClientShoppingCartData,
            distributorList,
            distributorListSorted,
            currentDistributor,
            changeDistributor,
            setDefaultDistributorByIp,
            completeOrderAfterPayment,
            isSendMessagePopupVisible,
            setIsSendMessagePopupVisible,
            isMobileCatelogMenuPopupVisible,
            setIsMobileCatelogMenuPopupVisible,
            buildMobileCatelogMenuData,
            mobileCategoryMenuData,
        };
    }
};

export default eCommerceHelper;
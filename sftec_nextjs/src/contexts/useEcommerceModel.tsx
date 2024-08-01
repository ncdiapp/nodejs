"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { debounce } from 'lodash';
import { useAppContext } from './AppContext';
import { useUserSession } from './useUserSession';
import { GetFormData, GetNewFormData, SaveTransactionData, ExcuteTransactionCommonad, CreateStripeCheckoutSession } from "../services/mgtService";
import { v4 as uuidv4 } from 'uuid';
import { getRegularImageUrlById, getCurrentDistributorId } from '../lib/utils';

const customerUserType = 3;
const supplierUserType = 4;

const distributorInfoTransactionId = 9789
const shoppingCartTransactionId = 9798;
const orderTransactionId = 9799;
const shoppingCartCheckOutCommandId = 215598;
const shoppingCartValidationCommandId = 215615;
const checkoutPreloadCalculationCommandId = 215612;
const saveDraftOrderBeforePaymentCommandId = 215616;
const placeOrderAfterPaymentCommandId = 215617;

// interface ShoppingCartObj {
//     itemList: any[];
//     subTotal?: number;
//     DistributorId?: number;
//     ClientIPCountryCode?: string,
//     [key: string]: any;
// }




export const useEcommerceModel = (userSessionModel: any) => {
    const { userSession } = userSessionModel;

    const [shoppingCartObj, setShoppingCartObj] = useState<any>({ itemList: [] });
    const [shoppingCartFormData, setShoppingCartFormData] = useState<any>();
    const [orderObj, setOrderObj] = useState<any>();
    const [currentDistributorData, setCurrentDistributorData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isShoppingCartPopupVisible, setIsShoppingCartPopupVisible] = useState(false);
    const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);

    const updateOrderFormData = (newOrderFormData: any) => {
        setOrderObj((prevOrderObj: any) => ({
            ...prevOrderObj,
            orderFormData: newOrderFormData,
        }));
    };

    const router = useRouter();

    const debouncedSaveShoppingCart = useCallback(
        debounce(() => {
            //SaveCurrentUserShoppingCartData();
            setShouldSave(true);
        }, 1000), // Adjust the delay as needed (1000ms = 1 second)
        []
    );

    const resortDistributorListByCurrentDistributorId = function () {

    }


    const loadCurrentDistributorData = function (distributorId?: any, callbackFunc?: any) {
        distributorId = distributorId || getCurrentDistributorId();
        if (distributorId) {


            const fetchData = async () => {
                try {
                    const formDataPayload = { "transactionId": distributorInfoTransactionId, "rootPrimaryKeyValue": distributorId };
                    const formData = await GetFormData(formDataPayload);
                    if (formData) {
                        formData.distributorCurrencyCode = formData.DictOneToOneFields['CurrencyCode'] || '';
                        setCurrentDistributorData(formData);

                        resortDistributorListByCurrentDistributorId();

                        if (callbackFunc) {
                            callbackFunc();
                        }
                    }
                } catch (error: any) {
                    setError(error.message);

                } finally {

                }
            };

            fetchData();
        }
    }

    const changeDistributor = function (distributorId?: any, clientIPCountryCode?: any, callbackFunc?: any) {
        // if (distributorId) {

        //     loadCurrentDistributorData(distributorId, function () {
        //         $scope.navDataModel.currentDistributorId = distributorId;
        //         angular.ClientUserDefinedParam.ClientUserDefinedParam1 = distributorId;
        //         closeAllModalPopup();

        //         if ($scope.eCommerceModel.shoppingCartObj && $scope.eCommerceModel.shoppingCartObj.DistributorId != distributorId) {

        //             $scope.eCommerceModel.shoppingCartObj.DistributorId = distributorId;
        //             $scope.eCommerceModel.shoppingCartObj.itemList = [];

        //             if (clientIPCountryCode) {
        //                 $scope.eCommerceModel.shoppingCartObj.ClientIPCountryCode = clientIPCountryCode;
        //             }

        //             $scope.eCommerceModel.saveCurrentUserShoppingCartData();
        //         }

        //         //prepareTopSaleProductSearchResultData();

        //         $scope.goToPageByRouteCode('transit');
        //         $timeout(function () {
        //             $scope.gotoProductTreeViewSearchPage('All Categories');
        //         })

        //         if (callbackFunc) {
        //             callbackFunc();

        //         }
        //     });
        // }
    }

    const clearAllShoppingCartItems = function () {
        setShoppingCartObj((prevState:any) => {
            return { ...prevState, itemList: [] };
        });

        debouncedSaveShoppingCart();

    }

    const AddOneItemToShoppingCart = (productFormData: any, qty: number) => {
        if (productFormData && productFormData.RootPrimaryKeyValue && productFormData.DictOneToOneFields['UnitPriceOnDistributorCurrency_30864'] > 0 && qty > 0) {
            const productSku = productFormData.RootPrimaryKeyValue;
            const availableQty = productFormData.DictOneToOneFields['AvailbleInventoryForSale_30660'] || 0;

            setShoppingCartObj((prevState:any) => {
                let isExistingCartItem = false;
                const updatedItemList = prevState.itemList.map((item:any) => {
                    if (item.SkuNo === productSku) {
                        isExistingCartItem = true;
                        return {
                            ...item,
                            SelectedQuantity: item.SelectedQuantity + qty,
                            Price: productFormData.DictOneToOneFields['UnitPriceOnDistributorCurrency_30864'],
                            DictOneToOneFields: productFormData.DictOneToOneFields,
                            ErrorMessage: item.SelectedQuantity + qty > availableQty ? 'Quantity exceeds available stock' : '',
                        };
                    }
                    return item;
                });

                if (!isExistingCartItem) {
                    const newItem = {
                        SkuNo: productSku,
                        SelectedQuantity: qty,
                        Price: productFormData.DictOneToOneFields['UnitPriceOnDistributorCurrency_30864'],
                        DictOneToOneFields: productFormData.DictOneToOneFields,
                        ErrorMessage: qty > availableQty ? 'Quantity exceeds available stock' : '',
                    };
                    updatedItemList.push(newItem);
                }

                return { ...prevState, itemList: updatedItemList };
            });

            //SaveCurrentUserShoppingCartData();
            //setShouldSave(true);
            debouncedSaveShoppingCart()
        }
    };
    //11

    const RemoveOneItemFromShoppingCart = (productSku: any) => {
        if (productSku) {

            setShoppingCartObj((prevState:any) => {
                const updatedItemList = prevState.itemList.filter((item:any) => item.SkuNo !== productSku);

                return { ...prevState, itemList: updatedItemList };
            });

            //SaveCurrentUserShoppingCartData();
            //setShouldSave(true);
            debouncedSaveShoppingCart()
        }
    };

    const ChangeShoppingCartItemQty = (productSku: any, qty: number) => {
        if (productSku && qty > 0) {
            setShoppingCartObj((prevState:any) => {
                const updatedItemList = prevState.itemList.map((item:any) => {
                    if (item.SkuNo === productSku) {
                        return {
                            ...item,
                            SelectedQuantity: qty || item.SelectedQuantity,
                        };
                    }
                    return item;
                });

                return { ...prevState, itemList: updatedItemList };
            });
            //SaveCurrentUserShoppingCartData();
            //setShouldSave(true);
            debouncedSaveShoppingCart()
        }
    };

    const CalculateShoppingCartItemPrice = function () {
        let totalPrice = 0;
        if (shoppingCartObj?.itemList) {
            shoppingCartObj?.itemList.map((cartItemObj: any) => {
                if (!cartItemObj.Price || cartItemObj.Price <= 0) {
                    cartItemObj.SelectedQuantity = 0;
                }

                if (!cartItemObj.SelectedQuantity || cartItemObj.SelectedQuantity < 0) {
                    cartItemObj.SelectedQuantity = 0;
                }

                cartItemObj.subTotal = 0;

                if (cartItemObj.Price && cartItemObj.SelectedQuantity) {
                    cartItemObj.subTotal = (cartItemObj.Price * cartItemObj.SelectedQuantity).toFixed(2);
                    totalPrice += cartItemObj.Price * cartItemObj.SelectedQuantity;
                }
            });
        }

        return totalPrice.toFixed(2);
    }

    const RecalculateShoppingCartSubTotal = function () {
        if (shoppingCartObj) {
            setShoppingCartObj((prevState:any) => {
                return { ...prevState, subTotal: parseFloat(CalculateShoppingCartItemPrice() ?? 0) };
            });
        }
    }

    const InitEsiteShoppingCartUserKey = function () {

        let shoppingCartUserKey = null;

        if (userSession.isLoggedIn) {
            let partnerType = userSession.DomainId;
            let partnerId = userSession.BusinessUserId;



            if (partnerType == customerUserType && partnerId) {
                shoppingCartUserKey = partnerId;
            }
        }

        if (!shoppingCartUserKey) {

            let _keyName = 'EsiteShoppingCartUserKey_' + process.env.SITE_ID;
            shoppingCartUserKey = localStorage.getItem(_keyName);

            if (!shoppingCartUserKey) {
                shoppingCartUserKey = uuidv4();
                localStorage.setItem(_keyName, shoppingCartUserKey);
            }
        }

        return shoppingCartUserKey;
    }

    const GetCurrentUserShoppingCartData = function (callbackFunc?: any) {


        let shoppingCartUserKey = InitEsiteShoppingCartUserKey();

        if (shoppingCartTransactionId && shoppingCartUserKey) {
            const fetchData = async () => {
                try {
                    const formData = await GetFormData({ "transactionId": shoppingCartTransactionId, "rootPrimaryKeyValue": shoppingCartUserKey });
                    if (formData && formData.DictOneToOneFields && formData.DictOneToOneFields['ShoppingCartId']) {
                        let shoppingCartDetailJsonString = formData.DictOneToOneFields['ShoppingCartDetail'] || '{}';
                        let newShoppingCartObj = JSON.parse(shoppingCartDetailJsonString);
                        newShoppingCartObj.orderTransactionId = orderTransactionId;

                        setShoppingCartObj(newShoppingCartObj);
                        setShoppingCartFormData(formData);

                        if (shoppingCartObj && callbackFunc) {
                            callbackFunc(newShoppingCartObj, formData);
                        }
                    } else {
                        const newFormData = await GetNewFormData(shoppingCartTransactionId);
                        newFormData.DictOneToOneFields['ShoppingCartId'] = shoppingCartUserKey;

                        const newCartObj: any = {
                            orderTransactionId: orderTransactionId,
                            itemList: [],
                            lastDraftOrderId: null,
                            subTotal: 0,
                        };

                        setShoppingCartObj(newCartObj);
                        setShoppingCartFormData(newFormData);

                        if (shoppingCartObj && callbackFunc) {
                            callbackFunc(newCartObj, newFormData);
                        }
                    }
                } catch (error: any) {
                    setError(error.message);
                    console.log("error:\n" + error.message);
                }
            };

            fetchData();
        }
    };


    const SaveCurrentUserShoppingCartData = function (callbackFunc?: any) {
        //console.log("SaveCurrentUserShoppingCartData");
        //useEffect(() => {
        if (shoppingCartObj && shoppingCartFormData) {
            RecalculateShoppingCartSubTotal();

            let saveData = shoppingCartFormData;

            saveData.DictOneToOneFields['ShoppingCartDetail'] = JSON.stringify(shoppingCartObj);

            saveData.IsDirty = true;

            const fetchData = async () => {
                try {
                    const saveResult = await SaveTransactionData(shoppingCartFormData);

                    if (saveResult) {
                        if (saveResult.Object) {
                            let jsonStringSaved = saveResult.Object.DictOneToOneFields['ShoppingCartDetail'] || '';


                            let newShoppingCartObj = JSON.parse(jsonStringSaved);

                            setShoppingCartObj(newShoppingCartObj);
                            setShoppingCartFormData(saveResult.Object);

                            if (shoppingCartObj && callbackFunc) {
                                callbackFunc(newShoppingCartObj, saveResult.Object);
                            }
                        }
                    }

                    console.log("SaveCurrentUserShoppingCartData:fetchData Completed");
                } catch (error: any) {
                    setError(error.message);
                } finally {

                }
            };
            console.log("SaveCurrentUserShoppingCartData:fetchData Started");
            fetchData();

        }
        //}, []);
    }

    const [shouldSave, setShouldSave] = useState(false);

    useEffect(() => {
        if (shouldSave) {
            console.log("useEffect shouldSave: " + shouldSave);
            SaveCurrentUserShoppingCartData();
            setShouldSave(false);
        }
    }, [shoppingCartObj, shouldSave]);


    const reloadShoppingCartItemsAvailableQty = function (callbackFunc: any) {
        const distributorId = getCurrentDistributorId();
        if (shoppingCartFormData && shoppingCartObj && distributorId) {

            const updatedDictOneToManyFields = { ...shoppingCartFormData.DictOneToManyFields };
            updatedDictOneToManyFields['11458'] = [];




            shoppingCartFormData.DictOneToManyFields['11458'] = [];

            shoppingCartObj.itemList.forEach((cartItem:any) => {
                if (cartItem.SkuNo && cartItem.SelectedQuantity && cartItem.SelectedQuantity > 0) {
                    const newRow: any = {
                        DictOneToOneFields: {
                            ShoppingCartItemId_30664: null,
                            ShoppingCartId_30665: null,
                            ProductId_30666: cartItem.SkuNo,
                            AvailableQty_30667: 0,
                            SelectedQty_30668: cartItem.SelectedQuantity,
                            DistributorId_30670: distributorId
                        }
                    };

                    updatedDictOneToManyFields['11458'].push(newRow);
                }
            });

            let updatedShoppingCartFormData = {
                ...shoppingCartFormData,
                DictOneToManyFields: updatedDictOneToManyFields,
                TransactionCommandId: shoppingCartValidationCommandId
            };
            setShoppingCartFormData(updatedShoppingCartFormData);

            const fetchData = async () => {
                try {
                    const saveResult = await ExcuteTransactionCommonad(updatedShoppingCartFormData);

                    if (saveResult) {
                        if (saveResult && saveResult.Object && saveResult.Object.FormData) {
                            let isValid = true;
                            saveResult.Object.FormData.DictOneToManyFields['11458'].map((aUnitRow: any) => {
                                shoppingCartObj.itemList.map((cartItem:any) => {
                                    if (aUnitRow.DictOneToOneFields['ProductId_30666'] && aUnitRow.DictOneToOneFields['ProductId_30666'] == cartItem.SkuNo) {
                                        cartItem.AvailableQty = aUnitRow.DictOneToOneFields['AvailableQty_30667'] || 0;

                                        if (cartItem.SelectedQuantity > cartItem.AvailableQty) {
                                            isValid = false;
                                        }
                                    }
                                });

                            });

                            if (callbackFunc) {
                                callbackFunc(isValid);
                            }
                        }
                    }

                } catch (error: any) {
                    setError(error.message);
                } finally {

                }
            };
            console.log("ExcuteTransactionCommonad: shoppingCartValidationCommand");
            fetchData();
        }
    }

    const saveLastDraftOrderIdOnShoppingCart = function (lastDraftOrderId?: any) {

        shoppingCartObj.lastDraftOrderId = lastDraftOrderId || null;

        SaveCurrentUserShoppingCartData();
    }

    const checkIfLastDraftOrderExist = function (callbackFunc: any) {

        if (callbackFunc && shoppingCartObj?.lastDraftOrderId) {

            let lastDraftOrderId = shoppingCartObj?.lastDraftOrderId || null;

            const fetchData = async () => {
                try {
                    const formDataPayload = { "transactionId": orderTransactionId, "rootPrimaryKeyValue": lastDraftOrderId };
                    const formData = await GetFormData(formDataPayload);

                    if (formData && formData.DictOneToOneFields
                        && formData.DictOneToOneFields['OrderId'] && formData.DictOneToOneFields['OrderId'] == lastDraftOrderId
                        && formData.DictOneToOneFields['OrderStatus'] == 5) {

                        callbackFunc(formData);
                    }
                    else {
                        callbackFunc(null);
                    }
                } catch (error: any) {
                    setError(error.message);
                    callbackFunc(null);
                } finally {

                }
            };

            fetchData();
        }
        else {
            callbackFunc(null);
        }
    }


    const initializeCheckoutOrderFormData = function (orderFormData: any, callbackFunc?: any) {

        if (userSession) {
            let partnerType = userSession.DomainId;
            let partnerId = userSession.BusinessUserId;

            if (partnerId && partnerType == customerUserType) {
                orderFormData.DictOneToOneFields['ClientId'] = partnerId;
            }
        }

        orderFormData.DictOneToOneFields['DistributorId'] = getCurrentDistributorId();
        orderFormData.DictOneToOneFields['DeliveryMethod'] = 1;

        let countryCode = shoppingCartObj.ClientIPCountryCode || '';

        if (countryCode && countryCode != 'US') {
            orderFormData.DictOneToOneFields['ClientIPCountryCode'] = countryCode;
        }

        let orderItems = orderFormData.DictOneToManyFields['11456'] = [] as Array<Record<string, any>>;


        shoppingCartObj.itemList.map((cartItem:any) => {
            if (cartItem.SkuNo && cartItem.SelectedQuantity && cartItem.SelectedQuantity > 0) {
                let newRow =
                {
                    "DictOneToOneFields": {
                        "OrderItemId": null,
                        "OrderId": null,
                        "ProductSkuId": "0",
                        "ProductId": "1016",
                        "ItemDescription": null,
                        "ItemPrice": "0",
                        "ItemQty": 1,
                        "ItemGrandTotal": "0",
                        "ProductImageId": null,
                        "DistributorId_30671": 9929,
                        "AvailableQty_30672": "0",
                        "IsValid_30673": null,
                        "DeliveryOption_30681": null,
                        "IsShippingAvailable_30682": null,
                        "ShippingPrice": "0",
                        "itemShippingTotal": "0"
                    },
                    "IsDirty": false,
                    "IsNew": true,
                    "DictOneToManyFields": {},
                    "ChildUnitId": null,
                    "UIId": "9287c211-af0b-c9ed-5cc9-3eb26a728489"
                };

                newRow.DictOneToOneFields['ProductId'] = cartItem.SkuNo;
                newRow.DictOneToOneFields['ItemQty'] = cartItem.SelectedQuantity;
                orderItems.push(newRow);
            }
        });

        let checkoutPreloadComamndPayload = { ...orderFormData, TransactionCommandId: checkoutPreloadCalculationCommandId };
        (async () => {
            const commandResult = await ExcuteTransactionCommonad(checkoutPreloadComamndPayload);

            if (commandResult?.Object?.FormData && callbackFunc) {
                callbackFunc(commandResult?.Object?.FormData);
            }
        })();

    }

    const initializeCheckoutOrderData = function (callbackFunc?: any) {

        checkIfLastDraftOrderExist(function (lastDraftOrderFormData?: any) {
            if (lastDraftOrderFormData) {
                initializeCheckoutOrderFormData(lastDraftOrderFormData, callbackFunc);
            }
            else {

                const fetchData = async () => {
                    try {
                        const newFormData = await GetNewFormData(orderTransactionId);
                        initializeCheckoutOrderFormData(newFormData, callbackFunc);
                    } catch (error: any) {
                        setError(error.message);

                    } finally {

                    }
                };

                fetchData();
            }
        });
    }

    const StartCheckout = function () {
        if (shoppingCartObj?.itemList?.length > 0) {
            reloadShoppingCartItemsAvailableQty(function (isValid?: boolean) {
                if (!isValid) {
                    //showAlert("Please resolve the issues in your cart before checking out.");
                    console.log("Please resolve the issues in your cart before checking out.");
                }
                else {

                    initializeCheckoutOrderData(function (orderFormData?: any) {
                        if (orderFormData) {
                            orderFormData.isHideValidation = true;


                            updateOrderFormData(orderFormData);

                            router.push('/PlaceOrder');
                            setIsShoppingCartPopupVisible(false);
                        }
                    });


                    // let tempObj = {};
                    // tempObj.directivOutercontrol = {
                    //     dataLoadedCallbackFunc: function (formScope) {
                    //         //alert('Form Loaded');
                    //         //formScope.dataModel.currentFormData.DictOneToOneFields

                    //         if ($scope.navDataModel.currentUserContext) {
                    //             let partnerType = $scope.navDataModel.currentUserContext.DomainId;
                    //             let partnerId = $scope.navDataModel.currentUserContext.BusinessUserId;

                    //             if (partnerId && partnerType == customerUserType) {
                    //                 formScope.dataModel.currentFormData.DictOneToOneFields['ClientId'] = partnerId;
                    //             }
                    //         }
                    //         formScope.dataModel.currentFormData.DictOneToOneFields['DistributorId'] = $scope.navDataModel.currentDistributorId;
                    //         formScope.dataModel.currentFormData.DictOneToOneFields['DeliveryMethod'] = 1;

                    //         let countryCode = $scope.eCommerceModel.shoppingCartObj.ClientIPCountryCode || '';

                    //         //Test:
                    //         //countryCode = 'CA';

                    //         if (countryCode && countryCode != 'US') {
                    //             formScope.dataModel.currentFormData.DictOneToOneFields['ClientIPCountryCode'] = countryCode;
                    //         }

                    //         formScope.deleteChildGridAllRows(11456);

                    //         let orderItems = formScope.dataModel.currentFormData.DictOneToManyFields['11456'] = [];
                    //         angular.forEach($scope.eCommerceModel.shoppingCartObj.itemList, function (cartItem) {
                    //             if (cartItem.SkuNo && cartItem.SelectedQuantity && cartItem.SelectedQuantity > 0) {

                    //                 formScope.addChildGridRow(11456, null, 1, function (newRow) {
                    //                     newRow.DictOneToOneFields['ProductId'] = cartItem.SkuNo;
                    //                     newRow.DictOneToOneFields['ItemQty'] = cartItem.SelectedQuantity;


                    //                 });

                    //             }
                    //         });

                    //         formScope.dataModel.currentFormData.DictOneToManyFields['11456'] = formScope.dataModel.dictChildTransactionUnitIdDataSource['11456'].items;

                    //         // if (formScope.dataModel.currentFormData.DictOneToOneFields['ClientId']) {
                    //         //     //load client address info by clientId
                    //         //     let checkoutPreloadCalculationCommandId = 215612;
                    //         //     formScope.commandActionButtonClicked(checkoutPreloadCalculationCommandId, 200, null, false);
                    //         // }

                    //         // load client info by id, calculate real total price before place order.
                    //         let checkoutPreloadCalculationCommandId = 215612;
                    //         formScope.commandActionButtonClicked(checkoutPreloadCalculationCommandId, 200, null, false);
                    //         formScope.dataModel.isHideValidation = true;
                    //     },
                    // };

                    // let tempKey = angular.randomId();
                    // angular.dictTemp[tempKey] = tempObj

                    // var param2Obj = {
                    //     tempKey: tempKey
                    // };


                    // checkIfLastDraftOrderExist(function (lastDraftOrderId) {
                    //     $scope.goToPageByRouteCode('transit');
                    //     $timeout(function () {
                    //         $scope.goToPageByRouteCode('PlaceOrder', orderTransactionId, lastDraftOrderId, JSON.stringify(param2Obj));

                    //         router.push('/PlaceOrder');
                    //     })

                    // });


                }

            });
        }
    }



    const MakePaymentByStripe = function () {
        if (orderObj && orderObj.orderFormData) {
            setIsProcessingPayment(true)
            let paymentSessionId = null;

            let presavePayloadData = {
                ...orderObj.orderFormData,
                TransactionCommandId: saveDraftOrderBeforePaymentCommandId
            };

            (async () => {
                try {
                    const presaveCommandResult = await ExcuteTransactionCommonad(presavePayloadData);
                    if (presaveCommandResult) {
                        if (!presaveCommandResult.IsSuccessful) {
                            setIsProcessingPayment(false);
                            if (presaveCommandResult?.Object?.FormData?.ValidationResultDto) {

                                let updatedFormData = { ...orderObj.orderFormData, validationResultDto: presaveCommandResult.Object.FormData.ValidationResultDto };
                                updatedFormData.isHideValidation = false;
                                updateOrderFormData(updatedFormData);
                            }
                        }
                        else if (presaveCommandResult?.Object?.FormData?.DictOneToOneFields) {
                            let orderFormData = presaveCommandResult?.Object?.FormData;
                            let orderId = orderFormData.DictOneToOneFields['OrderId'] || null;
                            let orderNumber = orderFormData.DictOneToOneFields['OrderNumber'] || '';

                            if (orderId) {
                                saveLastDraftOrderIdOnShoppingCart(orderId);

                                let successUrl = process.env.APP_SITE_BASE_URL + '/PaymentCompleted.html';
                                let cancelUrl = process.env.APP_SITE_BASE_URL + '/PaymentCanceled.html';

                                let checkOutDto = {
                                    Amount: orderFormData.DictOneToOneFields['TotalAfterTax'],
                                    CurrencyCode: (orderFormData.DictOneToOneFields['DistributorCurrency'] || '').toLowerCase(),
                                    ProductName: 'SFTec Order ' + orderId + ' ' + orderNumber,
                                    SuccessUrl: successUrl,
                                    CancelUrl: cancelUrl,
                                };

                                if (checkOutDto.Amount && checkOutDto.CurrencyCode) {

                                    (async () => {
                                        try {
                                            const createStripeCheckoutSessionResult = await CreateStripeCheckoutSession(checkOutDto);

                                            if (createStripeCheckoutSessionResult && createStripeCheckoutSessionResult.SessionId && createStripeCheckoutSessionResult.PaymentUrl) {

                                                const sessionId = createStripeCheckoutSessionResult.SessionId;
                                                paymentSessionId = sessionId;

                                                const handleMessage = (event: any) => {
                                                    //if (event.origin === window.location.origin) {
                                                    if (event.origin === process.env.APP_SITE_BASE_URL) {

                                                        if (event.data === 'PaymentCompleted') {
                                                            window.removeEventListener('message', handleMessage);

                                                            try {
                                                                //alert("payment completed callback, need to run placeOrderAfterPaymentCommandR");

                                                                let placeOrderCommandPayload = { ...orderFormData, TransactionCommandId: placeOrderAfterPaymentCommandId };

                                                                (async () => {
                                                                    const placeOrderCommandResult = await ExcuteTransactionCommonad(placeOrderCommandPayload);

                                                                    if (placeOrderCommandResult && placeOrderCommandResult.Object.FormData && placeOrderCommandResult.Object.FormData.DictOneToOneFields) {
                                                                        clearAllShoppingCartItems();

                                                                        updateOrderFormData(placeOrderCommandResult.Object.FormData);
                                                                        setIsProcessingPayment(false);
                                                                    }
                                                                })();
                                                            }
                                                            catch (e: any) {
                                                                setIsProcessingPayment(false);
                                                            }

                                                        } else if (event.data === 'PaymentCanceled') {
                                                            setIsProcessingPayment(false);
                                                            window.removeEventListener('message', handleMessage);
                                                        }
                                                        console.log(event.data);
                                                    }
                                                };

                                                const openPaymentWindow = () => {
                                                    const paymentWindow = window.open(createStripeCheckoutSessionResult.PaymentUrl, '_blank', 'width=800,height=1000');
                                                    //const paymentWindow = window.open('http://pc3:3000/PaymentCanceled.html', '_blank', 'width=800,height=1000');
                                                    if (!paymentWindow) {
                                                        setIsProcessingPayment(false);
                                                        alert('Please check if your browser blocked the popup window');
                                                    } else {
                                                        const intervalId = setInterval(() => {
                                                            if (paymentWindow.closed) {
                                                                setIsProcessingPayment(false);
                                                                clearInterval(intervalId);
                                                            }
                                                        });
                                                    }
                                                };


                                                window.addEventListener("message", handleMessage);
                                                openPaymentWindow();

                                            }
                                            else if (createStripeCheckoutSessionResult.ErrorMessage) {

                                                setIsProcessingPayment(false);


                                                alert(createStripeCheckoutSessionResult.ErrorMessage);
                                            }
                                        }
                                        catch (e: any) {
                                            setIsProcessingPayment(false);
                                            alert(e.message);
                                        }
                                    })();
                                }
                                else {
                                    setIsProcessingPayment(false);
                                }

                            }
                            else {
                                setIsProcessingPayment(false);
                            }
                        }
                        else {
                            setIsProcessingPayment(false);
                        }
                    }
                    else {
                        setIsProcessingPayment(false);
                    }
                }
                catch (e) {
                    setIsProcessingPayment(false);
                }

            })();

        }

    }

    return {
        shoppingCartObj,
        setShoppingCartObj,
        shoppingCartFormData,
        currentDistributorData,
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
        MakePaymentByStripe,
        isProcessingPayment,

    };
};


import React, { useState, useEffect, useCallback } from 'react';
import {
    ESiteLogin,
    Logout,
    ESiteUserRegistration,
    GetExternalUserContext,
    callMgtGetApiByCode,
    callMgtPostApiByCode,
    RetrieveCurrentAppSecurityUserExDto,
    ExecuteOneTransactionCommonadById
} from '@/services/mgtdataservice';

const userAccountHelper = {

    useUserAccountModel: function (appContext: any) {
        const customerUserType = 3;

        const { error, setError, isBusy, setIsBusy } = appContext;
        const [userSession, setUserSession] = useState<any>({});
        const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
        const [isAccountDetailPopupVisible, setIsAccountDetailPopupVisible] = useState(false);

        const [isNeedToExecuteLogoffCallback, setIsNeedToExecuteLogoffCallback] = useState(false);

        const [loginInfoDto, setLoginInfoDto] = useState<any>({ userName: '', password: '', isShowPasswordText: false });
        const [isWaitingForEmailActivation, setIsWaitingForEmailActivation] = useState(false);
        const [isNeedToExecuteLoginCallback, setIsNeedToExecuteLoginCallback] = useState(false);


        const login = () => {
            authenticationuser(loginInfoDto.userName, loginInfoDto.password);
        };


        const logoff = () => {
            if (userSession?.isLoggedIn && userSession?.SessionId) {
                Logout(userSession.SessionId).then(function () {

                    let userContextData: any = {};
                    userContextData.isLoggedIn = false;
                    setUserSession(userContextData);
                    setIsNeedToExecuteLogoffCallback(true);

                });
            }
        };


        const authenticationuser = function (userName: any, password: any) {
            loginInfoDto.loginError = null;
            if (userName && password) {
                ESiteLogin(userName, password).then(function (userContextData) {
                    prepareDataFromUserContext(userContextData.data, true);
                });
            }
        }

        const prepareDataFromUserContext = function (userContextData: any, needRedirect: any) {
            loginInfoDto.linkExistMasterDBUserToEStore_token = null;
            if (userContextData) {
                if (userContextData.IsLoginFailed) {

                    loginInfoDto.loginError = userContextData.LoginFailedErroMessage;

                    let failType_UserNotLinkedToEStoreUserDB = 7;
                    if (userContextData.LoginFailedType == failType_UserNotLinkedToEStoreUserDB && userContextData.TempToken) {
                        loginInfoDto.linkExistMasterDBUserToEStore_token = userContextData.TempToken;
                    }
                } else {
                    loginInfoDto.loginError = null;

                    setUserSession((prevState: any) => {
                        return {
                            ...userContextData,
                            isLoggedIn: true,
                            publicMenus: null,
                            loginDateTime: new Date(),
                            currentUserProfileData: {
                                FullName: prevState.DisplayName || '',
                                Timezone: prevState.DocumentId || '',
                                ProfilePicture: prevState.DocumentId || null,
                            }
                        };
                    });

                    setIsNeedToExecuteLoginCallback(true);
                }
            }
        }

        const loadAccountDetailData = function (callbackFunc?: any) {

            RetrieveCurrentAppSecurityUserExDto(userSession.SessionId).then(function (apiResult) {
                let currentUserId = apiResult?.data?.Id;
                if (currentUserId) {
                    callMgtGetApiByCode(process.env.NEXT_PUBLIC_APICODE_GET_USER_ACCOUNT_DETAIL, { id: currentUserId }, { isUseCache: false }).then(function (api_GetAccountDetail_Result) {
                        callbackFunc(api_GetAccountDetail_Result?.data);
                    });
                }
            });

        }

        const saveAccountDetailData = function (userData: any, callbackFunc?: any) {
            if (userData) {
                callMgtPostApiByCode(process.env.NEXT_PUBLIC_APICODE_POST_USER_ACCOUNT_DETAIL, userData, {}).then(function (api_SaveAccountDetail_Result) {
                    if (api_SaveAccountDetail_Result?.success) {
                        callbackFunc();
                    }
                });
            }
        }


        const signUp = () => {
            if (loginInfoDto.email && loginInfoDto.userName && loginInfoDto.password) {

                let userRegisterDto: any = {};
                userRegisterDto = {};
                userRegisterDto.RegisterFromEsiteId = process.env.NEXT_PUBLIC_SITE_ID;
                userRegisterDto.FirstName = '';
                userRegisterDto.LastName = '';
                userRegisterDto.UserName = loginInfoDto.userName;
                userRegisterDto.Email = loginInfoDto.email;
                userRegisterDto.LoginName = '';
                userRegisterDto.Password = loginInfoDto.password;
                userRegisterDto.Phone = '';
                userRegisterDto.IsActive = true;
                userRegisterDto.AppSecurityGroupMemberList = [];
                userRegisterDto.DictDeletedItemsIds = {};
                userRegisterDto.IsExternalUserSelfRegistration = true;
                userRegisterDto.DomainId = customerUserType;
                userRegisterDto.NewUserPartnerType = userRegisterDto.DomainId;
                userRegisterDto.IsNeedActivePartnerUserByEmail = true;
                userRegisterDto.PostEmailActivationRedirectUrl = window.location.origin;

                if (!isBusy) {

                    setIsBusy(true);
                    ESiteUserRegistration(userRegisterDto).then(function (resultData) {
                        setIsBusy(false);
                        let data = resultData?.data;
                        if (data) {
                            if (data.Object && data.Object.IsWaitingForEmailActivation) {
                                setIsWaitingForEmailActivation(true);

                            } else if (data.ValidationResult && data.ValidationResult.LocalizedResult) {
                                alert(data.ValidationResult.LocalizedResult);
                            }


                        }
                    });
                }
            }



        };

        return {
            userSession,
            setUserSession,
            isLoginPopupVisible,
            setIsLoginPopupVisible,
            isAccountDetailPopupVisible,
            setIsAccountDetailPopupVisible,
            isNeedToExecuteLogoffCallback,
            setIsNeedToExecuteLogoffCallback,
            loginInfoDto,
            setLoginInfoDto,
            isWaitingForEmailActivation,
            setIsWaitingForEmailActivation,
            isNeedToExecuteLoginCallback,
            setIsNeedToExecuteLoginCallback,
            loadAccountDetailData,
            saveAccountDetailData,
            login,
            signUp,
            logoff,
        };
    }

}

export default userAccountHelper;
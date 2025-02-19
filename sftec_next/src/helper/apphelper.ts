const appHelper = {

    initializePageDataModel: function (params: any, searchParams: any, headersList: any) {
        const dataModel: { [key: string]: any } = {
            pageName: 'Product Detail',
            params: params,
            searchParams: searchParams,
        };

        //// Example:
        //  input:      params.productkey = "Fiber-Bar-7001"
        //  output:     params.productkey_id = "7001", 
        //              params.productkey_display = "Fiber-Bar",
        if (params) {
            Object.keys(params).forEach((property) => {
                const value = params[property];
                params[`${property}_id`] = value;
                params[`${property}_display`] = value;

                if (value?.indexOf("-") >= 0) {
                    params[`${property}_id`] = value.substring(value.lastIndexOf("-") + 1);
                    params[`${property}_display`] = decodeURIComponent(value.substring(0, value.lastIndexOf("-")));
                }                

                dataModel.pageName += ' / ' + params[`${property}_display`]
            });
        }

        //// Example:
        //  input:      searchParams.productkey = "Fiber-Bar-7001"
        //  output:     searchParams.productkey_id = "7001", 
        //              searchParams.productkey_display = "Fiber-Bar",
        if (searchParams) {
            Object.keys(searchParams).forEach((property) => {
                const value = searchParams[property];
                searchParams[`${property}_id`] = value;
                searchParams[`${property}_display`] = value;

                if (value?.indexOf("-") >= 0) {
                    searchParams[`${property}_id`] = value.substring(value.lastIndexOf("-") + 1);
                    searchParams[`${property}_display`] = decodeURIComponent(value.substring(0, value.lastIndexOf("-")));
                }
            });
        }

        if (headersList) {
            dataModel.pageReferer =  headersList.get('referer') || '';
        }

        return dataModel;
    },

    preparePostApiPayloadData: function (payloadData: any, inputNamePrefix: string, formData: any) {
        for (const key of formData.keys()) {
            if (key.startsWith(inputNamePrefix)) {

                let path = key.substring(inputNamePrefix.length);
                if (path) {
                    const keys = path.split('.');
                    let current = payloadData;

                    for (let i = 0; i < keys.length - 1; i++) {
                        if (!current[keys[i]]) {
                            current[keys[i]] = {};
                        }
                        current = current[keys[i]];
                    }

                    current[keys[keys.length - 1]] = formData.get(key);
                }
            }
        }
    },

    getRegularImageUrlById: function (id: number) {
        return '';
    },

    convertToSubcurrency: function (amount: number, factor = 100) {
        return Math.round(amount * factor);
    },

};

export default appHelper;
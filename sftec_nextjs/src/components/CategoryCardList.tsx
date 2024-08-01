import Image from "next/image";
import { RetrieveSearchResult, GetMassEntitiesLookupItem } from "../services/mgtService";
import { getRegularImageUrlById } from '../lib/utils';
import Link from "next/link";

// interface LookupItemDto {
//   Id: number;
//   Display: string | null;
// }


const CategoryCardList = async () => {
  const categoryMenuTreeSearchDto = {
    Criterias: [],
    DefaultView: null,
    IsAutoExcute: true,
    IsChangedNeedTTriggerExecutionSearchCriteriaIds: [],
    IsChangedNeedToCascadingSearchCriteriaIds: [],
    CurrentCascadingTriggerSearchCriteriaId: null,
    IsHideAllToolsBar: null,
    IsShowSearchTitleLabel: false,
    CurrentMapPositionText: null,
    CurrentMapPositionLat: null,
    CurrentMapPositionLng: null,
    CurrentEsiteId: null,
    EsiteMenuCategoryId: null,
    DefaultAppProvideApiId: null,
    TopDataLimit: null,
    LinkToTransactions: [],
    LinkToCommands: [],
    Display: "SFT Catalog Tree Search",
    Id: 8597,
    BlqueryId: 8703,
    SearchType: 7,
    TechPackTypeId: 7,
    ReferenceViewDefinitionDto: {
      IsMassUpdate: false,
      Id: 8652,
      ViewType: 8,
      GroupByFieldList: [],
      Display: "SFT Catalog Tree Search",
      uiId: "yYiPrC1470",
    },
    DefaultMassUpdateView: null,
    LinkedSeachFormData: null,
  };
  const categoryMenuData = await RetrieveSearchResult(categoryMenuTreeSearchDto);
  const category1NodeList = categoryMenuData?.SearchResultRowList?.[0].Children || [];

  const massEntityData = await GetMassEntitiesLookupItem('SftCategory1IdImageId');
  const dictCategory1IdAndImageId: { [key: number]: string | null } = {};

  massEntityData.SftCategory1IdImageId.forEach((lookupItemDto: { Id: number; Display: string | null }) => {
    dictCategory1IdAndImageId[lookupItemDto.Id] = lookupItemDto.Display || null;
  });

  // const getRegularImageUrlById = function (fileId: any, isGetOriginal?: any, uiId?: any) {
  //   let sessionId = process.env.ANONYMOUS_USER_SESSION_ID;
  //   let url = process.env.MGT_BASE_URL + '/GetLatestFile.aspx?FileId=' + fileId + '&CurrentUserSessionId=' + sessionId;

  //   if (isGetOriginal) {
  //     url = process.env.MGT_BASE_URL + '/GetOriginal.aspx?FileId=' + fileId + '&CurrentUserSessionId=' + sessionId;
  //   }

  //   return url;
  // }

  const getImageUrlByCategory1Id = (category1Id: any) => {
    if (category1Id && dictCategory1IdAndImageId) {
      let fileId = dictCategory1IdAndImageId[category1Id];
      if (fileId) {
        return getRegularImageUrlById(fileId);
      }
    }
    return null;
  }

  return (
    <div className="w-full px-10 py-10">
      {category1NodeList.length > 0 && (
        <div className="items-center mb-7">
          <div className="w-full" style={{ height: "500px" }}>
            <div className="flex h-full" style={{ columnGap: "10px" }}>
              <div className="flex-auto h-full" style={{ width: "65%" }}>
                <Link href={`/ProductList?catalog1=${category1NodeList[0].BaseAppCatalogueTreeDto.Id}`}
                  className="w-full h-full">
                  <div
                    className="flex w-full h-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white"
                    title={category1NodeList[0].BaseAppCatalogueTreeDto.Name}
                  >

                    <div className="w-full h-full">
                      <div
                        className="w-full h-full bg-no-repeat bg-center bg-cover"
                        style={{
                          backgroundImage: `url(${getImageUrlByCategory1Id(
                            category1NodeList[0].BaseAppCatalogueTreeDto.Id
                          )})`,
                        }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40"></div>
                    <div
                      className="text-white absolute bottom-2 left-2 text-lg font-semibold"
                      style={{ bottom: "10px", left: "20px" }}
                    >
                      {category1NodeList[0].BaseAppCatalogueTreeDto.Name}
                    </div>

                  </div>
                </Link>
              </div>
              {category1NodeList.length >= 2 && (
                <div
                  className="flex h-full"
                  style={{
                    width: "35%",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  <div
                    className="flex-auto"
                    style={{ width: "100%", height: "50%" }}
                  >
                    <Link href={`/ProductList?catalog1=${category1NodeList[1].BaseAppCatalogueTreeDto.Id}`}
                      className="w-full h-full">
                      <div
                        className="flex w-full h-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white"
                        title={category1NodeList[1].BaseAppCatalogueTreeDto.Name}
                      >
                        <div className="w-full h-full">
                          <div
                            className="w-full h-full bg-no-repeat bg-center bg-cover"
                            style={{
                              backgroundImage: `url(${getImageUrlByCategory1Id(
                                category1NodeList[1].BaseAppCatalogueTreeDto.Id
                              )})`,
                            }}
                          ></div>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40"></div>
                        <div
                          className="text-white absolute bottom-2 left-2 text-lg font-semibold"
                          style={{ bottom: "10px", left: "20px" }}
                        >
                          {category1NodeList[1].BaseAppCatalogueTreeDto.Name}
                        </div>
                      </div>
                    </Link>
                  </div>
                  {category1NodeList.length >= 3 && (
                    <div
                      className="flex"
                      style={{ width: "100%", height: "50%" }}
                    >
                      <div
                        className="flex-auto"
                        style={{ width: "50%", height: "100%" }}
                      >
                        <Link href={`/ProductList?catalog1=${category1NodeList[2].BaseAppCatalogueTreeDto.Id}`}
                          className="w-full h-full">
                          <div
                            className="flex w-full h-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white"
                            title={
                              category1NodeList[2].BaseAppCatalogueTreeDto.Name
                            }
                          >
                            <div className="w-full h-full">
                              <div
                                className="w-full h-full bg-no-repeat bg-center bg-cover"
                                style={{
                                  backgroundImage: `url(${getImageUrlByCategory1Id(
                                    category1NodeList[2].BaseAppCatalogueTreeDto
                                      .Id
                                  )})`,
                                }}
                              ></div>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40"></div>
                            <div
                              className="text-white absolute bottom-2 left-2 text-lg font-semibold"
                              style={{ bottom: "10px", left: "20px" }}
                            >
                              {category1NodeList[2].BaseAppCatalogueTreeDto.Name}
                            </div>
                          </div>
                        </Link>
                      </div>
                      {category1NodeList.length >= 4 && (
                        <div
                          className=""
                          style={{ width: "50%", height: "100%" }}
                        >
                          <Link href={`/ProductList?catalog1=${category1NodeList[3].BaseAppCatalogueTreeDto.Id}`}
                            className="w-full h-full">
                            <div
                              className="flex w-full h-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white"
                              title={
                                category1NodeList[3].BaseAppCatalogueTreeDto.Name
                              }
                            >
                              <div className="w-full h-full">
                                <div
                                  className="w-full h-full bg-no-repeat bg-center bg-cover"
                                  style={{
                                    backgroundImage: `url(${getImageUrlByCategory1Id(
                                      category1NodeList[3].BaseAppCatalogueTreeDto
                                        .Id
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40"></div>
                              <div
                                className="text-white absolute bottom-2 left-2 text-lg font-semibold"
                                style={{ bottom: "10px", left: "20px" }}
                              >
                                {
                                  category1NodeList[3].BaseAppCatalogueTreeDto
                                    .Name
                                }
                              </div>
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {category1NodeList.length >= 5 && (
            <div className="w-full">
              <div className="w-full py-7">
                <h1 className="text-heading text-lg font-bold hidden lg:inline-flex pb-1">
                  <span>Browse Our Catalog</span>
                </h1>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                {category1NodeList.map((category1Node: any, index: number) =>
                  index >= 4 ? (
                    <div
                      key={category1Node.BaseAppCatalogueTreeDto.Id}
                      className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white"
                      role="button"
                      title={category1Node.BaseAppCatalogueTreeDto.Name}
                    >
                      <Link href={`/ProductList?catalog1=${category1Node.BaseAppCatalogueTreeDto.Id}`}
                        className="w-full h-full">
                        <div className="flex mb-3 md:mb-3.5">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative",
                              maxWidth: "100%",
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: "100%",
                              }}
                            >
                              <img
                                alt=""
                                aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271024%27%20height=%271024%27/%3e"
                                style={{
                                  display: "block",
                                  maxWidth: "100%",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                }}
                              />
                            </span>
                            <img
                              alt={category1Node.BaseAppCatalogueTreeDto.Name}
                              src={getImageUrlByCategory1Id(
                                category1Node.BaseAppCatalogueTreeDto.Id
                              ) || ""}
                              loading="lazy"
                              decoding="async"
                              data-nimg="intrinsic"
                              style={{
                                position: "absolute",
                                inset: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                              }}
                              sizes="100vw"
                            />
                          </span>
                        </div>
                        <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0">
                          <h2 className="truncate text-heading font-semibold text-sm sm:text-base mb-1">
                            {category1Node.BaseAppCatalogueTreeDto.Name}
                          </h2>
                        </div>
                      </Link>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      )
      }
    </div >
  );
};

export default CategoryCardList;

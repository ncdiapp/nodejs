// src/components/NavHeaderMenu.tsx (Server-side component)
import React from "react";
import Link from "next/link";
import { RetrieveSearchResult } from "../services/mgtService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavHeaderMenu = async () => {
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
  const categoryMenuData = await RetrieveSearchResult(
    categoryMenuTreeSearchDto
  );
  const menuData = categoryMenuData?.SearchResultRowList?.[0].Children || [];


  const renderSubMenu = (nodes: any[], parentNodes?: any[]) => {

    return (


      <div className="dropdown-menu p-2 shadow-md bg-gray-200">

        {
          nodes.map((node, index) => {
            const nodeList = [...parentNodes ?? [], node];
            let urlSearchParam = "";

            nodeList.map((nodeDto, nodeIndex) => {
              const columnId_NodeId = nodeDto?.BaseAppCatalogueTreeDto?.columnId_NodeId || null;
              const nodeValue = nodeDto?.BaseAppCatalogueTreeDto?.Id || "";
              if (columnId_NodeId && nodeValue) {
                urlSearchParam += urlSearchParam ? "&" : "?";
                if (columnId_NodeId == 22591) {
                  urlSearchParam += "catalog1=" + nodeValue;
                }
                else if (columnId_NodeId == 22593) {
                  urlSearchParam += "catalog2=" + nodeValue;
                }
                else if (columnId_NodeId == 22595) {
                  urlSearchParam += "catalog3=" + nodeValue;
                }
                else if (columnId_NodeId == 22597) {
                  urlSearchParam += "catalog4=" + nodeValue;
                }

              }

            });



            return (

              <div className="dropdown-submenu" key={index}>
                <Link
                  href={"/ProductList" + urlSearchParam}
                  className="flex whitespace-nowrap text-sm py-3 text-heading font-regular px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300 w-auto"
                  style={{ width: "auto", whiteSpace: "nowrap" }}
                  data-node={JSON.stringify(node)}
                >
                  {node.BaseAppCatalogueTreeDto.Name}
                  {node.Children.length > 0 && (
                    <FontAwesomeIcon icon="angle-right" className="opacity-30  mt-1" height="0.9em" width="1em" />
                  )}
                </Link>
                {node.Children.length > 0 && renderSubMenu(node.Children, nodeList)}
              </div>
            )
          })
        }
      </div>
    );
  };

  return <>
    <div className="headerMenu flex w-full relative uppercase 2xl:gap-x-3 h-15 pt-0.5" style={{ backgroundColor: '#54AC5B', paddingLeft: '100px', fontSize: '17px', letterSpacing: '1px', userSelect: 'none' }}>
      <div className="menuItem group cursor-pointer py-2">
        <Link href="/" className="relative inline-flex items-center px-3 py-2 xl:px-4 text-white">
          <i className="fa fa-bars" style={{ fontSize: '24px', paddingRight: '15px' }}></i>
          All Categories
          <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end" style={{ marginLeft: '5px' }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="transition duration-300 ease-in-out transform group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </span>
        </Link>
        <div className="absolute bg-gray-200 megaMenu" style={{ width: 'auto' }}>
          <div className="p-4">
            <div className="dropdown">
              <div className="dropdown-menu">
                {/* Dropdown content here */}
                {renderSubMenu(menuData)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other menu items */}
      <div className="menuItem group cursor-pointer py-2">
        <a className="relative inline-flex items-center px-3 py-2 xl:px-4 text-white">
          Brand
          <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end" style={{ marginLeft: '5px' }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="transition duration-300 ease-in-out transform group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </span>
        </a>
        <div className="absolute bg-gray-200 megaMenu shadow-header" style={{ width: 'auto' }}>
          <div>
            <ul>
              {/* Brand filter items */}
              To Do: Brand filter items
            </ul>
          </div>
        </div>
      </div>
      <div className="menuItem group cursor-pointer py-2 hidden 2xl:block" style={{ marginRight: '30px' }}>
        <a className="relative inline-flex items-center px-3 py-2 xl:px-4 text-white">
          Contact Us
        </a>
      </div>
    </div>

  </>;
};

export default NavHeaderMenu;

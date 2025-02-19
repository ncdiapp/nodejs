"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from '@/contexts/AppContextProvider';

const ProductSearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const appContext = useAppContext();
  const eCommerceModel = appContext.eCommerceModel;
  const {currentDistributor} = eCommerceModel;
  
  return (
    <div className="flex text-heading text-sm px-4 font-semibold border border-gray-300 rounded-md items-center transition duration-200 ease-in-out focus:outline-none" style={{ flex: '1 1 auto', paddingRight: '40px', position: 'relative', maxWidth: '500px' }} >
      <input
        type="text"
        id="InputProductNameSearch"
        className="pl-2.5 p-2 w-full"
        style={{ outline: "none" }}
        placeholder="Search Products"
        value={searchQuery}
        onChange={(e:any) => setSearchQuery(e.target.value)}
      />
      <Link
        href={searchQuery.trim() ? `/productsearchbyname/${encodeURIComponent(searchQuery)}?distributorid=${currentDistributor?.param_distributorCodeId || ''}` : "#"}
        className="cursor-pointer bg-gray-100 hover:bg-gray-200 h-full w-12 absolute inline-flex items-center px-4"
        style={{ top: "0", right: "0", bottom: "0" }}
        aria-disabled={!searchQuery.trim()}
      >
        <FontAwesomeIcon icon={faSearch} className="w-5 text-gray-400" />
      </Link>
    </div>
  );
};

export default ProductSearchBox;
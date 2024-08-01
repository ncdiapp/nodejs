// src/components/NavHeader.tsx
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import NavHeaderMenu from "./NavHeaderMenu";
import Link from "next/link";
import Image from "next/image";

import ShoppingCartButton from './ShoppingCartButton';
import MyAccountButton from "./MyAccountButton";

interface NavHeaderProps extends HTMLAttributes<HTMLDivElement> {

}

const NavHeader = ({ className }: NavHeaderProps) => {



  return (
    <header className={cn("font-sans text-black text-base relative z-20 w-full lg:block", className)}>
      <div className="flex h-20 lg:h-[100px] relative z-20 w-full px-0 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font md:px-8 lg:px-6">
        <div className="flex items-center justify-center mx-auto max-w-[1920px] w-full h-full">
          <Link
            href="/"
            className="inline-flex focus:outline-none cursor-pointer"
            title="Go to home page"
            style={{ padding: "10px 20px" }}
          >
            <span
              style={{
                boxSizing: "border-box",
                overflow: "hidden",
                width: "160px",
                height: "80px",
                background: "none",
                opacity: 1,
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "relative",
                top: "0px",
              }}
              className="hidden lg:block"
            >
              <Image
                alt="SFTec"
                src="/sftLogo2.jpg"
                width={160}
                height={80}
                priority
                style={{
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </span>
          </Link>
          <div className="headerMenu flex w-full relative hidden lg:flex ltr:md:ml-6 rtl:md:mr-6 ltr:xl:ml-10 rtl:xl:mr-10">
            <div
              className="flex text-heading text-sm px-4 py-2 font-semibold border border-gray-300 rounded-md items-center transition duration-200 ease-in-out focus:outline-none"
              style={{
                flex: "1 1 auto",
                paddingRight: "40px",
                position: "relative",
                maxWidth: "500px",
              }}
            >
              <form action="/ProductList" method="get">
                <input
                  type="text"
                  name="productName"
                  id="InputProductNameSearch"
                  className="ltr:pl-2.5 rtl:pr-2.5"
                  style={{
                    border: 'none',
                    background: 'none',
                    flex: '1 1 auto',
                    outline: 'none',
                  }}
                  placeholder="Search Products"
                />
                <button
                  type="submit"
                  className="cursor-pointer bg-gray-200 hover:bg-gray-300 h-full w-12 absolute inline-flex items-center px-4"
                  style={{ top: 0, right: 0, bottom: 0 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    height="18px"
                    viewBox="0 0 18.942 20"
                    className="md:w-4 xl:w-5 md:h-4 xl:h-5 cursor-pointer hover:bg-gray-300"
                    style={{ margin: "auto" }}
                  >
                    <path
                      d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
                      transform="translate(-367.297 -371.285)"
                      fill="#cccccc"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="flex-shrink-0 ltr:ml-auto rtl:mr-auto ltr:lg:mr-5 rtl:lg:ml-5 ltr:xl:mr-8 rtl:xl:ml-8 ltr:2xl:mr-10 rtl:2xl:ml-10"></div>

          <div
            className="items-center justify-end flex-shrink-0 hidden lg:flex gap-x-6 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10 ltr:ml-auto rtl:mr-auto"
            style={{ padding: "0px 0px" }}
          >


            <MyAccountButton />

            <ShoppingCartButton />

          </div>
        </div>


        {/* <div>
          <NavHeaderMenu />
        </div> */}
      </div>

      <NavHeaderMenu />


      <div className="w-full text-center h-10 bg-black">
        <div className="flex items-center justify-center mx-auto w-full text-white text-sm pt-2.5">
          FIND MATERIALS IN YOUR NEAREST STORE.
        </div>
      </div>
    </header>
  );
};

export default NavHeader;

import MyAccountButton from "@/components/MyAccountButton";
import ShoppingCartButton from "@/components/ShoppingCartButton";
import HomeButton from "@/components/HomeButton";
import MobileCategoryButton from "./MobileCategoryButton";
const Footer = () => {
  return (
    <div className="">
      <footer id="PublicWebsiteFooterSection" className="App_SiteFooter w-full bg-white font-sans text-black text-base border-b-4 border-heading mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2 ng-scope">
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 border-t border-gray-300 pt-10 text-[#5a5a5a]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-9 xl:gap-5 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1 xl:grid-cols-6">
            <div className="pb-3 md:pb-0 undefined">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                Social
              </h4>
              <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                <li className="flex items-baseline">
                  <span className="mr-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" className="">
                      <path d="M256 0L0 256h74v256h364V256h74L256 0zM192 448V288h128v160H192z" className="">
                      </path>
                    </svg>
                  </span>
                  <a href="https://www.sftec.com" target="_blank" className="transition-colors duration-200 hover:text-black">
                    www.sftec.com
                  </a>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" className="">
                      <path d="M100.28 448H7.4V165.37h92.88zM53.79 108.1C24.09 108.1 0 83.17 0 53.43A53.79 53.79 0 01107.58 53.43c0 29.74-24.09 54.67-53.79 54.67zM447.9 448H354.91V304.33c0-34.28-12.25-57.64-42.89-57.64-23.38 0-37.29 15.73-43.42 30.92-2.23 5.43-2.77 13.02-2.77 20.63V448H173.54s1.2-265.59 0-292.63h92.87v41.49c-.18.29-.43.63-.6.92h.6v-.92c12.35-19.05 34.4-46.25 83.65-46.25 61.07 0 106.92 39.84 106.92 125.34V448z" className="">
                      </path>
                    </svg>
                  </span>
                  <a href="https://www.linkedin.com/company/37034665/admin/feed/posts/" target="_blank" className="transition-colors duration-200 hover:text-black">
                    Linked In
                  </a>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="">
                      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" className="">
                      </path>
                    </svg>
                  </span>
                  <a href="https://x.com/SFTecFRP" target="_blank" className="transition-colors duration-200 hover:text-black">
                    Twitter
                  </a>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="">
                      <path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" className="">
                      </path>
                    </svg>
                  </span>
                  <a href="https://www.facebook.com/sfteccanada/" target="_blank" className="transition-colors duration-200 hover:text-black">
                    Facebook
                  </a>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="">
                      <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" className="">
                      </path>
                    </svg>
                  </span>
                  <a href="https://www.youtube.com/@sftecinc" target="_blank" className="transition-colors duration-200 hover:text-black">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3 md:pb-0 undefined">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                Contact
              </h4>
              <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                <li className="flex items-baseline">
                  <a href="https://sftec.com/contact-us/" target="_blank" className="transition-colors duration-200 hover:text-black">
                    Contact Us
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a href="mailto:support@sftec.shop" className="transition-colors duration-200 hover:text-black">
                    Email Us: support@sftec.shop
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a href="tel:18005039139" className="transition-colors duration-200 hover:text-black">
                    Call Us: +1 800 503 9139
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3 md:pb-0 undefined">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                About
              </h4>
              <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                <li className="flex items-baseline">
                  <a ng-click="goToPageByRouteCode('AboutUs')" className="transition-colors duration-200 hover:text-black cursor-pointer">
                    About Us
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a href="https://sftec.com/news/" target="_blank" className="transition-colors duration-200 hover:text-black">
                    Company News - SFTec Inc.
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3 md:pb-0 undefined">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                Customer Care
              </h4>
              <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                <li className="flex items-baseline">
                  <a href="https://sftec.com/faq/" target="_blank" className="transition-colors duration-200 hover:text-black">
                    FAQ &
                    Helps
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a ng-click="goToPageByRouteCode('ShippingPolicy')" className="transition-colors duration-200 hover:text-black cursor-pointer">
                    Shipping
                    &
                    Delivery
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a ng-click="goToPageByRouteCode('ReturnPolicy')" className="transition-colors duration-200 hover:text-black cursor-pointer">
                    Return
                    &
                    Exchanges
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a ng-click="goToPageByRouteCode('CustomerSupport')" className="transition-colors duration-200 hover:text-black cursor-pointer">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3 md:pb-0 undefined">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                Our Information
              </h4>
              <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                <li className="flex items-baseline">
                  <a ng-click="goToPageByRouteCode('PrivacyPolicy')" className="transition-colors duration-200 hover:text-black cursor-pointer">
                    Privacy & Security Policy Update
                  </a>
                </li>
                <li ng-click="goToPageByRouteCode('TermCondition')" className="flex items-baseline">
                  <a className="transition-colors duration-200 hover:text-black cursor-pointer">
                    Terms & Conditions
                  </a>
                </li>
                <li ng-click="goToPageByRouteCode('Commitment')" className="flex items-baseline">
                  <a className="transition-colors duration-200 hover:text-black cursor-pointer">
                    Commitment to Quality products & services
                  </a>
                </li>
                <li ng-click="goToPageByRouteCode('Disclaimer')" className="flex items-baseline">
                  <a className="transition-colors duration-200 hover:text-black cursor-pointer">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3 md:pb-0 undefined">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                Set-up your account
              </h4>
              <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                <li ng-if="!isUserLoggedIn()" className="flex items-baseline ng-scope" ng-click="signInClicked();">
                  <a className="transition-colors duration-200 hover:text-black cursor-pointer">
                    Login or Regiser
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-16 mb-2 border-t border-gray-300 sm:pb-20 md:pb-5 sm:mb-0">
          <div className="flex flex-col-reverse md:flex-row text-center md:justify-between mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
            <p className="text-body text-xs lg:text-sm leading-6">
              Copyright © 2024
              <a className="font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-body">
                SFTec Inc.
              </a>
              All rights reserved
            </p>
            <ul className="flex-wrap items-center justify-center hidden mx-auto mb-1 md:flex gap-x-4 xs:gap-x-5 lg:gap-x-7 md:mb-0 md:mx-0">
              <li className="mb-2 transition md:mb-0 hover:opacity-80">
                <a target="_blank" className="">
                  <img src="/img/mastercard.svg" alt="Master Card" height="20" width="34" className="" />
                </a>
              </li>
              <li className="mb-2 transition md:mb-0 hover:opacity-80">
                <a target="_blank" className="">
                  <img src="/img/visa.svg" alt="Visa" height="20" width="50" className="" />
                </a>
              </li>
              <li className="mb-2 transition md:mb-0 hover:opacity-80">
                <a target="_blank" className="">
                  <img src="/img/paypal.svg" alt="Paypal" height="20" width="76" className="" />
                </a>
              </li>
              <li className="mb-2 transition md:mb-0 hover:opacity-80">
                <a target="_blank" className="">
                  <img src="/img/jcb.svg" alt="JCB" height="20" width="26" className="" />
                </a>
              </li>
              <li className="mb-2 transition md:mb-0 hover:opacity-80">
                <a target="_blank" className="">
                  <img src="/img/skrill.svg" alt="Skrill" height="20" width="39" className="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="lg:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4 md:px-8 ng-scope">
        <MobileCategoryButton />
        <HomeButton>
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" viewBox="0 0 17.996 20.442" className="">
              <path d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z" transform="translate(-30.619 0.236)" fill="currentColor" stroke="currentColor" className="">
              </path>
            </svg>
          </div>
        </HomeButton>

        <MyAccountButton></MyAccountButton>
        <ShoppingCartButton></ShoppingCartButton>


      </div>
      <div className="text-center p-5 bg-white text-sm flex-row justify-center items-center font-medium fixed bottom-0 w-full z-30 transition-all duration-300 ease-out shadow-cookies transform translate-y-full opacity-0 ng-scope">
        <span className="inline-block mb:block mb-3.5 leading-6">
          This site uses cookies to improve your experience.
          By clicking, you agree to our Privacy Policy.
        </span>
        <span className="inline-block md:ml-3 rtl:md:mr-3">
        </span>
        <button data-variant="slim" className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart">
          Accept
          cookies
        </button>
      </div>
    </div>
  )
}

export default Footer;
// // src/components/MenuLink.tsx (Client-side component)
// import React from "react";

// interface MenuLinkProps {
//   node: any;
//   onClick: () => void;
// }

// const MenuLink: React.FC<MenuLinkProps> = ({ node, onClick }) => {
//   const handleClick = () => {
//     onClick();
//     // Perform additional client-side actions if needed
//   };

//   return (
//     <a
//       className="block whitespace-nowrap text-sm py-3 text-heading font-regular px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300 w-auto"
//       style={{ width: "auto", whiteSpace: "nowrap" }}
//       onClick={handleClick}
//     >
//       {node.BaseAppCatalogueTreeDto.Name}
//       {node.Children.length > 0 && (
//         <i className="fa fa-angle-right opacity-75" />
//       )}
//     </a>
//   );
// };

// export default MenuLink;

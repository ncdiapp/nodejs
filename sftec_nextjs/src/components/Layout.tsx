// src/app/components/Layout.tsx
import React from "react";
import NavHeader from "./NavHeader";



interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <div>
      <NavHeader className="" />
      {children}

    </div>
  );
};

export default Layout;

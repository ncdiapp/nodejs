// src/app/page.tsx
import React from "react";
import Layout from "../components/Layout";
import CategoryCardList from "../components/CategoryCardList";

const HomePage = () => {
  return (
    <Layout>
      <CategoryCardList />
    </Layout>
  );
};

export default HomePage;

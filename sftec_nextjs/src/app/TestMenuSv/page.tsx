// app/user-tree-menu/page.tsx
import React from "react";
import UserTreeMenuSv, {
  fetchUserTreeMenuData,
} from "../../components/UserTreeMenuServer";

interface UserTreeMenuPageProps {
  searchParams: {
    siteMenuCategory: string;
  };
}

const TestMenuSvPage = async ({ searchParams }: UserTreeMenuPageProps) => {
  const { siteMenuCategory } = searchParams;
  const { data, error } = await fetchUserTreeMenuData(Number(siteMenuCategory));

  return (
    <div>
      <h1>User Tree Menu Page</h1>
      <UserTreeMenuSv
        siteMenuCategory={Number(siteMenuCategory)}
        data={data}
        error={error}
      />
    </div>
  );
};

export default TestMenuSvPage;

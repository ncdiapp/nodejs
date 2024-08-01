// components/UserTreeMenuSv.tsx
import React from "react";
import {
    RetrieveNoneMgtUserTreeMenu,
    UserTreeMenuResponse,
} from "../services/mgtService";

interface UserTreeMenuSvProps {
    siteMenuCategory: number;
    data: UserTreeMenuResponse | null;
    error: string | null;
}

const UserTreeMenuSv: React.FC<UserTreeMenuSvProps> = ({ data, error }) => {
    if (!data && !error) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="bg-red-500">
            <h1>User Tree Menu</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default UserTreeMenuSv;

export const fetchUserTreeMenuData = async (siteMenuCategory: number) => {
    try {
        const data = await RetrieveNoneMgtUserTreeMenu(siteMenuCategory);
        return {
            siteMenuCategory,
            data,
            error: null,
        };
    } catch (error: any) {
        return {
            siteMenuCategory,
            data: null,
            error: error.message,
        };
    }
};

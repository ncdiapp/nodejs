"use client";
import { useState, useEffect } from "react";
import {
    RetrieveNoneMgtUserTreeMenu,
    UserTreeMenuResponse,
} from "../services/mgtService";

interface UserTreeMenuProps {
    siteMenuCategory: number;
}

const UserTreeMenu: React.FC<UserTreeMenuProps> = ({ siteMenuCategory }) => {
    const [isBusy, setIsBusy] = useState(false);
    const [data, setData] = useState<UserTreeMenuResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsBusy(true);
            try {
                const result = await RetrieveNoneMgtUserTreeMenu(siteMenuCategory);
                setData(result);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsBusy(false);
            }
        };

        fetchData();
    }, [siteMenuCategory]);

    if (isBusy) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>User Tree Menu</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default UserTreeMenu;

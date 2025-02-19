import PageMarkup from './pageMarkup';
import { getFolderRoutes } from '@/services/sitemapservice';
import Link from 'next/link';


const SiteMap = async () => {
    // Fetch routes on the server side
    const routeInfos = await getFolderRoutes();

    const dataModel = {
        pageName: 'App Page List',
        routeInfos: routeInfos,
    };

    return (
        <PageMarkup dataModel={dataModel} />
    );
};

export default SiteMap;

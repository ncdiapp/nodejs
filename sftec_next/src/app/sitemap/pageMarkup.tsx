import Link from 'next/link';
import Image from "next/image";

export default function PageMarkup({ dataModel }: { dataModel: any }) {
  return (

    /* Start of NextJs Page Layout */
    <>
      <div className="w-full h-full flex flex-col p-10">
            <div className="w-full relative">
                <div className="flex w-full h-full bg-white">
                    <div className="w-24">
                        <img className="w-max-full h-max-full" alt="Logo" src="img/logo.png" />
                    </div>
                    <div className="pt-5 px-5 text-2xl leading-8">
                        {dataModel.pageName}
                    </div>
                </div>
            </div>
            <div className="w-full flex-auto">
                <div className="w-full h-full">                    
                    <div className="py-4 text-2xl leading-8 underline text-blue-600 capitalize">
                        <ul>
                            {dataModel.routeInfos.map(({ route, level }: any, index: number) => (
                                <li key={index} className="py-2" style={{ paddingLeft: `${level * 20}px` }}>
                                    <Link href={route === '' ? '/' : route}>
                                        {route === '' ? 'Home' : route}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    /* End of NextJs Page Layout */
  );
}


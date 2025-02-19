
import Link from "next/link";

export default function PageMarkup({ dataModel }: { dataModel: any }) { 
    return (
    /* Start of NextJs Page Layout */
        <>
            <div className='p-5'>
                {dataModel.pageName}
            </div>
        </>
    /* End of NextJs Page Layout */
    );
};

    

import Link from "next/link";

export default function PageMarkup({ dataModel }: { dataModel: any }) {
    return (
        /* Start of NextJs Page Layout */
        <>
            <div className='p-5'>
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-semibold mb-10">Orders</h1>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-gray-100 text-sm md:text-base">
                                    <th className="p-2 py-3 whitespace-nowrap">Order ID</th>
                                    <th className="p-2 py-3 whitespace-nowrap">Place Date</th>
                                    <th className="p-2 py-3 whitespace-nowrap">Status</th>
                                    <th className="p-2 py-3 whitespace-nowrap">Total ($)</th>
                                    <th className="p-2 py-3 whitespace-nowrap">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataModel.responseData_Sft_GetOrders.map((order:any) => (
                                    <tr key={order.OrderId} className="text-center text-sm md:text-base border-b">
                                        <td className="p-2 py-4 truncate max-w-[120px] underline">
                                            <Link href={`/ordersummary/${order.OrderId}?myorders=1&distributorid=${dataModel.searchParams.distributorid || ''}`}>
                                                #{order.OrderId}
                                            </Link>                                            
                                        </td>
                                        <td className="p-2 py-4">{order.PlacedDate}</td>
                                        <td className="p-2 py-4">{order.OrderStatus}</td>
                                        <td className="p-2 py-4">${order.TotalAfterTax}</td>
                                        <td className="p-2 py-4">
                                            <Link href={`/ordersummary/${order.OrderId}?myorders=1&distributorid=${dataModel.searchParams.distributorid || ''}`}>
                                                <button className="px-3 py-1 bg-black text-white rounded hover:bg-gray-600 text-xs md:text-sm">
                                                    View
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
        /* End of NextJs Page Layout */
    );
};


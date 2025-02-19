"use client";

import { useState } from "react";

interface Item {
  Id: number;
  Display: string;
}

interface MultiItemSelectorProps {
  inputname: string;
  items: Item[];
  defaultvalue?: any; 
}

export default function MultiItemSelector({ inputname, items, defaultvalue}: MultiItemSelectorProps) {
  const [selectedId, setSelectedId] = useState<any | null>(defaultvalue);

  return (
    <div className="w-full" data-internal-code="Multiple Item Selector Container">
      <div className="flex gap-2">
        {items.map((item) => (
          <div
            key={item.Id}
            className={`flex-auto text-center cursor-pointer whitespace-nowrap py-3 px-4 md:px-5 w-full appearance-none transition duration-150 border text-xs lg:text-sm font-body min-h-12 border-gray-300 focus:outline-none h-11 md:h-12 rounded-md ${
              selectedId === item.Id ? "bg-gray-200" : ""
            }`}
            onClick={() => setSelectedId(item.Id)}
            data-design-content="Delivery Method"
          >
            {selectedId === item.Id && <span className="px-2">*</span>}
                <span className="font-semibold">{item.Display}</span>
          </div>
        ))}
      </div>

      {/* Hidden input field for form submission */}
      <input type="hidden" name={inputname} value={selectedId ?? ""} />
    </div>
  );
}

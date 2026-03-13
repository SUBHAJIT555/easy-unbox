import React, { memo } from "react";
import NiceSelect from "@/ui/nice-select";

const ShopTopRight = memo(({ selectHandleFilter }) => {
  return (
    <div className="easyunbox-shop-top-right">
      <div className="easyunbox-shop-sort">
        <NiceSelect
          options={[
            { value: "Default Sorting", text: "Default Sorting" },
            { value: "Low to High", text: "Low to High" },
            { value: "High to Low", text: "High to Low" },
            { value: "New Added", text: "New Added" },
            { value: "On Sale", text: "On Sale" },
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name="Default Sorting"
        />
      </div>
    </div>
  );
});

ShopTopRight.displayName = "ShopTopRight";

export default ShopTopRight;

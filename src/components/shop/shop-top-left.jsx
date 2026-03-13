import { GridTab, ListTab } from "@/svg";
import React, { memo } from "react";

const ShopTopLeft = memo(({ total, showing = 9 }) => {
  return (
    <div className="easyunbox-shop-top-left">
      <div className="easyunbox-shop-tabs" role="tablist" id="productTab">
        <button
          className="easyunbox-shop-tab active"
          id="grid-tab"
          data-bs-toggle="tab"
          data-bs-target="#grid-tab-pane"
          type="button"
          role="tab"
          aria-controls="grid-tab-pane"
          aria-selected="true"
          tabIndex={-1}
        >
          <GridTab />
        </button>
        <button
          className="easyunbox-shop-tab"
          id="list-tab"
          data-bs-toggle="tab"
          data-bs-target="#list-tab-pane"
          type="button"
          role="tab"
          aria-controls="list-tab-pane"
          aria-selected="false"
          tabIndex={-1}
        >
          <ListTab />
        </button>
      </div>
      <p className="easyunbox-shop-result">
        Showing 1–{showing} of {total} results
      </p>
    </div>
  );
});

ShopTopLeft.displayName = "ShopTopLeft";

export default ShopTopLeft;

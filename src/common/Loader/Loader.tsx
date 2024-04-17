import React from "react";
import { wrapper, innerLoader, loader } from "../Loader/styles";

export function Loader() {
  return (
    <div className={wrapper}>
      <div className={loader}>
        <div className={innerLoader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

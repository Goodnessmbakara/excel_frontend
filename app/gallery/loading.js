import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="lds-ring ">
        <div></div>
      </div>
    </div>
  );
}

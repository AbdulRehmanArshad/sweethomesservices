/** @format */

import React from "react";
import Homes from "./homes";
const DasCard = () => {
  return (
    <>
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 ml-4 mt-12">
        <Homes />
        <Homes />
        <Homes />
      </div>
    </>
  );
};

export default DasCard;

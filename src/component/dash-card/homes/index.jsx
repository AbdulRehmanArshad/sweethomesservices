/** @format */

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { areaSizeData, popularData, typeData } from "./data";
const Homes = () => {
  const [popular, setPopular] = useState(true);
  const [type, setType] = useState(false);
  const [areaSize, setAreaSize] = useState(false);
  const Popular = () => {
    setAreaSize(false);

    setType(false);
    setPopular(true);
  };
  const Type = () => {
    setPopular(false);
    setAreaSize(false);

    setType(true);
  };
  const AreaSize = () => {
    setPopular(false);
    setType(false);
    setAreaSize(true);
  };

  return (
    <>
      <div class=" bg-white   mt-4 bg-lime-200	">
        <div className="flex mb-5">
          <h1 className="mt-2 text-2xl	font-semibold  ml-4	">Homes</h1>
          <FontAwesomeIcon
            icon={faHome}
            style={{ color: "#18534f", height: "50", width: "50" }}
            className="ml-10"
          />
        </div>

        <ul class=" text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow flex dark:divide-gray-700 dark:text-gray-400">
          <li class="w-full">
            <a
              onClick={Popular}
              class="inline-block w-full p-4   rounded-l-lg   text-gray-800   bg-lime-700	 hover:bg-lime-600"
              aria-current="page">
              Popular
            </a>
          </li>
          <li class="w-full">
            <a
              onClick={Type}
              class="inline-block w-full p-4 text-gray-800   bg-lime-700	 hover:bg-lime-600">
              Type
            </a>
          </li>

          <li class="w-full">
            <a
              onClick={AreaSize}
              class="inline-block w-full p-4  rounded-r-lg  text-gray-800 bg-lime-700	 hover:bg-lime-600 	">
              Area Size
            </a>
          </li>
        </ul>
        {popular && (
          <div class="grid grid-cols-3  gap-6  px-2 py-2 ">
            {popularData.map((e, index) => {
              return (
                <>
                  <div className="px-3 py-3 shadow-md rounded-lg mt-1">
                    <h1 className="text-center text-xs" key={index}>
                      {e}
                    </h1>
                  </div>
                </>
              );
            })}
          </div>
        )}
        {type && (
          <div class="grid grid-cols-3  gap-6  px-2 py-2 ">
            {typeData.map((e, index) => {
              return (
                <>
                  <div className="px-3 py-3 shadow-md rounded-lg mt-1">
                    <p className="text-center text-xs" key={index}>
                      {e}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        )}
        {areaSize && (
          <div class="grid grid-cols-3  gap-6  px-2 py-2 ">
            {areaSizeData.map((e, index) => {
              return (
                <>
                  <div className="px-3 py-3 shadow-md rounded-lg mt-1">
                    <h1 className="text-center text-xs" key={index}>
                      {e}
                    </h1>
                  </div>
                </>
              );
            })}
          </div>
        )}
        {/* <!-- component --> */}
      </div>
    </>
  );
};

export default Homes;

"use client";
import Calculator from "@/components/Calculator";
import { useState } from "react";

import React from "react";

function page() {
  return (
    <section className="flex w-full items-start justify-between gap-5 pl-44 max-md:flex-wrap max-md:pl-0">
      <div className="justify-between items-start self-center flex flex-col my-auto max-md:max-w-full">
        <div className="justify-center items-start  w-[744px] max-w-full flex-col self-start hidden sm:flex">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f040e721-45e1-4304-8acc-def2bc02c6fd?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="aspect-[5.22] object-contain object-center w-[376px] overflow-hidden max-w-full self-start"
            alt="Calculator Image"
          />
          <div className="items-start flex w-full grow flex-col mt-28 self-start max-md:max-w-full max-md:mt-10">
            <h1 className="self-stretch text-white text-9xl font-bold leading-[120px] max-md:max-w-full max-md:text-4xl">
              Calculator
            </h1>
            <h2 className="self-stretch text-neutral-400 text-6xl leading-[78.4px] mt-2.5 max-md:max-w-full max-md:text-4xl">
              Calculate It
            </h2>
          </div>
        </div>
      </div>
      <Calculator />
    </section>
  );
}

export default page;

"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMoveCard";
import { clients } from "@/data";


const Clients = () => {
  return (
    <div className="py-20">
            <h1 className="heading">
                A handful of{" "}
                <span className="text-purple">satisfied clients </span>
                across agencies
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-80 mt-20 gap-y-48">
        </div>
        <div className="h-[10rem] rounded-md flex flex-col antialiased bg-white dark:bg-black-100 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={clients}
                direction="right"
                speed="fast"
      />
    </div>
    </div>
  )
}

export default Clients
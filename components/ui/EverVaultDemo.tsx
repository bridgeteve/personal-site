import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xl p-4 relative h-[40rem]">
      {/* <Icon className="absolute h-10 w-6 -top-4 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-10 w-6 -bottom-8 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-10 w-6 -top-10 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-10 w-6 -bottom-10 -right-3 dark:text-white text-black" /> */}
     
      <EvervaultCard text="Unparalleled Accuracy" />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect. 
      </h2>
    </div>
  );
}

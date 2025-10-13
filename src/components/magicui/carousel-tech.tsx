import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/magicui/carousel";
import React from "react";

interface CarouselItemType {
  name: string;
  icon: React.ReactNode; 
}

interface CarouselWithMultipleSlidesProps {
  items: CarouselItemType[];
}

export default function CarouselTech({
  items,
}: CarouselWithMultipleSlidesProps) {
  return (
<Carousel
  opts={{ align: "start", dragFree: true }}
  className="w-full mx-auto sm:p-4"
>
  <CarouselContent className="items-stretch ">
    {items?.map((item, index) => (
      <CarouselItem
        key={index}
        className="basis-[calc(100%/2.75)] sm:basis-[calc(100%/4)] md:basis-1/5 lg:basis-1/6 xl:basis-1/6"
      >
        <div className="h-full">
          <Card className="h-full bg-white shadow-sm rounded-md border border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100">
            <CardContent className="h-full flex flex-col items-center justify-center gap-2">
              {item.icon}
              <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
                {item.name}
              </span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
  );
}

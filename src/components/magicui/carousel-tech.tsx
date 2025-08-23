import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
      {items?.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/7"
          >
            <div className="">
              <Card className="bg-gray transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100 shadow-none border-none hover:shadow-md">
                <CardContent className="flex flex-col items-center justify-center gap-4 ">
                  {item.icon}
                  <span className="text-lg font-medium text-gray-400">{item.name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
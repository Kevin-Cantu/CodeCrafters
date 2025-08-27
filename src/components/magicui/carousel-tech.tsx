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
      // Alineamos al inicio y dejamos drag libre para ver 2.5 ítems
      opts={{ align: "start", dragFree: true }}
      className="w-full mx-auto"
    >
      <CarouselContent className="items-stretch">
        {items?.map((item, index) => (
          <CarouselItem
            key={index}
            // 2.5 ítems visibles en mobile/sm, y más en pantallas grandes
            className="basis-[calc(100%/2.5)] sm:basis-[calc(100%/2.5)] md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
          >
            <div className="h-full">
              {/* Tarjeta limpia para evitar apariencia de "doble card" en móvil */}
              <Card className="h-full bg-transparent transition-transform duration-300 ease-in-out g hover:scale-105 active:scale-100 shadow-none border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                <CardContent className="h-full flex flex-col items-center justify-center gap-4">
                  {item.icon}
                  <span className="text-lg font-medium text-gray-500 dark:text-gray-400">{item.name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Botones removidos según requerimiento */}
    </Carousel>
  );
}

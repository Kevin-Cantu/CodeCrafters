import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/magicui/carousel";

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
    <div className="w-full mx-auto py-4 px-2 sm:px-10 relative">
      <div className="relative group overflow-x-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {items?.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="h-full bg-black/50 shadow-[0_0_15px_rgba(168,85,247,0.1)] rounded-xl border border-purple-500/20 transition-all duration-300 flex flex-col items-center justify-center p-6 hover:border-purple-500/50 hover:bg-purple-900/20 active:scale-95 group/item cursor-grab active:cursor-grabbing">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="transform transition-transform duration-300 group-hover/item:scale-110">
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white/70 text-center tracking-widest uppercase group-hover/item:text-purple-300 transition-colors">
                      {item.name}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Side Arrows - Visible on all screens, positioned carefully */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between px-2 sm:-mx-8">
            <CarouselPrevious className="pointer-events-auto relative left-0 translate-x-0 translate-y-0 h-10 w-10 bg-black/60 border-purple-500/30 text-white hover:bg-purple-900/50 hover:border-purple-500 backdrop-blur-sm z-30" />
            <CarouselNext className="pointer-events-auto relative right-0 translate-x-0 translate-y-0 h-10 w-10 bg-black/60 border-purple-500/30 text-white hover:bg-purple-900/50 hover:border-purple-500 backdrop-blur-sm z-30" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

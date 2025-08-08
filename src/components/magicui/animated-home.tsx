import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { VideoText } from "@/components/magicui/video-text";
import Link from "next/link";
export function AnimatedHome() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border-none bg-background  sm:p-10 md:p-20 lg:p-20 -mt-6">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1300px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-[200%] skew-y-12"
        )}
      />

      <div className="relative w-full flex flex-col items-center text-center">
        <VideoText
          src="/assets/video.mp4"
          className="w-full h-[300px] "
          fontSize={15}
        >
          CodeCrafters
        </VideoText>
        <div className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl leading-relaxed">
          Somos{" "}
          <span className="font-semibold text-foreground">CodeCrafters</span>,
          una consultora especializada en el desarrollo de software a medida y
          soluciones digitales que transforman ideas en productos reales.
        </div>

        <Link
          href="/contacto"
          className="mt-6 inline-block rounded-full bg-primary px-4 sm:px-6 py-2 text-white text-sm sm:text-base font-semibold hover:bg-primary/80 transition"
        >
          Hablemos de tu proyecto
        </Link>
      </div>
    </div>
  );
}

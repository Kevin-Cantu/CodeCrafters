import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { VideoText } from "@/components/magicui/video-text";
import Link from "next/link";

export function AnimatedHome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 to-gray-800 -mt-6">
      {/* Animated Grid Background */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1400px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-[200%] skew-y-12"
        )}
      />

      {/* Gradient Overlays for Depth */}
     

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          
          {/* Hero Video Text */}
          <div className="relative">
            <VideoText 
              src="/assets/video.mp4" 
              fontSize={14} 
              className="h-[250px]"
            >
              CodeCrafters
            </VideoText>
            
            {/* Subtle glow effect behind text */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="w-full " />
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed max-w-4xl mx-auto">
              Transformamos{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">
                ideas innovadoras
              </span>{" "}
              en{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                arte
              </span>{" "}
              
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos <strong className="text-white">CodeCrafters</strong>, una consultora especializada 
              en desarrollo de software a medida y soluciones digitales que convierten 
              visiones en productos reales y exitosos.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/contacto"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Hablemos de tu proyecto</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/proyectos"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/5 hover:scale-105"
            >
              <span>Ver nuestros proyectos</span>
              <svg 
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats or Features */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
           
            
            <div className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Años de Experiencia</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
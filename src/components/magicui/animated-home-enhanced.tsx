import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { VideoText } from "@/components/magicui/video-text";
import { FloatingParticles } from "@/components/magicui/floating-particles";
import { TechStackOrbit } from "@/components/magicui/tech-stack-orbit";
import Link from "next/link";

export function AnimatedHomeEnhanced() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Tech Stack Orbit */}
      <TechStackOrbit />

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          
          {/* Hero Video Text */}
          <div className="relative group">
            <VideoText 
              src="/videos/video.mp4" 
              fontSize={12} 
              className="w-full max-w-4xl mx-auto h-32 sm:h-40 md:h-48 lg:h-56 transition-transform duration-700 group-hover:scale-105"
            >
              CodeCrafters
            </VideoText>
            
            {/* Dynamic glow effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 transition-opacity duration-700 group-hover:opacity-50">
              <div className="w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full animate-pulse" />
            </div>
            
            {/* Rotating border */}
            <div className="absolute inset-0 -z-20 rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg blur-sm opacity-20 animate-spin" style={{ animationDuration: "8s" }} />
            </div>
          </div>

          {/* Tagline with Typewriter Effect */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed max-w-4xl mx-auto">
              Transformamos{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                ideas innovadoras
              </span>{" "}
              en{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse" style={{ animationDelay: "1s" }}>
                soluciones digitales
              </span>{" "}
              que impulsan el futuro
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              Somos <strong className="text-white">CodeCrafters</strong>, una consultora especializada 
              en desarrollo de software a medida y soluciones digitales que convierten 
              visiones en productos reales y exitosos.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <Link
              href="/contacto"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-500 ease-out bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 transform-gpu"
            >
              <span className="relative z-10 flex items-center">
                Hablemos de tu proyecto
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150" />
            </Link>
            
            <Link
              href="/proyectos"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-500 ease-out border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/5 hover:scale-105 backdrop-blur-sm"
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

          {/* Enhanced Stats */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
            {[
              { number: "50+", label: "Proyectos Exitosos", gradient: "from-purple-400 to-pink-400", delay: "0s" },
              { number: "5+", label: "Años de Experiencia", gradient: "from-blue-400 to-cyan-400", delay: "0.2s" },
              { number: "100%", label: "Clientes Satisfechos", gradient: "from-green-400 to-emerald-400", delay: "0.4s" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2 group cursor-default">
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm sm:text-base transition-colors duration-300 group-hover:text-white">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in" style={{ animationDelay: "2s", animationFillMode: "forwards" }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
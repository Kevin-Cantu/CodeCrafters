import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { VideoText } from "@/components/magicui/video-text";
import Link from "next/link";

export function AnimatedHomeProfessional() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 -mt-6">
      {/* Animated Grid Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.08}
        duration={4}
        repeatDelay={2}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full"
        )}
      />

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-purple-950/10" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center ">
          
          {/* Company Logo/Brand */}
          <div className="relative group py-10">
            <VideoText 
              src="/assets/video.mp4" 
              fontSize={16} 
              className="h-[200px] sm:h-[240px] md:h-[280px] transition-all duration-700 "
            >
              CodeCrafters
            </VideoText>
            
            {/* Elegant glow effect */}
            <div className="absolute inset-0 -z-10 blur-2xl opacity-20 transition-opacity duration-700 group-hover:opacity-30">
              <div className="w-full h-full bg-gradient-to-r from-blue-400/90 via-purple-400/60 to-cyan-400/90 rounded-full" />
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight tracking-tight">
              Transformamos{" "}
              <span className="font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ideas
              </span>{" "}
              en{" "}
              <span className="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                soluciones digitales
              </span>
              <br />
              <span className="text-slate-300 font-extralight">
                extraordinarias
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              Consultora especializada en desarrollo de software a medida.
              <br />
              <span className="text-slate-300">
                Convertimos visiones en productos digitales exitosos.
              </span>
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              href="/contacto"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 border border-blue-500/20"
            >
              <span className="relative z-10 flex items-center">
                Iniciar proyecto
                <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/proyectos"
              className="group inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-slate-300 transition-all duration-300 ease-out border border-slate-600 rounded-2xl hover:border-slate-400 hover:text-white hover:bg-slate-800/50 hover:scale-[1.02] backdrop-blur-sm"
            >
              <span className="flex items-center">
                Ver portafolio
                <svg 
                  className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Professional Stats */}
          <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { 
                number: "8+", 
                label: "Años de experiencia", 
                gradient: "from-purple-400 to-pink-400",
                description: "En el mercado"
              },
              { 
                number: "100%", 
                label: "Satisfacción del cliente", 
                gradient: "from-emerald-400 to-teal-400",
                description: "Garantía de calidad"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3 group cursor-default">
                <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105`}>
                  {stat.number}
                </div>
                <div className="space-y-1">
                  <div className="text-white text-base sm:text-lg font-medium transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="text-slate-400 text-sm transition-colors duration-300 group-hover:text-slate-300">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Consulta gratuita</span>
              <span className="text-slate-600">•</span>
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Soporte continuo</span>
              <span className="text-slate-600">•</span>
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Entrega garantizada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-slate-600 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
import { ChevronDown, Download, Eye } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djI4aDI4VjE2SDM2ek0xNCAxNnYyOGgyOFYxNkgxNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 inline-block">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/72/8e/42/728e4266955b4033eea19e57430e38ee.jpg"
                alt="Boune Abdoulaye Mbacke"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Boune Abdoulaye Mbacke
        </h1>

        <p className="text-xl sm:text-2xl text-emerald-400 mb-6 font-medium">
          Créateur de contenu visuel
        </p>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Photographie · Vidéo · Infographie
        </p>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionné par l'image et la narration visuelle, je transforme chaque projet en une histoire authentique et esthétique.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => onNavigate('portfolio')}
            className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg font-medium text-lg w-full sm:w-auto justify-center"
          >
            <Eye className="w-5 h-5" />
            <span>Voir mes réalisations</span>
          </button>

          <a
            href="https://drive.google.com/file/d/1NiRZWbavk7s1kykrW3NHBvRS6P1Wr6Ia/view?usp=sharing" target='_blank'
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 border border-white/20 font-medium text-lg w-full sm:w-auto justify-center"
          >
            <Download className="w-5 h-5" />
            <span>Télécharger CV</span>
          </a>
        </div>

        <button
          onClick={() => onNavigate('about')}
          className="animate-bounce text-white/60 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}

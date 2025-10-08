import { Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Boune A. Mbacke</h3>
            <p className="text-gray-400 leading-relaxed">
              Créateur de contenu visuel passionné par la photographie, la vidéo et l'infographie.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <nav className="space-y-2">
              {['Accueil', 'À propos', 'Portfolio', 'Compétences', 'Expériences', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item.toLowerCase().replace('à propos', 'about').replace('compétences', 'skills').replace('expériences', 'experience'))}
                  className="block text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:boune.mbacke@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">boune.mbacke@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Dakar, Sénégal</span>
              </div>
              <a
                href="/cv.pdf"
                download
                className="inline-block mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Télécharger CV
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; {currentYear} Boune Abdoulaye Mbacke. Tous droits réservés.</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Conçu avec <Heart className="w-4 h-4 text-emerald-500 fill-current" /> à Dakar
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

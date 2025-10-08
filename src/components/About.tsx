import { Mail, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            À propos
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Bonjour, je suis Boune Abdoulaye
            </h3>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Passionné d'image, de narration et de création visuelle, mon parcours est né d'une curiosité autodidacte qui s'est transformée, au fil des années, en une véritable vocation dans les domaines de la <strong>photographie</strong>, de la <strong>vidéo</strong> et de la <strong>création graphique</strong>.
              </p>

              <p>
                Diplômé d'une licence en informatique et développement d'applications à l'Université numérique Cheikh Hamidou Kane (UNCHK), j'ai acquis une solide maîtrise des outils numériques. Parallèlement, une formation en infographie m'a permis de développer mes compétences en design visuel, retouche et composition graphique.
              </p>

              <p>
                Aujourd'hui, j'évolue au sein de <strong>Metakom Agency</strong>, où je participe à la production photo, vidéo et graphique pour divers clients, dont Distripro, Éric Favre TV, BP Actu et Lutte TV.
              </p>

              <p className="text-emerald-600 font-semibold italic">
                Ma vision : raconter des histoires réelles et sincères, mettre en valeur l'identité de chaque personne ou marque à travers l'authenticité, l'esthétique et l'évolution continue.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:boune.mbacke@gmail.com"
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>mbackeboune@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="w-5 h-5" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-20"></div>
              <img
                src="src/assets/_DSC0519_1.jpg"
                alt="Boune au travail"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

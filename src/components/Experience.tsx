import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      company: 'Metakom Agency',
      role: 'Créateur de contenu audiovisuel',
      period: 'Mars 2025 - Présent',
      location: 'Dakar, Sénégal',
      description: 'Production photo, vidéo et graphique pour clients variés',
      achievements: [
        'Gestion complète de projets pour Distripro, Éric Favre TV, BP Actu et Lutte TV',
        'Direction artistique et création de contenu multi-format',
        'Coordination avec équipes créatives et clients',
      ],
      color: 'emerald',
    },
    {
      type: 'work',
      company: 'Eric Favre Store Sénégal',
      role: 'Photographe & Vidéaste',
      period: 'Juillet 2024 - Mars 2025',
      location: 'Dakar, Sénégal',
      description: 'Création de contenu visuel pour campagnes marketing et événements',
      achievements: [
        'Photographe et vidéaste officiel du Festival Eric Favre 2024',
        'Production de clips promotionnels et contenus pour réseaux sociaux',
        'Captation événementielle multi-caméras',
        'Retouche photo et étalonnage vidéo professionnels',
      ],
      color: 'blue',
    },
    {
      type: 'work',
      company: "Ziz'Arté Studio",
      role: 'Photographe',
      period: '2023 - 2024',
      location: 'Dakar, Sénégal',
      description: 'Initiation professionnelle à la photographie de studio',
      achievements: [
        'Maîtrise des techniques de lumière en studio',
        'Direction de modèles et composition photographique',
        'Développement du storytelling visuel',
      ],
      color: 'purple',
    },
    {
      type: 'work',
      company: "Ziz'Arté Studio",
      role: 'Photographe',
      period: '2023 - 2024',
      location: 'Dakar, Sénégal',
      description: 'Initiation professionnelle à la photographie de studio',
      achievements: [
        'Maîtrise des techniques de lumière en studio',
        'Direction de modèles et composition photographique',
        'Développement du storytelling visuel',
      ],
      color: 'purple',
    },
  ];

  const education = [
    {
      degree: 'Licence en Informatique',
      institution: 'Université numérique Cheikh Hamidou Kane (UNCHK)',
      period: '2020 - 2023',
      description: 'Développement d\'applications et maîtrise des outils numériques',
    },
    {
      degree: 'Formation Infographie',
      institution: 'Formation professionnelle',
      period: '2022',
      description: 'Design visuel, retouche et composition graphique (6 mois)',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string } } = {
      emerald: { bg: 'bg-emerald-50', border: 'border-emerald-500', text: 'text-emerald-600' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-600' },
      purple: { bg: 'bg-violet-50', border: 'border-violet-500', text: 'text-violet-600' },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Expériences
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mon parcours professionnel et académique
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <Briefcase className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Expérience professionnelle</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              return (
                <div
                  key={index}
                  className={`relative pl-8 pb-8 border-l-4 ${colors.border} ${
                    index === experiences.length - 1 ? 'pb-0' : ''
                  }`}
                >
                  <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full ${colors.bg} border-4 ${colors.border} bg-white`}></div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ml-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h4>
                        <p className={`font-semibold ${colors.text} mb-1`}>{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.location}</p>
                      </div>
                      <span className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4 italic">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.border} border-2 flex-shrink-0`}></span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <GraduationCap className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Formation</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-lg p-6 border border-emerald-100">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h4>
                <p className="text-emerald-600 font-semibold mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

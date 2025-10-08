import { Camera, Video, Palette, Code, Lightbulb, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Camera,
      title: 'Photographie',
      skills: [
        { name: 'Portrait', level: 95 },
        { name: 'Événementiel', level: 90 },
        { name: 'Produit', level: 85 },
        { name: 'Studio', level: 88 },
      ],
    },
    {
      icon: Video,
      title: 'Vidéographie',
      skills: [
        { name: 'Tournage', level: 92 },
        { name: 'Montage', level: 95 },
        { name: 'Étalonnage', level: 88 },
        { name: 'Storytelling', level: 90 },
      ],
    },
    {
      icon: Palette,
      title: 'Design Graphique',
      skills: [
        { name: 'Retouche photo', level: 93 },
        { name: 'Identité visuelle', level: 85 },
        { name: 'Affiches', level: 87 },
        { name: 'Bannières', level: 90 },
      ],
    },
  ];

  const tools = [
    { name: 'Photoshop', icon: Palette },
    { name: 'Lightroom', icon: Camera },
    { name: 'Premiere Pro', icon: Video },
    { name: 'After Effects', icon: Video },
    { name: 'DaVinci Resolve', icon: Video },
    { name: 'Capture One', icon: Camera },
    { name: 'Illustrator', icon: Palette },
    { name: 'React', icon: Code },
  ];

  const softSkills = [
    { icon: Lightbulb, title: 'Créativité', description: 'Approche innovante pour chaque projet' },
    { icon: Users, title: 'Collaboration', description: 'Travail d\'équipe efficace' },
    { icon: Camera, title: 'Attention au détail', description: 'Perfectionnisme technique et esthétique' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une expertise technique complète au service de la création visuelle
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <category.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-emerald-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Logiciels maîtrisés</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <tool.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="text-xs font-medium text-slate-700 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-6 border border-emerald-100"
            >
              <div className="bg-white p-3 rounded-lg inline-block mb-4 shadow-sm">
                <skill.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{skill.title}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

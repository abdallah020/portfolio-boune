import { useEffect } from 'react';
import { X, Calendar, User, Wrench, Tag } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  description: string;
  client: string;
  role: string;
  tools: string[];
  coverImage: string;
  media: Array<{
    type: string;
    url: string;
    poster?: string;
  }>;
  tags: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2 shadow-lg transition-all transform hover:scale-110"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          <div className="relative h-96">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-t-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-3">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-emerald-400 font-medium">{project.client}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                <Calendar className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Année</p>
                  <p className="text-slate-900 font-semibold">{project.year}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                <User className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Client</p>
                  <p className="text-slate-900 font-semibold text-sm">{project.client}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg sm:col-span-2">
                <User className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Rôle</p>
                  <p className="text-slate-900 font-semibold text-sm">{project.role}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-5 h-5 text-emerald-500" />
                <h3 className="text-xl font-bold text-slate-900">Outils utilisés</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-medium text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-5 h-5 text-emerald-500" />
                <h3 className="text-xl font-bold text-slate-900">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.media && project.media.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Galerie</h3>
                <div className="space-y-6">
                  {project.media.map((item, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                      {item.type === 'video' ? (
                        <div className="relative pb-[56.25%] h-0">
                          <iframe
                            src={item.url}
                            title={`${project.title} - vidéo ${index + 1}`}
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <img
                          src={item.url}
                          alt={`${project.title} - image ${index + 1}`}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

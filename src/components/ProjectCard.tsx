import { Calendar, Tag } from 'lucide-react';

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

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full text-left"
      aria-label={`Ouvrir projet ${project.title}`}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.coverImage}
          alt={`${project.title} - couverture`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-4 right-4">
          <span className="inline-block bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-4 h-4" />
            <span className="truncate">{project.client}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

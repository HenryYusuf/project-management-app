import { Project } from "../App";
import Button from "./Button";

type PropsProjectSidebar = {
  onStartAddProject: () => void; // Fungsi untuk memulai penambahan proyek
  projects: Project[]; // Daftar proyek yang akan ditampilkan di sidebar
  onSelectProject: (id: number) => void; // Fungsi untuk memilih proyek
  selectedProjectId: number | string | null | undefined; // ID proyek yang dipilih
};

const ProjectSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}: PropsProjectSidebar) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        {/* Tombol untuk memulai penambahan proyek baru */}
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {/* Menampilkan daftar proyek */}
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          // Menyesuaikan gaya berdasarkan apakah proyek dipilih atau tidak
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              {/* Tombol untuk memilih proyek */}
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id!)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;

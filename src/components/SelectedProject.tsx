import { Project, Task } from "../App";
import Tasks from "./Tasks";

type PropsSelectedProject = {
  project: Project;
  onDelete: () => void; // Fungsi untuk menghapus proyek
  onAddTask: (value: string) => void; // Fungsi untuk menambahkan tugas baru
  onDeleteTask: (value: number) => void; // Fungsi untuk menghapus tugas
  tasks: Task[];
};

const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}: PropsSelectedProject) => {
  // Mengonversi tanggal proyek ke format yang dapat dibaca oleh pengguna
  const formattedDate = project.dueDate
    ? new Date(project.dueDate).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          {/* Menampilkan judul proyek */}
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          {/* Tombol untuk menghapus proyek */}
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        {/* Menampilkan tanggal jatuh tempo proyek */}
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        {/* Menampilkan deskripsi proyek */}
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      {/* Menampilkan tugas-tugas proyek menggunakan komponen Tasks */}
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;

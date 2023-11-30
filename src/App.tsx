import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

// Interface untuk merepresentasikan proyek
export interface Project {
  id?: number;
  title?: string;
  description?: string;
  dueDate?: string;
  // dueDate?: Date; // Untuk parsedDueDate di NewProject
}

// Interface untuk merepresentasikan tugas
export interface Task {
  id?: number;
  projectId?: number | string | null | undefined;
  text?: string;
}

// Interface untuk menyimpan status proyek
interface ProjectsState {
  selectedProjectId: number | string | null | undefined;
  projects: Project[];
  tasks: Task[];
}

const App = () => {
  // State menggunakan hook useState dengan default state
  const [projectsState, setProjectsState] = useState<ProjectsState>({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // Fungsi untuk menangani permintaan untuk menambahkan proyek baru
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Fungsi untuk membatalkan penambahan proyek baru
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // Fungsi untuk menangani penambahan proyek baru
  function handleAddProject(projectData: Project) {
    setProjectsState((prevState) => {
      // Membuat ID proyek baru menggunakan Math.random() (mungkin pertimbangkan UUID)
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // Fungsi untuk menangani pemilihan proyek
  function handleSelectProject(id: number) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // Fungsi untuk menangani penghapusan proyek
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  // Fungsi untuk menangani penambahan tugas baru
  function handleAddTask(text: string) {
    setProjectsState((prevState) => {
      // Membuat ID tugas baru menggunakan Math.random() (mungkin pertimbangkan UUID)
      const taskId = Math.random();

      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  // Fungsi untuk menangani penghapusan tugas
  function handleDeleteTask(id: number) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectsState.selectedProjectId,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // Mendapatkan proyek yang dipilih
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // Mendapatkan tugas untuk proyek yang dipilih
  const selectedProjectTask = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  // Menentukan konten yang akan ditampilkan berdasarkan kondisi
  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      // Komponen untuk menambahkan proyek baru
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      // Komponen untuk menampilkan pesan jika tidak ada proyek yang dipilih
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    );
  } else if (selectedProject) {
    content = (
      // Komponen untuk menampilkan proyek yang dipilih dan tugas-tugasnya
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={selectedProjectTask}
      />
    );
  }

  // Menampilkan struktur utama aplikasi
  return (
    <main className="h-screen my-8 flex gap-8">
      {/* Komponen untuk menampilkan daftar proyek */}
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {/* Menampilkan konten sesuai kondisi */}
      {content}
    </main>
  );
};

export default App;

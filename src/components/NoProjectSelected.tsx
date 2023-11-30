import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

type PropsNoProjectSelected = {
  onStartAddProject: () => void; // Fungsi untuk memulai penambahan proyek baru
};

const NoProjectSelected = ({ onStartAddProject }: PropsNoProjectSelected) => {
  return (
    <div className="mt-24 text-center w-2/3">
      {/* Gambar yang menampilkan ilustrasi daftar tugas kosong */}
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      {/* Judul yang memberitahu pengguna bahwa tidak ada proyek yang dipilih */}
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      {/* Pesan untuk memberi tahu pengguna untuk memilih proyek atau membuat proyek baru */}
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      {/* Tombol untuk memulai penambahan proyek baru */}
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;

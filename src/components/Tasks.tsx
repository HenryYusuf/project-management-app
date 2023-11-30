import { Task } from "../App";
import NewTask from "./NewTask";

type PropsTasks = {
  tasks: Task[];
  onAdd: (value: string) => void; // Fungsi untuk menambahkan tugas baru
  onDelete: (value: number) => void; // Fungsi untuk menghapus tugas
};

const Tasks = ({ tasks, onAdd, onDelete }: PropsTasks) => {
  return (
    <section>
      {/* Judul bagian tugas */}
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      {/* Komponen NewTask untuk menambahkan tugas baru */}
      <NewTask onAdd={onAdd} />

      {/* Menampilkan pesan jika tidak ada tugas */}
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}

      {/* Menampilkan daftar tugas jika ada */}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {/* Mencetak setiap tugas */}
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              {/* Menampilkan teks tugas */}
              <span>{task.text}</span>

              {/* Tombol untuk menghapus tugas */}
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id!)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;

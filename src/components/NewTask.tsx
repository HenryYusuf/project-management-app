import { useState, ChangeEvent } from "react";

type PropsNewTask = {
  onAdd: (value: string) => void; // Fungsi untuk menambahkan tugas baru
};

const NewTask = ({ onAdd }: PropsNewTask) => {
  // State untuk mengelola nilai input task
  const [enteredTask, setEnteredTask] = useState("");

  // Fungsi untuk menangani perubahan nilai input
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredTask(event.target.value);
  }

  // Fungsi untuk menangani penambahan tugas baru
  function handleClick() {
    // Memastikan bahwa input tidak kosong sebelum menambahkan tugas baru
    if (enteredTask.trim() === "") {
      return;
    }

    // Menambahkan tugas baru menggunakan fungsi yang diberikan sebagai prop
    onAdd(enteredTask);

    // Membersihkan input setelah tugas ditambahkan
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      {/* Input untuk menambahkan tugas */}
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      {/* Tombol untuk menambahkan tugas */}
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;

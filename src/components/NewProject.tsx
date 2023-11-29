import { useRef } from "react";
import { Project } from "../App";
import Input from "./Input";
import Modal, { RefModal } from "./Modal";

type PropsNewProject = {
  onAdd: ({}: Project) => void;
  onCancel: () => void;
};

const NewProject = ({ onAdd, onCancel }: PropsNewProject) => {
  const modal = useRef<RefModal>(null);

  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  function handleSave() {
    const enteredTitle = title.current?.value;
    const enteredDescription = description.current?.value;
    const enteredDueDate = dueDate.current?.value;

    // * For Date data types
    // const parsedDueDate = enteredDueDate ? new Date(enteredDueDate) : undefined;

    if (
      enteredTitle?.trim() === "" ||
      enteredDescription?.trim() === "" ||
      enteredDueDate?.trim() === ""
    ) {
      modal.current?.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;

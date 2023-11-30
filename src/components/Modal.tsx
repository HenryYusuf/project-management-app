import { ReactNode, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

type PropsModal = {
  children: ReactNode;
  buttonCaption: string;
};

export type RefModal = {
  open: () => void; // Fungsi untuk membuka modal
};

const Modal = forwardRef(({ children, buttonCaption }: PropsModal, ref) => {
  // Menggunakan useRef untuk mengakses elemen dialog modal
  const dialog = useRef<HTMLDialogElement>(null);

  // Menggunakan useImperativeHandle untuk mengekspos fungsi "open" melalui ref
  useImperativeHandle(ref, () => {
    return {
      open() {
        // Menampilkan modal
        dialog.current?.showModal();
      },
    };
  });

  // Membuat modal menggunakan createPortal
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      {/* Form method="dialog" memberikan styling bawaan untuk modal */}
      <form method="dialog" className="mt-4 text-right">
        {/* Menggunakan komponen Button untuk tombol dalam modal */}
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")! // Menentukan target portal
  );
});

export default Modal;
